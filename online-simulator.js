/* SOULVAULT online two-player playtest. Uses Supabase Realtime Broadcast/Presence.
   This is a playtest prototype: room codes are not authentication and client state is not cheat-proof. */
(() => {
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const cfgUrl = $('#simSupabaseUrl');
  const cfgKey = $('#simSupabaseKey');
   const DEFAULT_SUPABASE_URL = 'https://utwdblubsqrpgpkxislj.supabase.co';
const DEFAULT_SUPABASE_KEY = 'sb_publishable_9Z-S9cjQIFL6GM1q7Kks_w_fL60ER4a';
  const roomInput = $('#simRoomCode');
  const statusEl = $('#simOnlineStatus');
  const createBtn = $('#simCreateRoomBtn');
  const joinBtn = $('#simJoinRoomBtn');
  const copyBtn = $('#simCopyInviteBtn');
  const leaveBtn = $('#simLeaveRoomBtn');
  const panel = $('#twoPlayerSimulator');
  if (!panel || !createBtn) return;

  let onlineClient = null;
  let onlineChannel = null;
  let onlineRoomCode = '';
  let localSeat = null;
  let onlineActive = false;
  let suppressBroadcast = false;
  const simStates = [null, null];
  let simActivePlayer = 0;

  cfgUrl.value =
  localStorage.getItem('svRealtimeUrl') || DEFAULT_SUPABASE_URL;

cfgKey.value =
  localStorage.getItem('svRealtimePublishableKey') || DEFAULT_SUPABASE_KEY;
  const params = new URLSearchParams(location.search);
  if (params.get('svroom')) roomInput.value = params.get('svroom').toUpperCase();

  function setStatus(message, mode='') {
    statusEl.textContent = message;
    statusEl.classList.remove('is-connected','is-waiting','is-error');
    if (mode) statusEl.classList.add(`is-${mode}`);
  }
  function safeId(value) { return String(value ?? ''); }
  function randomRoomCode() { return Math.random().toString(36).slice(2,8).toUpperCase().padEnd(6,'X'); }
  function deckOptions() {
    if (typeof reloadDecksFromStorage === 'function') reloadDecksFromStorage();
    const list = Array.isArray(window.decks) ? window.decks : (typeof decks !== 'undefined' ? decks : []);
    $$('.sim-deck-select').forEach(sel => {
      const old = sel.value;
      sel.innerHTML = list.length ? list.map(d=>`<option value="${escapeHtml(d.id)}">${escapeHtml(d.name||'New Deck')}</option>`).join('') : '<option value="">ยังไม่มี Deck</option>';
      if (list.some(d=>safeId(d.id)===old)) sel.value=old;
      else if (list.length) sel.value=safeId(list[0].id);
    });
  }
  function getDeckList() { return typeof decks !== 'undefined' && Array.isArray(decks) ? decks : []; }
  function makeState(index, deckId) {
    if (typeof reloadDecksFromStorage === 'function') reloadDecksFromStorage();
    const all = getDeckList();
    const deck = all.find(d=>safeId(d.id)===safeId(deckId)) || all[index] || all[0] || null;
    if (!deck) return {deck:null,stack:[],hand:[],field:[],tomb:[],remoteDeckCount:0,remoteHandCount:0};
    const stack=[];
    Object.entries(deck.main||{}).forEach(([id,count])=>{for(let n=0;n<Math.max(0,Number(count)||0);n++)stack.push(String(id));});
    if(deck.untimeat && !Object.prototype.hasOwnProperty.call(deck.main||{},String(deck.untimeat))) stack.push(String(deck.untimeat));
    stack.splice(60);
    for(let i=stack.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[stack[i],stack[j]]=[stack[j],stack[i]];}
    return {deck,stack,hand:[],field:[],character:[],pocket:[],soulcore:Array.isArray(deck.soulCores)?deck.soulCores.slice(0,7):[],tomb:[],remoteDeckCount:stack.length,remoteHandCount:0};
  }
  function cardMarkup(id) { return typeof testCardHTML==='function' ? testCardHTML(id,true,0,'sim') : `<span>${escapeHtml(id)}</span>`; }
  function getCount(s,key) { return s ? (key==='deck' && s.remoteDeckCount!==undefined ? s.remoteDeckCount : key==='hand' && s.remoteHandCount!==undefined ? s.remoteHandCount : (s[key]||[]).length) : 0; }
  function cardType(id) {
    try {
      const list = typeof cards !== 'undefined' && Array.isArray(cards) ? cards : [];
      const found = list.find(c => String(c.id) === String(id));
      return String(found?.type || '').trim().toLowerCase();
    } catch (_) { return ''; }
  }
  function slotMarkup(ids, index, slot) {
    if (!ids?.length) return `<span class="sim-empty">${slot==='character'?'CHARACTER':slot==='pocket'?'POCKET':slot==='soulcore'?'SOUL CORE':'ยังไม่มีการ์ดบนสนาม'}</span>`;
    return ids.map((id,i)=>`<div class="sim-card-wrap">${cardMarkup(id)}<div class="sim-card-actions"><button data-sim-action="slotdetail" data-slot="${slot}" data-player="${index}" data-index="${i}" type="button">ดู</button><button data-sim-action="slottomb" data-slot="${slot}" data-player="${index}" data-index="${i}" type="button">TOMB</button></div></div>`).join('');
  }
  function render() {
    deckOptions();
    $$('.sim-player').forEach((player,index)=>{
      const s=simStates[index];
      const remote=onlineActive && localSeat!==null && index!==localSeat;
      player.classList.toggle('sim-active',index===simActivePlayer);
      player.classList.toggle('is-opponent',remote);
      const select=$('[data-sim-deck]',player);
      if(select){select.disabled=remote || (onlineActive && index!==localSeat); if(s?.deck) select.value=s.deck.id;}
      const stat=(key,value)=>{const el=$(`[data-sim-stat="${key}"]`,player);if(el)el.textContent=String(value);};
      stat('deck',getCount(s,'deck'));stat('hand',getCount(s,'hand'));stat('field',s?.field?.length||0);stat('tomb',s?.tomb?.length||0);stat('tombButton',s?.tomb?.length||0);
      const special=(key,id)=>{const el=$(`[data-sim-special="${key}"]`,player);if(!el)return;el.innerHTML=id?cardMarkup(id):'<span class="sim-empty">—</span>';const card=el.querySelector('.test-card');if(card)card.addEventListener('click',()=>openTestCardDetail(id));};
      special('master',s?.deck?.master);special('zone',s?.deck?.zone);
      const field=$('[data-sim-area="field"]',player);
      if(field)field.innerHTML=s?.field?.length?s.field.map((id,i)=>`<div class="sim-card-wrap">${cardMarkup(id)}<div class="sim-card-actions"><button data-sim-action="fielddetail" data-player="${index}" data-index="${i}" type="button">ดู</button>${!remote?`<button data-sim-action="fieldtomb" data-player="${index}" data-index="${i}" type="button">ส่ง TOMB</button>`:''}</div></div>`).join(''):'<span class="sim-empty">ยังไม่มีการ์ดบนสนาม</span>';
      const characterArea=$('[data-sim-area="character"]',player);
      if(characterArea)characterArea.innerHTML=slotMarkup(s?.character,index,'character');
      const pocketArea=$('[data-sim-area="pocket"]',player);
      if(pocketArea)pocketArea.innerHTML=slotMarkup(s?.pocket,index,'pocket');
      const soulArea=$('[data-sim-area="soulcore"]',player);
      if(soulArea)soulArea.innerHTML=slotMarkup(s?.soulcore,index,'soulcore');
      const hand=$('[data-sim-area="hand"]',player);
      if(hand){
        if(remote) hand.innerHTML=`<div class="sim-hidden-hand">🔒 การ์ดในมือคู่แข่งถูกซ่อนไว้<br>มี ${getCount(s,'hand')} ใบ</div>`;
        else hand.innerHTML=s?.hand?.length?s.hand.map((id,i)=>{const t=cardType(id);const action=t==='character'?'playcharacter':(t==='pocket'?'playpocket':(t==='soul core'?'playsoulcore':'play'));const label=t==='character'?'ลงช่อง C':(t==='pocket'?'ลงช่อง Pocket':(t==='soul core'?'ลงช่อง Soul Core':'ลงสนาม'));return `<div class="sim-card-wrap">${cardMarkup(id)}<div class="sim-card-actions"><button data-sim-action="${action}" data-player="${index}" data-index="${i}" type="button">${label}</button><button data-sim-action="handtomb" data-player="${index}" data-index="${i}" type="button">TOMB</button></div></div>`}).join(''):'<span class="sim-empty">ยังไม่มีการ์ดในมือ</span>';
      }
      const tomb=$('[data-sim-area="tomb"]',player);
      if(tomb)tomb.innerHTML=s?.tomb?.length?s.tomb.map(id=>`<div class="sim-card-wrap">${cardMarkup(id)}</div>`).join(''):'<span class="sim-empty">TOMB ว่าง</span>';
      $$('[data-sim-action="draw5"],[data-sim-action="draw1"],[data-sim-action="reset"]',player).forEach(btn=>{btn.disabled=onlineActive && index!==localSeat;});
    });
    const label=$('#simTurnLabel'); if(label)label.textContent=`ตาของผู้เล่น ${simActivePlayer+1}`;
    const roomPill=$('#simRoomPill'); if(roomPill)roomPill.textContent=onlineActive?`ห้อง ${onlineRoomCode} · คุณคือผู้เล่น ${localSeat+1}`:'';
  }
  function publicState(index) {
    const s=simStates[index]; if(!s) return null;
    return {seat:index,deck:s.deck?{id:s.deck.id,name:s.deck.name,master:s.deck.master,zone:s.deck.zone}:null,deckCount:s.stack?.length||0,handCount:s.hand?.length||s.remoteHandCount||0,field:(s.field||[]).slice(),character:(s.character||[]).slice(),pocket:(s.pocket||[]).slice(),soulcore:(s.soulcore||[]).slice(),tomb:(s.tomb||[]).slice(),activePlayer:simActivePlayer};
  }
  async function broadcastOwnState() {
    if(!onlineActive || !onlineChannel || localSeat===null || suppressBroadcast) return;
    const state=publicState(localSeat); if(!state) return;
    try { await onlineChannel.send({type:'broadcast',event:'game-state',payload:state}); }
    catch(err){console.error(err);setStatus('同步失敗，請重新連線','error');}
  }
  function receiveState(data) {
    if(!onlineActive || !data || Number(data.seat)===localSeat) return;
    const seat=Number(data.seat); if(seat!==0&&seat!==1)return;
    const old=simStates[seat]||{};
    simStates[seat]={deck:data.deck||old.deck||null,stack:[],hand:[],field:Array.isArray(data.field)?data.field:[],character:Array.isArray(data.character)?data.character:[],pocket:Array.isArray(data.pocket)?data.pocket:[],soulcore:Array.isArray(data.soulcore)?data.soulcore:[],tomb:Array.isArray(data.tomb)?data.tomb:[],remoteDeckCount:Math.max(0,Number(data.deckCount)||0),remoteHandCount:Math.max(0,Number(data.handCount)||0)};
    if(Number.isInteger(data.activePlayer))simActivePlayer=data.activePlayer;
    render();
  }
  async function leaveOnline(silent=false) {
    onlineActive=false;
    if(onlineChannel && onlineClient){try{await onlineClient.removeChannel(onlineChannel);}catch(e){console.warn(e);}}
    onlineChannel=null;onlineClient=null;onlineRoomCode='';localSeat=null;
    copyBtn.disabled=true;leaveBtn.disabled=true;createBtn.disabled=false;joinBtn.disabled=false;
    if(roomInput)roomInput.value='';
    if(!silent)setStatus('ออกจากห้องแล้ว');
    // Start a fresh local two-player sandbox again, without changing existing deck storage.
    simStates[0]=makeState(0,$('[data-sim-deck="0"]')?.value);
    simStates[1]=makeState(1,$('[data-sim-deck="1"]')?.value);
    simActivePlayer=0;render();
  }
  async function connectRoom(code,seat) {
  const url = cfgUrl.value.trim() || DEFAULT_SUPABASE_URL;
  const key = cfgKey.value.trim() || DEFAULT_SUPABASE_KEY;

  if (!url || !key) {
    setStatus('ยังไม่ได้ตั้งค่า Supabase', 'error');
    return;
  }

  if (!window.supabase?.createClient) {
    setStatus('โหลด Supabase client ไม่สำเร็จ ตรวจอินเทอร์เน็ตแล้วรีเฟรช', 'error');
    return;
  }
    localStorage.setItem('svRealtimeUrl',url);localStorage.setItem('svRealtimePublishableKey',key);
    onlineClient=window.supabase.createClient(url,key,{realtime:{params:{eventsPerSecond:10}}});
    onlineRoomCode=code;localSeat=seat;onlineActive=true;
    simStates[seat]=makeState(seat,$(`[data-sim-deck="${seat}"]`)?.value);
    simStates[1-seat]=null;simActivePlayer=0;
    createBtn.disabled=true;joinBtn.disabled=true;leaveBtn.disabled=false;copyBtn.disabled=false;
    roomInput.value=code;
    const newUrl=new URL(location.href);newUrl.searchParams.set('svroom',code);history.replaceState({},'',newUrl.toString());
    setStatus('กำลังเชื่อมต่อ...','waiting');render();
    onlineChannel=onlineClient.channel(`sv-room-${code}`,{config:{broadcast:{ack:true},presence:{key:`seat-${seat}-${Math.random().toString(36).slice(2,8)}`}}});
    onlineChannel.on('broadcast',{event:'game-state'},({payload})=>receiveState(payload));
    onlineChannel.on('presence',{event:'join'},()=>{if(localSeat===0)setTimeout(()=>broadcastOwnState(),200);});
    onlineChannel.on('presence',{event:'sync'},()=>{
      const presence=onlineChannel.presenceState();
      const count=Object.values(presence).reduce((n,arr)=>n+(Array.isArray(arr)?arr.length:0),0);
      setStatus(count>=2?`เชื่อมต่อแล้ว · ${count} คน`:'รอผู้เล่นอีกฝ่าย...','connected');
    });
    onlineChannel.subscribe(async status=>{
      if(status==='SUBSCRIBED'){
        try{await onlineChannel.track({seat,joined_at:new Date().toISOString()});}catch(e){console.warn(e);}
        setStatus(seat===0?'สร้างห้องแล้ว · รอเพื่อนเข้าร่วม':'เข้าห้องแล้ว · กำลังซิงก์','connected');
        await broadcastOwnState();
        setTimeout(()=>broadcastOwnState(),450);
      } else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT'||status==='CLOSED') setStatus(`เชื่อมต่อไม่สำเร็จ (${status})`,'error');
    });
  }
  function resetOwnState(index) {
    const seat = onlineActive ? localSeat : index;
    if (seat === null || seat === undefined) return;
    simStates[seat] = makeState(seat, $(`[data-sim-deck="${seat}"]`)?.value);
    render();
    broadcastOwnState();
  }
  function drawOwn(count,index) {
    const seat = onlineActive ? localSeat : index;
    const s=simStates[seat];if(!s?.deck)return;
    for(let i=0;i<count&&i<s.stack.length;i++)s.hand.push(s.stack.pop());
    simActivePlayer=seat;
    render();broadcastOwnState();
  }

  $('#openTwoPlayerBtn')?.addEventListener('click',()=>{
    $('#drawtest')?.classList.add('sim-two-player');panel.hidden=false;deckOptions();
    if(!simStates[0])simStates[0]=makeState(0,$('[data-sim-deck="0"]')?.value);
    if(!simStates[1])simStates[1]=makeState(1,$('[data-sim-deck="1"]')?.value);
    render();
  });
  $('#closeTwoPlayerBtn')?.addEventListener('click',()=>{$('#drawtest')?.classList.remove('sim-two-player');panel.hidden=true;});
  $('#simEndTurnBtn')?.addEventListener('click',()=>{simActivePlayer=1-simActivePlayer;render();broadcastOwnState();});
  $$('.sim-deck-select').forEach(sel=>sel.addEventListener('change',()=>{
    const index=Number(sel.dataset.simDeck);
    if(onlineActive&&index!==localSeat)return;
    simStates[index]=makeState(index,sel.value);render();broadcastOwnState();
  }));
  panel.addEventListener('click',ev=>{
    const btn=ev.target.closest('[data-sim-action]');
    if(btn){
      const index=Number(btn.dataset.player),action=btn.dataset.simAction;
      if(onlineActive && index!==localSeat && action!=='showtomb' && action!=='fielddetail')return;
      const s=simStates[index];if(!s)return;
      const cardIndex=Number(btn.dataset.index);
      if(action==='draw5')drawOwn(5,index);
      else if(action==='draw1')drawOwn(1,index);
      else if(action==='reset')resetOwnState(index);
      else if(['play','playcharacter','playpocket','playsoulcore'].includes(action)&&s.hand[cardIndex]!==undefined){
         const id=s.hand[cardIndex],type=cardType(id);
         if(action==='playcharacter' && type!=='character'){setStatus('ช่อง C วางได้เฉพาะ Character','error');return;}
         if(action==='playpocket' && type!=='pocket'){setStatus('ช่อง Pocket วางได้เฉพาะ Pocket','error');return;}
         if(action==='playsoulcore' && type!=='soul core'){setStatus('ช่อง Soul Core วางได้เฉพาะ Soul Core','error');return;}
         const target=action==='playcharacter'?'character':action==='playpocket'?'pocket':action==='playsoulcore'?'soulcore':'field';
         if(action==='play' && ['character','pocket','soul core'].includes(type)){setStatus('เลือกช่องเฉพาะของการ์ดใบนี้','error');return;}
         s[target].push(s.hand.splice(cardIndex,1)[0]);simActivePlayer=index;render();broadcastOwnState();
       }
       else if((action==='slottomb'||action==='slotdetail')&&s[btn.dataset.slot]?.[cardIndex]!==undefined){
         const slot=btn.dataset.slot,id=s[slot][cardIndex];
         if(action==='slotdetail'&&typeof openTestCardDetail==='function')openTestCardDetail(id);
         else {s.tomb.push(s[slot].splice(cardIndex,1)[0]);render();broadcastOwnState();}
       }
      else if(action==='handtomb'&&s.hand[cardIndex]!==undefined){s.tomb.push(s.hand.splice(cardIndex,1)[0]);render();broadcastOwnState();}
      else if(action==='fieldtomb'&&s.field[cardIndex]!==undefined){s.tomb.push(s.field.splice(cardIndex,1)[0]);render();broadcastOwnState();}
      else if(action==='fielddetail'&&s.field[cardIndex]!==undefined&&typeof openTestCardDetail==='function')openTestCardDetail(s.field[cardIndex]);
      else if(action==='showtomb'){const list=btn.closest('.sim-player')?.querySelector('[data-sim-area="tomb"]');if(list)list.hidden=!list.hidden;}
      return;
    }
    const card=ev.target.closest('.sim-special-card .test-card, .sim-field .test-card, .sim-hand .test-card, .sim-tomb-list .test-card');
    if(card&&!ev.target.closest('.sim-card-actions')&&card.dataset.id&&typeof openTestCardDetail==='function')openTestCardDetail(card.dataset.id);
  });
  createBtn.addEventListener('click',()=>{
    const code=randomRoomCode();
    connectRoom(code,0).catch(err=>{console.error(err);setStatus('สร้างห้องไม่สำเร็จ ตรวจ URL และ key','error');});
  });
  joinBtn.addEventListener('click',()=>{
    const code=roomInput.value.trim().toUpperCase().replace(/[^A-Z0-9]/g,'');
    if(code.length<4){setStatus('กรอกรหัสห้องอย่างน้อย 4 ตัว','error');return;}
    connectRoom(code,1).catch(err=>{console.error(err);setStatus('เข้าห้องไม่สำเร็จ ตรวจ URL และ key','error');});
  });
  copyBtn.addEventListener('click',async()=>{
    if(!onlineRoomCode)return;
    const invite=new URL(location.href);invite.searchParams.set('svroom',onlineRoomCode);
    try{await navigator.clipboard.writeText(invite.toString());setStatus('คัดลอกลิงก์ชวนแล้ว','connected');}
    catch(e){roomInput.value=onlineRoomCode;roomInput.focus();roomInput.select();setStatus('คัดลอกอัตโนมัติไม่ได้ ให้คัดลอกรหัสห้อง','waiting');}
  });
  leaveBtn.addEventListener('click',()=>leaveOnline());
  roomInput?.addEventListener('input',()=>{roomInput.value=roomInput.value.toUpperCase().replace(/[^A-Z0-9]/g,'');});
  // If the invite link contains a room, leave the code ready for the user to join manually.
  if(roomInput.value)setStatus('พบรหัสห้องจากลิงก์ · กดเข้าร่วมห้อง');
  deckOptions();
})();
