const cards=[
{id:"SA-001",name:"Varethorn",subtitle:"The Shadow Thief",type:"Character",rarity:"Legendary",element:"Void",cost:"6",ability:"เมื่อเข้าสู่สนาม สามารถเลือกการ์ด 1 ใบจากมือฝ่ายตรงข้ามและทำให้การ์ดนั้นถูกล็อกชั่วคราว",symbol:"V"},
{id:"SA-002",name:"Draconic Fury",subtitle:"Wrath of the Dragon",type:"Action",rarity:"Epic",element:"Inferno",cost:"3",ability:"เพิ่มพลังโจมตีให้ตัวละครของคุณ และสร้างแรงกดดันต่อคู่ต่อสู้ในเทิร์นนี้",symbol:"D"},
{id:"SA-003",name:"Soulvault",subtitle:"The Endless Archive",type:"Skill",rarity:"Rare",element:"Soul",cost:"2",ability:"เก็บการ์ด 1 ใบจากสุสานของคุณกลับมาไว้ในมือ",symbol:"S"},
{id:"SA-004",name:"Azrakar",subtitle:"Keeper of the Red Core",type:"Character",rarity:"Legendary",element:"Red Core",cost:"7",ability:"เมื่อพลังชีวิตของคุณลดลงต่ำกว่าครึ่ง ความสามารถของ Azrakar จะทำงานทันที",symbol:"A"},
{id:"SA-005",name:"Death Error",subtitle:"System Failure",type:"Skill",rarity:"Rare",element:"Void",cost:"4",ability:"ยกเลิกความสามารถที่กำลังทำงานของการ์ดเป้าหมาย 1 ใบ",symbol:"E"},
{id:"SA-006",name:"Scarlet Night",subtitle:"Blood Moon Protocol",type:"Action",rarity:"Epic",element:"Crimson",cost:"4",ability:"เปลี่ยนสนามให้เข้าสู่สถานะ Scarlet Night และเพิ่มผลของการ์ดธาตุ Crimson",symbol:"N"},
{id:"SA-007",name:"Core Shield",subtitle:"Relic Barrier",type:"Skill",rarity:"Common",element:"Relic",cost:"1",ability:"ป้องกันความเสียหายที่กำลังจะเกิดขึ้น 1 ครั้ง",symbol:"C"},
{id:"SA-008",name:"Forbidden Relic",subtitle:"Artifact of the Lost",type:"Item",rarity:"Common",element:"Relic",cost:"2",ability:"ค้นหาการ์ด Relic จาก Deck แล้วนำขึ้นมือ 1 ใบ",symbol:"R"}
];

const grid=document.querySelector("#grid"),search=document.querySelector("#search"),typeFilter=document.querySelector("#typeFilter"),rarityFilter=document.querySelector("#rarityFilter");
document.querySelector("#totalCount").textContent=String(cards.length).padStart(2,"0");

function render(){
 const q=search.value.toLowerCase().trim(), type=typeFilter.value, rarity=rarityFilter.value;
 const list=cards.filter(c=>(type==="All"||c.type===type)&&(rarity==="All"||c.rarity===rarity)&&[c.name,c.subtitle,c.type,c.element,c.ability].join(" ").toLowerCase().includes(q));
 grid.innerHTML=list.map(c=>`<article class="card" data-id="${c.id}">
   <div class="card-art"><div class="card-symbol">${c.symbol}</div></div>
   <div class="card-info"><div class="tag-row"><span class="tag">${c.type}</span><span class="tag rarity">${c.rarity}</span></div>
   <h3>${c.name}</h3><p>${c.subtitle}</p></div></article>`).join("");
 document.querySelector("#empty").classList.toggle("hidden",list.length!==0);
 document.querySelectorAll(".card").forEach(el=>el.onclick=()=>openCard(cards.find(c=>c.id===el.dataset.id)));
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
});
render();
