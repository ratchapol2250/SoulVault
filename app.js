const cards=[
{id:"SA-001",set:"BT01",name:"Varethorn",subtitle:"The Shadow Thief",type:"Character",rarity:"Legendary",element:"Void",cost:"6",ability:"เมื่อเข้าสู่สนาม สามารถเลือกการ์ด 1 ใบจากมือฝ่ายตรงข้ามและทำให้การ์ดนั้นถูกล็อกชั่วคราว",symbol:"V"},
{id:"SA-002",set:"BT01",name:"Draconic Fury",subtitle:"Wrath of the Dragon",type:"Action",rarity:"Epic",element:"Inferno",cost:"3",ability:"เพิ่มพลังโจมตีให้ตัวละครของคุณ และสร้างแรงกดดันต่อคู่ต่อสู้ในเทิร์นนี้",symbol:"D"},
{id:"SA-003",set:"BT01",name:"Soulvault",subtitle:"The Endless Archive",type:"Skill",rarity:"Rare",element:"Soul",cost:"2",ability:"เก็บการ์ด 1 ใบจากสุสานของคุณกลับมาไว้ในมือ",symbol:"S"},
{id:"SA-004",set:"BT01",name:"Azrakar",subtitle:"Keeper of the Red Core",type:"Character",rarity:"Legendary",element:"Red Core",cost:"7",ability:"เมื่อพลังชีวิตของคุณลดลงต่ำกว่าครึ่ง ความสามารถของ Azrakar จะทำงานทันที",symbol:"A"},
{id:"SA-006",set:"BT01",name:"Scarlet Night",subtitle:"Blood Moon Protocol",type:"Action",rarity:"Epic",element:"Crimson",cost:"4",ability:"เปลี่ยนสนามให้เข้าสู่สถานะ Scarlet Night และเพิ่มผลของการ์ดธาตุ Crimson",symbol:"N"},
{id:"SA-007",set:"BT02",name:"Core Shield",subtitle:"Relic Barrier",type:"Skill",rarity:"Common",element:"Relic",cost:"1",ability:"ป้องกันความเสียหายที่กำลังจะเกิดขึ้น 1 ครั้ง",symbol:"C"},
{id:"SA-008",set:"BT02",name:"Forbidden Relic",subtitle:"Artifact of the Lost",type:"Item",rarity:"Common",element:"Relic",cost:"2",ability:"ค้นหาการ์ด Relic จาก Deck แล้วนำขึ้นมือ 1 ใบ",symbol:"R"},
{id:"SA-017",name:"Untimeat",subtitle:"The Unbroken Oath",type:"Untimeat",rarity:"Legendary",element:"Void",cost:"0",ability:"Untimeat — การ์ดประจำเด็คที่ต้องมี 1 ใบ",symbol:"U",set:"BT03"},
{id:"SA-009",set:"BT02",name:"Eclipse King",subtitle:"Master of the Black Sun",type:"Master",rarity:"Legendary",element:"Eclipse",cost:"8",ability:"Master — กำหนดกฎพิเศษของ Deck และเพิ่มพลังให้การ์ด Eclipse",symbol:"K"},
{id:"SA-010",set:"BT02",name:"Land of Eternal Love",subtitle:"Forbidden Zone",type:"Zone",rarity:"Epic",element:"Mystic",cost:"0",ability:"Zone — สนามนี้เปลี่ยนผลของการ์ด Skill และ Character บางประเภท",abilityFront:"Zone — สนามนี้เปลี่ยนผลของการ์ด Skill และ Character บางประเภท",abilityBack:"เมื่อเปิดใช้งานด้านหลัง: การ์ด Skill และ Character ที่ตรงเงื่อนไขจะได้รับผลของ Zone ตามข้อความด้านหลัง",symbol:"Z"},
{id:"SA-011",set:"BT02",name:"Neon Succubus",subtitle:"Temptation Protocol",type:"Character",rarity:"Epic",element:"Neon",cost:"5",ability:"เมื่อการ์ดนี้ทำงาน ให้เลือกการ์ดฝ่ายตรงข้าม 1 ใบและลดประสิทธิภาพของมัน",symbol:"N"},
{id:"SA-012",set:"BT03",name:"Relic Core",subtitle:"Ancient Power",type:"Item",rarity:"Rare",element:"Relic",cost:"2",ability:"ติดตั้งให้ Character 1 ใบเพื่อเพิ่มผลของความสามารถ",symbol:"C"},
{id:"SA-013",set:"BT03",name:"Soul Core Alpha",subtitle:"Origin of the Soul",type:"Soul Core",rarity:"Legendary",element:"Soul",cost:"0",ability:"Soul Core — แกนพลังประจำ Deck ใช้สำหรับกำหนดพลังเริ่มต้นของผู้เล่น",symbol:"SC"},
{id:"SA-014",set:"BT03",name:"Soul Core Eclipse",subtitle:"Black Soul Reactor",type:"Soul Core",rarity:"Epic",element:"Eclipse",cost:"0",ability:"Soul Core — เพิ่มผลของการ์ด Eclipse เมื่อถูกวางในสนาม",symbol:"SC"},
{id:"SA-015",set:"BT03",name:"Pocket Relic",subtitle:"Stored Artifact",type:"POCKET",rarity:"Art Rare",element:"Relic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ในพื้นที่ Pocket และเรียกใช้ในจังหวะที่กำหนด",symbol:"P"},
{id:"SA-016",set:"BT03",name:"Pocket Trick",subtitle:"Hidden Move",type:"POCKET",rarity:"Secret Rare",element:"Mystic",cost:"1",ability:"Pocket — เก็บการ์ดไว้ใน Pocket เพื่อเตรียมใช้เป็นการกระทำพิเศษ",symbol:"P"},

{id:"HD-001",set:"HD",name:"Aegiron The Starforged",subtitle:"ข้าจะไม่หยุด…จนกว่าความมืดจะพังทลาย",type:"Character",rarity:"Common",element:"นักรบเกราะเหล็ก",cost:"5",ability:"-",artist:"Krianza the Decline",power:"700",steal:"1",symbol:"A",image:"/public/images/cards/Aegiron The Starforged.jpg"},
{id:"HD-002",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg",set:"HD",name:"เกลสาวโหด ณ 3 แยก",subtitle:"ยิ่งดิ้นรน ก็ยิ่งจมลึกลงไป",type:"Character",rarity:"Common",element:"Crimson",cost:"4",ability:"{Dot}เมื่อการ์ดใบนี้เข้าสู่สนาม คู่แข่งสมารถจ่าย 1 {Pocket} ถ้าไม่จ่าย ทำการ Kill Criminal ที่มีคอส 3 หรือต่ำกว่า 1 ใบของคู่แข่ง",power:"500",steal:"1",artist:"ตีนแมว",symbol:"G",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg"},
{id:"HD-003",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg",set:"HD",name:"จอมโจรร้อยหน้า ลูแพร์",subtitle:"ข้าจะแฝงตัวไปกับสิ่งที่เจ้ารักและเอามันไปจากเจ้า",type:"Character",rarity:"Common",element:"จอมโจร",cost:"3",ability:"{Activat}{PerTurn} ใช้ความสามารถนี้ได้ถ้าคุณเคยใช้งานความสามารถของ Masterไปแล้วในเทิร์นนี้ เลือก Character 1 ใบได้รับพลัง+100 จนจบเทิร์น และ คุณจั่ว 1 ใบ \n(เป็นความสามารถสั่งใช้งานและใช้ได้เพียง 1 ครั้งใน 1 เทิร์น)",symbol:"L",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg"},
{id:"HD-004",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg",set:"HD",name:"ไนธีเรีย ผู้เฝ้าประตูนรก",subtitle:"จงอย่ากลัวความตาย เพราะมันกำลังรอเจ้าอยู่",type:"Character",rarity:"Common",element:"ยมฑูต",cost:"2",ability:"{Block}\n{Dot} เมื่อการ์ดใบนี้ออกจากสนาม {Peek} 3 ใบ ล่างสุดจากกองเลือก Character 1 ใบจากที่เปิดดู นำขึ้นมือที่เหลือนำกลับเข้ากองแล้วสลับ\n(สามารถเปลี่ยนสภาพการ์ดนี้จาก Ok เป็น Don’t ได้ เพื่อเปลี่ยนเป้าหมายการโจมตีมาที่การ์ดใบนี้แทน)",symbol:"N",power:"300",steal:"1",artist:"Haruki",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg"},
{id:"HD-005",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg",set:"HD",name:"เพอร่า ยามค่ำคืน",subtitle:"หลับตาลงเถิด…แล้วปล่อยให้ฝันร้ายเริ่มต้น",artist:"Hika mori",type:"Character",rarity:"Common",element:"ผู้หญิง",cost:"2",steal:"1",power:"400",ability:"{Enter} เมื่อเข้าสู่สนาม จั่วการ์ด 1 ใบ ",symbol:"P",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg"},
{id:"HD-006",image:"/public/images/cards/Cerberus Blade.jpg",set:"HD",name:"Cerberus Blade",subtitle:"Cerberus Blade",type:"Gear",rarity:"Common",element:"ดาบ",cost:"2",ability:"การ์ดใบนี้สามารถสวมใส่ได้แค่ Character เท่านั้น\n{Dot} เมื่อ Character  ที่สวมใส่การ์ดใบนี้โจมตีหรือขโมย การ์ดนั้นได้รับพลัง +200 จนจบเทิร์น",artist:"อาราย อีกว้าา",symbol:"C",image:"/public/images/cards/Cerberus Blade.jpg"},
{id:"HD-007",image:"/public/images/cards/Death Error.jpg",set:"HD",name:"Death Error",subtitle:"ความตายไม่ควรเกิดขึ้น… แต่เจ้า คือข้อผิดพลาดของมัน",type:"Action",rarity:"Common",element:"ข้อผิดพลาด",cost:"4",artist:"ปวดขี้ ทำอย่างไรดี",ability:"ใช้การ์ดใบนี้ก็ต่อเมื่อ Master คู่แข่งทำการโจมตี\n{Counter} เลือก Character คู่แข่ง 1 ใบ ย้ายการโจมตีไปที่การ์ดใบนั้น",symbol:"E",image:"/public/images/cards/Death Error.jpg"},
{id:"HD-008",image:"/public/images/cards/Heaven's Embrace.jpg",set:"HD",name:"Heaven's Embrace",subtitle:"เมื่อดวงดาวเปล่งประกาย ปาฏิหาริย์จะบังเกิด",type:"Action",rarity:"Common",element:"พร",cost:"1",artist:"Karen'n",ability:"{Dot} นำการ์ด Character 1 ใบจาก Tomb ขึ้นมือจากนั้น นำการ์ด        {Pocket} 1 ใบบนสนามลง Tomb",symbol:"H",image:"/public/images/cards/Heaven's Embrace.jpg"},
{id:"HD-009",image:"/public/images/cards/You Die!.jpg",set:"HD",name:"You Die!",subtitle:"ตายกี่รอบก็ได้ ดีใช่มั้ยละ",type:"Action",rarity:"Common",element:"เงา",cost:"2",ability:"ใช้การ์ดใบนี้ก็ต่อเมื่อ Character ของเราโดน kill\n{Counter} เลือก Character คู่แข่ง 1 ใบ kill การ์ดใบนั้น คุณจั่วการ์ด 1 ใบ",artist:"harukix",symbol:"Y",image:"/public/images/cards/You Die!.jpg"},
{id:"HD-010",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg",set:"HD",name:"คำเชิญชวนแห่งภูติ",subtitle:"อย่ากลัวเลย… แค่หลับตา แล้วตามเสียงเรียกของข้ามา",type:"Action",rarity:"Common",element:"ภูติ",cost:"1",artist:"Punch",ability:"{Peek} 5 ใบ เลือก Character  หรือ Gear ไม่เกิน 1 ใบ นำขึ้นมือ และ นำที่เหลือกลับเข้ากองการ์ดแล้วสลับ",symbol:"F",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg"},
{id:"HD-011",image:"/public/images/cards/It’s Show Time!!.jpg",set:"HD",name:"It’s Show Time!!",subtitle:"ได้เวลาปิดม่านแล้ว",type:"Untimeat",rarity:"Common",element:"ปิดฉาก",cost:"5",artist:"Adamas",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone หอนาฬิกาเที่ยงคืนเคยทำงานแล้ว และ คุณขโมย Soul Core มาแล้ว 2 ชิ้น  ฝั่งตรงข้ามมี Character 1 ใบหรือมากกว่า\nจ่าย {E} 2\nเลือก Character บนสนามเรา 1 ใบ เมื่อจบการต่อสู้ของการ์ดที่เลือก สามารถนำการ์ดใบนั้นลง Tomb ได้ ถ้าทำ นำ Character  ใน Tomb ของคู่แข่ง 2 ใบเข้ามาในสนามคุณได้",symbol:"T",image:"/public/images/cards/It’s Show Time!!.jpg"},
{id:"HD-012",image:"/public/images/cards/Soul Guard.jpg",set:"HD",name:"Soul Guard",subtitle:"ข้าจะใช้วิญญาณของข้า เป็นเกราะเพื่อเจ้า",type:"Action",rarity:"Common",element:"วิญญาณ",cost:"1",ability:"ใช้ได้ต่อเมื่อคู่แข่งสั่งโจมตี \n {Counter} จ่าย 1  {E} ทำให้การโจมตีนั้นไร้ผล",artist:"IMO",symbol:"C",image:"/public/images/cards/Soul Guard.jpg"},
{id:"HD-013",image:"/public/images/cards/Fortune Orb.jpg",set:"HD",name:"Fortune Orb",subtitle:"ข้าจะใช้วิญญาณของข้า เป็นเกราะเพื่อเจ้า",type:"Action",rarity:"Common",element:"วิญญาณ",cost:"1",ability:"{Dot} จั่วการ์ดจากกองการ์ด 2 ใบ ",artist:"kanyarat  luengtrakulrung",symbol:"C",image:"/public/images/cards/Fortune Orb.jpg"},
{id:"HD-014",set:"HD",name:"Arsen, Lupaire",subtitle:"จอมโจรคือ ศิลปินผู้รังสรรค์การขโมยสิ่งที่ต้องการอย่างวิจิตรงดงาม!",type:"Master",rarity:"Legendary",element:"จอมโจร,คน ",cost:"M",abilityLeft:"{Activat}{PerTurn} ทิ้งการ์ดจากบนมือ 1  ใบ {Peek} Deck คู่แข่ง และสามารถใช้ skill หรือ Gear ที่มีคอส 2 หรือต่ำกว่าได้โดยไม่ต้องจ่ายค่าคอสและไม่สนเงื่อนไข ",abilityRight:"{ZoneOpen1}\nหลังใช้ความสามารถของการ์ดใบนี้สามารถจั่วการ์ดได้ 1 ใบ",symbol:"K",steal:"1",power:"500",image:"/public/images/cards/Arsene LUPIN.jpg"},
{id:"HD-015",set:"HD",name:"Pirate's Destination!",subtitle:"ในจุดที่คนอื่นเห็นจุดจบ โจรสลัดกลับเห็นจุดเริ่มต้น",type:"Untimeat",rarity:"Legendary",element:"สถานที่",cost:"5",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone เรือโจรสลัดเคยทำงานแล้ว และคุณขโมย Soul Core มาแล้ว 2 ชิ้นคุณมี Character 1 ใบหรือมากกว่า\nจ่าย {E} 2\nเลือก Character จากใน Tomb 1 ใบ นำเข้ามาในสนามได้และการ์ดใบน้ันได้รับ“เมื่อการ์ดใบนี้โจมตีหรือโมย จะสามารถเลือกได้ 2 เป้าหมายพร้อมกัน และคู่แข่วจะต้องป้องกันแยกกันเท่านั้น”จนจบเทิร์น",artist:"Chotiwat Nilthanee",symbol:"K",image:"/public/images/cards/Pirate's Destination!.jpg"},
{id:"HD-016",set:"HD",name:"Wounded Heart",subtitle:"ทำอะไรไว้ก็ต้องรับผิดชอบสิ่งที่ทำด้วยละ",type:"Untimeat",rarity:"Legendary",element:"จิตใจ",cost:"5",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone วิมานแห่งรักเคยทำงานแล้ว และ คุณขโมย Soul Core มาแล้ว 2 ชิ้น  คุณไม่มี Character อยู่บนสนาม\nจ่าย {E} 2\nทำการนำ Character ทุกใบในสนามคู่แข่งมาอยู่ใต้ Zone วิมานแห่งรักและนำ Character 1 ใบ จากบนมือ ที่มีคอสไม่เกิน 2 ลงมาบนสนามได้",artist:"Teerawee",symbol:"K",image:"/public/images/cards/Wounded Heart.jpg"},
{id:"HD-017",set:"HD",name:"Skull, Pirate Captain",subtitle:"ทะเลไม่เคยปราณีและข้าก็เช่นกัน",type:"Master",rarity:"Legendary",element:"โจรสลัด,กัปตัน",cost:"M",abilityLeft:"{Activat}{PerTurn} จ่าย 1 {Pocket} สามารถนำ  Character คอสไม่เกิน 2 ลงมาบนสนามได้ 1 ใบ",abilityRight:"{ZoneOpen2}\nความสามารถของการ์ดใบนี้จะเปลี่ยนเป็น “คอสไม่เกิน 3 ลงมาบนสนามได้ 1 ใบ” แทน",symbol:"K",steal:"1",power:"500",image:"/public/images/cards/Captain Pirates.jpg"},
{id:"HD-018",set:"HD",name:"Thip Lady of the Night",subtitle:"เข้ามาใกล้อีกนิดสิ...ฉันไม่กัดหรอก(ถ้าคุณไม่ขอ)",type:"Master",rarity:"Legendary",element:"ผู้หญิง",cost:"M",abilityLeft:"เมื่อเริ่มเกม {ES} 1 ใบ\n{Activat}{PerTurn} จ่าย 1 {E} นำการ์ด {Pocket} 1 ใบจาก Deck หรือ Tomb เข้ามาในสนามได้",abilityRight:"{ZoneOpen3}\nจั่วการ์ด 1 ใบ คู่แข่งสามารถจ่าย 1 {Pocket} ถ้าไม่จ่ายจะต้องทิ้งมือ 1 ใบ",symbol:"K",steal:"1",power:"500",image:"/public/images/cards/prostitute.jpg"},
{id:"HD-Z-01",set:"HD",name:"วิมานแห่งรัก",subtitle:"-",type:"Zone",rarity:"Common",element:"ในใจ",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน  เลือก Character บนสนามของคู่แข่ง 1 ใบ นำมาไว้ใต้การ์ดใบนี้(การ์ดที่อยู่ใต้การ์ดใบนี้จะถือว่าไม่อยู่ในเกมและไม่อยู่ในUnderworld)\n{PerTurn} เมื่อคู่แข่งจ่าย {Pocket} ในเทิร์นคุณ คุณจั่วการ์ด 1 ใบ",abilityBack:"{OpenZone}\nเมื่อคุณมี {Pocket} ในสนามครบ 6 ใบคุณ สามารถจ่าย 2 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backวิมานแห่งรัก.jpg",symbol:"Z",artist:"wavecolorstudio",image:"/public/images/cards/วิมานแห่งรัก.jpg"},
{id:"HD-Z-02",set:"HD",name:"หอนาฬิกาเที่ยงคืน",subtitle:"-",type:"Zone",rarity:"Common",element:"ใจกลางเมือง",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน เมื่อคุณโจมตีหรือขโมยในเทิร์นนี้คู่แข่งไม่สามารถ ใช้งานการ์ด Action ที่มีความสามารถ {Counter} ได้ และ Character ของคุณทุกใบได้รับพลัง +100 จนจบเทิร์น",abilityBack:"{OpenZone}\nเมื่อคุณใช้ความสามารถของ Master ครบ 3 ครั้ง สามารถจ่าย 3 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backหอนาฬิกา.jpg",symbol:"Z",artist:"wavecolorstudio",image:"/public/images/cards/หอนาฬิกาเที่ยงคืน.jpg"},
{id:"HD-Z-03",set:"HD",name:"เรือโจรสลัด",subtitle:"-",type:"Zone",rarity:"Common",element:"เรือ",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน  เลือก Character บนมือ 1 ใบ ที่มีคอสไม่เกิน 2 นำลงบนสนาม\n{Forever} ในเทิร์นคุณการ์ด Character ทุกใบในสนามได้รับพลัง +100",abilityBack:"{OpenZone}\nเมื่อคุณมี Soul Core ใต้การ์ด Zone ครบ 2 ใบคุณสามารถจ่าย 2 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backเรือโจรสลัด.jpg",symbol:"Z",artist:"-",image:"/public/images/cards/เรือโจรสลัด.jpg"},
{id:"HD-P01",image:"/public/images/cards/Pocket3.jpg",artist:"IMO",set:"HD",name:"pocket",subtitle:"-",type:"POCKET",rarity:"Common",element:"-",cost:"-",ability:"{Counter} ใช้ความสามารถนี้ได้จากบนมือคุณเท่านั้น จ่าย 1 {Pocket} จากนั้นเลือก Master หรือ Criminal ที่กำลังต่อสู้อยู่ได้ 1 ใบการ์ดใบนั้นได้รับพลัง +200 จนจบการต่อสู้นั้น",artist:"IMO",image:"/public/images/cards/Pocket3.jpg"},
{id:"HD-SC01",image:"/public/images/cards/Soul Core.jpg",set:"HD",name:"Soul Core 1",subtitle:"-",type:"Soul Core",rarity:"Common",element:"-",cost:"-",artist:"Pupa",ability:"เมื่อคุณได้รับการ์ดใบนี้ คู่แข่งได้ {ES} 1 ใบ",image:"/public/images/cards/Soul Core.jpg"},
];

const rarityClass=r=>`rarity-${String(r).toLowerCase().replace(/\s+/g,"-")}`;
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
 bindZonePageFlips(grid);
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
   <div class="card-art ${rarityClass(c.rarity)} ${String(c.type).toLowerCase()==="zone"?"zone-page-flippable":""}" data-zone-id="${String(c.type).toLowerCase()==="zone"?escapeHtml(c.id):""}">${cardImageHTML(c)}${c.image?"":`<div class="card-symbol">${c.symbol}</div>`}<span class="rarity-orb">${c.rarity[0]}</span></div>
   <div class="card-info"><div class="tag-row"><span class="tag">${c.type}</span><span class="tag rarity rarity-${String(c.rarity).toLowerCase().replace(/\s+/g,"-")}">${c.rarity}</span><span class="tag set-tag">${c.set||"BT01"}</span></div>
   <h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.subtitle)}</p>
   ${variantPicker}
   <button class="collection-add-btn ${inCollection?"added":""}" data-collection-id="${c.id}">
     ${inCollection?"✓ อยู่ในคอลเลกชัน":"＋ เพิ่มเข้าคอลเลกชัน"}
   </button>
   <button class="deck-add-btn" data-deck-card-id="${c.id}">＋ เพิ่มเข้าเด็ค</button>
   </div></article>`;
}
function syncZoneDetailAbility(c,side="front"){
 const abilitySingle=document.querySelector("#detailAbility");
 const abilityDual=document.querySelector("#detailAbilityDual");
 const isZone=String(c?.type||"").trim().toLowerCase()==="zone";
 if(!isZone)return;
 const text=isZone && side==="back" ? (c.abilityBack ?? "—") : (c.abilityFront ?? c.ability ?? "—");
 if(abilityDual)abilityDual.classList.add("hidden");
 if(abilitySingle){
   abilitySingle.classList.remove("hidden");
   abilitySingle.innerHTML=formatAbility(text);
 }
}
/* ---------------- CARD DETAIL NAVIGATION ---------------- */

let currentDetailIndex = -1;

function showPreviousCard(){
  if(!cards.length)return;

  if(currentDetailIndex <= 0){
    currentDetailIndex = cards.length - 1;
  }else{
    currentDetailIndex--;
  }

  openCard(cards[currentDetailIndex]);
}

function showNextCard(){
  if(!cards.length)return;

  if(currentDetailIndex >= cards.length - 1){
    currentDetailIndex = 0;
  }else{
    currentDetailIndex++;
  }

  openCard(cards[currentDetailIndex]);
}
function openCard(c){
	currentDetailIndex = cards.findIndex(x => String(x.id) === String(c.id));
 if(!c)return;
 document.querySelector("#detailType").textContent=c.type.toUpperCase();
 document.querySelector("#detailRarity").textContent=`(${c.rarity.toUpperCase()})`;
 document.querySelector("#detailName").textContent=c.name;
 document.querySelector("#detailSubtitle").textContent=c.subtitle;
 const cardType=String(c.type||"").trim().toLowerCase();
 const noPowerSteal=["action","pocket","gear","soul core","untimeat","utiment","zone"].includes(cardType);
 const noCost=["pocket","soul core"].includes(cardType);
 const isMaster=cardType==="master";
 const isZone=cardType==="zone";
 const abilitySingle=document.querySelector("#detailAbility");
 const abilityDual=document.querySelector("#detailAbilityDual");
 const abilityLeft=document.querySelector("#detailAbilityLeft");
 const abilityRight=document.querySelector("#detailAbilityRight");
 if(isZone){
   // Zone uses the same single ABILITY presentation as other cards.
   // Only the currently visible side's ability is shown.
   if(abilityDual)abilityDual.classList.add("hidden");
   if(abilitySingle){
     abilitySingle.classList.remove("hidden");
     abilitySingle.innerHTML=formatAbility(c.abilityFront ?? c.ability ?? "—");
   }
 }else if(isMaster){
   if(abilitySingle)abilitySingle.classList.add("hidden");
   if(abilityDual){
     abilityDual.classList.remove("hidden");
     abilityDual.classList.remove("zone-detail-abilities");
   }
   if(abilityLeft)abilityLeft.innerHTML=formatAbility(c.abilityLeft ?? c.ability1 ?? c.ability ?? "—");
   if(abilityRight)abilityRight.innerHTML=formatAbility(c.abilityRight ?? c.ability2 ?? "—");
   const titles=abilityDual?.querySelectorAll("h3")||[];
   if(titles[0])titles[0].textContent="ABILITY — LEFT";
   if(titles[1])titles[1].textContent="ABILITY — RIGHT";
 }else{
   if(abilityDual){
     abilityDual.classList.add("hidden");
     abilityDual.classList.remove("zone-detail-abilities");
   }
   if(abilitySingle)abilitySingle.classList.remove("hidden");
   if(abilitySingle)abilitySingle.innerHTML=formatAbility(c.ability);
 }
 document.querySelector("#detailId").textContent=c.id;
 document.querySelector("#detailElement").textContent=c.element;
 document.querySelector("#detailPower").textContent=c.power ?? "—";
 document.querySelector("#detailSteal").textContent=c.steal ?? "—";
 document.querySelector("#detailBy").textContent=c.by ?? c.artist ?? "—";
 document.querySelector("#detailLevel").textContent=c.cost ?? "—";
 const powerBox=document.querySelector("#detailPowerBox");
 const stealBox=document.querySelector("#detailStealBox");
 const costBox=document.querySelector("#detailCostBox");
 if(powerBox)powerBox.classList.toggle("hidden",noPowerSteal);
 if(stealBox)stealBox.classList.toggle("hidden",noPowerSteal);
 if(costBox)costBox.classList.toggle("hidden",noCost);
 const detailImage=document.querySelector("#detailImage");
 detailImage.className=`detail-image ${rarityClass(c.rarity)} ${isZone?"zone-page-flippable":""}`;
 detailImage.dataset.zoneId=isZone?c.id:"";
 detailImage.dataset.zoneBound="";
 detailImage.dataset.zoneFlipped="0";
 detailImage.innerHTML=c.image ? `<img class="detail-real-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">` : `<span class="detail-placeholder"></span>`;
 bindZonePageFlips(detailImage);
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
document.querySelector("#detailPrevBtn")?.addEventListener(
  "click",
  showPreviousCard
);

document.querySelector("#detailNextBtn")?.addEventListener(
  "click",
  showNextCard
);
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
document.querySelector("#menuBtn").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
document.querySelector("#clearRosterFilters")?.addEventListener("click",()=>{
  resetRosterFilters();
  render();
});
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

function normalizeSupplyType(type){
  const t=String(type||"").trim().toUpperCase();

  if(t==="PLAYMAT" || type==="เพลย์แมต"){
    return "PLAYMAT";
  }

  if(t==="SLEEVE" || type==="ซองการ์ด"){
    return "SLEEVE";
  }

  return t;
}
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
    <div class="collection-card-art ${rarityClass(c.rarity)} ${String(c.type).toLowerCase()==="zone"?"zone-page-flippable":""}" data-zone-id="${String(c.type).toLowerCase()==="zone"?escapeHtml(c.id):""}">
      ${cardImageHTML(c,"collection-real-image")}${c.image?"":`<div class="card-symbol">${c.symbol}</div>`}
      <span class="rarity-orb">${c.rarity[0]}</span>
      <span class="collection-set">${c.set||"BT01"}</span>
    </div>
    <div class="collection-card-info">
      <div class="tag-row">
        <span class="tag">${c.type}</span>
        <span class="tag rarity rarity-${String(c.rarity).toLowerCase().replace(/\s+/g,"-")}">${c.rarity}</span>
        <span class="tag set-tag">${c.set || "—"}</span>
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
  bindZonePageFlips(grid);
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
document.querySelector("#clearCollectionFilters")?.addEventListener("click",()=>{
  resetCollectionFilters();
  renderCollection();
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

  const limit=card.type==="Master"||card.type==="Zone"||card.type==="Untimeat" ? 1 :
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

  if(card.type==="Master"){
    if(qty!==1){alert("Master ใส่ได้ 1 ใบเท่านั้น");return;}
    if(deck.master && deck.master!==card.id){alert("Deck นี้มี Master อยู่แล้ว 1 ใบ");return;}
    deck.master=card.id;
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
    master:null,
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
  renderDeckStats();
}

function renderDeckLibrary(){
  const box=document.querySelector("#deckCards");
  box.innerHTML=decks.map(d=>{
    const count=Object.values(d.main||{}).reduce((a,b)=>a+b,0)+(d.master?1:0)+(d.zone?1:0)+((d.soulCores||[]).length);
    const cover=cards.find(c=>c.id===d.cover);
    const coverClass=cover?rarityClass(cover.rarity):"rarity-common";
    const active=d.id===currentDeckId?" active":"";
    const coverHTML=cover?.image
      ? `<img class="library-cover-real-image" src="${escapeHtml(cover.image)}" alt="${escapeHtml(cover.name)}">`
      : `<span>${escapeHtml(cover?.symbol||"SA")}</span>`;
    return `<div class="deck-library-card${active}" data-deck="${d.id}">
      <div class="library-cover ${coverClass} ${cover?.type==="Zone"?"zone-page-flippable":""}" data-zone-id="${cover?.type==="Zone"?escapeHtml(cover.id):""}">${coverHTML}</div>
      <div class="library-info">
        <h4>${escapeHtml(d.name||"New Deck")}</h4>
        <div><span>${getMainDeckCount(d)} MAIN DECK</span><span>${d.master?"MASTER ✓":"NO MASTER"}</span><span>${d.zone?"ZONE ✓":"NO ZONE"}</span></div>
      </div>
      <button class="library-delete" data-delete="${d.id}" title="Delete Deck">×</button>
    </div>`;
  }).join("");

  bindZonePageFlips(box);
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
    +(currentDeck.master?1:0)
    +(currentDeck.zone?1:0)
    +((currentDeck.soulCores||[]).length);
}

function addToDeck(id){
  const c=cards.find(x=>x.id===id);
  if(!c||!currentDeck)return;

  if(c.type==="Master"){
    if(currentDeck.master===c.id)return;
    if(currentDeck.master)return alert("Master ได้สูงสุด 1 ใบ");
    currentDeck.master=c.id;
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
  if(type==="Master")currentDeck.master=null;
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
  document.querySelector("#masterCount").textContent=(currentDeck.master?1:0)+"/1";
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
  const master=cards.find(c=>c.id===currentDeck.master);
  const zone=cards.find(c=>c.id===currentDeck.zone);

  document.querySelector("#masterSlot").innerHTML=master?specialHTML(master,"Master"):`<div class="empty-slot">＋ ADD MASTER</div>`;
  document.querySelector("#zoneSlot").innerHTML=zone?specialHTML(zone,"Zone"):`<div class="empty-slot">＋ ADD ZONE</div>`;
  const untimeat=currentDeck.untimeat?cards.find(c=>c.id===currentDeck.untimeat):null;
  document.querySelector("#untimeatSlot").innerHTML=untimeat?specialHTML(untimeat,"Untimeat"):`<div class="empty-slot">＋ ADD UNTIMEAT</div>`;

  if(master)document.querySelector("#masterSlot .remove-card").onclick=()=>removeFromDeck(master.id,"Master");

  const soulWrap=document.querySelector("#masterSlot").parentElement;
  let soulSection=document.querySelector("#soulCoreBuilderSlot");
  if(!soulSection){
    soulSection=document.createElement("div");
    soulSection.id="soulCoreBuilderSlot";
    soulSection.className="special-slot soul-builder-slot";
    document.querySelector("#masterSlot").before(soulSection);
	function renderDeckStats(){
  if(!currentDeck)return;

  const main=currentDeck.main||{};

  let mainCount=0;
  let costTotal=0;
  let costCount=0;

  const counts={
    Character:0,
    Action:0,
    Item:0,
    Skill:0,
    Gear:0,
    POCKET:0,
    Untimeat:0
  };

  Object.entries(main).forEach(([id,qty])=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return;

    const n=Number(qty)||0;

    mainCount+=n;

    if(counts[c.type]!==undefined){
      counts[c.type]+=n;
    }

    const cost=Number(c.cost);

    if(Number.isFinite(cost)){
      costTotal+=cost*n;
      costCount+=n;
    }
  });

  const avgCost=costCount
    ? (costTotal/costCount).toFixed(1)
    : "—";

  const set=(id,value)=>{
    const el=document.querySelector("#"+id);
    if(el)el.textContent=value;
  };

  set("statMainDeck",`${mainCount} / 50`);
  set("statCharacter",counts.Character);
  set("statAction",counts.Action);
  set("statItem",counts.Item);
  set("statSkill",counts.Skill);
  set("statGear",counts.Gear);
  set("statPocket",counts.POCKET);
  set("statUntimeat",counts.Untimeat);
  set("statAvgCost",avgCost);
}
  }
  
  soulSection.innerHTML=`<div class="soul-builder-title"><span>SOUL CORE</span><small>${soulCores.length}/7 · ใบเดิมสูงสุด 3</small></div>`+
    (soulCores.length?soulCores.map((c,i)=>specialHTML(c,"Soul Core")).join(""):`<div class="empty-slot">＋ ADD SOUL CORE · ต้องมี 7 ใบก่อน SAVE</div>`);
  soulCores.forEach((c,i)=>{
    const buttons=soulSection.querySelectorAll(".remove-card");
    if(buttons[i])buttons[i].onclick=()=>removeFromDeck(c.id,"Soul Core");
  });
  if(zone)document.querySelector("#zoneSlot .remove-card").onclick=()=>removeFromDeck(zone.id,"Zone");
  if(untimeat)document.querySelector("#untimeatSlot .remove-card").onclick=()=>removeFromDeck(untimeat.id,"Untimeat");

  document.querySelectorAll("#masterSlot .special-card,#zoneSlot .special-card,#untimeatSlot .special-card,#soulCoreBuilderSlot .special-card").forEach(el=>{
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
      <div class="mini-art ${rarityClass(c.rarity)} ${c.type==="Zone"?"zone-page-flippable":""}" data-zone-id="${c.type==="Zone"?escapeHtml(c.id):""}">${cardImageHTML(c,"mini-real-image")}${c.image?"":c.symbol}</div>
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
importDeckFromCurrentURL();
  updateCover();
  renderDeckLibrary();
}

function specialHTML(c,label){
  return `<div class="special-card deck-card-clickable" data-card-id="${escapeHtml(c.id)}" title="กดเพื่อดูรายละเอียดการ์ด">
    <div class="special-art ${rarityClass(c.rarity)} ${String(c.type).toLowerCase()==="zone"?"zone-page-flippable":""}" data-zone-id="${String(c.type).toLowerCase()==="zone"?escapeHtml(c.id):""}">${cardImageHTML(c,"special-real-image")}${c.image?"":c.symbol}</div>
    <div><b>${escapeHtml(c.name)}</b><small>${escapeHtml(label)} · ${escapeHtml(c.rarity)}</small></div>
    <button class="remove-card">×</button>
  </div>`;
}
function renderDeckStats(){
  if(!currentDeck)return;

  const main=currentDeck.main||{};

  let mainCount=0;
  let costTotal=0;
  let costCount=0;

  const counts={
    Character:0,
    Action:0,
    Item:0,
    Skill:0,
    Gear:0,
    POCKET:0,
    Untimeat:0
  };

  Object.entries(main).forEach(([id,qty])=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return;

    const n=Number(qty)||0;

    mainCount+=n;

    if(counts[c.type]!==undefined){
      counts[c.type]+=n;
    }

    const cost=Number(c.cost);

    if(Number.isFinite(cost)){
      costTotal+=cost*n;
      costCount+=n;
    }
  });

  const avgCost=costCount
    ? (costTotal/costCount).toFixed(1)
    : "—";

  const set=(id,value)=>{
    const el=document.querySelector("#"+id);
    if(el)el.textContent=value;
  };

  set("statMainDeck",`${mainCount} / 50`);
  set("statCharacter",counts.Character);
  set("statAction",counts.Action);
  set("statGear",counts.Gear);
  set("statPocket",counts.POCKET);
  set("statUntimeat",counts.Untimeat);
  set("statAvgCost",avgCost);
}
function renderPicker(){
  if(!currentDeck)return;
  const q=(document.querySelector("#deckSearch").value||"").toLowerCase();
  const t=document.querySelector("#deckTypeFilter").value;
  const s=(document.querySelector("#deckSetFilter")?.value||"All");
  const r=(document.querySelector("#deckRarityFilter")?.value||"All");
  const list=cards.filter(c=>(t==="All"||c.type===t)&&(s==="All"||c.set===s)&&(r==="All"||c.rarity===r)&&[c.name,c.subtitle,c.rarity,c.type,c.set].join(" ").toLowerCase().includes(q));

  document.querySelector("#pickerList").innerHTML=list.map(c=>{
    let qty=c.type==="Master"?(currentDeck.master===c.id?1:0):c.type==="Zone"?(currentDeck.zone===c.id?1:0):c.type==="Untimeat"?(currentDeck.untimeat===c.id?1:0):c.type==="Soul Core"?((currentDeck.soulCores||[]).filter(x=>x===c.id).length):(currentDeck.main[c.id]||0);
    let limit=c.type==="Master"||c.type==="Zone"||c.type==="Untimeat"?1:c.type==="Soul Core"?7:c.type==="POCKET"?10:3;
    if(c.type==="Soul Core" && (currentDeck.soulCores||[]).length>=7) limit=qty;
    if(c.type==="POCKET" && getPocketCount()>=10) limit=qty;
    return `<div class="picker-row picker-card-clickable" data-picker-card-id="${escapeHtml(c.id)}" title="กดเพื่อดูรายละเอียดการ์ด">
      <div class="picker-art ${rarityClass(c.rarity)} ${String(c.type).toLowerCase()==="zone"?"zone-page-flippable":""}" data-zone-id="${String(c.type).toLowerCase()==="zone"?escapeHtml(c.id):""}">${cardImageHTML(c,"picker-real-image")}${c.image?"":c.symbol}</div>
      <div class="picker-name"><b>${escapeHtml(c.name)}</b><small>${escapeHtml(c.type)} · ${escapeHtml(c.rarity)}</small></div>
      <div class="picker-qty">${qty}/${limit}</div>
      <button ${qty>=limit?"disabled":""} onclick="addToDeck('${c.id}')">＋</button>
    </div>`;
  }).join("");
  bindZonePageFlips(document.querySelector("#pickerList")||document);
  document.querySelectorAll("#pickerList .picker-card-clickable").forEach(row=>{
    row.onclick=e=>{
      if(e.target.closest("button"))return;
      const card=cards.find(x=>String(x.id)===String(row.dataset.pickerCardId));
      if(card)openCard(card);
    };
  });
}

function getDeckCoverCards(deck=currentDeck){
  if(!deck) return [];
  const ids=[];
  if(deck.master) ids.push(deck.master);
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
    cover.className=`deck-cover ${rarityClass(c.rarity)} ${c.type==="Zone"?"zone-page-flippable":""}`;
    cover.dataset.zoneId=c.type==="Zone"?c.id:"";
    if(c.image){
  cover.innerHTML=`<img class="deck-cover-real-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">`;
}else{
      cover.innerHTML=`<span id="coverSymbol">${escapeHtml(c.symbol||"SA")}</span>`;
    }
  }else{
    cover.className="deck-cover rarity-common";
    cover.dataset.zoneId="";
    cover.innerHTML=`<span id="coverSymbol">SA</span>`;
  }
  bindZonePageFlips(cover.parentElement||document);
}

function openCoverPicker(){
  const list=getDeckCoverCards(currentDeck);
  const grid=document.querySelector("#coverGrid");
  grid.innerHTML=list.length ? list.map(c=>
    `<button class="cover-option ${rarityClass(c.rarity)} ${c.type==="Zone"?"zone-page-flippable":""}" data-zone-id="${c.type==="Zone"?escapeHtml(c.id):""}" onclick="chooseCover('${c.id}')">
      ${c.image
        ? `<img class="cover-option-image" src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">`
        : `<span>${escapeHtml(c.symbol||"SA")}</span>`}
      <b>${escapeHtml(c.name)}</b><small>${escapeHtml(c.type)} · ${escapeHtml(c.rarity)}</small>
    </button>`
  ).join("") : `<div class="cover-empty">ยังไม่มีการ์ดในเด็คสำหรับใช้เป็นหน้าปก</div>`;
  bindZonePageFlips(grid);
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
  if(!currentDeck.master){
    alert("ไม่สามารถบันทึก Deck ได้ ต้องมี Master 1 ใบ");
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

function normalizeImportedDeck(raw){
  if(!raw || typeof raw!=="object") throw new Error("รูปแบบ Deck ไม่ถูกต้อง");
  const knownIds=new Set(cards.map(c=>String(c.id)));
  const allIds=[];
  if(raw.master)allIds.push(String(raw.master));
  if(raw.zone)allIds.push(String(raw.zone));
  if(raw.untimeat)allIds.push(String(raw.untimeat));
  (Array.isArray(raw.soulCores)?raw.soulCores:[]).forEach(id=>allIds.push(String(id)));
  Object.keys(raw.main&&typeof raw.main==="object"?raw.main:{}).forEach(id=>allIds.push(String(id)));
  const missing=[...new Set(allIds.filter(id=>!knownIds.has(id)))];
  if(missing.length) throw new Error("ไม่พบการ์ดในระบบ: "+missing.join(", "));

  const main={};
  Object.entries(raw.main&&typeof raw.main==="object"?raw.main:{}).forEach(([id,n])=>{
    const qty=Number(n)||0;
    if(qty>0)main[id]=Math.floor(qty);
  });

  const d={
    id:"D"+Date.now()+Math.random().toString(36).slice(2,7),
    name:String(raw.name||"Imported Deck").slice(0,80),
    cover:raw.cover&&knownIds.has(String(raw.cover))?String(raw.cover):null,
    master:raw.master?String(raw.master):null,
    zone:raw.zone?String(raw.zone):null,
    untimeat:raw.untimeat?String(raw.untimeat):null,
    main,
    soulCores:Array.isArray(raw.soulCores)?raw.soulCores.map(String).filter(id=>knownIds.has(id)):[],
    imported:true
  };
  return d;
}

function encodeDeckForLink(deck){
  const payload={
    v:1,
    name:deck.name||"Shared Deck",
    cover:deck.cover||null,
    master:deck.master||null,
    zone:deck.zone||null,
    untimeat:deck.untimeat||null,
    main:deck.main||{},
    soulCores:deck.soulCores||[]
  };
  const bytes=new TextEncoder().encode(JSON.stringify(payload));
  let binary="";
  const chunk=0x8000;
  for(let i=0;i<bytes.length;i+=chunk)binary+=String.fromCharCode(...bytes.subarray(i,i+chunk));
  return btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}

function decodeDeckFromLink(link){
  const url=new URL(String(link).trim(),window.location.href);
  const encoded=url.searchParams.get("deck") || (url.hash.startsWith("#deck=")?url.hash.slice(6):"");
  if(!encoded)throw new Error("ไม่พบข้อมูล Deck ในลิงก์นี้");
  const normalized=encoded.replace(/-/g,"+").replace(/_/g,"/");
  const padded=normalized+"=".repeat((4-normalized.length%4)%4);
  const binary=atob(padded);
  const bytes=Uint8Array.from(binary,ch=>ch.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function getDeckShareLink(deck=currentDeck){
  if(!deck)throw new Error("กรุณาเลือก Deck ก่อน");
  const encoded=encodeDeckForLink(deck);
  return `${window.location.origin}${window.location.pathname}?deck=${encoded}`;
}

async function shareCurrentDeck(){
  if(!currentDeck)return;
  if(!validateDeckBeforeSave())return;
  currentDeck.name=(document.querySelector("#deckName").value.trim()||"New Deck");
  persistDecks();
  const link=getDeckShareLink(currentDeck);
  try{
    await navigator.clipboard.writeText(link);
    alert("สร้างลิงก์ Deck แล้ว และคัดลอกลิงก์ไว้ใน Clipboard เรียบร้อย");
  }catch(e){
    const input=document.createElement("input");
    input.value=link;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
    alert("สร้างลิงก์ Deck แล้ว\n\n"+link);
  }
}

function openImportDeckModal(){
  document.querySelector("#deckLinkInput").value="";
  document.querySelector("#deckLinkModal").classList.remove("hidden");
  setTimeout(()=>document.querySelector("#deckLinkInput").focus(),50);
}

function closeImportDeckModal(){
  document.querySelector("#deckLinkModal").classList.add("hidden");
}

function importDeckFromLink(link){
  try{
    const raw=decodeDeckFromLink(link);
    const imported=normalizeImportedDeck(raw);
    decks.push(imported);
    currentDeckId=imported.id;
    currentDeck=imported;
    persistDecks();
    closeImportDeckModal();
    initDeck();
    alert(`นำเข้า Deck "${imported.name}" สำเร็จ`);
  }catch(err){
    alert("นำเข้า Deck ไม่สำเร็จ\n\n"+(err?.message||"ลิงก์ไม่ถูกต้อง"));
  }
}

function importDeckFromCurrentURL(){
  const hasDeck=new URLSearchParams(window.location.search).has("deck") || window.location.hash.startsWith("#deck=");
  if(!hasDeck)return;
  try{
    const raw=decodeDeckFromLink(window.location.href);
    const imported=normalizeImportedDeck(raw);
    const exists=decks.some(d=>JSON.stringify({
      name:d.name,cover:d.cover,master:d.master,zone:d.zone,untimeat:d.untimeat,main:d.main,soulCores:d.soulCores
    })===JSON.stringify({
      name:imported.name,cover:imported.cover,master:imported.master,zone:imported.zone,untimeat:imported.untimeat,main:imported.main,soulCores:imported.soulCores
    }));
    if(exists){
      const ok=confirm(`พบ Deck "${imported.name}" ที่มีอยู่แล้ว ต้องการนำเข้าอีกครั้งหรือไม่?`);
      if(!ok)return;
    }
    decks.push(imported);
    currentDeckId=imported.id;
    currentDeck=imported;
    persistDecks();
    alert(`พบลิงก์ Deck "${imported.name}" และนำเข้าให้แล้ว`);
    history.replaceState(null,"",window.location.pathname);
    initDeck();
  }catch(err){
    alert("ลิงก์ Deck ไม่ถูกต้อง\n\n"+(err?.message||"ไม่สามารถอ่านข้อมูล Deck ได้"));
    history.replaceState(null,"",window.location.pathname);
  }
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
document.querySelector("#shareDeckBtn").onclick=shareCurrentDeck;
document.querySelector("#importDeckBtn").onclick=openImportDeckModal;
document.querySelector("#confirmImportDeck").onclick=()=>importDeckFromLink(document.querySelector("#deckLinkInput").value);
document.querySelector("#cancelImportDeck").onclick=closeImportDeckModal;
document.querySelector("#closeDeckLink").onclick=closeImportDeckModal;
document.querySelector("#deckLinkModal").onclick=e=>{if(e.target.id==="deckLinkModal")closeImportDeckModal()};
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
document.querySelector("#clearDeckFilters")?.addEventListener("click",()=>{
  resetDeckFilters();
  renderPicker();
});
document.querySelector("#deckName").oninput=e=>{
  if(currentDeck){
    currentDeck.name=e.target.value;
    persistDecks();
    renderDeckLibrary();
	renderDeckStats();
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
let testSoulCoreUnderZone=[];
let testSpecialRotation={master:0};
let testZoneFlipped=true;

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
    testStack=[];testHand=[];testTomb=[];testTurn=0;testBoard={freeCards:[]};testSoulCoreUnderZone=[];testSpecialRotation={master:0};testZoneFlipped=true;
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
  testHand=[];testTomb=[];testTurn=0;testBoard={freeCards:[]};testSoulCoreUnderZone=[];testSpecialRotation={master:0};testZoneFlipped=true;
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
function sendBoardCardToTomb(index){
  const item=testBoard.freeCards[index];
  if(!item)return;
  testTomb.push(item.id);
  testBoard.freeCards.splice(index,1);
  renderTest();
}
function addSoulCoreToZone(){
  const all=testDeck?.soulCores||[];
  if(testSoulCoreUnderZone.length>=all.length)return;
  testSoulCoreUnderZone.push(all[testSoulCoreUnderZone.length]);
  renderTest();
}

function addBoardCard(id,x=.45,y=.45){
  testBoard.freeCards.push({
    uid:"B"+Date.now()+Math.random().toString(36).slice(2,7),
    id:String(id),
    x:Math.max(.02,Math.min(.92,x)),
    y:Math.max(.02,Math.min(.70,y)),
    rotation:0
  });
}

function openTestCardDetail(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(c) openCard(c);
}
function openDeckPicker(){
  const modal=document.querySelector("#deckPickerModal");
  const grid=document.querySelector("#deckPickerGrid");
  if(!modal || !grid)return;

  // รวมการ์ดที่เหลือใน Deck และนับจำนวน
  const counts={};
  testStack.forEach(id=>{
    counts[id]=(counts[id]||0)+1;
  });

  grid.innerHTML=Object.entries(counts).map(([id,count])=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return "";

    return `
      <div class="deck-picker-card ${rarityClass(c.rarity)}"
           data-id="${escapeHtml(id)}">
        ${c.image
          ? `<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">`
          : `<b>${escapeHtml(c.name)}</b>`
        }
        <span class="deck-picker-count">×${count}</span>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".deck-picker-card").forEach(card=>{
    card.addEventListener("click",()=>{
  const id=card.dataset.id;
  openDeckCardChoice(id);
});

  });
function openDeckCardChoice(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(!c)return;

  const choice=document.createElement("div");
  choice.className="deck-card-choice";

  choice.innerHTML=`
    <div class="deck-card-choice-box">
      <button class="close deck-choice-close">×</button>

      <h3>${escapeHtml(c.name)}</h3>
      <p>ต้องการนำการ์ดนี้ไปไว้ที่ไหน?</p>

      <div class="deck-choice-actions">
        <button class="gold-btn" id="choiceToHand">
          ✋ ขึ้น HAND
        </button>

        <button class="gold-btn" id="choiceToBoard">
          ◈ ลงสนาม
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(choice);

  choice.querySelector(".deck-choice-close").onclick=()=>{
    choice.remove();
  };

  choice.querySelector("#choiceToHand").onclick=()=>{
    takeCardFromDeck(id,"hand");
    choice.remove();
  };

  choice.querySelector("#choiceToBoard").onclick=()=>{
    takeCardFromDeck(id,"board");
    choice.remove();
  };
}
function takeCardFromDeck(id,destination){
  const index=testStack.indexOf(String(id));
  if(index<0)return;

  testStack.splice(index,1);

  if(destination==="hand"){
    testHand.push(String(id));
  }

  if(destination==="board"){
    addBoardCard(String(id),.70,.05);
  }

  closeDeckPicker();
  renderTest();
}
  modal.classList.remove("hidden");
}

function closeDeckPicker(){
  document.querySelector("#deckPickerModal")?.classList.add("hidden");
}
function renderTest(){
  refreshTestDeckSelect();
  const nameEl=document.querySelector("#testDeckName");
  const handEl=document.querySelector("#testHand");
  const boardEl=document.querySelector("#testBoardCards");
  const masterEl=document.querySelector("#testMasterCard");
  const zoneEl=document.querySelector("#testZoneCard");
  const soulEl=document.querySelector("#testSoulCoreCards");
  const soulUnderEl=document.querySelector("#testSoulCoreUnderZone");
  if(!testDeck){
    if(masterEl)masterEl.innerHTML="";
    if(zoneEl)zoneEl.innerHTML="";
    if(soulEl)soulEl.innerHTML="";
    if(soulUnderEl)soulUnderEl.innerHTML="";
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

  // Initial battlefield layout: Master center, Zone below, Soul Core as a single clickable pile above.
  if(masterEl){
    masterEl.innerHTML=testDeck.master ? testCardHTML(testDeck.master,true,0,"master") : "";
    const card=masterEl.querySelector(".test-card");
    if(card){
      card.style.transform=`rotate(${Number(testSpecialRotation.master||0)}deg)`;
      card.draggable=false;
      card.onclick=()=>openTestCardDetail(card.dataset.id);
      const btn=document.createElement("button");
      btn.type="button";
      btn.className="special-rotate-btn";
      btn.title=Number(testSpecialRotation.master||0)===90 ? "หมุนกลับแนวตั้ง" : "วางแนวนอน";
      btn.textContent="↻";
      btn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        testSpecialRotation.master=Number(testSpecialRotation.master||0)===90?0:90;
        renderTest();
      });
      card.appendChild(btn);
    }
  }
  if(zoneEl){
    zoneEl.innerHTML=testDeck.zone ? testCardHTML(testDeck.zone,true,0,"zone") : "";
    const card=zoneEl.querySelector(".test-card");
    if(card){
      card.style.transform="none";
      card.draggable=false;
      if(testZoneFlipped){
  card.classList.add("zone-card-back");

  const img=card.querySelector("img");

  if(img && testDeck?.zone){
    const zoneData=cards.find(
      x=>String(x.id)===String(testDeck.zone)
    );

    if(zoneData?.imageBack){
      img.src=zoneData.imageBack;
      img.alt=`${zoneData.name} Back`;
      img.className="test-real-image zone-back-image";
    }
  }
}
      card.onclick=()=>openTestCardDetail(card.dataset.id);
      const btn=document.createElement("button");
      btn.type="button";
      btn.className="special-flip-btn";
      btn.title=testZoneFlipped ? "พลิกกลับด้านหน้า" : "พลิกเป็นด้านหลัง";
      btn.textContent="↔";
      btn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        testZoneFlipped=!testZoneFlipped;
        renderTest();
      });
      card.appendChild(btn);

const badge=document.createElement("span");
badge.className="zone-soulcore-badge";
badge.textContent=`SC ${testSoulCoreUnderZone.length}`;
badge.title="ดูจำนวน Soul Core";

badge.addEventListener("click",ev=>{
  ev.preventDefault();
  ev.stopPropagation();

  const existing=zoneEl.querySelector(".zone-soulcore-info");

  if(existing){
    existing.remove();
    return;
  }

  const info=document.createElement("div");
  info.className="zone-soulcore-info";
  info.innerHTML=`
    <b>SOUL CORE</b>
    <span>${testSoulCoreUnderZone.length} ใบ</span>
  `;

  zoneEl.appendChild(info);
});

/* สำคัญ: ใส่ Badge เข้า Zone */
zoneEl.appendChild(badge);
    }
  }
  bindZonePageFlips(document);

  if(soulEl){
    const remaining=(testDeck.soulCores||[]).filter((_,i)=>i>=testSoulCoreUnderZone.length);
    const topId=remaining[0];
    soulEl.innerHTML=topId ? testCardHTML(topId,true,0,"soulcore-pile") : `<div class="soul-core-empty">SOUL CORE<br><b>หมดแล้ว</b></div>`;
    const card=soulEl.querySelector(".test-card");
    if(card){
      card.draggable=false;
      card.onclick=()=>openTestCardDetail(card.dataset.id);
      card.ondblclick=addSoulCoreToZone;
      const placeBtn=document.createElement("button");
      placeBtn.type="button";
      placeBtn.className="soul-core-place-btn";
      placeBtn.title="นำ Soul Core ไปไว้ใต้ Zone";
      placeBtn.textContent="↓ ZONE";
      placeBtn.disabled=testSoulCoreUnderZone.length >= (testDeck.soulCores||[]).length;
      placeBtn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        addSoulCoreToZone();
      });
      soulEl.appendChild(placeBtn);
    }
    const count=document.createElement("span");
    count.className="soul-core-pile-count";
    count.textContent=`${remaining.length} ใบ`;
    soulEl.appendChild(count);
  }
  if(soulUnderEl){
    // Soul Core cards are now visually stacked underneath the Zone card.
    // Keep this container for the stack data, but place it directly under Zone.
    soulUnderEl.innerHTML=testSoulCoreUnderZone.map((id,i)=>testCardHTML(id,true,i,"soulcore-under")).join("");
    soulUnderEl.querySelectorAll(".test-card").forEach((card,i)=>{
      card.draggable=false;
      card.style.zIndex=String(i+1);
      card.onclick=()=>openTestCardDetail(card.dataset.id);
    });
  }

  if(handEl){
    handEl.innerHTML=testHand.length
      ? testHand.map((id,index)=>testCardHTML(id,true,index,"hand")).join("")
      : `<div class="hand-empty">กด DRAW 5 เพื่อเริ่ม · ลากการ์ดจากมือลงสนามได้</div>`;
    handEl.querySelectorAll(".test-card").forEach(el=>{
      el.draggable=true;
      el.ondragstart=e=>{
        e.dataTransfer.setData("text/plain",JSON.stringify({source:"hand",index:Number(el.dataset.index)}));
      };
      el.onclick=()=>openTestCardDetail(el.dataset.id);
      el.ondblclick=()=>sendToTomb(el.dataset.id,true);
      const tombBtn=document.createElement("button");
      tombBtn.type="button";
      tombBtn.className="test-tomb-btn";
      tombBtn.title="นำการ์ดลง Tomb";
      tombBtn.textContent="TOMB";
      tombBtn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        sendToTomb(el.dataset.id,true);
      });
      el.appendChild(tombBtn);
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
      el.classList.toggle("board-horizontal",Number(item.rotation||0)===90);
      const rotateBtn=document.createElement("button");
      rotateBtn.type="button";
      rotateBtn.className="board-rotate-btn";
      rotateBtn.title=Number(item.rotation||0)===90 ? "หมุนกลับแนวตั้ง" : "วางแนวนอน";
      rotateBtn.textContent="↻";
      rotateBtn.addEventListener("click",ev=>{
        ev.preventDefault();
        ev.stopPropagation();
        item.rotation=Number(item.rotation||0)===90 ? 0 : 90;
        renderTest();
      });
      el.appendChild(rotateBtn);
      el.draggable=true;
      el.ondragstart=e=>{
        e.dataTransfer.setData("text/plain",JSON.stringify({source:"board",index:idx}));
      };
      el.onclick=()=>openTestCardDetail(el.dataset.id);
      el.ondblclick=()=>{
        testHand.push(item.id);
        testBoard.freeCards.splice(idx,1);
        renderTest();
      };
      const tombBtn=document.createElement("button");
      tombBtn.type="button";
      tombBtn.className="test-tomb-btn board-tomb-btn";
      tombBtn.title="นำการ์ดลง Tomb";
      tombBtn.textContent="TOMB";
      tombBtn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        sendBoardCardToTomb(idx);
      });
      el.appendChild(tombBtn);
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

function bindZonePageFlips(root=document){
  const nodes=[];
  if(root?.matches?.(".zone-page-flippable"))nodes.push(root);
  root?.querySelectorAll?.(".zone-page-flippable").forEach(el=>nodes.push(el));
  nodes.forEach(el=>{
    if(el.dataset.zoneBound==="1")return;
    const id=el.dataset.zoneId;
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c || String(c.type).toLowerCase()!=="zone")return;
    el.dataset.zoneBound="1";
    const front=el.innerHTML;
    const frontClass=el.className;
    el.dataset.zoneFront=front;
    el.dataset.zoneFrontClass=frontClass;
    const btn=document.createElement("button");
    btn.type="button";
    btn.className="zone-page-flip-btn";
    btn.title="ดูด้านหลังของ Zone";
    btn.textContent="↔";
    btn.addEventListener("click",ev=>{
      ev.preventDefault(); ev.stopPropagation();
      const back=el.dataset.zoneFlipped!=="1";
      el.dataset.zoneFlipped=back?"1":"0";
      if(back){
  el.innerHTML = `
    <div class="zone-page-back">
      ${
        c.imageBack
          ? `<img
               class="zone-back-image"
               src="${escapeHtml(c.imageBack)}"
               alt="${escapeHtml(c.name)} Back"
             >`
          : `<b>ABILITY — BACK</b>
             <p>${formatAbility(c.abilityBack ?? "—")}</p>`
      }
    </div>
  `;

  el.className =
    el.dataset.zoneFrontClass +
    " zone-page-back-active zone-back-no-shine";

  btn.title="กลับไปด้านหน้า";
}else{
        el.innerHTML=el.dataset.zoneFront;
        el.className=el.dataset.zoneFrontClass;
        btn.title="ดูด้านหลังของ Zone";
      }
      el.appendChild(btn);
      if(el.id==="detailImage") syncZoneDetailAbility(c,back?"back":"front");
    });
    el.appendChild(btn);
  });
}

function initDrawTest(){
  reloadDecksFromStorage();
  refreshTestDeckSelect();
  buildTestDeck();
}
function formatAbility(text) {
  if (!text) return "";

  const icons = {
    Counter: "public/images/icon/Counter.jpg",
  E: "public/images/icon/E.png",
  Pocket: "public/images/icon/Pocket.png",
  Dot: "public/images/icon/Dot.jpg",
  OpenZone: "public/images/icon/OpenZone.jpg",
  Forever: "public/images/icon/Forever.jpg",
  Activat:"public/images/icon/Activat.png",
  PerTurn:"public/images/icon/1_Turn.png",
  Block:"public/images/icon/Block.png",
  Enter:"public/images/icon/Enter.png",
  Peek:"public/images/icon/Peek.png",
  ZoneOpen1:"public/images/icon/ZoneOpenหอนาฬิกาเที่ยงคืน.png",
  ES:"public/images/icon/Energy Soul.png",
  ZoneOpen2:"public/images/icon/ZoneOpenเรือโจรสลัด.png",
  ZoneOpen3:"public/images/icon/ZoneOpenวิมานแห่งรัก.png",
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
document.querySelector("#testDeckPile").onclick=()=>openDeckPicker();
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
  openTombViewer();
});

function openTombViewer(){
  const modal=document.querySelector("#tombViewerModal");
  const grid=document.querySelector("#tombViewerGrid");

  if(!modal || !grid)return;

  if(!testTomb.length){
    grid.innerHTML=`
      <div class="tomb-empty">
        TOMB EMPTY
      </div>
    `;
    modal.classList.remove("hidden");
    return;
  }

  grid.innerHTML=testTomb.map((id,index)=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return "";

    return `
      <div class="tomb-viewer-card ${rarityClass(c.rarity)}"
           data-id="${escapeHtml(id)}">

        ${c.image
          ? `<img src="${escapeHtml(c.image)}"
                  alt="${escapeHtml(c.name)}">`
          : `<b>${escapeHtml(c.name)}</b>`
        }

        <span class="tomb-card-index">
          ${index+1}
        </span>
      </div>
    `;
  }).join("");

 grid.querySelectorAll(".tomb-viewer-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const id=card.dataset.id;
    openTombCardChoice(id);
  });
});
function openTombCardChoice(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(!c)return;

  const choice=document.createElement("div");
  choice.className="deck-card-choice";

  choice.innerHTML=`
    <div class="deck-card-choice-box">
      <button class="close deck-choice-close">×</button>

      <h3>${escapeHtml(c.name)}</h3>
      <p>ต้องการนำการ์ดนี้ไปไว้ที่ไหน?</p>

      <div class="deck-choice-actions">
        <button class="gold-btn" id="tombChoiceToHand">
          ✋ ขึ้น HAND
        </button>

        <button class="gold-btn" id="tombChoiceToBoard">
          ◈ ลงสนาม
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(choice);

  choice.querySelector(".deck-choice-close").onclick=()=>{
    choice.remove();
  };

  choice.querySelector("#tombChoiceToHand").onclick=()=>{
    takeCardFromTomb(id,"hand");
    choice.remove();
  };

  choice.querySelector("#tombChoiceToBoard").onclick=()=>{
    takeCardFromTomb(id,"board");
    choice.remove();
  };
}
function takeCardFromTomb(id,destination){
  const index=testTomb.indexOf(String(id));

  if(index<0)return;

  // เอาออกจาก TOMB 1 ใบ
  testTomb.splice(index,1);

  if(destination==="hand"){
    testHand.push(String(id));
  }

  if(destination==="board"){
    addBoardCard(String(id),.70,.05);
  }

  closeTombViewer();
  renderTest();
}
  modal.classList.remove("hidden");
}

function closeTombViewer(){
  document.querySelector("#tombViewerModal")?.classList.add("hidden");
}

initDrawTest();
/* =========================
   LANGUAGE SWITCH
========================= */

let currentLanguage =
  localStorage.getItem("soulvaultLanguage") || "th";

const translations = {

  th:{
    listCard:"รายการการ์ด",
    collection:"คอลเลกชัน",
    deckBuilding:"สร้างเด็ค",
    playTest:"ทดลองเล่น",
    supply:"อุปกรณ์",
    home:"หน้าแรก",
    enter:"เข้าสู่ SOULVAULT"
  },

  en:{
    listCard:"List Card",
    collection:"Collection",
    deckBuilding:"Deck Building",
    playTest:"Play Test",
    supply:"Supply",
    home:"Home",
    enter:"ENTER SOULVAULT"
  }

};

function setLanguage(lang){

  currentLanguage=lang;

  localStorage.setItem(
    "soulvaultLanguage",
    lang
  );

  document.querySelector("#langTH")
    ?.classList.toggle("active",lang==="th");

  document.querySelector("#langEN")
    ?.classList.toggle("active",lang==="en");

  const t=translations[lang];

  /* Sidebar */
  const navText=document.querySelectorAll(".nav span");

  if(navText.length>=6){
    navText[0].textContent=t.home;
    navText[1].textContent=t.listCard;
    navText[2].textContent=t.collection;
    navText[3].textContent=t.deckBuilding;
    navText[4].textContent=t.playTest;
    navText[5].textContent=t.supply;
  }

  /* ENTER button */
  const enter=document.querySelector(".home-enter-btn");

  if(enter){
    enter.textContent=t.enter;
  }
}


