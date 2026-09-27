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
{id:"SA-012",name:"Relic Core",subtitle:"Ancient Power",type:"Item",rarity:"Rare",element:"Relic",cost:"2",ability:"ติดตั้งให้ Character 1 ใบเพื่อเพิ่มผลของความสามารถ",symbol:"C"}
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
document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".section").forEach(x=>x.classList.remove("active-section"));
 document.querySelector("#"+btn.dataset.section).classList.add("active-section");
 document.querySelector(".sidebar").classList.remove("open");
 if(btn.dataset.section==="deck") initDeck();
});

/* ---------------- DECK BUILDER ---------------- */
let decks=JSON.parse(localStorage.getItem("stealAreaDecks")||"[]");
let currentDeck=null;

function makeDeck(){
 currentDeck={id:"D"+Date.now(),name:"New Deck",cover:null,leader:null,zone:null,main:{}};
 decks.push(currentDeck);
 persistDecks(); initDeck();
}
function initDeck(){
 if(!currentDeck) currentDeck=decks[0]||null;
 const empty=document.querySelector("#deckEmpty"), work=document.querySelector("#deckWorkspace");
 if(!currentDeck){empty.classList.remove("hidden");work.classList.add("hidden");return}
 empty.classList.add("hidden");work.classList.remove("hidden");
 document.querySelector("#deckName").value=currentDeck.name;
 renderDeck();
}
function persistDecks(){localStorage.setItem("stealAreaDecks",JSON.stringify(decks))}
function getCount(){
 return Object.values(currentDeck.main||{}).reduce((a,b)=>a+b,0)+(currentDeck.leader?1:0)+(currentDeck.zone?1:0);
}
function addToDeck(id){
 const c=cards.find(x=>x.id===id); if(!c)return;
 if(c.type==="Leader"){
   if(currentDeck.leader===c.id)return alert("Leader ได้สูงสุด 1 ใบ");
   currentDeck.leader=c.id;
 }else if(c.type==="Zone"){
   if(currentDeck.zone===c.id)return alert("Zone ได้สูงสุด 1 ใบ");
   currentDeck.zone=c.id;
 }else{
   const n=currentDeck.main[c.id]||0;
   if(n>=3)return alert("การ์ดใบนี้ใส่ได้สูงสุด 3 ใบ");
   currentDeck.main[c.id]=n+1;
 }
 renderDeck();
}
function removeFromDeck(id,type){
 if(type==="Leader")currentDeck.leader=null;
 else if(type==="Zone")currentDeck.zone=null;
 else{
   if(!currentDeck.main[id])return;
   currentDeck.main[id]--;
   if(currentDeck.main[id]<=0)delete currentDeck.main[id];
 }
 renderDeck();
}
function renderDeck(){
 document.querySelector("#deckCount").textContent=getCount();
 document.querySelector("#leaderCount").textContent=(currentDeck.leader?1:0)+"/1";
 document.querySelector("#zoneCount").textContent=(currentDeck.zone?1:0)+"/1";
 document.querySelector("#deckName").value=currentDeck.name;

 const leader=cards.find(c=>c.id===currentDeck.leader), zone=cards.find(c=>c.id===currentDeck.zone);
 document.querySelector("#leaderSlot").innerHTML=leader?specialHTML(leader,"Leader"):`<div class="empty-slot">＋ ADD LEADER</div>`;
 document.querySelector("#zoneSlot").innerHTML=zone?specialHTML(zone,"Zone"):`<div class="empty-slot">＋ ADD ZONE</div>`;
 if(leader)document.querySelector("#leaderSlot .remove-card").onclick=()=>removeFromDeck(leader.id,"Leader");
 if(zone)document.querySelector("#zoneSlot .remove-card").onclick=()=>removeFromDeck(zone.id,"Zone");

 const entries=Object.entries(currentDeck.main);
 document.querySelector("#deckList").innerHTML=entries.length?entries.map(([id,n])=>{
   const c=cards.find(x=>x.id===id); return `<div class="deck-row"><div class="mini-art ${rarityClass(c.rarity)}">${c.symbol}</div><div class="row-name"><b>${c.name}</b><small>${c.type} · ${c.rarity}</small></div><div class="qty"><button onclick="removeFromDeck('${c.id}','Main')">−</button><b>${n}</b><button onclick="addToDeck('${c.id}')">＋</button></div></div>`;
 }).join(""):`<div class="empty-main">ยังไม่มีการ์ดใน Main Deck</div>`;
 renderPicker();
 updateCover();
}
function specialHTML(c,label){
 return `<div class="special-card"><div class="special-art ${rarityClass(c.rarity)}">${c.symbol}</div><div><b>${c.name}</b><small>${label} · ${c.rarity}</small></div><button class="remove-card">×</button></div>`;
}
function renderPicker(){
 const q=(document.querySelector("#deckSearch").value||"").toLowerCase(), t=document.querySelector("#deckTypeFilter").value;
 const list=cards.filter(c=>(t==="All"||c.type===t)&&[c.name,c.subtitle,c.rarity,c.type].join(" ").toLowerCase().includes(q));
 document.querySelector("#pickerList").innerHTML=list.map(c=>{
   let qty=c.type==="Leader"?(currentDeck.leader===c.id?1:0):c.type==="Zone"?(currentDeck.zone===c.id?1:0):(currentDeck.main[c.id]||0);
   let limit=c.type==="Leader"||c.type==="Zone"?1:3;
   return `<div class="picker-row"><div class="picker-art ${rarityClass(c.rarity)}">${c.symbol}</div><div class="picker-name"><b>${c.name}</b><small>${c.type} · ${c.rarity}</small></div><div class="picker-qty">${qty}/${limit}</div><button ${qty>=limit?"disabled":""} onclick="addToDeck('${c.id}')">＋</button></div>`;
 }).join("");
}
function updateCover(){
 const c=cards.find(x=>x.id===currentDeck.cover);
 const cover=document.querySelector("#deckCover");
 if(c){cover.className=`deck-cover ${rarityClass(c.rarity)}`;document.querySelector("#coverSymbol").textContent=c.symbol}
 else {cover.className="deck-cover rarity-common";document.querySelector("#coverSymbol").textContent="SA"}
}
function openCoverPicker(){
 document.querySelector("#coverGrid").innerHTML=cards.map(c=>`<button class="cover-option ${rarityClass(c.rarity)}" onclick="chooseCover('${c.id}')"><span>${c.symbol}</span><b>${c.name}</b><small>${c.rarity}</small></button>`).join("");
 document.querySelector("#coverModal").classList.remove("hidden");
}
function chooseCover(id){currentDeck.cover=id;persistDecks();updateCover();document.querySelector("#coverModal").classList.add("hidden")}
function saveDeck(){
 currentDeck.name=(document.querySelector("#deckName").value.trim()||"New Deck");
 const i=decks.findIndex(d=>d.id===currentDeck.id); if(i>=0)decks[i]=currentDeck; else decks.push(currentDeck);
 persistDecks(); alert("บันทึก Deck แล้ว");
}
function deleteDeck(){
 if(!confirm("ลบ Deck นี้ใช่หรือไม่?"))return;
 decks=decks.filter(d=>d.id!==currentDeck.id);currentDeck=decks[0]||null;persistDecks();initDeck();
}
document.querySelector("#newDeckBtn").onclick=makeDeck;
document.querySelector("#newDeckBtn2").onclick=makeDeck;
document.querySelector("#saveDeckBtn").onclick=saveDeck;
document.querySelector("#deleteDeckBtn").onclick=deleteDeck;
document.querySelector("#coverBtn").onclick=openCoverPicker;
document.querySelector("#closeCover").onclick=()=>document.querySelector("#coverModal").classList.add("hidden");
document.querySelector("#coverModal").onclick=e=>{if(e.target.id==="coverModal")e.currentTarget.classList.add("hidden")};
document.querySelector("#deckSearch").oninput=renderPicker;
document.querySelector("#deckTypeFilter").onchange=renderPicker;
document.querySelector("#deckName").oninput=e=>{currentDeck.name=e.target.value};

render();
initDeck();
