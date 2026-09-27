
/* ---------------- LANGUAGE SWITCHER ---------------- */
const translations={
 th:{
  "nav.cards":"Card Roster","nav.collection":"Collection","nav.deck":"Deck Builder","nav.draw":"Draw Test","nav.supply":"Supply",
  "supply.title":"Playmat & Sleeve","supply.subtitle":"รวมอุปกรณ์เสริมสำหรับ STEAL AREA",
  "supply.all":"ALL","supply.playmat":"PLAYMAT","supply.sleeve":"SLEEVE","supply.search":"ค้นหา Playmat / Sleeve...",
  "draw.title":"ทดลองจั่ว","draw.subtitle":"เลือก Deck แล้วทดลองจั่วการ์ด โดยไม่ใช้สนามเล่น"
 },
 en:{
  "nav.cards":"Card Roster","nav.collection":"Collection","nav.deck":"Deck Builder","nav.draw":"Draw Test","nav.supply":"Supply",
  "supply.title":"Playmat & Sleeve","supply.subtitle":"Browse accessories for STEAL AREA",
  "supply.all":"ALL","supply.playmat":"PLAYMAT","supply.sleeve":"SLEEVE","supply.search":"Search Playmat / Sleeve...",
  "draw.title":"Draw Test","draw.subtitle":"Choose a Deck and test drawing cards without the playmat."
 }
};
let currentLang=localStorage.getItem("stealAreaLang")||"th";
function t(key){return translations[currentLang]?.[key]||translations.en[key]||key}
function applyLanguage(){
 document.documentElement.lang=currentLang==="th"?"th":"en";
 document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
 document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
 document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===currentLang));
 if(typeof renderSupplies==="function" && document.querySelector("#supplyGrid")) renderSupplies();
}
document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>{
 currentLang=btn.dataset.lang;
 localStorage.setItem("stealAreaLang",currentLang);
 applyLanguage();
}));

const cards=[
{id:"SA-001",name:"Varethorn",subtitle:"The Shadow Thief",type:"Character",rarity:"Legendary",element:"Void",cost:"6",ability:"เมื่อเข้าสู่สนาม สามารถเลือกการ์ด 1 ใบจากมือฝ่ายตรงข้ามและทำให้การ์ดนั้นถูกล็อกชั่วคราว",symbol:"V"},
{id:"SA-002",name:"Draconic Fury",subtitle:"Wrath of the Dragon",type:"Action",rarity:"Epic",element:"Inferno",cost:"3",ability:"เพิ่มพลังโจมตีให้ตัวละครของคุณ และสร้างแรงกดดันต่อคู่ต่อสู้ในเทิร์นนี้",symbol:"D"},
{id:"SA-003",name:"Soulvault",subtitle:"The Endless Archive",type:"Skill",rarity:"Rare",element:"Soul",cost:"2",ability:"เก็บการ์ด 1 ใบจากสุสานของคุณกลับมาไว้ในมือ",symbol:"S"},
{id:"SA-004",name:"Azrakar",subtitle:"Keeper of the Red Core",type:"Character",rarity:"Legendary",element:"Red Core",cost:"7",ability:"เมื่อพลังชีวิตของคุณลดลงต่ำกว่าครึ่ง ความสามารถของ Azrakar จะทำงานทันที",symbol:"A"},
{id:"SA-005",name:"Death Error",subtitle:"System Failure",type:"Skill",rarity:"Rare",element:"Void",cost:"4",ability:"ยกเลิกความสามารถที่กำลังทำงานของการ์ดเป้าหมาย 1 ใบ",symbol:"E"},
{id:"SA-006",name:"Scarlet Night",subtitle:"Blood Moon Protocol",type:"Action",rarity:"Epic",element:"Crimson",cost:"4",ability:"เปลี่ยนสนามให้เข้าสู่สถานะ Scarlet Night และเพิ่มผลของการ์ดธาตุ Crimson",symbol:"N"},
{id:"SA-007",name:"Core Shield",subtitle:"Relic Barrier",type:"Skill",rarity:"Common",element:"Relic",cost:"1",ability:"ป้องกันความเสียหายที่กำลังจะเกิดขึ้น 1 ครั้ง",symbol:"C"},
{id:"SA-008",name:"Forbidden Relic",subtitle:"Artifact of the Lost",type:"Item",rarity:"Common",element:"Relic",cost:"2",ability:"ค้นหาการ์ด Relic จาก Deck แล้วนำขึ้นมือ 1 ใบ",symbol:"R"},
{id:"SA-009",name:"Eclipse King",subtitle:"Leader of the Black Sun",type:"Leader",rarity:"Legendary",element:"Eclipse",cost:"8",ability:"Leader — กำหนดกฎพิเศษของ Deck และเพิ่มพลังให้การ์ด Eclipse",symbol:"K"},
{id:"SA-010",name:"Land of Eternal Love",subtitle:"Forbidden Zone",type:"Zone",rarity:"Epic",element:"Mystic",cost:"0",ability:"Zone — สนามนี้เปลี่ยนผลของการ์ด Skill และ Character บางประเภท",symbol:"Z"},
{id:"SA-011",name:"Neon Succubus",subtitle:"Temptation Protocol",type:"Character",rarity:"Epic",element:"Neon",cost:"5",ability:"เมื่อการ์ดนี้ทำงาน ให้เลือกการ์ดฝ่ายตรงข้าม 1 ใบและลดประสิทธิภาพของมัน",symbol:"N"},
{id:"SA-012",name:"Relic Core",subtitle:"Ancient Power",type:"Item",rarity:"Rare",element:"Relic",cost:"2",ability:"ติดตั้งให้ Character 1 ใบเพื่อเพิ่มผลของความสามารถ",symbol:"C"},
{id:"SA-013",name:"Soul Core Alpha",subtitle:"Origin of the Soul",type:"Soul Core",rarity:"Legendary",element:"Soul",cost:"0",ability:"Soul Core — แกนพลังประจำ Deck ใช้สำหรับกำหนดพลังเริ่มต้นของผู้เล่น",symbol:"SC"},
{id:"SA-014",name:"Soul Core Eclipse",subtitle:"Black Soul Reactor",type:"Soul Core",rarity:"Epic",element:"Eclipse",cost:"0",ability:"Soul Core — เพิ่มผลของการ์ด Eclipse เมื่อถูกวางในสนาม",symbol:"SC"},
{id:"SA-015",name:"Pocket Relic",subtitle:"Stored Artifact",type:"POCKET",rarity:"Rare",element:"Relic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ในพื้นที่ Pocket และเรียกใช้ในจังหวะที่กำหนด",symbol:"P"},
{id:"SA-016",name:"Pocket Trick",subtitle:"Hidden Move",type:"POCKET",rarity:"Common",element:"Mystic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ใน Pocket เพื่อเตรียมใช้เป็นการกระทำพิเศษ",symbol:"P"}
];

const rarityClass=r=>`rarity-${r.toLowerCase()}`;
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),typeFilter=document.querySelector("#typeFilter"),rarityFilter=document.querySelector("#rarityFilter");
document.querySelector("#totalCount").textContent=String(cards.length).padStart(2,"0");

function render(){
 const q=search.value.toLowerCase().trim(), type=typeFilter.value, rarity=rarityFilter.value;
 const list=cards.filter(c=>(type==="All"||c.type===type)&&(rarity==="All"||c.rarity===rarity)&&[c.name,c.subtitle,c.type,c.element,c.ability].join(" ").toLowerCase().includes(q));
 grid.innerHTML=list.map(c=>cardHTML(c,false)).join("");
 document.querySelector("#empty").classList.toggle("hidden",list.length!==0);
 document.querySelectorAll("#grid .card").forEach(el=>el.onclick=()=>openCard(cards.find(c=>c.id===el.dataset.id)));
}
function cardHTML(c,small=true){
 return `<article class="card ${small?'small-card':''}" data-id="${c.id}">
   <div class="card-art ${rarityClass(c.rarity)}"><div class="card-symbol">${c.symbol}</div><span class="rarity-orb">${c.rarity[0]}</span></div>
   <div class="card-info"><div class="tag-row"><span class="tag">${c.type}</span><span class="tag rarity">${c.rarity}</span></div>
   <h3>${c.name}</h3><p>${c.subtitle}</p></div></article>`;
}
function openCard(c){
 document.querySelector("#detailType").textContent=c.type.toUpperCase();
 document.querySelector("#detailRarity").textContent=c.rarity.toUpperCase();
 document.querySelector("#detailName").textContent=c.name;
 document.querySelector("#detailSubtitle").textContent=c.subtitle;
 document.querySelector("#detailAbility").textContent=c.ability;
 document.querySelector("#detailId").textContent=c.id;
 document.querySelector("#detailElement").textContent=c.element;
 document.querySelector("#detailCost").textContent=c.cost;
 document.querySelector("#detailImage").className=`detail-image ${rarityClass(c.rarity)}`;
 document.querySelector("#modal").classList.remove("hidden");
}
function closeModal(){document.querySelector("#modal").classList.add("hidden")}
search.oninput=render;typeFilter.onchange=render;rarityFilter.onchange=render;
document.querySelector("#close").onclick=closeModal;
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
document.querySelector("#menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");

/* ---------------- SUPPLY ---------------- */
const defaultSupplies=[
{id:"PM1",type:"PLAYMAT",name:"Steal Area — Black Gold",image:"",desc:"Playmat ธีมหลักของ STEAL AREA",price:"590"},
{id:"PM2",type:"PLAYMAT",name:"Scarlet Night",image:"",desc:"Playmat โทนแดงดำ",price:"590"},
{id:"PM3",type:"PLAYMAT",name:"Eternal Void",image:"",desc:"Playmat โทนม่วงเข้ม",price:"650"},
{id:"SL1",type:"SLEEVE",name:"Steal Area — Gold",image:"",desc:"Card Sleeve ลายโลโก้ STEAL AREA",price:"250"},
{id:"SL2",type:"SLEEVE",name:"Scarlet Night",image:"",desc:"Card Sleeve ธีม Scarlet Night",price:"250"},
{id:"SL3",type:"SLEEVE",name:"Void Core",image:"",desc:"Card Sleeve โทนม่วงดำ",price:"280"}];
let supplies=JSON.parse(localStorage.getItem("stealAreaSupplies")||"null")||defaultSupplies;
let supplyFilter="ALL";
function persistSupplies(){localStorage.setItem("stealAreaSupplies",JSON.stringify(supplies))}
function supplyImage(s){
 if(s.image)return `<img src="${escapeHtml(s.image)}" alt="${escapeHtml(s.name)}" loading="lazy">`;
 return `<div class="supply-art ${s.type.toLowerCase()}-art"><span>${s.type==="PLAYMAT"?"PM":"SL"}</span></div>`;
}
function renderSupplies(){
 const grid=document.querySelector("#supplyGrid"); if(!grid)return;
 const q=(document.querySelector("#supplySearch")?.value||"").trim().toLowerCase();
 const list=supplies.filter(s=>(supplyFilter==="ALL"||s.type===supplyFilter)&&(!q||`${s.name} ${s.type} ${s.desc}`.toLowerCase().includes(q)));
 grid.innerHTML=list.map(s=>`<article class="supply-card">
 <div class="supply-image">${supplyImage(s)}<span class="supply-type">${s.type}</span></div>
 <div class="supply-body"><h3>${escapeHtml(s.name)}</h3><p>${escapeHtml(s.desc||"")}</p>
 <div class="supply-footer"><strong>${s.price?escapeHtml(s.price)+" ฿":"—"}</strong><button class="supply-detail" data-id="${s.id}">DETAIL</button></div></div></article>`).join("");
 document.querySelector("#supplyEmpty").classList.toggle("hidden",list.length>0);
 grid.classList.toggle("hidden",list.length===0);
 grid.querySelectorAll(".supply-detail").forEach(b=>b.onclick=()=>{
   const s=supplies.find(x=>x.id===b.dataset.id); if(s)alert(`${s.name}\n\nประเภท: ${s.type}\n${s.desc||""}\n\nราคา: ${s.price?s.price+" ฿":"ไม่ระบุ"}`);
 });
}
function initSupply(){renderSupplies()}

document.querySelectorAll(".supply-tab").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".supply-tab").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active"); supplyFilter=btn.dataset.supplyFilter; renderSupplies();
});
document.querySelector("#supplySearch")?.addEventListener("input",renderSupplies);
document.querySelector("#addSupplyBtn")?.addEventListener("click",()=>document.querySelector("#supplyModal").classList.remove("hidden"));
document.querySelector("#supplyClose")?.addEventListener("click",()=>document.querySelector("#supplyModal").classList.add("hidden"));
document.querySelector("#supplyModal")?.addEventListener("click",e=>{if(e.target.id==="supplyModal")e.currentTarget.classList.add("hidden")});
document.querySelector("#saveSupplyBtn")?.addEventListener("click",()=>{
 const name=document.querySelector("#supplyName").value.trim(); if(!name)return alert("กรุณาใส่ชื่อ Supply");
 supplies.unshift({id:"S"+Date.now(),type:document.querySelector("#supplyType").value,name,image:document.querySelector("#supplyImage").value.trim(),desc:document.querySelector("#supplyDesc").value.trim(),price:document.querySelector("#supplyPrice").value.trim()});
 persistSupplies(); document.querySelector("#supplyModal").classList.add("hidden");
 ["supplyName","supplyImage","supplyDesc","supplyPrice"].forEach(id=>document.querySelector("#"+id).value=""); renderSupplies();
});
document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".section").forEach(x=>x.classList.remove("active-section"));
 document.querySelector("#"+btn.dataset.section).classList.add("active-section");
 document.querySelector(".sidebar").classList.remove("open");
 if(btn.dataset.section==="deck") initDeck();
 if(btn.dataset.section==="supply") initSupply();
});

/* ---------------- DECK BUILDER ---------------- */
let decks=JSON.parse(localStorage.getItem("stealAreaDecks")||"[]");
let currentDeckId=null;
let currentDeck=null;

function persistDecks(){localStorage.setItem("stealAreaDecks",JSON.stringify(decks))}

function makeDeck(){
  const d={
    id:"D"+Date.now()+Math.random().toString(36).slice(2,6),
    name:"New Deck",
    cover:null,
    leader:null,
    zone:null,
    main:{}
  };
  decks.push(d);
  currentDeckId=d.id;
  d.soulCores=[];
  currentDeck=d;
  persistDecks();
  initDeck();
}

function selectDeck(id){
  currentDeckId=id;
  currentDeck=decks.find(d=>d.id===id)||null;
  initDeck();
}

function initDeck(){
  const empty=document.querySelector("#deckEmpty");
  const library=document.querySelector("#deckLibrary");
  const work=document.querySelector("#deckWorkspace");

  if(!decks.length){
    currentDeck=null;
    currentDeckId=null;
    empty.classList.remove("hidden");
    library.classList.add("hidden");
    work.classList.add("hidden");
    return;
  }

  if(!currentDeck) {
    currentDeck=decks[0];
    currentDeckId=currentDeck.id;
  }

  empty.classList.add("hidden");
  library.classList.remove("hidden");
  work.classList.remove("hidden");

  document.querySelector("#deckName").value=currentDeck.name;
  renderDeckLibrary();
  renderDeck();
}

function renderDeckLibrary(){
  const box=document.querySelector("#deckCards");
  box.innerHTML=decks.map(d=>{
    const count=Object.values(d.main||{}).reduce((a,b)=>a+b,0)+(d.leader?1:0)+(d.zone?1:0)+((d.soulCores||[]).length);
    const cover=cards.find(c=>c.id===d.cover);
    const coverClass=cover?rarityClass(cover.rarity):"rarity-common";
    const symbol=cover?cover.symbol:"SA";
    const active=d.id===currentDeckId?" active":"";
    return `<div class="deck-library-card${active}" data-deck="${d.id}">
      <div class="library-cover ${coverClass}"><span>${symbol}</span></div>
      <div class="library-info">
        <h4>${escapeHtml(d.name||"New Deck")}</h4>
        <div><span>${count} CARDS</span><span>${d.leader?"LEADER ✓":"NO LEADER"}</span><span>${d.zone?"ZONE ✓":"NO ZONE"}</span></div>
      </div>
      <button class="library-delete" data-delete="${d.id}" title="Delete Deck">×</button>
    </div>`;
  }).join("");

  box.querySelectorAll(".deck-library-card").forEach(el=>{
    el.onclick=(e)=>{
      if(e.target.closest(".library-delete"))return;
      selectDeck(el.dataset.deck);
    };
  });
  box.querySelectorAll(".library-delete").forEach(btn=>{
    btn.onclick=(e)=>{
      e.stopPropagation();
      deleteDeckById(btn.dataset.delete);
    };
  });
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function deleteDeckById(id){
  const d=decks.find(x=>x.id===id);
  if(!d)return;
  if(!confirm(`ลบ Deck "${d.name}" ใช่หรือไม่?`))return;
  decks=decks.filter(x=>x.id!==id);
  if(currentDeckId===id){
    currentDeck=decks[0]||null;
    currentDeckId=currentDeck?.id||null;
  }
  persistDecks();
  initDeck();
}

function getCount(){
  return Object.values(currentDeck.main||{}).reduce((a,b)=>a+b,0)+(currentDeck.leader?1:0)+(currentDeck.zone?1:0)+((currentDeck.soulCores||[]).length);
}

function addToDeck(id){
  const c=cards.find(x=>x.id===id);
  if(!c||!currentDeck)return;

  if(c.type==="Leader"){
    if(currentDeck.leader===c.id)return;
    if(currentDeck.leader)return alert("Leader ได้สูงสุด 1 ใบ");
    currentDeck.leader=c.id;
  }else if(c.type==="Zone"){
    if(currentDeck.zone===c.id)return;
    if(currentDeck.zone)return alert("Zone ได้สูงสุด 1 ใบ");
    currentDeck.zone=c.id;
  }else if(c.type==="Soul Core"){
    currentDeck.soulCores=currentDeck.soulCores||[];
    const soulTotal=currentDeck.soulCores.length;
    if(soulTotal>=7)return alert("Soul Core มีได้สูงสุด 7 ใบ");
    currentDeck.soulCores.push(c.id);
  }else{
    const n=currentDeck.main[c.id]||0;
    if(c.type==="POCKET"){
      const pocketTotal=getPocketCount();
      if(pocketTotal>=10)return alert("POCKET มีได้สูงสุด 10 ใบ");
      if(n>=10)return alert("POCKET ใบนี้ใส่ได้สูงสุด 10 ใบ");
    }else{
      if(n>=3)return alert("การ์ดใบนี้ใส่ได้สูงสุด 3 ใบ");
    }
    currentDeck.main[c.id]=n+1;
  }
  persistDecks();
  renderDeck();
  renderDeckLibrary();
}

function removeFromDeck(id,type){
  if(!currentDeck)return;
  if(type==="Leader")currentDeck.leader=null;
  else if(type==="Zone")currentDeck.zone=null;
  else if(type==="Soul Core")currentDeck.soulCores=(currentDeck.soulCores||[]).filter(x=>x!==id);
  else{
    if(!currentDeck.main[id])return;
    currentDeck.main[id]--;
    if(currentDeck.main[id]<=0)delete currentDeck.main[id];
  }
  persistDecks();
  renderDeck();
  renderDeckLibrary();
}

function renderDeck(){
  if(!currentDeck)return;
  document.querySelector("#deckCount").textContent=getCount();
  document.querySelector("#leaderCount").textContent=(currentDeck.leader?1:0)+"/1";
  document.querySelector("#zoneCount").textContent=(currentDeck.zone?1:0)+"/1";
  const soulCoreCount=(currentDeck.soulCores||[]).length;
  const soulEl=document.querySelector("#soulCoreCount");
  soulEl.textContent=soulCoreCount+"/7";
  soulEl.classList.toggle("valid",soulCoreCount===7);
  soulEl.classList.toggle("invalid",soulCoreCount!==7);

  const pocketCount=Object.entries(currentDeck.main||{}).reduce((sum,[id,n])=>sum+(cards.find(c=>c.id===id)?.type==="POCKET"?n:0),0);
  const pocketEl=document.querySelector("#pocketCount");
  pocketEl.textContent=pocketCount+"/10";
  pocketEl.classList.toggle("valid",pocketCount===10);
  pocketEl.classList.toggle("invalid",pocketCount!==10);
  document.querySelector("#deckName").value=currentDeck.name;

  currentDeck.soulCores=currentDeck.soulCores||[];
  const soulCores=currentDeck.soulCores.map(id=>cards.find(c=>c.id===id)).filter(Boolean);
  const leader=cards.find(c=>c.id===currentDeck.leader);
  const zone=cards.find(c=>c.id===currentDeck.zone);

  document.querySelector("#leaderSlot").innerHTML=leader?specialHTML(leader,"Leader"):`<div class="empty-slot">＋ ADD LEADER</div>`;
  document.querySelector("#zoneSlot").innerHTML=zone?specialHTML(zone,"Zone"):`<div class="empty-slot">＋ ADD ZONE</div>`;

  if(leader)document.querySelector("#leaderSlot .remove-card").onclick=()=>removeFromDeck(leader.id,"Leader");

  const soulWrap=document.querySelector("#leaderSlot").parentElement;
  let soulSection=document.querySelector("#soulCoreBuilderSlot");
  if(!soulSection){
    soulSection=document.createElement("div");
    soulSection.id="soulCoreBuilderSlot";
    soulSection.className="special-slot soul-builder-slot";
    document.querySelector("#leaderSlot").before(soulSection);
  }
  soulSection.innerHTML=`<div class="soul-builder-title"><span>SOUL CORE</span><small>${soulCores.length}/7 · ใบเดิมสูงสุด 3</small></div>`+
    (soulCores.length?soulCores.map((c,i)=>specialHTML(c,"Soul Core")).join(""):`<div class="empty-slot">＋ ADD SOUL CORE · ต้องมี 7 ใบก่อน SAVE</div>`);
  soulCores.forEach((c,i)=>{
    const buttons=soulSection.querySelectorAll(".remove-card");
    if(buttons[i])buttons[i].onclick=()=>removeFromDeck(c.id,"Soul Core");
  });
  if(zone)document.querySelector("#zoneSlot .remove-card").onclick=()=>removeFromDeck(zone.id,"Zone");

  const entries=Object.entries(currentDeck.main);
  document.querySelector("#deckList").innerHTML=entries.length?entries.map(([id,n])=>{
    const c=cards.find(x=>x.id===id);
    return `<div class="deck-row">
      <div class="mini-art ${rarityClass(c.rarity)}">${c.symbol}</div>
      <div class="row-name"><b>${c.name}</b><small>${c.type} · ${c.rarity}</small></div>
      <div class="qty"><button onclick="removeFromDeck('${c.id}','Main')">−</button><b>${n}</b><button onclick="addToDeck('${c.id}')">＋</button></div>
    </div>`;
  }).join(""):`<div class="empty-main">ยังไม่มีการ์ดใน Main Deck</div>`;

  renderPicker();
  updateCover();
  renderDeckLibrary();
}

function specialHTML(c,label){
  return `<div class="special-card">
    <div class="special-art ${rarityClass(c.rarity)}">${c.symbol}</div>
    <div><b>${c.name}</b><small>${label} · ${c.rarity}</small></div>
    <button class="remove-card">×</button>
  </div>`;
}

function renderPicker(){
  if(!currentDeck)return;
  const q=(document.querySelector("#deckSearch").value||"").toLowerCase();
  const t=document.querySelector("#deckTypeFilter").value;
  const list=cards.filter(c=>(t==="All"||c.type===t)&&[c.name,c.subtitle,c.rarity,c.type].join(" ").toLowerCase().includes(q));

  document.querySelector("#pickerList").innerHTML=list.map(c=>{
    let qty=c.type==="Leader"?(currentDeck.leader===c.id?1:0):c.type==="Zone"?(currentDeck.zone===c.id?1:0):c.type==="Soul Core"?((currentDeck.soulCores||[]).filter(x=>x===c.id).length):(currentDeck.main[c.id]||0);
    let limit=c.type==="Leader"||c.type==="Zone"?1:c.type==="Soul Core"?7:c.type==="POCKET"?10:3;
    if(c.type==="Soul Core" && (currentDeck.soulCores||[]).length>=7) limit=qty;
    if(c.type==="POCKET" && getPocketCount()>=10) limit=qty;
    return `<div class="picker-row">
      <div class="picker-art ${rarityClass(c.rarity)}">${c.symbol}</div>
      <div class="picker-name"><b>${c.name}</b><small>${c.type} · ${c.rarity}</small></div>
      <div class="picker-qty">${qty}/${limit}</div>
      <button ${qty>=limit?"disabled":""} onclick="addToDeck('${c.id}')">＋</button>
    </div>`;
  }).join("");
}

function updateCover(){
  const c=cards.find(x=>x.id===currentDeck.cover);
  const cover=document.querySelector("#deckCover");
  if(c){
    cover.className=`deck-cover ${rarityClass(c.rarity)}`;
    document.querySelector("#coverSymbol").textContent=c.symbol;
  }else{
    cover.className="deck-cover rarity-common";
    document.querySelector("#coverSymbol").textContent="SA";
  }
}

function openCoverPicker(){
  document.querySelector("#coverGrid").innerHTML=cards.map(c=>
    `<button class="cover-option ${rarityClass(c.rarity)}" onclick="chooseCover('${c.id}')">
      <span>${c.symbol}</span><b>${c.name}</b><small>${c.rarity}</small>
    </button>`
  ).join("");
  document.querySelector("#coverModal").classList.remove("hidden");
}

function chooseCover(id){
  currentDeck.cover=id;
  persistDecks();
  updateCover();
  renderDeckLibrary();
  document.querySelector("#coverModal").classList.add("hidden");
}

function getPocketCount(deck=currentDeck){
  return Object.entries(deck?.main||{}).reduce((sum,[id,n])=>{
    const c=cards.find(x=>x.id===id);
    return sum+(c?.type==="POCKET"?n:0);
  },0);
}

function validateDeckBeforeSave(){
  const pocketCount=getPocketCount();
  const soulCoreCount=(currentDeck.soulCores||[]).length;
  if(soulCoreCount!==7){
    alert(`ไม่สามารถบันทึก Deck ได้\\n\\nSOUL CORE ต้องมีทั้งหมด 7 ใบ\\nตอนนี้มี ${soulCoreCount} ใบ`);
    return false;
  }
  if(pocketCount!==10){
    alert(`ไม่สามารถบันทึก Deck ได้\\n\\nPOCKET ต้องมีทั้งหมด 10 ใบ\\nตอนนี้มี ${pocketCount} ใบ`);
    return false;
  }
  if(!currentDeck.leader){
    alert("ไม่สามารถบันทึก Deck ได้\\n\\nต้องมี Leader 1 ใบ");
    return false;
  }
  if(!currentDeck.zone){
    alert("ไม่สามารถบันทึก Deck ได้\\n\\nต้องมี Zone 1 ใบ");
    return false;
  }
  return true;
}

function saveDeck(){
  if(!currentDeck)return;
  if(!validateDeckBeforeSave())return;

  currentDeck.name=(document.querySelector("#deckName").value.trim()||"New Deck");
  const i=decks.findIndex(d=>d.id===currentDeck.id);
  if(i>=0)decks[i]=currentDeck;
  persistDecks();
  renderDeckLibrary();
  alert("บันทึก Deck แล้ว");
}

function deleteCurrentDeck(){
  if(currentDeck)deleteDeckById(currentDeck.id);
}

document.querySelector("#newDeckBtn").onclick=makeDeck;
document.querySelector("#newDeckBtn2").onclick=makeDeck;
document.querySelector("#libraryNewDeck").onclick=makeDeck;
document.querySelector("#saveDeckBtn").onclick=saveDeck;
document.querySelector("#deleteDeckBtn").onclick=deleteCurrentDeck;
document.querySelector("#coverBtn").onclick=openCoverPicker;
document.querySelector("#closeCover").onclick=()=>document.querySelector("#coverModal").classList.add("hidden");
document.querySelector("#coverModal").onclick=e=>{if(e.target.id==="coverModal")e.currentTarget.classList.add("hidden")};
document.querySelector("#deckSearch").oninput=renderPicker;
document.querySelector("#deckTypeFilter").onchange=renderPicker;
document.querySelector("#deckName").oninput=e=>{
  if(currentDeck){
    currentDeck.name=e.target.value;
    persistDecks();
    renderDeckLibrary();
  }
};

render();
initDeck();


/* ---------------- DRAW TEST / PLAYMAT ---------------- */
let testDeck=null;
let testStack=[];
let testHand=[];
let testTomb=[];
let testTurn=0;
let testBoard={leader:null,zone:null,soul1:null,soul2:null,chars:[null,null,null,null],pocket:[],energy:null};

function refreshTestDeckSelect(){
  const sel=document.querySelector("#testDeckSelect");
  if(!sel)return;
  sel.innerHTML=decks.length?decks.map(d=>`<option value="${d.id}">${escapeHtml(d.name||"New Deck")}</option>`).join(""):`<option value="">No Deck</option>`;
  if(testDeck?.id && decks.some(d=>d.id===testDeck.id))sel.value=testDeck.id;
}
function buildTestDeck(){
  const id=document.querySelector("#testDeckSelect")?.value;
  testDeck=decks.find(d=>d.id===id)||decks[0]||null;
  if(!testDeck){testStack=[];testHand=[];testTomb=[];return}
  testStack=[];
  Object.entries(testDeck.main||{}).forEach(([id,n])=>{
    for(let i=0;i<n;i++)testStack.push(id);
  });
  testStack.sort(()=>Math.random()-.5);
  testHand=[];testTomb=[];testTurn=0;
  testBoard={leader:testDeck.leader||null,zone:testDeck.zone||null,soul1:testDeck.soulCores?.[0]||null,soul2:testDeck.soulCores?.[1]||null,chars:[null,null,null,null],pocket:[],energy:null,unit:null};
  renderTest();
}
function drawCards(n){
  for(let i=0;i<n && testStack.length;i++)testHand.push(testStack.pop());
  testTurn++;
  renderTest();
}
function resetTest(){buildTestDeck()}
function playHandCard(id){
  const idx=testHand.indexOf(id);
  if(idx<0)return;
  const c=cards.find(x=>x.id===id);
  if(!c)return;

  if(c.type==="POCKET"){
    testBoard.pocket.push(id);
  }else{
    const slot=testBoard.chars.findIndex(x=>x===null);
    if(slot<0){alert("Character Zone เต็มแล้ว");return}
    testBoard.chars[slot]=id;
  }
  testHand.splice(idx,1);
  renderTest();
}
function sendToTomb(id,fromHand=true){
  if(fromHand){
    const i=testHand.indexOf(id);if(i>=0)testHand.splice(i,1);
  }
  testTomb.push(id);renderTest();
}
function testCardHTML(id,clickable=false){
  if(!id)return "";
  const c=cards.find(x=>String(x.id)===String(id));
  if(!c){
    return `<div class="test-card rarity-common ${clickable?"clickable":""}" data-id="${escapeHtml(id)}">
      <span>?</span><b>${escapeHtml(id)}</b><small>CARD</small>
    </div>`;
  }
  return `<div class="test-card ${rarityClass(c.rarity)} ${clickable?"clickable":""}" data-id="${c.id}">
    <span>${c.symbol}</span><b>${escapeHtml(c.name)}</b><small>${c.rarity}</small>
  </div>`;
}
function renderTest(){
  refreshTestDeckSelect();
  if(!testDeck){
    const nameEl=document.querySelector("#testDeckName");
    if(nameEl)nameEl.textContent="-";
    const handEl=document.querySelector("#testHand");
    if(handEl)handEl.innerHTML=`<div class="hand-empty">ยังไม่มี Deck สำหรับทดลองจั่ว</div>`;
    return;
  }

  const setText=(selector,value)=>{
    const el=document.querySelector(selector);
    if(el)el.textContent=value;
  };

  setText("#testDeckName",testDeck.name);
  setText("#testCardsLeft",testStack.length);
  setText("#testHandCount",testHand.length);
  setText("#testTurn",testTurn);
  setText("#pileCount",testStack.length);
  setText("#tombCount",testTomb.length);

  /* Draw Test is intentionally card-only: no playmat elements are required. */
  const handEl=document.querySelector("#testHand");
  if(!handEl)return;

  if(testHand.length===0){
    handEl.innerHTML=`<div class="hand-empty">กด DRAW 5 เพื่อเริ่มทดลองจั่ว</div>`;
  }else{
    handEl.innerHTML=testHand.map((id,index)=>testCardHTML(id,true,index)).join("");
  }

  handEl.dataset.count=String(testHand.length);

  handEl.querySelectorAll(".clickable").forEach(el=>{
    el.onclick=()=>showDrawnCard(el.dataset.id);
  });
}

function showDrawnCard(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(!c)return;

  const old=document.querySelector("#drawCardDetail");
  if(old)old.remove();

  const detail=document.createElement("div");
  detail.id="drawCardDetail";
  detail.className="draw-card-detail";
  detail.innerHTML=`
    <div class="draw-card-detail-inner">
      <button class="draw-card-close">×</button>
      <div class="draw-preview-card ${rarityClass(c.rarity)}">
        <span>${c.symbol}</span>
        <b>${escapeHtml(c.name)}</b>
        <small>${escapeHtml(c.rarity)}</small>
      </div>
      <div class="draw-detail-text">
        <div class="eyebrow">${escapeHtml(c.type)}</div>
        <h3>${escapeHtml(c.name)}</h3>
        <p>${escapeHtml(c.ability||c.subtitle||"")}</p>
      </div>
    </div>`;
  document.body.appendChild(detail);
  detail.querySelector(".draw-card-close").onclick=()=>detail.remove();
  detail.onclick=e=>{if(e.target===detail)detail.remove()};
}

function initDrawTest(){
  refreshTestDeckSelect();
  if(!testDeck && decks.length)buildTestDeck();
  else renderTest();
}
document.querySelector("#testDeckSelect").onchange=buildTestDeck;
document.querySelector("#drawFiveBtn").onclick=()=>drawCards(5);
document.querySelector("#drawOneBtn").onclick=()=>drawCards(1);
document.querySelector("#resetTestBtn").onclick=resetTest;
document.querySelector("#testDeckPile").onclick=()=>drawCards(1);
document.querySelector("#drawPileBtn").onclick=()=>drawCards(1);

initDrawTest();

window.addEventListener('DOMContentLoaded',()=>applyLanguage());
