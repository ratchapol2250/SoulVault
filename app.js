const cards=[
{id:"SA-001",set:"BT01",name:"Varethorn",subtitle:"The Shadow Thief",type:"Character",rarity:"Legendary",element:"Void",cost:"6",ability:"เมื่อเข้าสู่สนาม สามารถเลือกการ์ด 1 ใบจากมือฝ่ายตรงข้ามและทำให้การ์ดนั้นถูกล็อกชั่วคราว",symbol:"V"},
{id:"SA-002",set:"BT01",name:"Draconic Fury",subtitle:"Wrath of the Dragon",type:"Action",rarity:"Epic",element:"Inferno",cost:"3",ability:"เพิ่มพลังโจมตีให้ตัวละครของคุณ และสร้างแรงกดดันต่อคู่ต่อสู้ในเทิร์นนี้",symbol:"D"},
{id:"SA-003",set:"BT01",name:"Soulvault",subtitle:"The Endless Archive",type:"Skill",rarity:"Rare",element:"Soul",cost:"2",ability:"เก็บการ์ด 1 ใบจากสุสานของคุณกลับมาไว้ในมือ",symbol:"S"},
{id:"SA-004",set:"BT01",name:"Azrakar",subtitle:"Keeper of the Red Core",type:"Character",rarity:"Legendary",element:"Red Core",cost:"7",ability:"เมื่อพลังชีวิตของคุณลดลงต่ำกว่าครึ่ง ความสามารถของ Azrakar จะทำงานทันที",symbol:"A"},
{id:"SA-005",set:"BT01",name:"Death Error",subtitle:"System Failure",type:"Skill",rarity:"Rare",element:"Void",cost:"4",ability:"ยกเลิกความสามารถที่กำลังทำงานของการ์ดเป้าหมาย 1 ใบ",symbol:"E"},
{id:"SA-006",set:"BT01",name:"Scarlet Night",subtitle:"Blood Moon Protocol",type:"Action",rarity:"Epic",element:"Crimson",cost:"4",ability:"เปลี่ยนสนามให้เข้าสู่สถานะ Scarlet Night และเพิ่มผลของการ์ดธาตุ Crimson",symbol:"N"},
{id:"SA-007",set:"BT02",name:"Core Shield",subtitle:"Relic Barrier",type:"Skill",rarity:"Common",element:"Relic",cost:"1",ability:"ป้องกันความเสียหายที่กำลังจะเกิดขึ้น 1 ครั้ง",symbol:"C"},
{id:"SA-008",set:"BT02",name:"Forbidden Relic",subtitle:"Artifact of the Lost",type:"Item",rarity:"Common",element:"Relic",cost:"2",ability:"ค้นหาการ์ด Relic จาก Deck แล้วนำขึ้นมือ 1 ใบ",symbol:"R"},
{id:"SA-017",name:"Untimeat",subtitle:"The Unbroken Oath",type:"Untimeat",rarity:"Legendary",element:"Void",cost:"0",ability:"Untimeat — การ์ดประจำเด็คที่ต้องมี 1 ใบ",symbol:"U",set:"BT03"},
{id:"SA-009",set:"BT02",name:"Eclipse King",subtitle:"Leader of the Black Sun",type:"Leader",rarity:"Legendary",element:"Eclipse",cost:"8",ability:"Leader — กำหนดกฎพิเศษของ Deck และเพิ่มพลังให้การ์ด Eclipse",symbol:"K"},
{id:"SA-010",set:"BT02",name:"Land of Eternal Love",subtitle:"Forbidden Zone",type:"Zone",rarity:"Epic",element:"Mystic",cost:"0",ability:"Zone — สนามนี้เปลี่ยนผลของการ์ด Skill และ Character บางประเภท",symbol:"Z"},
{id:"SA-011",set:"BT02",name:"Neon Succubus",subtitle:"Temptation Protocol",type:"Character",rarity:"Epic",element:"Neon",cost:"5",ability:"เมื่อการ์ดนี้ทำงาน ให้เลือกการ์ดฝ่ายตรงข้าม 1 ใบและลดประสิทธิภาพของมัน",symbol:"N"},
{id:"SA-012",set:"BT03",name:"Relic Core",subtitle:"Ancient Power",type:"Item",rarity:"Rare",element:"Relic",cost:"2",ability:"ติดตั้งให้ Character 1 ใบเพื่อเพิ่มผลของความสามารถ",symbol:"C"},
{id:"SA-013",set:"BT03",name:"Soul Core Alpha",subtitle:"Origin of the Soul",type:"Soul Core",rarity:"Legendary",element:"Soul",cost:"0",ability:"Soul Core — แกนพลังประจำ Deck ใช้สำหรับกำหนดพลังเริ่มต้นของผู้เล่น",symbol:"SC"},
{id:"SA-014",set:"BT03",name:"Soul Core Eclipse",subtitle:"Black Soul Reactor",type:"Soul Core",rarity:"Epic",element:"Eclipse",cost:"0",ability:"Soul Core — เพิ่มผลของการ์ด Eclipse เมื่อถูกวางในสนาม",symbol:"SC"},
{id:"SA-015",set:"BT03",name:"Pocket Relic",subtitle:"Stored Artifact",type:"POCKET",rarity:"Rare",element:"Relic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ในพื้นที่ Pocket และเรียกใช้ในจังหวะที่กำหนด",symbol:"P"},
{id:"SA-016",set:"BT03",name:"Pocket Trick",subtitle:"Hidden Move",type:"POCKET",rarity:"Common",element:"Mystic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ใน Pocket เพื่อเตรียมใช้เป็นการกระทำพิเศษ",symbol:"P"},

{id:"HD-005",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg",set:"HD",name:"เพอร่า ยามค่ำคืน",subtitle:"Pera at Night",type:"Character",rarity:"Common",element:"Crimson",cost:"3",ability:"การ์ดตัวละครจากชุด HD",symbol:"P",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg"},
{id:"HD-009",image:"/public/images/cards/You Die!.jpg",set:"HD",name:"You Die!",subtitle:"Criminal Protocol",type:"Action",rarity:"Common",element:"Void",cost:"3",ability:"การ์ดสกิลจากชุด HD",symbol:"Y",image:"/public/images/cards/You Die!.jpg"},
{id:"HD-010",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg",set:"HD",name:"คำเชิญชวนแห่งภูติ",subtitle:"Fairy's Invitation",type:"Action",rarity:"Common",element:"Mystic",cost:"2",ability:"การ์ดแอ็กชันจากชุด HD",symbol:"F",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg"},
{id:"HD-002",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg",set:"HD",name:"เกลสาวโหด ณ 3 แยก",subtitle:"The Brutal Girl",type:"Character",rarity:"Common",element:"Crimson",cost:"4",ability:"การ์ดตัวละครจากชุด HD",symbol:"G",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg"},
{id:"HD-001",image:"/public/images/cards/Aegiron The Starforged.jpg",set:"HD",name:"Aegiron The Starforged",subtitle:"The Starforged",type:"Character",rarity:"Common",element:"Star",cost:"5",ability:"การ์ดตัวละครจากชุด HD",symbol:"A",image:"/public/images/cards/Aegiron The Starforged.jpg"},
{id:"HD-004",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg",set:"HD",name:"ไนธีเรีย ผู้เฝ้าประตูนรก",subtitle:"Guardian of Hell's Gate",type:"Character",rarity:"Common",element:"Void",cost:"3",ability:"การ์ดตัวละครจากชุด HD",symbol:"N",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg"},
{id:"HD-008",image:"/public/images/cards/Heaven's Embrace.jpg",set:"HD",name:"Heaven's Embrace",subtitle:"Heaven's Embrace",type:"Action",rarity:"Common",element:"Holy",cost:"2",ability:"การ์ดสกิลจากชุด HD",symbol:"H",image:"/public/images/cards/Heaven's Embrace.jpg"},
{id:"HD-003",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg",set:"HD",name:"จอมโจร100หน้า LUPIN",subtitle:"Lupin, 100 Faces",type:"Character",rarity:"Common",element:"Criminal",cost:"4",ability:"การ์ดตัวละครจากชุด HD",symbol:"L",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg"},
{id:"HD-007",image:"/public/images/cards/Death Error.jpg",set:"HD",name:"Death Error",subtitle:"System Failure",type:"Action",rarity:"Common",element:"Void",cost:"4",ability:"การ์ดสกิลจากชุด HD",symbol:"E",image:"/public/images/cards/Death Error.jpg"},
{id:"HD-011",image:"/public/images/cards/สัมผัสต้องห้าม.jpg",set:"HD",name:"สัมผัสต้องห้าม",subtitle:"Forbidden Touch",type:"Action",rarity:"Common",element:"Criminal",cost:"3",ability:"การ์ดสกิลจากชุด HD",symbol:"T",image:"/public/images/cards/สัมผัสต้องห้าม.jpg"},
{id:"HD-006",image:"/public/images/cards/Cerberus Blade.jpg",set:"HD",name:"Cerberus Blade",subtitle:"Cerberus Blade",type:"Gear",rarity:"Common",element:"Criminal",cost:"3",ability:"การ์ด Gear จากชุด HD",symbol:"C",image:"/public/images/cards/Cerberus Blade.jpg"},
{id:"HD-P01",image:"/public/images/cards/Pocket3.jpg",set:"HD",name:"pocket",subtitle:"-",type:"POCKET",rarity:"Common",element:"-",cost:"-",ability:"การ์ด Gear จากชุด HD",image:"/public/images/cards/Pocket3.jpg"},
{id:"HD-012",image:"/public/images/cards/Soul Guard.jpg",set:"HD",name:"Soul Guard",subtitle:"ข้าจะใช้วิญญาณของข้า เป็นเกราะเพื่อเจ้า",type:"Action",rarity:"Common",element:"วิญญาณ",cost:"2",ability:"ใช้ได้ต่อเมื่อคู่แข่งสั่งโจมตี \n\n {counter} จ่าย 1  {E} ทำให้การโจมตีนั้นไร้ผล",symbol:"C",image:"/public/images/cards/Soul Guard.jpg"},
{id:"HD-SC01",image:"/public/images/cards/Soul Core.jpg",set:"HD",name:"Soul Core",subtitle:"-",type:"Soul Core",rarity:"Common",element:"-",cost:"-",ability:"-",image:"/public/images/cards/Soul Core.jpg"},
];

const rarityClass=r=>`rarity-${r.toLowerCase()}`;
function cardImageHTML(c, className="card-real-image"){
  return c.image ? `<img class="${className}" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}" loading="lazy">` : "";
}
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),typeFilter=document.querySelector("#typeFilter"),rarityFilter=document.querySelector("#rarityFilter");
document.querySelector("#totalCount").textContent=String(cards.length).padStart(2,"0");

function getCardVariants(card){
  if(!card)return [];
  return cards.filter(x=>String(x.name).trim()===String(card.name).trim());
}

function render(){
 const q=search.value.toLowerCase().trim(), type=typeFilter.value, rarity=rarityFilter.value, set=(document.querySelector("#setFilter")?.value||"All");
 const filtered=cards.filter(c=>(type==="All"||c.type===type)&&(rarity==="All"||c.rarity===rarity)&&(set==="All"||c.set===set)&&[c.name,c.subtitle,c.type,c.element,c.ability,c.set].join(" ").toLowerCase().includes(q));
 const seenNames=new Set();
 const list=filtered.filter(c=>{
   const key=String(c.name).trim();
   if(seenNames.has(key))return false;
   seenNames.add(key);
   return true;
 });
 grid.innerHTML=list.map(c=>cardHTML(c,false)).join("");
 document.querySelector("#empty").classList.toggle("hidden",list.length!==0);

 function bindRosterCards(){
   document.querySelectorAll("#grid .card").forEach(el=>{
     el.onclick=e=>{
       if(e.target.closest(".collection-add-btn")||e.target.closest(".deck-add-btn")||e.target.closest(".variant-select"))return;
       openCard(cards.find(c=>c.id===el.dataset.id));
     };
   });
   document.querySelectorAll("#grid .variant-select").forEach(sel=>{
     sel.onchange=e=>{
       e.stopPropagation();
       const selected=cards.find(c=>String(c.id)===String(sel.value));
       const article=sel.closest(".card");
       if(!selected||!article)return;
       article.outerHTML=cardHTML(selected,false);
       bindRosterCards();
     };
   });
   document.querySelectorAll("#grid .collection-add-btn").forEach(btn=>{
     btn.onclick=e=>{
       e.stopPropagation();
       toggleWanted(btn.dataset.collectionId);
       render();
     };
   });
   document.querySelectorAll("#grid .deck-add-btn").forEach(btn=>{
     btn.onclick=e=>{
       e.stopPropagation();
       openAddToDeckModal(btn.dataset.deckCardId);
     };
   });
 }
 bindRosterCards();
}
function cardHTML(c,small=true){
 const inCollection=isWanted(c.id);
 const variants=getCardVariants(c);
 const variantPicker=variants.length>1
   ? `<label class="variant-switch" onclick="event.stopPropagation()">
        <span>Art Card</span>
        <select class="variant-select" aria-label="Select Art Card">
          ${variants.map(v=>`<option value="${escapeHtml(v.id)}" ${v.id===c.id?"selected":""}>${escapeHtml(v.set||"")}${v.set?" · ":""}${escapeHtml(v.id||"แบบ "+v.id)}</option>`).join("")}
        </select>
      </label>`
   : "";
 return `<article class="card ${small?'small-card':''}" data-id="${c.id}">
   <div class="card-art ${rarityClass(c.rarity)}">${cardImageHTML(c)}${c.image?"":`<div class="card-symbol">${c.symbol}</div>`}<span class="rarity-orb">${c.rarity[0]}</span></div>
   <div class="card-info"><div class="tag-row"><span class="tag">${c.type}</span><span class="tag rarity">${c.rarity}</span><span class="tag set-tag">${c.set||"BT01"}</span></div>
   <h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.subtitle)}</p>
   ${variantPicker}
   <button class="collection-add-btn ${inCollection?"added":""}" data-collection-id="${c.id}">
     ${inCollection?"✓ อยู่ในคอลเลกชัน":"＋ เพิ่มเข้าคอลเลกชัน"}
   </button>
   <button class="deck-add-btn" data-deck-card-id="${c.id}">＋ เพิ่มเข้าเด็ค</button>
   </div></article>`;
}
function openCard(c){
 document.querySelector("#detailType").textContent=c.type.toUpperCase();
 document.querySelector("#detailRarity").textContent=c.rarity.toUpperCase();
 document.querySelector("#detailName").textContent=c.name;
 document.querySelector("#detailSubtitle").textContent=c.subtitle;
 document.querySelector("#detailAbility").innerHTML =
  formatAbility(c.ability);
 document.querySelector("#detailId").textContent=c.id;
 document.querySelector("#detailElement").textContent=c.element;
 document.querySelector("#detailCost").textContent=c.cost;
 document.querySelector("#detailImage").className=`detail-image ${rarityClass(c.rarity)}`;
 document.querySelector("#detailImage").innerHTML=c.image ? `<img class="detail-real-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">` : `<span class="detail-placeholder"></span>`;
 document.querySelector("#modal").classList.remove("hidden");
}
function closeModal(){document.querySelector("#modal").classList.add("hidden")}
function resetRosterFilters(){
  ["search","typeFilter","setFilter","rarityFilter"].forEach(id=>{
    const el=document.querySelector("#"+id);
    if(!el)return;
    if(id==="search")el.value="";
    else el.value="All";
  });
}
[search,typeFilter,rarityFilter,document.querySelector("#setFilter")].forEach(el=>{
  if(!el)return;
  el.addEventListener(el.tagName==="INPUT"?"input":"change",render);
});
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

/* ---------------- COLLECTION / WISHLIST ---------------- */
let wantedCards=[];
try{
  const savedWanted=JSON.parse(localStorage.getItem("stealAreaWantedCards")||"[]");
  wantedCards=Array.isArray(savedWanted)?savedWanted:[];
}catch(e){ wantedCards=[]; }

function persistWantedCards(){
  localStorage.setItem("stealAreaWantedCards",JSON.stringify(wantedCards));
}

function isWanted(id){
  return wantedCards.includes(String(id));
}

function toggleWanted(id){
  id=String(id);
  if(isWanted(id)){
    wantedCards=wantedCards.filter(x=>x!==id);
  }else{
    wantedCards.push(id);
  }
  persistWantedCards();
  renderCollection();
  if(typeof render==="function")render();
}

function collectionCardHTML(c){
  const wanted=isWanted(c.id);
  return `<article class="collection-card ${wanted?"wanted":""}" data-id="${c.id}">
    <div class="collection-card-art ${rarityClass(c.rarity)}">
      ${cardImageHTML(c,"collection-real-image")}${c.image?"":`<div class="card-symbol">${c.symbol}</div>`}
      <span class="rarity-orb">${c.rarity[0]}</span>
      <span class="collection-set">${c.set||"BT01"}</span>
    </div>
    <div class="collection-card-info">
      <div class="tag-row">
        <span class="tag">${c.type}</span>
        <span class="tag rarity">${c.rarity}</span>
      </div>
      <h3>${escapeHtml(c.name)}</h3>
      <p>${escapeHtml(c.subtitle||"")}</p>
      <button class="wanted-btn ${wanted?"checked":""}" data-wanted="${c.id}">
        <span>✓</span> ลบออกจากคอลเลกชัน
      </button>
    </div>
  </article>`;
}

function renderCollection(){
  const grid=document.querySelector("#collectionGrid");
  if(!grid)return;

  const search=(document.querySelector("#collectionSearch")?.value||"").toLowerCase().trim();
  const set=document.querySelector("#collectionSetFilter")?.value||"All";
  const type=document.querySelector("#collectionTypeFilter")?.value||"All";
  const rarity=document.querySelector("#collectionRarityFilter")?.value||"All";

  const list=cards.filter(c=>{
    const wanted=isWanted(c.id);
    return wanted
      &&(set==="All"||c.set===set)
      &&(type==="All"||c.type===type)
      &&(rarity==="All"||c.rarity===rarity)
      &&[c.name,c.subtitle,c.type,c.rarity,c.set,c.element].join(" ").toLowerCase().includes(search);
  });

  grid.innerHTML=list.map(collectionCardHTML).join("");
  document.querySelector("#collectionEmpty")?.classList.toggle("hidden",list.length!==0);

  document.querySelector("#wantedCount").textContent=wantedCards.length;
  document.querySelector("#collectionTotal").textContent=wantedCards.length;

  grid.querySelectorAll(".wanted-btn").forEach(btn=>{
    btn.onclick=e=>{
      e.stopPropagation();
      toggleWanted(btn.dataset.wanted);
    };
  });
  grid.querySelectorAll(".collection-card").forEach(el=>{
    el.onclick=e=>{
      if(e.target.closest(".wanted-btn"))return;
      openCard(cards.find(c=>String(c.id)===String(el.dataset.id)));
    };
  });
}


function resetCollectionFilters(){
  const search=document.querySelector("#collectionSearch");
  const set=document.querySelector("#collectionSetFilter");
  const type=document.querySelector("#collectionTypeFilter");
  const rarity=document.querySelector("#collectionRarityFilter");
  if(search)search.value="";
  if(set)set.value="All";
  if(type)type.value="All";
  if(rarity)rarity.value="All";
}
[["#collectionSearch","input"],["#collectionSetFilter","change"],["#collectionTypeFilter","change"],["#collectionRarityFilter","change"],["#collectionViewFilter","change"]].forEach(([sel,evt])=>{
  document.querySelector(sel)?.addEventListener(evt,renderCollection);
});
renderCollection();


/* ---------------- ADD CARD TO DECK FROM ROSTER ---------------- */
function showToast(message){
  const old=document.querySelector(".app-toast");
  if(old)old.remove();
  const el=document.createElement("div");
  el.className="app-toast";
  el.textContent=message;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),2200);
}

function openAddToDeckModal(cardId){
  reloadDecksFromStorage();
  const card=cards.find(c=>String(c.id)===String(cardId));
  if(!card)return;

  const old=document.querySelector("#addToDeckModal");
  if(old)old.remove();

  const modal=document.createElement("div");
  modal.id="addToDeckModal";
  modal.className="deck-add-overlay";

  const limit=card.type==="Leader"||card.type==="Zone"||card.type==="Untimeat" ? 1 :
              card.type==="Soul Core" ? 7 :
              card.type==="POCKET" ? 10 : 3;

  const deckOptions=decks.map(d=>{
    const selected=d.id===localStorage.getItem("stealAreaActiveDeckId");
    return `<button class="deck-select-card ${selected?"selected":""}" data-deck-id="${escapeHtml(String(d.id))}">
      <span class="deck-select-main">
        <strong>${escapeHtml(d.name||"New Deck")}</strong>
        <small>MAIN DECK ${getMainDeckCount(d)}/50</small>
      </span>
      ${selected?'<span class="deck-selected-mark">✓</span>':""}
    </button>`;
  }).join("");

  modal.innerHTML=`
    <div class="deck-add-modal">
      <button class="deck-add-close" aria-label="ปิด">×</button>

      <div class="deck-add-top">
        <div class="eyebrow">ADD TO DECK</div>
        <h2>เพิ่มการ์ดเข้าเด็ค</h2>
        <p>เลือกเด็คและจำนวนการ์ดที่ต้องการใส่</p>
      </div>

      <div class="deck-add-card-preview">
        <div class="deck-mini-card ${rarityClass(card.rarity)}">
          <span>${escapeHtml(card.symbol)}</span>
        </div>
        <div>
          <div class="deck-card-type">${escapeHtml(card.type)} · ${escapeHtml(card.rarity)}</div>
          <h3>${escapeHtml(card.name)}</h3>
          <p>${escapeHtml(card.subtitle||"")}</p>
        </div>
      </div>

      <div class="deck-add-body">
        <div class="deck-picker">
          <div class="section-label">เลือกเด็ค</div>
          <div class="deck-select-list">
            ${deckOptions || '<div class="no-decks">ยังไม่มีเด็ค กรุณาสร้างเด็คก่อน</div>'}
          </div>
        </div>

        <div class="deck-quantity-box">
          <div class="section-label">จำนวน</div>
          <div class="quantity-control large">
            <button type="button" id="qtyMinus">−</button>
            <input id="deckAddQty" type="number" min="1" max="${limit}" value="1">
            <button type="button" id="qtyPlus">＋</button>
          </div>
          <div class="quantity-limit">สูงสุด ${limit} ใบ ตามประเภทการ์ด</div>
          <button class="confirm-deck-add" id="confirmDeckAdd" disabled>เพิ่มเข้าเด็ค</button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);

  let selectedDeckId=null;
  const selectedSaved=localStorage.getItem("stealAreaActiveDeckId");
  if(decks.some(d=>String(d.id)===String(selectedSaved))) selectedDeckId=String(selectedSaved);

  const buttons=modal.querySelectorAll(".deck-select-card");
  buttons.forEach(btn=>{
    btn.onclick=()=>{
      selectedDeckId=String(btn.dataset.deckId);
      buttons.forEach(b=>b.classList.remove("selected"));
      btn.classList.add("selected");
      modal.querySelector("#confirmDeckAdd").disabled=false;
    };
  });

  const input=modal.querySelector("#deckAddQty");
  const clampQty=()=>{
    let q=parseInt(input.value,10)||1;
    q=Math.max(1,Math.min(limit,q));
    input.value=q;
    return q;
  };
  modal.querySelector("#qtyMinus").onclick=()=>{input.value=Math.max(1,(parseInt(input.value)||1)-1)};
  modal.querySelector("#qtyPlus").onclick=()=>{input.value=Math.min(limit,(parseInt(input.value)||1)+1)};
  input.onchange=clampQty;
  input.oninput=()=>{ if(parseInt(input.value)>limit)input.value=limit; };

  modal.querySelector("#confirmDeckAdd").onclick=()=>{
    if(!selectedDeckId)return;
    addCardFromRosterToDeck(cardId,selectedDeckId,clampQty());
  };

  modal.querySelector(".deck-add-close").onclick=()=>modal.remove();
  modal.onclick=e=>{if(e.target===modal)modal.remove()};
}


function addCardFromRosterToDeck(cardId,deckId,requestedQty=1){
  reloadDecksFromStorage();
  const deck=decks.find(d=>String(d.id)===String(deckId));
  const card=cards.find(c=>String(c.id)===String(cardId));
  if(!deck||!card)return;

  let qty=Math.max(1,parseInt(requestedQty,10)||1);
  deck.main=deck.main||{};
  deck.soulCores=deck.soulCores||[];

  if(card.type==="Leader"){
    if(qty!==1){alert("Leader ใส่ได้ 1 ใบเท่านั้น");return;}
    if(deck.leader && deck.leader!==card.id){alert("Deck นี้มี Leader อยู่แล้ว 1 ใบ");return;}
    deck.leader=card.id;
  }else if(card.type==="Zone"){
    if(qty!==1){alert("Zone ใส่ได้ 1 ใบเท่านั้น");return;}
    if(deck.zone && deck.zone!==card.id){alert("Deck นี้มี Zone อยู่แล้ว 1 ใบ");return;}
    deck.zone=card.id;
  }else if(card.type==="Soul Core"){
    const remaining=7-deck.soulCores.length;
    if(qty>remaining){alert(`Soul Core เหลือช่องอีก ${remaining} ใบ`);return;}
    for(let i=0;i<qty;i++)deck.soulCores.push(card.id);
  }else if(card.type==="Untimeat"){
    if(qty!==1){alert("Untimeat ใส่ได้ 1 ใบเท่านั้น");return;}
    if(deck.untimeat && deck.untimeat!==card.id){alert("Deck นี้มี Untimeat อยู่แล้ว 1 ใบ");return;}
    const oldQty=Number(deck.main[card.id]||0);
    if(oldQty<1 && getMainDeckCount(deck)>=50){alert("MAIN DECK ครบ 50 ใบแล้ว");return;}
    deck.untimeat=card.id;
    deck.main[card.id]=1;
  }else{
    const limit=card.type==="POCKET"?10:3;
    const currentQty=Number(deck.main[card.id]||0);
    if(currentQty+qty>limit){
      alert(`${card.type==="POCKET"?"Pocket":"การ์ดใบนี้"} ใส่ได้สูงสุด ${limit} ใบ (ตอนนี้มี ${currentQty} ใบ)`);
      return;
    }
    const available=50-getMainDeckCount(deck);
    if(qty>available){
      alert(`MAIN DECK เหลือพื้นที่อีก ${available} ใบ`);
      return;
    }
    deck.main[card.id]=currentQty+qty;
  }

  localStorage.setItem("stealAreaDecks",JSON.stringify(decks));
  localStorage.setItem("stealAreaActiveDeckId",deck.id);
  const modal=document.querySelector("#addToDeckModal");
  if(modal)modal.remove();
  showToast(`เพิ่ม ${card.name} จำนวน ${qty} ใบ เข้า ${deck.name||"Deck"} แล้ว`);
  render();
}

document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".section").forEach(x=>x.classList.remove("active-section"));
 document.querySelector("#"+btn.dataset.section).classList.add("active-section");
 document.querySelector(".sidebar").classList.remove("open");
 if(btn.dataset.section==="deck") initDeck();
 if(btn.dataset.section==="collection") renderCollection();
 if(btn.dataset.section==="supply") initSupply();
});

/* ---------------- DECK BUILDER ---------------- */
let decks=JSON.parse(localStorage.getItem("stealAreaDecks")||"[]");
let currentDeckId=null;
let currentDeck=null;

function persistDecks(){
  localStorage.setItem("stealAreaDecks",JSON.stringify(decks));
  if(currentDeckId) localStorage.setItem("stealAreaActiveDeckId",currentDeckId);
}
function reloadDecksFromStorage(){
  try{
    const stored=JSON.parse(localStorage.getItem("stealAreaDecks")||"[]");
    if(Array.isArray(stored)) decks=stored;
  }catch(e){}
}

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
  if(currentDeckId) localStorage.setItem("stealAreaActiveDeckId",currentDeckId);
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
    const activeId=localStorage.getItem("stealAreaActiveDeckId");
    currentDeck=decks.find(d=>d.id===activeId)||decks[0];
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
    const active=d.id===currentDeckId?" active":"";
    const coverHTML=cover?.image
      ? `<img class="library-cover-real-image" src="${escapeHtml(cover.image)}" alt="${escapeHtml(cover.name)}">`
      : `<span>${escapeHtml(cover?.symbol||"SA")}</span>`;
    return `<div class="deck-library-card${active}" data-deck="${d.id}">
      <div class="library-cover ${coverClass}">${coverHTML}</div>
      <div class="library-info">
        <h4>${escapeHtml(d.name||"New Deck")}</h4>
        <div><span>${getMainDeckCount(d)} MAIN DECK</span><span>${d.leader?"LEADER ✓":"NO LEADER"}</span><span>${d.zone?"ZONE ✓":"NO ZONE"}</span></div>
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


function getMainDeckCount(deck=currentDeck){
  if(!deck) return 0;
  return Object.values(deck.main||{}).reduce((sum,n)=>sum+(Number(n)||0),0);
}

function getCount(){
  return getMainDeckCount(currentDeck)
    +(currentDeck.leader?1:0)
    +(currentDeck.zone?1:0)
    +((currentDeck.soulCores||[]).length);
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
  }else if(c.type==="Untimeat"){
    if(currentDeck.untimeat===c.id)return;
    if(currentDeck.untimeat)return alert("Untimeat ได้สูงสุด 1 ใบ");
    currentDeck.untimeat=c.id;
    /* Untimeat is part of MAIN DECK, but remains limited to 1 copy. */
    currentDeck.main[c.id]=1;
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
  else if(type==="Untimeat"){
    if(currentDeck.untimeat && currentDeck.main?.[currentDeck.untimeat]){
      delete currentDeck.main[currentDeck.untimeat];
    }
    currentDeck.untimeat=null;
  }
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
  document.querySelector("#deckCount").textContent=getMainDeckCount(currentDeck);
  document.querySelector("#leaderCount").textContent=(currentDeck.leader?1:0)+"/1";
  document.querySelector("#zoneCount").textContent=(currentDeck.zone?1:0)+"/1";
  document.querySelector("#untimeatCount").textContent=(currentDeck.untimeat?1:0)+"/1";
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
  const untimeat=currentDeck.untimeat?cards.find(c=>c.id===currentDeck.untimeat):null;
  document.querySelector("#untimeatSlot").innerHTML=untimeat?specialHTML(untimeat,"Untimeat"):`<div class="empty-slot">＋ ADD UNTIMEAT</div>`;

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
  if(untimeat)document.querySelector("#untimeatSlot .remove-card").onclick=()=>removeFromDeck(untimeat.id,"Untimeat");

  document.querySelectorAll("#leaderSlot .special-card,#zoneSlot .special-card,#untimeatSlot .special-card,#soulCoreBuilderSlot .special-card").forEach(el=>{
    el.onclick=e=>{
      if(e.target.closest(".remove-card"))return;
      const c=cards.find(x=>String(x.id)===String(el.dataset.cardId));
      if(c)openCard(c);
    };
  });

  const entries=Object.entries(currentDeck.main);
  document.querySelector("#deckList").innerHTML=entries.length?entries.map(([id,n])=>{
    const c=cards.find(x=>x.id===id);
    return `<div class="deck-row deck-card-clickable" data-card-id="${escapeHtml(c.id)}" title="กดเพื่อดูรายละเอียดการ์ด">
      <div class="mini-art ${rarityClass(c.rarity)}">${cardImageHTML(c,"mini-real-image")}${c.image?"":c.symbol}</div>
      <div class="row-name"><b>${escapeHtml(c.name)}</b><small>${escapeHtml(c.type)} · ${escapeHtml(c.rarity)}</small></div>
      <div class="qty">${
        c.type==="Untimeat"
          ? `<button onclick="removeFromDeck('${c.id}','Untimeat')">−</button><b>1</b><button disabled>＋</button>`
          : `<button onclick="removeFromDeck('${c.id}','Main')">−</button><b>${n}</b><button onclick="addToDeck('${c.id}')">＋</button>`
      }</div>
    </div>`;
  }).join(""):`<div class="empty-main">ยังไม่มีการ์ดใน Main Deck</div>`;

  document.querySelectorAll("#deckList .deck-card-clickable").forEach(row=>{
    row.onclick=e=>{
      if(e.target.closest(".qty"))return;
      const c=cards.find(x=>String(x.id)===String(row.dataset.cardId));
      if(c)openCard(c);
    };
  });

  renderPicker();
  updateCover();
  renderDeckLibrary();
}

function specialHTML(c,label){
  return `<div class="special-card deck-card-clickable" data-card-id="${escapeHtml(c.id)}" title="กดเพื่อดูรายละเอียดการ์ด">
    <div class="special-art ${rarityClass(c.rarity)}">${cardImageHTML(c,"special-real-image")}${c.image?"":c.symbol}</div>
    <div><b>${escapeHtml(c.name)}</b><small>${escapeHtml(label)} · ${escapeHtml(c.rarity)}</small></div>
    <button class="remove-card">×</button>
  </div>`;
}

function renderPicker(){
  if(!currentDeck)return;
  const q=(document.querySelector("#deckSearch").value||"").toLowerCase();
  const t=document.querySelector("#deckTypeFilter").value;
  const s=(document.querySelector("#deckSetFilter")?.value||"All");
  const r=(document.querySelector("#deckRarityFilter")?.value||"All");
  const list=cards.filter(c=>(t==="All"||c.type===t)&&(s==="All"||c.set===s)&&(r==="All"||c.rarity===r)&&[c.name,c.subtitle,c.rarity,c.type,c.set].join(" ").toLowerCase().includes(q));

  document.querySelector("#pickerList").innerHTML=list.map(c=>{
    let qty=c.type==="Leader"?(currentDeck.leader===c.id?1:0):c.type==="Zone"?(currentDeck.zone===c.id?1:0):c.type==="Untimeat"?(currentDeck.untimeat===c.id?1:0):c.type==="Soul Core"?((currentDeck.soulCores||[]).filter(x=>x===c.id).length):(currentDeck.main[c.id]||0);
    let limit=c.type==="Leader"||c.type==="Zone"||c.type==="Untimeat"?1:c.type==="Soul Core"?7:c.type==="POCKET"?10:3;
    if(c.type==="Soul Core" && (currentDeck.soulCores||[]).length>=7) limit=qty;
    if(c.type==="POCKET" && getPocketCount()>=10) limit=qty;
    return `<div class="picker-row">
      <div class="picker-art ${rarityClass(c.rarity)}">${cardImageHTML(c,"picker-real-image")}${c.image?"":c.symbol}</div>
      <div class="picker-name"><b>${c.name}</b><small>${c.type} · ${c.rarity}</small></div>
      <div class="picker-qty">${qty}/${limit}</div>
      <button ${qty>=limit?"disabled":""} onclick="addToDeck('${c.id}')">＋</button>
    </div>`;
  }).join("");
}

function getDeckCoverCards(deck=currentDeck){
  if(!deck) return [];
  const ids=[];
  if(deck.leader) ids.push(deck.leader);
  if(deck.zone) ids.push(deck.zone);
  if(deck.untimeat) ids.push(deck.untimeat);
  (deck.soulCores||[]).forEach(id=>ids.push(id));
  Object.keys(deck.main||{}).forEach(id=>ids.push(id));
  return [...new Set(ids)]
    .map(id=>cards.find(c=>c.id===id))
    .filter(Boolean);
}

function updateCover(){
  const c=cards.find(x=>x.id===currentDeck?.cover);
  const cover=document.querySelector("#deckCover");
  const symbol=document.querySelector("#coverSymbol");
  if(c){
    cover.className=`deck-cover ${rarityClass(c.rarity)}`;
    if(c.image){
      cover.innerHTML=`<img class="deck-cover-real-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}"><span id="coverSymbol" class="cover-symbol-overlay">${escapeHtml(c.symbol||"")}</span>`;
    }else{
      cover.innerHTML=`<span id="coverSymbol">${escapeHtml(c.symbol||"SA")}</span>`;
    }
  }else{
    cover.className="deck-cover rarity-common";
    cover.innerHTML=`<span id="coverSymbol">SA</span>`;
  }
}

function openCoverPicker(){
  const list=getDeckCoverCards(currentDeck);
  const grid=document.querySelector("#coverGrid");
  grid.innerHTML=list.length ? list.map(c=>
    `<button class="cover-option ${rarityClass(c.rarity)}" onclick="chooseCover('${c.id}')">
      ${c.image
        ? `<img class="cover-option-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">`
        : `<span>${escapeHtml(c.symbol||"SA")}</span>`}
      <b>${escapeHtml(c.name)}</b><small>${escapeHtml(c.type)} · ${escapeHtml(c.rarity)}</small>
    </button>`
  ).join("") : `<div class="cover-empty">ยังไม่มีการ์ดในเด็คสำหรับใช้เป็นหน้าปก</div>`;
  document.querySelector("#coverModal").classList.remove("hidden");
}

function chooseCover(id){
  const allowed=getDeckCoverCards(currentDeck).some(c=>c.id===id);
  if(!allowed)return;
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
  const mainCount=getMainDeckCount(currentDeck);
  if(mainCount>50){
    alert("ไม่สามารถบันทึก Deck ได้ MAIN DECK มี "+mainCount+" ใบ สูงสุด 50 ใบ Pocket และ Untimeat นับรวมใน 50 ใบนี้");
    return false;
  }
  const pocketCount=getPocketCount();
  const soulCoreCount=(currentDeck.soulCores||[]).length;
  if(soulCoreCount!==7){
    alert(`ไม่สามารถบันทึก Deck ได้ SOUL CORE ต้องมีทั้งหมด 7 ใบ ตอนนี้มี ${soulCoreCount} ใบ`);
    return false;
  }
  if(pocketCount!==10){
    alert(`ไม่สามารถบันทึก Deck ได้ POCKET ต้องมีทั้งหมด 10 ใบ ตอนนี้มี ${pocketCount} ใบ`);
    return false;
  }
  if(!currentDeck.leader){
    alert("ไม่สามารถบันทึก Deck ได้ ต้องมี Leader 1 ใบ");
    return false;
  }
  if(!currentDeck.zone){
    alert("ไม่สามารถบันทึก Deck ได้ ต้องมี Zone 1 ใบ");
    return false;
  }
  if(!currentDeck.untimeat){
    alert("ไม่สามารถบันทึก Deck ได้ ต้องมี Untimeat 1 ใบ");
    return false;
  }
  if((currentDeck.main?.[currentDeck.untimeat]||0)!==1){
    alert("ไม่สามารถบันทึก Deck ได้ Untimeat ต้องอยู่ใน MAIN DECK จำนวน 1 ใบ");
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
  localStorage.setItem("stealAreaActiveDeckId",currentDeck.id);
  renderDeckLibrary();
  if(typeof buildTestDeck==="function" && document.querySelector("#testDeckSelect")){
    refreshTestDeckSelect();
    document.querySelector("#testDeckSelect").value=currentDeck.id;
    buildTestDeck();
  }
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
function resetDeckFilters(){
  const search=document.querySelector("#deckSearch");
  const type=document.querySelector("#deckTypeFilter");
  const set=document.querySelector("#deckSetFilter");
  const rarity=document.querySelector("#deckRarityFilter");
  if(search)search.value="";
  if(type)type.value="All";
  if(set)set.value="All";
  if(rarity)rarity.value="All";
}
document.querySelector("#deckSearch")?.addEventListener("input",renderPicker);
document.querySelector("#deckTypeFilter")?.addEventListener("change",renderPicker);
document.querySelector("#deckSetFilter")?.addEventListener("change",renderPicker);
document.querySelector("#deckRarityFilter")?.addEventListener("change",renderPicker);
document.querySelector("#deckName").oninput=e=>{
  if(currentDeck){
    currentDeck.name=e.target.value;
    persistDecks();
    renderDeckLibrary();
  }
};

resetRosterFilters();
render();
initDeck();
resetDeckFilters();
renderPicker();


/* ---------------- DRAW TEST / PLAYMAT ---------------- */
let testDeck=null;
let testStack=[];
let testHand=[];
let testTomb=[];
let testTurn=0;
let testBoard={freeCards:[]};

function refreshTestDeckSelect(){
  reloadDecksFromStorage();
  const sel=document.querySelector("#testDeckSelect");
  if(!sel)return;
  const activeId=localStorage.getItem("stealAreaActiveDeckId");
  const wantedId=testDeck?.id||activeId;
  sel.innerHTML=decks.length
    ? decks.map(d=>`<option value="${d.id}">${escapeHtml(d.name||"New Deck")}</option>`).join("")
    : `<option value="">No Deck</option>`;
  if(wantedId && decks.some(d=>d.id===wantedId)) sel.value=wantedId;
  else if(decks.length) sel.value=decks[0].id;
}

function buildTestDeck(){
  reloadDecksFromStorage();
  const sel=document.querySelector("#testDeckSelect");
  const id=sel?.value||localStorage.getItem("stealAreaActiveDeckId");
  testDeck=decks.find(d=>d.id===id)||decks[0]||null;
  if(!testDeck){
    testStack=[];testHand=[];testTomb=[];testTurn=0;testBoard={freeCards:[]};
    renderTest(); return;
  }
  localStorage.setItem("stealAreaActiveDeckId",testDeck.id);
  testStack=[];
  Object.entries(testDeck.main||{}).forEach(([cardId,count])=>{
    const n=Math.max(0,Number(count)||0);
    for(let i=0;i<n;i++) testStack.push(cardId);
  });
  if(testDeck.untimeat){
    const uid=String(testDeck.untimeat);
    if(!Object.prototype.hasOwnProperty.call(testDeck.main||{},uid)) testStack.push(uid);
  }
  testStack=testStack.slice(0,50);
  testStack.sort(()=>Math.random()-.5);
  testHand=[];testTomb=[];testTurn=0;testBoard={freeCards:[]};
  renderTest();
}

function drawCards(n){
  for(let i=0;i<n && testStack.length;i++)testHand.push(testStack.pop());
  testTurn++;
  renderTest();
}

function resetTest(){buildTestDeck()}

function sendToTomb(id,fromHand=true){
  if(fromHand){
    const i=testHand.indexOf(id);
    if(i>=0)testHand.splice(i,1);
  }
  testTomb.push(id);
  renderTest();
}

function addBoardCard(id,x=.45,y=.45){
  testBoard.freeCards.push({
    uid:"B"+Date.now()+Math.random().toString(36).slice(2,7),
    id:String(id),
    x:Math.max(.02,Math.min(.92,x)),
    y:Math.max(.02,Math.min(.70,y))
  });
}

function renderTest(){
  refreshTestDeckSelect();
  const nameEl=document.querySelector("#testDeckName");
  const handEl=document.querySelector("#testHand");
  const boardEl=document.querySelector("#testBoardCards");
  if(!testDeck){
    if(nameEl)nameEl.textContent="-";
    if(handEl)handEl.innerHTML=`<div class="hand-empty">ยังไม่มี Deck สำหรับทดลองเล่น</div>`;
    if(boardEl)boardEl.innerHTML="";
    return;
  }
  const setText=(selector,value)=>{
    const el=document.querySelector(selector); if(el)el.textContent=value;
  };
  setText("#testDeckName",testDeck.name);
  setText("#testCardsLeft",testStack.length);
  setText("#testHandCount",testHand.length);
  setText("#testTurn",testTurn);
  setText("#testBoardCount",testBoard.freeCards.length);
  setText("#pileCount",testStack.length);
  setText("#tombCount",testTomb.length);

  if(handEl){
    handEl.innerHTML=testHand.length
      ? testHand.map((id,index)=>testCardHTML(id,true,index,"hand")).join("")
      : `<div class="hand-empty">กด DRAW 5 เพื่อเริ่ม · ลากการ์ดจากมือลงสนามได้</div>`;
    handEl.querySelectorAll(".test-card").forEach(el=>{
      el.draggable=true;
      el.ondragstart=e=>{
        e.dataTransfer.setData("text/plain",JSON.stringify({source:"hand",index:Number(el.dataset.index)}));
      };
      el.onclick=()=>showDrawnCard(el.dataset.id);
      el.ondblclick=()=>sendToTomb(el.dataset.id,true);
    });
  }

  if(boardEl){
    boardEl.innerHTML=testBoard.freeCards.map((item,index)=>testCardHTML(item.id,true,index,"board")).join("");
    boardEl.querySelectorAll(".test-card").forEach(el=>{
      const idx=Number(el.dataset.index);
      const item=testBoard.freeCards[idx];
      if(!item)return;
      el.style.left=(item.x*100)+"%";
      el.style.top=(item.y*100)+"%";
      el.draggable=true;
      el.ondragstart=e=>{
        e.dataTransfer.setData("text/plain",JSON.stringify({source:"board",index:idx}));
      };
      el.onclick=()=>showDrawnCard(el.dataset.id);
      el.ondblclick=()=>{
        testHand.push(item.id);
        testBoard.freeCards.splice(idx,1);
        renderTest();
      };
    });
  }
}

function testCardHTML(id,clickable=false,index=0,source="hand"){
  if(!id)return "";
  const c=cards.find(x=>String(x.id)===String(id));
  const cls=`test-card ${c?rarityClass(c.rarity):"rarity-common"} ${clickable?"clickable":""}`;
  if(!c){
    return `<div class="${cls}" data-id="${escapeHtml(id)}" data-index="${index}" data-source="${source}">
      <span>?</span><b>${escapeHtml(id)}</b><small>CARD</small>
    </div>`;
  }
  return `<div class="${cls}" data-id="${escapeHtml(c.id)}" data-index="${index}" data-source="${source}">
    ${c.image ? `<img class="test-real-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">` : `<span>${escapeHtml(c.symbol||"")}</span><b>${escapeHtml(c.name)}</b><small>${escapeHtml(c.rarity)}</small>`}
  </div>`;
}

function initDrawTest(){
  reloadDecksFromStorage();
  refreshTestDeckSelect();
  buildTestDeck();
}
function formatAbility(text) {
  if (!text) return "";

  const icons = {
    counter: "public/images/icon/counter.png",
  E: "public/images/icon/E.png",
  };

  let html = escapeHtml(text);

  Object.entries(icons).forEach(([name, src]) => {
    html = html.replaceAll(
      `{${name}}`,
      `<img class="ability-icon ability-icon-${name}" src="${src}" alt="${name}">`,
    );
  });

  return html.replace(/\n/g, "<br>");
}
document.querySelector("#testDeckSelect").onchange=buildTestDeck;
document.querySelector("#drawFiveBtn").onclick=()=>drawCards(5);
document.querySelector("#drawOneBtn").onclick=()=>drawCards(1);
document.querySelector("#resetTestBtn").onclick=resetTest;
document.querySelector("#testDeckPile").onclick=()=>drawCards(1);
document.querySelector("#drawPileBtn").onclick=()=>drawCards(1);

const playBoard=document.querySelector("#playBoard");
const testHandEl=document.querySelector("#testHand");

function boardDropHandler(e){
  e.preventDefault();
  if(!playBoard)return;
  const raw=e.dataTransfer.getData("text/plain");
  if(!raw)return;
  let data; try{data=JSON.parse(raw)}catch(_){return;}
  const rect=playBoard.getBoundingClientRect();
  const x=(e.clientX-rect.left)/rect.width;
  const y=(e.clientY-rect.top)/rect.height;
  if(data.source==="hand"){
    const id=testHand[data.index];
    if(!id)return;
    testHand.splice(data.index,1);
    addBoardCard(id,x-.07,y-.13);
  }else if(data.source==="board"){
    const item=testBoard.freeCards[data.index];
    if(!item)return;
    item.x=Math.max(.02,Math.min(.90,x-.07));
    item.y=Math.max(.02,Math.min(.68,y-.12));
  }
  renderTest();
}
playBoard?.addEventListener("dragover",e=>e.preventDefault());
playBoard?.addEventListener("drop",boardDropHandler);

testHandEl?.addEventListener("dragover",e=>e.preventDefault());
testHandEl?.addEventListener("drop",e=>{
  e.preventDefault();
  const raw=e.dataTransfer.getData("text/plain");
  if(!raw)return;
  let data;try{data=JSON.parse(raw)}catch(_){return;}
  if(data.source!=="board")return;
  const item=testBoard.freeCards[data.index];
  if(!item)return;
  testHand.push(item.id);
  testBoard.freeCards.splice(data.index,1);
  renderTest();
});

document.querySelector("#testTombPile")?.addEventListener("click",()=>{
  if(!testBoard.freeCards.length)return;
  testTomb.push(testBoard.freeCards.pop().id);
  renderTest();
});

initDrawTest();


