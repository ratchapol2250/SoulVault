const cards=[

{id:"HD-001",set:"HD",name:"Aegiron The Starforged",subtitle:"ข้าจะไม่หยุด…จนกว่าความมืดจะพังทลาย",type:"Character",rarity:"Common",element:"นักรบเกราะเหล็ก",cost:"5",ability:"-",artist:"Krianza the Decline",power:"700",steal:"1",symbol:"A",image:"/public/images/cards/Aegiron The Starforged.jpg"},
{id:"HD-002",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg",set:"HD",name:"เกลสาวโหด ณ 3 แยก",subtitle:"ยิ่งดิ้นรน ก็ยิ่งจมลึกลงไป",type:"Character",rarity:"Common",element:"ผู้หญิง,สาวดุ",cost:"4",ability:"{Dot}เมื่อการ์ดใบนี้เข้าสู่สนาม คู่แข่งสมารถจ่าย 1 {Pocket} ถ้าไม่จ่าย ทำการ Kill Criminal ที่มีคอส 3 หรือต่ำกว่า 1 ใบของคู่แข่ง",power:"500",steal:"1",artist:"ตีนแมว",symbol:"G",image:"/public/images/cards/เกลสาวโหด ณ 3 แยก.jpg"},
{id:"HD-003",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg",set:"HD",name:"จอมโจรร้อยหน้า ลูแพร์",subtitle:"ข้าจะแฝงตัวไปกับสิ่งที่เจ้ารักและเอามันไปจากเจ้า",type:"Character",rarity:"Common",element:"จอมโจร",cost:"3",power:"500",steal:"1",artist:"inalone",ability:"{Activat}{PerTurn} ใช้ความสามารถนี้ได้ถ้าคุณเคยใช้งานความสามารถของ Masterไปแล้วในเทิร์นนี้ เลือก Character 1 ใบได้รับพลัง+100 จนจบเทิร์น และ คุณจั่ว 1 ใบ \n(เป็นความสามารถสั่งใช้งานและใช้ได้เพียง 1 ครั้งใน 1 เทิร์น)",symbol:"L",image:"/public/images/cards/จอมโจร100หน้า LUPIN.jpg"},
{id:"HD-004",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg",set:"HD",name:"ไนธีเรีย ผู้เฝ้าประตูนรก",subtitle:"จงอย่ากลัวความตาย เพราะมันกำลังรอเจ้าอยู่",type:"Character",rarity:"Common",element:"ยมฑูต",cost:"2",ability:"{Block}\n{Dot} เมื่อการ์ดใบนี้ออกจากสนาม {Peek} 3 ใบ ล่างสุดจากกองเลือก Character 1 ใบจากที่เปิดดู นำขึ้นมือที่เหลือนำกลับเข้ากองแล้วสลับ\n(สามารถเปลี่ยนสภาพการ์ดนี้จาก Ok เป็น Don’t ได้ เพื่อเปลี่ยนเป้าหมายการโจมตีมาที่การ์ดใบนี้แทน)",symbol:"N",power:"300",steal:"1",artist:"Haruki",image:"/public/images/cards/ไนธีเรีย ผู้เฝ้าประตูนรก.jpg"},
{id:"HD-005",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg",set:"HD",name:"เพอร่า ยามค่ำคืน",subtitle:"หลับตาลงเถิด…แล้วปล่อยให้ฝันร้ายเริ่มต้น",artist:"Hika mori",type:"Character",rarity:"Common",element:"ผู้หญิง",cost:"2",steal:"1",power:"400",ability:"{Enter} เมื่อเข้าสู่สนาม จั่วการ์ด 1 ใบ ",symbol:"P",image:"/public/images/cards/เพอร่า ยามค่ำคืน.jpg"},
{id:"HD-006",image:"/public/images/cards/Cerberus Blade.jpg",set:"HD",name:"Cerberus Blade",subtitle:"Cerberus Blade",type:"Gear",rarity:"Common",element:"ดาบ",cost:"2",ability:"การ์ดใบนี้สามารถสวมใส่ได้แค่ Character เท่านั้น\n{Dot} เมื่อ Character  ที่สวมใส่การ์ดใบนี้โจมตีหรือขโมย การ์ดนั้นได้รับพลัง +200 จนจบเทิร์น",artist:"อาราย อีกว้าา",symbol:"C",image:"/public/images/cards/Cerberus Blade.jpg"},
{id:"HD-007",image:"/public/images/cards/Death Error.jpg",set:"HD",name:"Death Error",subtitle:"ความตายไม่ควรเกิดขึ้น… แต่เจ้า คือข้อผิดพลาดของมัน",type:"Action",rarity:"Common",element:"ข้อผิดพลาด",cost:"4",artist:"ปวดขี้ ทำอย่างไรดี",ability:"ใช้การ์ดใบนี้ก็ต่อเมื่อ Master คู่แข่งทำการโจมตี\n{Counter} เลือก Character คู่แข่ง 1 ใบ ย้ายการโจมตีไปที่การ์ดใบนั้น",symbol:"E",image:"/public/images/cards/Death Error.jpg"},
{id:"HD-008",image:"/public/images/cards/Heaven's Embrace.jpg",set:"HD",name:"Heaven's Embrace",subtitle:"เมื่อดวงดาวเปล่งประกาย ปาฏิหาริย์จะบังเกิด",type:"Action",rarity:"Common",element:"พร",cost:"1",artist:"Karen'n",ability:"{Dot} นำการ์ด Character 1 ใบจาก Tomb ขึ้นมือจากนั้น นำการ์ด        {Pocket} 1 ใบบนสนามลง Tomb",symbol:"H",image:"/public/images/cards/Heaven's Embrace.jpg"},
{id:"HD-009",image:"/public/images/cards/You Die!.jpg",set:"HD",name:"You Die!",subtitle:"ตายกี่รอบก็ได้ ดีใช่มั้ยละ",type:"Action",rarity:"Common",element:"เงา",cost:"2",ability:"ใช้การ์ดใบนี้ก็ต่อเมื่อ Character ของเราโดน kill\n{Counter} เลือก Character คู่แข่ง 1 ใบ kill การ์ดใบนั้น คุณจั่วการ์ด 1 ใบ",artist:"harukix",symbol:"Y",image:"/public/images/cards/You Die!.jpg"},
{id:"HD-010",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg",set:"HD",name:"คำเชิญชวนแห่งภูติ",subtitle:"อย่ากลัวเลย… แค่หลับตา แล้วตามเสียงเรียกของข้ามา",type:"Action",rarity:"Common",element:"ภูติ",cost:"1",artist:"Punch",ability:"{Peek} 5 ใบ เลือก Character  หรือ Gear ไม่เกิน 1 ใบ นำขึ้นมือ และ นำที่เหลือกลับเข้ากองการ์ดแล้วสลับ",symbol:"F",image:"/public/images/cards/คำเชิญชวนแห่งภูติ.jpg"},
{id:"HD-011",image:"/public/images/cards/It’s Show Time!!.jpg",set:"HD",name:"It’s Show Time!!",subtitle:"ได้เวลาปิดม่านแล้ว",type:"Untimeat",rarity:"Common",element:"ปิดฉาก",cost:"5",artist:"Adamas",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone หอนาฬิกาเที่ยงคืนเคยทำงานแล้ว และ คุณขโมย Soul Core มาแล้ว 2 ชิ้น  คู่แข่งมี Character 1 ใบหรือมากกว่า\nจ่าย {E} 2\nเลือก Character บนสนามเรา 1 ใบ เมื่อจบการต่อสู้ของการ์ดที่เลือก สามารถนำการ์ดใบนั้นลง Tomb ได้ ถ้าทำ นำ Character  ใน Tomb ของคู่แข่ง 2 ใบเข้ามาในสนามคุณได้",symbol:"T",image:"/public/images/cards/It’s Show Time!!.jpg"},
{id:"HD-012",image:"/public/images/cards/Soul Guard.jpg",set:"HD",name:"Soul Guard",subtitle:"ข้าจะใช้วิญญาณของข้า เป็นเกราะเพื่อเจ้า",type:"Action",rarity:"Common",element:"วิญญาณ",cost:"1",ability:"ใช้ได้ต่อเมื่อคู่แข่งสั่งโจมตี \n {Counter} จ่าย 1  {E} ทำให้การโจมตีนั้นไร้ผล",artist:"IMO",symbol:"C",image:"/public/images/cards/Soul Guard.jpg"},
{id:"HD-013",image:"/public/images/cards/Fortune Orb.jpg",set:"HD",name:"Fortune Orb",subtitle:"จงยื่นมือเข้าหาโชคชะตา…แต่อย่าลืมว่าโชคชะตาอาจยื่นมือกลับมา",type:"Action",rarity:"Common",element:"โชคลาภ",cost:"1",ability:"{Dot} จั่วการ์ดจากกองการ์ด 2 ใบ ",artist:"kanyarat luengtrakulrung",symbol:"C",image:"/public/images/cards/Fortune Orb.jpg"},
{id:"HD-014",set:"HD",name:"Arsen, Lupaire",subtitle:"จอมโจรคือ ศิลปินผู้รังสรรค์การขโมยสิ่งที่ต้องการอย่างวิจิตรงดงาม!",type:"Master",rarity:"Legendary",element:"จอมโจร,คน ",cost:"M",abilityLeft:"{Activat}{PerTurn} ทิ้งการ์ดจากบนมือ 1  ใบ {Peek} Deck คู่แข่ง 2 ใบ และสามารถใช้ skill หรือ Gear ที่มีคอส 2 หรือต่ำกว่าได้โดยไม่ต้องจ่ายค่าคอสและไม่สนเงื่อนไข ",abilityRight:"{ZoneOpen1}\nหลังใช้ความสามารถของการ์ดใบนี้สามารถจั่วการ์ดได้ 1 ใบ",symbol:"K",steal:"1",power:"500",artist:"Yak",image:"/public/images/cards/Arsene LUPIN.jpg"},
{id:"HD-015",set:"HD",name:"Pirate's Destination!",subtitle:"ในจุดที่คนอื่นเห็นจุดจบ โจรสลัดกลับเห็นจุดเริ่มต้น",type:"Untimeat",rarity:"Legendary",element:"สถานที่",cost:"5",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone เรือโจรสลัดเคยทำงานแล้ว และคุณขโมย Soul Core มาแล้ว 2 ชิ้นคุณมี Character 1 ใบหรือมากกว่า\nจ่าย {E} 2\nเลือก Character จากใน Tomb 1 ใบ นำเข้ามาในสนามได้และการ์ดใบน้ันได้รับ“เมื่อการ์ดใบนี้โจมตีหรือโมย จะสามารถเลือกได้ 2 เป้าหมายพร้อมกัน และคู่แข่วจะต้องป้องกันแยกกันเท่านั้น”จนจบเทิร์น",artist:"Chotiwat Nilthanee",symbol:"K",image:"/public/images/cards/Pirate's Destination!.jpg"},
{id:"HD-016",set:"HD",name:"Wounded Heart",subtitle:"ทำอะไรไว้ก็ต้องรับผิดชอบสิ่งที่ทำด้วยละ",type:"Untimeat",rarity:"Legendary",element:"จิตใจ",cost:"5",ability:"ใช้งานการ์ดใบนี้ได้เมื่อ Zone วิมานแห่งรักเคยทำงานแล้ว และ คุณขโมย Soul Core มาแล้ว 2 ชิ้น  คุณไม่มี Character อยู่บนสนาม\nจ่าย {E} 2\nทำการนำ Character ทุกใบในสนามคู่แข่งมาอยู่ใต้ Zone วิมานแห่งรักและนำ Character 1 ใบ จากบนมือ ที่มีคอสไม่เกิน 2 ลงมาบนสนามได้",artist:"Teerawee",symbol:"K",image:"/public/images/cards/Wounded Heart.jpg"},
{id:"HD-017",set:"HD",name:"Skull, Pirate Captain",subtitle:"ทะเลไม่เคยปราณีและข้าก็เช่นกัน",type:"Master",rarity:"Legendary",artist:"ศาลพระภูมิ",element:"โจรสลัด,กัปตัน",cost:"M",abilityLeft:"{Activat}{PerTurn} จ่าย 1 {Pocket} สามารถนำ  Character คอสไม่เกิน 2 ลงมาบนสนามได้ 1 ใบ",abilityRight:"{ZoneOpen2}\nความสามารถของการ์ดใบนี้จะเปลี่ยนเป็น “คอสไม่เกิน 3 ลงมาบนสนามได้ 1 ใบ” แทน",symbol:"K",steal:"1",power:"500",image:"/public/images/cards/Captain Pirates.jpg"},
{id:"HD-018",set:"HD",name:"Thip Lady of the Night",subtitle:"เข้ามาใกล้อีกนิดสิ...ฉันไม่กัดหรอก(ถ้าคุณไม่ขอ)",type:"Master",rarity:"Legendary",element:"ผู้หญิง",cost:"M",abilityLeft:"เมื่อเริ่มเกม {ES} 1 ใบ\n{Activat}{PerTurn} จ่าย 1 {E} นำการ์ด {Pocket} 1 ใบจาก Deck หรือ Tomb เข้ามาในสนามได้",abilityRight:"{ZoneOpen3}\nจั่วการ์ด 1 ใบ คู่แข่งสามารถจ่าย 1 {Pocket} ถ้าไม่จ่ายจะต้องทิ้งมือ 1 ใบ",symbol:"K",steal:"1",power:"500",artist:"Punch",image:"/public/images/cards/prostitute.jpg"},
{id:"HD-Z-01",set:"HD",name:"วิมานแห่งรัก",subtitle:"-",type:"Zone",rarity:"Common",element:"ในใจ",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน  เลือก Character บนสนามของคู่แข่ง 1 ใบ นำมาไว้ใต้การ์ดใบนี้(การ์ดที่อยู่ใต้การ์ดใบนี้จะถือว่าไม่อยู่ในเกมและไม่อยู่ในUnderworld)\n{PerTurn} เมื่อคู่แข่งจ่าย {Pocket} ในเทิร์นคุณ คุณจั่วการ์ด 1 ใบ",abilityBack:"{OpenZone}\nเมื่อคุณมี {Pocket} ในสนามครบ 6 ใบคุณ สามารถจ่าย 2 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backวิมานแห่งรัก.jpg",symbol:"Z",artist:"wavecolorstudio",image:"/public/images/cards/วิมานแห่งรัก.jpg"},
{id:"HD-Z-02",set:"HD",name:"หอนาฬิกาเที่ยงคืน",subtitle:"-",type:"Zone",rarity:"Common",element:"ใจกลางเมือง",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน เมื่อคุณโจมตีหรือขโมยในเทิร์นนี้คู่แข่งไม่สามารถ ใช้งานการ์ด Action ที่มีความสามารถ {Counter} ได้ และ Character ของคุณทุกใบได้รับพลัง +100 จนจบเทิร์น",abilityBack:"{OpenZone}\nเมื่อคุณใช้ความสามารถของ Master ครบ 3 ครั้ง สามารถจ่าย 3 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backหอนาฬิกา.jpg",symbol:"Z",artist:"wavecolorstudio",image:"/public/images/cards/หอนาฬิกาเที่ยงคืน.jpg"},
{id:"HD-Z-03",set:"HD",name:"เรือโจรสลัด",subtitle:"-",type:"Zone",rarity:"Common",element:"เรือ",cost:"Z",abilityFront:"เมื่อ Zone นี้ทำงาน  เลือก Character บนมือ 1 ใบ ที่มีคอสไม่เกิน 2 นำลงบนสนาม\n{Forever} ในเทิร์นคุณการ์ด Character ทุกใบในสนามได้รับพลัง +100",abilityBack:"{OpenZone}\nเมื่อคุณมี Soul Core ใต้การ์ด Zone ครบ 2 ใบคุณสามารถจ่าย 2 {Pocket} เพื่อเปิดการ์ดใบนี้ได้",imageBack:"/public/images/cards/backเรือโจรสลัด.jpg",symbol:"Z",artist:"IMO",image:"/public/images/cards/เรือโจรสลัด.jpg"},
{id:"HD-P01",image:"/public/images/cards/Pocket3.jpg",artist:"IMO",set:"HD",name:"pocket",subtitle:"-",type:"POCKET",rarity:"Common",element:"-",cost:"-",ability:"{Counter} ใช้ความสามารถนี้ได้จากบนมือคุณเท่านั้น จ่าย 1 {Pocket} จากนั้นเลือก Master หรือ Criminal ที่กำลังต่อสู้อยู่ได้ 1 ใบการ์ดใบนั้นได้รับพลัง +200 จนจบการต่อสู้นั้น",artist:"IMO",image:"/public/images/cards/Pocket3.jpg"},
{id:"HD-SC01",image:"/public/images/cards/Soul Core.jpg",set:"HD",name:"Soul Core 1",subtitle:"-",type:"Soul Core",rarity:"Common",element:"-",cost:"-",artist:"Pupa",ability:"เมื่อคุณได้รับการ์ดใบนี้ คู่แข่งได้ {ES} 1 ใบ",image:"/public/images/cards/Soul Core.jpg"},
{id:"FPR",image:"/public/images/cards/มิวะ นุ่มฟู.jpg",set:"Promo",name:"มิวะ นุ่มฟู",subtitle:"-",type:"Character",rarity:"FPR",element:"ไม่ทราบ,ก้อนขน",cost:"2",artist:"หนองในเล็บ",steal:"1",power:"300",ability:"{Enter} แสดงการ์ดใบบนสุดของคู่แข่ง ถ้าเป็น Gear ให้นำลง Tomp",image:"/public/images/cards/มิวะ นุ่มฟู.jpg"},
{id:"FPRS",image:"/public/images/cards/มิวะ นุ่มฟู FPRS.jpg",set:"Promo",name:"มิวะ นุ่มฟู",subtitle:"-",type:"Character",rarity:"Secret Rare",element:"ไม่ทราบ,ก้อนขน",cost:"2",artist:"หนองในเล็บ",steal:"1",power:"300",ability:"{Enter} แสดงการ์ดใบบนสุดของคู่แข่ง ถ้าเป็น Gear ให้นำลง Tomp",image:"/public/images/cards/มิวะ นุ่มฟู FPRS.jpg"},
];


// ===== NEWS: เพิ่มข่าวใหม่ได้ที่รายการนี้ =====
// ใส่รูปไว้ใน public/images/news/ แล้วระบุ path ใน image
const newsList = [
  {
    title: "เรามีคลิปสอนเล่นเบื้องต้นแล้วน้าาา",
    date: "17/10/2026",
    image: "public/images/news/ปกคลิปสอนเล่น.png",
    content: "สามารถเข้าไปดูวิธีเล่น SOULVAULT CARD GAME ได้ที่ Youtube: SOULVAULT CARD GAME หรือ อ่านวิธีเล่นได้ที่หน้า HOW TO Play",
	links: [
    {
      text: "Facebook: SOULVAULT CARD GAME",
      url: "https://www.facebook.com/profile.php?id=61594308935017"
    },
    {
      text: "Youtube: SOULVAULT CARD GAME",
      url: "https://www.youtube.com/@SOULVAULTCARDGAME"
    }
  ]
  },
  {
    title: "เรามี facebook แฟนเพจแล้วน้าา",
    date: "17/10/2026",
    image: "public/images/news/แฟนเพจ.jpg",
    content: "สามารถเข้าไปติดตาม การออกบูธ ข่าวสารต่างๆ กิจกรรมต่างๆ ได้ที่หน้า Facebook: SOULVAULT CARD GAME",
	links: [
    {
      text: "Facebook: SOULVAULT CARD GAME",
      url: "https://www.facebook.com/profile.php?id=61594308935017"
    },
    {
      text: "Youtube: SOULVAULT CARD GAME",
      url: "https://www.youtube.com/@SOULVAULTCARDGAME"
    }
  ]
	
  },
  {
  title: "การไปออกบูธครั้งแรกของเรา",
  date: "18/10/2026",
  images: [
    "public/images/news/ออกบูธ.jpg",
    "public/images/news/ออกบูธ4.jpg",
    "public/images/news/ออกบูธ2.jpg",
	"public/images/news/ออกบูธ3.jpg"
  ],
  content: "ขอบคุณทุกคนมากๆที่ให้ความสนใจการ์ดเกมน้องใหม่อย่างเราและ สามารถเข้าไปติดตาม การออกบูธ ข่าวสารต่างๆ กิจกรรมต่างๆ ได้ที่หน้า Facebook: SOULVAULT CARD GAME",
  links: [
    {
      text: "Facebook: SOULVAULT CARD GAME",
      url: "https://www.facebook.com/profile.php?id=61594308935017"
    },
    {
      text: "รับชมวิดีโอสอนเล่นได้ที่",
      url: "https://www.youtube.com/@SOULVAULTCARDGAME"
    }
  ]
},
{
  title: "ที่ร้านZ.A มีชุด HD ให้ทดลองเล่นแล้วน้าา",
  date: "19/10/2026",
  images: [
    "public/images/news/Za.jpg"
    
  ],
  content: "ใครอยากลองเล่น สามารถทดลองเล่นได้ที่่ร้าน Zeal Arena ร้านการ์ดย่านเกษตร ได้แล้วนะ มีคนช่วยสอนเล่นด้วย มาลองเล่นกันเยอะๆน้าาา",
  links: [
    {
      text: "Facebook: SOULVAULT CARD GAME",
      url: "https://www.facebook.com/profile.php?id=61594308935017",
	  text: "Facebook: Z.A.",
      url: "https://www.facebook.com/profile.php?id=61594308935017"
    },
    {
      text: "รับชมวิดีโอสอนเล่นได้ที่",
      url: "https://www.youtube.com/@SOULVAULTCARDGAME"
    }
  ]
}
];

// เพิ่มลิงก์ติดต่อ/พอร์ตโฟลิโอของนักวาดได้ที่ artistProfiles โดยใช้ชื่อให้ตรงกับค่า artist บนการ์ด
// ตัวอย่าง: "ชื่อ Artist": { contactUrl: "https://...", bio: "คำแนะนำตัวที่นักวาดอนุญาตให้เผยแพร่" }
const artistProfiles = {
	"Krianza the Decline": {
    contactUrl: "https://www.facebook.com/teerasak.janyod"
  },
  "IMO": {
    contactUrl: "https://www.facebook.com/sutut.petmaneechichana"
  },
  "Pupa": {
    contactUrl: "https://www.facebook.com/profile.php?id=61558620735322"
  },
  "Princ3ss.xx": {
    contactUrl: "https://www.facebook.com/pr3ttyprincessxx"
  },
  "Azuki": {
    contactUrl: "https://www.facebook.com/azu.kiur4"
  },
  "yulinrii": {
    contactUrl: "https://www.facebook.com/profile.php?id=61590425588758"
  },
  "Hoshi~": {
    contactUrl: "https://www.facebook.com/kittima.suntakun"
  },
  "Teerawee": {
    contactUrl: "https://www.facebook.com/teerawee.darawong"
  },
  "Somlnk": {
    contactUrl: "https://www.facebook.com/profile.php?id=100095174726050"
  },
  "SEB": {
    contactUrl: "https://www.facebook.com/aiwa.ak"
  },
  "ผัดขม ชุบแป้ง": {
    contactUrl: "https://www.facebook.com/nithirot.bunnmee"
  },
  "maka": {
    contactUrl: "https://www.facebook.com/ma.ka.771095"
  },
  "givven13": {
    contactUrl: "https://www.facebook.com/ubam.710139"
  },
  "Poni Koma": {
    contactUrl: "https://www.facebook.com/poni.koma"
  },
  "Peet": {
    contactUrl: "https://www.facebook.com/peet.4z"
  },
  "คูมเดียร์ชอบกินแซลมอน": {
    contactUrl: "https://www.facebook.com/phannakan.sonchol.2024"
  },
  "Wave": {
    contactUrl: "https://www.facebook.com/groups/270204683431401/user/61577995180204/"
  },
  "กาเลอ": {
    contactUrl: "https://www.facebook.com/profile.php?id=61570962243617"
  },
  "Khxa Phunn": {
    contactUrl: "https://www.facebook.com/khaokwax"
  },
  "YULA": {
    contactUrl: "https://www.facebook.com/profile.php?id=61585426634784"
  },
  "นัทโน๊ะ กล๊มกลม": {
    contactUrl: "https://www.facebook.com/nath.noa.kl.mk.lm"
  },
  "七2": {
    contactUrl: "https://www.facebook.com/profile.php?id=61571820836559&mibextid=wwXIfr&rdid=rydiqHcsJ9rDGyVG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HsaxXqsKX%2F%3Fmibextid%3DwwXIfr#"
  },
  "Miiru Meru": {
    contactUrl: "https://www.facebook.com/Miiiirume?rdid=497ZKedXGEKn7pI4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ChDKrsWEZ%2F#"
  },
  "MaRu": {
    contactUrl: "-"
  },
  "ตีนแมว": {
    contactUrl: "https://www.facebook.com/profile.php?id=100039081109390"
  },
  "Adamas": {
    contactUrl: "-"
  },
  "ศาลพระภูมิ": {
    contactUrl: "https://www.facebook.com/puripat.kanlaya"
  },
  "Greenmaple P. Kanaria": {
    contactUrl: "https://www.facebook.com/profile.php?id=100073482976693"
  },
  "Grace Zx": {
    contactUrl: "https://www.facebook.com/kam.sier.71"
  },
  "ART•I•TON": {
    contactUrl: "https://www.facebook.com/sanhnat.lukkaew.9"
  },
  "อาราย อีกว้าา": {
    contactUrl: "https://www.facebook.com/profile.php?id=61558620735322"
  },
  "Rate File": {
    contactUrl: "https://www.facebook.com/d.m.n.ta.2025"
  },
  "Nong Aum": {
    contactUrl: "https://www.facebook.com/thanchanok.sueawai"
  },
  "Pinmu": {
    contactUrl: "https://www.facebook.com/share/14rzP9b2jN4/"
  },
  "Voo Voo": {
    contactUrl: "https://www.facebook.com/voo.voo.219474"
  },
  "NegiArt": {
    contactUrl: "https://www.facebook.com/ne.neki.977355"
  },
  "decinite_x_01": {
    contactUrl: "https://www.facebook.com/profile.php?id=61579803219426"
  },
  "decinite_x_07": {
    contactUrl: "https://www.facebook.com/profile.php?id=61579803219426"
  },
  "SeePee": {
    contactUrl: "https://www.facebook.com/see.pee.7902"
  },
  "Haruki": {
    contactUrl: "https://www.facebook.com/Arasaki.makoto"
  },
  "Milky Way": {
    contactUrl: "https://www.facebook.com/milky.way.599632"
  },
  "Muusin art": {
    contactUrl: "https://www.facebook.com/muza.lookmuza"
  },
  "Yurin": {
    contactUrl: "https://www.facebook.com/cxllme.pim.281450"
  },
  "ปวดขี้ ทำอย่างไรดี": {
    contactUrl: "https://www.facebook.com/profile.php?id=100074189713730"
  },
  "Karen'n": {
    contactUrl: "https://www.facebook.com/botann.sujinda.9"
  },
  "ทันจิ ชอบหนุ่มรางดาว": {
    contactUrl: "https://www.facebook.com/Bairxi"
  },
  "yully.yul ( 율 )": {
    contactUrl: "https://www.facebook.com/jellistt"
  },
  "แมวไม่ดีแมวเลว": {
    contactUrl: "https://www.facebook.com/groups/719839965083826/user/100017689217214/"
  },
  "ไผ่ไผ่": {
    contactUrl: "https://www.facebook.com/plai.pittafai"
  },
  "黒い　花": {
    contactUrl: "https://www.facebook.com/aphirak.kongsang.7"
  },
  "NineNineZ89": {
    contactUrl: "https://www.facebook.com/LesNineNineZ"
  },
  "N44": {
    contactUrl: "https://www.facebook.com/xen.xo.834592"
  },
  "Soöria": {
    contactUrl: "https://www.facebook.com/saranrat.ruenlue"
  },
  "Khai Pham": {
    contactUrl: "https://www.facebook.com/profile.php?id=61572510028992"
  },
  "AB Oonto": {
    contactUrl: "https://www.facebook.com/araya.boonto"
  },
  "auiiua_06": {
    contactUrl: "https://www.facebook.com/aui.rakanime"
  },
   "wavecolorstudio": {
    contactUrl: "https://www.facebook.com/BOOKWAVECOLOR"
  },
   "Lumoirmore": {
    contactUrl: "https://www.facebook.com/rumoilumoir"
  },
   "Mint Chamaiporn": {
    contactUrl: "https://www.facebook.com/mint2014pp"
  },
   "พี่เเมวซาวานน่า": {
    contactUrl: "https://www.facebook.com/phi.emew.sa.wan.na.khea.klaw.phi.markh.sa.ka.be.xk"
  },
   "Satria": {
    contactUrl: "https://www.facebook.com/satria.lawrence"
  },
   "เซนดา": {
    contactUrl: "https://www.facebook.com/profile.php?id=61571645272146"
  },
   "Kaiser Natnicha": {
    contactUrl: "https://www.facebook.com/profile.php?id=61578307213235"
  },
   "CORONA": {
    contactUrl: "https://www.facebook.com/tn.kla.475466"
  },
   "Lafie_ven": {
    contactUrl: "https://www.facebook.com/rak.mamwng.dxng"
  },
  "Fina": {
    contactUrl: "https://www.facebook.com/pasakorn.homfung"
  },
  "somkaizoiz": {
    contactUrl: "https://www.facebook.com/profile.php?id=100037648083328"
  },
  "Yak": {
    contactUrl: "https://www.facebook.com/yakinsect"
  },
  "pun": {
    contactUrl: "https://www.facebook.com/punyatorn.tongoiam"
  },
  "harukix": {
    contactUrl: "https://www.facebook.com/haruki.marisuya"
  },
  "Chotiwat Nilthanee": {
    contactUrl: "https://www.facebook.com/chotiwat.nilthanee"
  },
  "Sedle": {
    contactUrl: "https://www.facebook.com/biwth.ti.biwth.ti"
  },
  "หนองในเล็บ": {
    contactUrl: "https://www.facebook.com/profile.php?id=61557207578237"
  },
  "Nop9": {
    contactUrl: "https://www.facebook.com/profile.php?id=61565372067739"
  },
  "Hompoy": {
    contactUrl: "https://www.facebook.com/ar.rakoda.3"
  },
  "Chathai Suchii": {
    contactUrl: "https://www.facebook.com/ilovemisterzeus"
  },
  "jonny": {
    contactUrl: "https://www.facebook.com/profile.php?id=61588003048245"
  },
  "inalone": {
    contactUrl: "https://www.facebook.com/inalone.2024"
  },
  "Punch": {
    contactUrl: "https://www.facebook.com/profile.php?id=61561491848693"
  },
  "Hika mori": {
    contactUrl: "https://www.facebook.com/mitsuba.tatsu"
  },
  "kanyarat luengtrakulrung": {
    contactUrl: "https://www.facebook.com/kanyarat.leangtrakulrung"
  },
  // "Krianza the Decline": { contactUrl: "https://...", bio: "" },
};

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

function numericRangeMatches(card, minId, maxId, field){
  const minNode=document.getElementById(minId), maxNode=document.getElementById(maxId);
  const minValue=minNode && minNode.value.trim()!=="" ? Number(minNode.value) : null;
  const maxValue=maxNode && maxNode.value.trim()!=="" ? Number(maxNode.value) : null;
  if(minValue===null && maxValue===null)return true;
  const raw=card?.[field];
  if(raw===undefined || raw===null || String(raw).trim()==="")return false;
  const value=Number(raw);
  if(!Number.isFinite(value))return false;
  return (minValue===null || value>=minValue) && (maxValue===null || value<=maxValue);
}
function matchesCardStats(card, prefix){
  const costMinId=prefix ? prefix+"CostMinFilter" : "costMinFilter";
  const costMaxId=prefix ? prefix+"CostMaxFilter" : "costMaxFilter";
  const powerMinId=prefix ? prefix+"PowerMinFilter" : "powerMinFilter";
  const powerMaxId=prefix ? prefix+"PowerMaxFilter" : "powerMaxFilter";
  return numericRangeMatches(card, costMinId, costMaxId, "cost") &&
         numericRangeMatches(card, powerMinId, powerMaxId, "power");
}
function render(){
 const q=search.value.toLowerCase().trim(), type=typeFilter.value, rarity=rarityFilter.value, set=(document.querySelector("#setFilter")?.value||"All");
 const filtered=cards.filter(c=>(type==="All"||c.type===type)&&(rarity==="All"||c.rarity===rarity)&&(set==="All"||c.set===set)&&matchesCardStats(c, "")&&[c.name,c.subtitle,c.type,c.element,c.ability,c.set].join(" ").toLowerCase().includes(q));
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
       openCard(
  cards.find(c => String(c.id) === String(el.dataset.id)),
  list
);
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
let currentDetailList = cards;

function showPreviousCard() {
  if (!currentDetailList.length) return;

  currentDetailIndex =
    (currentDetailIndex - 1 + currentDetailList.length)
    % currentDetailList.length;

  openCard(
    currentDetailList[currentDetailIndex],
    currentDetailList
  );
}

function showNextCard() {
  if (!currentDetailList.length) return;

  currentDetailIndex =
    (currentDetailIndex + 1) % currentDetailList.length;

  openCard(
    currentDetailList[currentDetailIndex],
    currentDetailList
  );
}
function openCard(c, navigationList = cards) {
  if (!c) return;

  currentDetailList = Array.isArray(navigationList)
    ? navigationList
    : cards;

  currentDetailIndex = currentDetailList.findIndex(
    x => String(x.id) === String(c.id)
  );
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
 const artistName=String(c.artist||c.by||"").trim();
 const artistProfile=artistProfiles[artistName]||{};
 const artistContact=document.querySelector("#detailArtistContact");
 const artistNameNode=document.querySelector("#detailArtistName");
 const artistLinkNode=document.querySelector("#detailArtistLink");
 if(artistNameNode)artistNameNode.textContent=artistName||"ไม่ระบุ";
 if(artistLinkNode){
   const contactUrl=String(artistProfile.contactUrl||"").trim();
   const safeUrl=/^https?:\/\//i.test(contactUrl);
   artistLinkNode.href=safeUrl?contactUrl:"#";
   artistLinkNode.classList.toggle("hidden",!safeUrl);
   artistLinkNode.setAttribute("aria-disabled",String(!safeUrl));
   artistLinkNode.onclick=safeUrl?null:(e=>e.preventDefault());
 }
 if(artistContact)artistContact.classList.toggle("hidden",!artistName);
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
  ["search","typeFilter","setFilter","rarityFilter","costMinFilter","costMaxFilter","powerMinFilter","powerMaxFilter"].forEach(id=>{
    const el=document.querySelector("#"+id);
    if(!el)return;
    if(id==="search"||id.endsWith("MinFilter")||id.endsWith("MaxFilter"))el.value="";
    else el.value="All";
  });
}
[search,typeFilter,rarityFilter,document.querySelector("#setFilter"),document.querySelector("#costMinFilter"),document.querySelector("#costMaxFilter"),document.querySelector("#powerMinFilter"),document.querySelector("#powerMaxFilter")].forEach(el=>{
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
{id:"PM1",type:"PLAYMAT",name:"SOULVAULT",image:"/public/images/supply/เพลย์แมต30.60.jpg",desc:"Playmat ธีมหลักของ SOULVAULT",price:"-"},
{id:"SL1",type:"SLEEVE",name:"SOULVAULT",image:"/public/images/supply/หลังการ์ดL.jpg",desc:"Card Sleeve ลายหลังการ์ด Master",price:"-"},];
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
 grid.querySelectorAll(".supply-detail").forEach(b=>{
  b.onclick=()=>{
    const s=supplies.find(x=>String(x.id)===String(b.dataset.id));
    if(s) openSupplyDetail(s);
  };
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
function openSupplyDetail(s){
  if(!s) return;

  const modal=document.querySelector("#supplyDetailModal");
  if(!modal) return;

  const image=document.querySelector("#supplyDetailImage");
  const type=document.querySelector("#supplyDetailType");
  const name=document.querySelector("#supplyDetailName");
  const desc=document.querySelector("#supplyDetailDesc");
  const price=document.querySelector("#supplyDetailPrice");

  type.textContent=s.type;
  name.textContent=s.name;
  desc.textContent=s.desc || "ไม่มีรายละเอียด";
  price.textContent=s.price ? `${s.price} ฿` : "ไม่ระบุ";

  if(s.image){
    image.innerHTML=`
      <img
        src="${escapeHtml(s.image)}"
        alt="${escapeHtml(s.name)}"
      >
    `;
  }else{
    image.innerHTML=`
      <div class="supply-detail-placeholder">
        <span>${s.type==="PLAYMAT" ? "PM" : "SL"}</span>
      </div>
    `;
  }

  modal.classList.remove("hidden");
}

function closeSupplyDetail(){
  document.querySelector("#supplyDetailModal")?.classList.add("hidden");
}

document.querySelector("#supplyDetailClose")?.addEventListener(
  "click",
  closeSupplyDetail
);

document.querySelector("#supplyDetailModal")?.addEventListener("click",e=>{
  if(e.target.id==="supplyDetailModal"){
    closeSupplyDetail();
  }
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
      &&matchesCardStats(c, "collection")
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
      openCard(
  cards.find(c => String(c.id) === String(el.dataset.id)),
  list
);
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
  ["collectionCostMinFilter","collectionCostMaxFilter","collectionPowerMinFilter","collectionPowerMaxFilter"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
}
[["#collectionSearch","input"],["#collectionSetFilter","change"],["#collectionTypeFilter","change"],["#collectionRarityFilter","change"],["#collectionViewFilter","change"],["#collectionCostMinFilter","input"],["#collectionCostMaxFilter","input"],["#collectionPowerMinFilter","input"],["#collectionPowerMaxFilter","input"]].forEach(([sel,evt])=>{
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
        <small>MAIN DECK ${getMainDeckCount(d)}/60</small>
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
  ${card.image
    ? cardImageHTML(card, "deck-add-preview-image")
    : `<span>${escapeHtml(card.symbol || card.name?.charAt(0) || "?")}</span>`
  }
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
  if(decks.some(d=>String(d.id)===String(selectedSaved))) selectedDeckId=String(selectedSaved)
  modal.querySelector("#confirmDeckAdd").disabled = !selectedDeckId;

  const buttons=modal.querySelectorAll(".deck-select-card");
 buttons.forEach(btn => {
  btn.onclick = () => {
    selectedDeckId = String(btn.dataset.deckId);

    buttons.forEach(b => {
      b.classList.remove("selected");

      const mark = b.querySelector(".deck-selected-mark");
      if (mark) mark.remove();
    });

    btn.classList.add("selected");

    const mark = document.createElement("span");
    mark.className = "deck-selected-mark";
    mark.textContent = "✓";
    btn.appendChild(mark);

    modal.querySelector("#confirmDeckAdd").disabled = false;
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
    if(oldQty<1 && getMainDeckCount(deck)>=60){alert("MAIN DECK ครบ 60 ใบแล้ว");return;}
    deck.untimeat=card.id;
    deck.main[card.id]=1;
 } else {
  const currentQty = Number(deck.main[card.id] || 0);

  if (card.type === "POCKET") {
    const limit = 10;
    const pocketTotal = Object.entries(deck.main).reduce(
      (sum, [id, qty]) => {
        const c = cards.find(x => x.id === id);
        return sum + (c?.type === "POCKET"
          ? Number(qty) || 0
          : 0);
      },
      0
    );

    if (pocketTotal + qty > 10) {
      alert("POCKET มีได้สูงสุด 10 ใบ");
      return;
    }

    if (currentQty + qty > limit) {
      alert("POCKET ใบนี้ใส่ได้สูงสุด 10 ใบ");
      return;
    }
  } else {
    const sameNameTotal = getSameNameCount(deck, card);

    if (sameNameTotal + qty > 3) {
      alert(
        `การ์ดชื่อ "${card.name}" ใส่รวมทุกความแรร์ได้สูงสุด 3 ใบ (ตอนนี้มี ${sameNameTotal} ใบ)`
      );
      return;
    }
  }

  const available = 60 - getMainDeckCount(deck);

  if (qty > available) {
    alert(`MAIN DECK เหลือพื้นที่อีก ${available} ใบ`);
    return;
  }

  deck.main[card.id] = currentQty + qty;
}

  localStorage.setItem("stealAreaDecks",JSON.stringify(decks));
  localStorage.setItem("stealAreaActiveDeckId",deck.id);
  const modal=document.querySelector("#addToDeckModal");
  if(modal)modal.remove();
  showToast(`เพิ่ม ${card.name} จำนวน ${qty} ใบ เข้า ${deck.name||"Deck"} แล้ว`);
  render();
}

/* ---------------- ARTIST DIRECTORY ---------------- */
function getArtistNames(){
  return [...new Set(cards.map(c=>String(c.artist||c.by||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"th"));
}
function artistCardsFor(name){return cards.filter(c=>String(c.artist||c.by||"").trim()===name);}
let activeArtistCardView = "";
function renderArtistDirectory(){
  const searchNode=document.querySelector("#artistSearch"), filterNode=document.querySelector("#artistFilter");
  const profileGrid=document.querySelector("#artistProfiles"), cardGrid=document.querySelector("#artistCardGrid");
  if(!searchNode||!filterNode||!profileGrid||!cardGrid)return;
  const names=getArtistNames(), selected=filterNode.value||"All";
  filterNode.innerHTML='<option value="All">นักวาดทั้งหมด</option>'+names.map(n=>`<option value="${escapeHtml(n)}">${escapeHtml(n)}</option>`).join("");
  filterNode.value=names.includes(selected)?selected:"All";
  const q=searchNode.value.trim().toLocaleLowerCase();
  const visibleNames=names.filter(name=>{
    const profile=artistProfiles[name]||{}, related=artistCardsFor(name);
    return (filterNode.value==="All"||name===filterNode.value) && (!q||name.toLocaleLowerCase().includes(q)||String(profile.bio||"").toLocaleLowerCase().includes(q)||related.some(c=>c.name.toLocaleLowerCase().includes(q)));
  });
  profileGrid.innerHTML=visibleNames.map(name=>{
    const profile=artistProfiles[name]||{}, related=artistCardsFor(name), url=String(profile.contactUrl||"").trim();
    const validUrl=/^https?:\/\//i.test(url);
    return `<article class="artist-profile-card" style="--artist-bg-image:url(&quot;${escapeHtml(related.find(c=>c.image)?.image||"")}&quot;)"><div class="artist-profile-copy"><h3>${escapeHtml(name)}</h3><p>${escapeHtml(profile.bio||"นักวาด/ผู้สร้างสรรค์ผลงาน")}</p><small>${related.length} ใบจากการ์ดทั้งหมด</small>${validUrl?`<a class="artist-contact-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">ช่องทางติดต่อ / ผลงาน</a>`:`<span class="artist-contact-missing">ยังไม่ได้เพิ่มลิงก์ติดต่อ</span>`}</div><button class="artist-view-cards" type="button" data-artist-select="${escapeHtml(name)}">ดูการ์ดของนักวาด</button></article>`;
  }).join("");
  const canShowCards=activeArtistCardView && filterNode.value===activeArtistCardView && visibleNames.includes(activeArtistCardView);
  const shownCards=canShowCards?cards.filter(c=>{const name=String(c.artist||c.by||"").trim();return name===activeArtistCardView&&(!q||name.toLocaleLowerCase().includes(q)||c.name.toLocaleLowerCase().includes(q))&&matchesCardStats(c, "artist");}):[];
  const cardsHeading=document.querySelector(".artist-cards-heading");
  if(cardsHeading)cardsHeading.hidden=!canShowCards;
  cardGrid.hidden=!canShowCards;
  cardGrid.innerHTML=shownCards.map(c=>`<article class="card artist-card-tile" data-artist-card-id="${escapeHtml(c.id)}"><div class="card-art ${rarityClass(c.rarity)}">${cardImageHTML(c)}${c.image?"":`<div class="card-symbol">${escapeHtml(c.symbol||"◇")}</div>`}</div><div class="card-info"><div class="tag-row"><span class="tag">${escapeHtml(c.type||"")}</span><span class="tag rarity">${escapeHtml(c.rarity||"")}</span></div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.artist||c.by||"")}</p></div></article>`).join("");
  const countNode=document.querySelector("#artistCardCount"); if(countNode)countNode.textContent=`${shownCards.length} ใบ`;
  document.querySelector("#artistEmpty")?.classList.toggle("hidden",shownCards.length>0);
  profileGrid.querySelectorAll("[data-artist-select]").forEach(btn=>btn.addEventListener("click",()=>{filterNode.value=btn.dataset.artistSelect;activeArtistCardView=btn.dataset.artistSelect;renderArtistDirectory();document.querySelector(".artist-cards-heading")?.scrollIntoView({behavior:"smooth",block:"start"});}));
  cardGrid.querySelectorAll("[data-artist-card-id]").forEach(el=>el.addEventListener("click",()=>{const card=cards.find(c=>String(c.id)===String(el.dataset.artistCardId));if(card)openCard(card,shownCards);}));
}
document.querySelector("#artistSearch")?.addEventListener("input",renderArtistDirectory);
document.querySelector("#artistFilter")?.addEventListener("change",()=>{activeArtistCardView="";renderArtistDirectory();});
["artistCostMinFilter","artistCostMaxFilter","artistPowerMinFilter","artistPowerMaxFilter"].forEach(id=>document.getElementById(id)?.addEventListener("input",renderArtistDirectory));
document.querySelector("#clearArtistFilters")?.addEventListener("click",()=>{
  const searchNode=document.querySelector("#artistSearch");
  const filterNode=document.querySelector("#artistFilter");
  if(searchNode)searchNode.value="";
  if(filterNode)filterNode.value="All";
  ["artistCostMinFilter","artistCostMaxFilter","artistPowerMinFilter","artistPowerMaxFilter"].forEach(id=>{
    const input=document.getElementById(id);
    if(input)input.value="";
  });
  activeArtistCardView="";
  renderArtistDirectory();
});

document.querySelectorAll(".nav").forEach(btn=>btn.onclick=()=>{
 document.querySelectorAll(".nav").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".section").forEach(x=>x.classList.remove("active-section"));
 document.querySelector("#"+btn.dataset.section).classList.add("active-section");
 document.body.classList.toggle("show-page-welcome-heading", ["home","roster"].includes(btn.dataset.section));
 document.querySelector(".sidebar").classList.remove("open");
 if(btn.dataset.section==="deck") initDeck();
 if(btn.dataset.section==="collection") renderCollection();
 if(btn.dataset.section==="supply") initSupply();
 if(btn.dataset.section==="artists") renderArtistDirectory();
 if(btn.dataset.section==="news") renderNews();
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
      : `<span>${escapeHtml(cover?.symbol||"-")}</span>`;
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

// ===== Render SOULVAULT News =====
function renderNews(){
  const grid=document.querySelector("#newsGrid");
  const empty=document.querySelector("#newsEmpty");
  const detail=document.querySelector("#newsDetail");
  if(!grid || !empty) return;
  const items=Array.isArray(newsList)?newsList:[];
  if(detail) detail.classList.add("hidden");
  grid.classList.remove("hidden");
  if(!items.length){
    grid.innerHTML="";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");
  grid.innerHTML=items.map((news,index)=>{
    const title=escapeHtml(news.title||"ข่าวสาร SOULVAULT");
    const date=escapeHtml(news.date||"");
    const content=escapeHtml(news.content||"");
    const firstImage=String((Array.isArray(news.images)&&news.images[0])||news.image||"").trim();
    const imageHTML=firstImage
      ? `<img class="news-card-image" src="${escapeHtml(firstImage)}" alt="${title}" loading="lazy" onerror="this.parentElement.classList.add('news-image-missing');this.remove()">`
      : `<div class="news-card-no-image">SOULVAULT</div>`;
    return `<article class="news-card" data-news-index="${index}" tabindex="0" role="button" aria-label="อ่านข่าว: ${title}">
      <div class="news-card-media">${imageHTML}</div>
      <div class="news-card-body">
        ${date?`<div class="news-card-date">${date}</div>`:""}
        <h3>${title}</h3>
        <p>${content}</p>
        <span class="news-read-more">อ่านรายละเอียดข่าว →</span>
      </div>
    </article>`;
  }).join("");

  // ปิดตัวเล่นภาพเดิมก่อนเปิดข่าวใหม่/กลับหน้ารายการ
  let newsImageTimer=null;
  const stopNewsImageSlideshow=()=>{
    if(newsImageTimer!==null){clearInterval(newsImageTimer);newsImageTimer=null;}
  };

  const openNewsDetail=(index)=>{
    const news=items[index];
    if(!news || !detail) return;
    stopNewsImageSlideshow();
    const titleEl=document.querySelector("#newsDetailTitle");
    const dateEl=document.querySelector("#newsDetailDate");
    const textEl=document.querySelector("#newsDetailText");
    const mediaEl=document.querySelector("#newsDetailMedia");
    const linksEl=document.querySelector("#newsDetailLinks");
    if(titleEl) titleEl.textContent=news.title||"ข่าวสาร SOULVAULT";
    if(dateEl){dateEl.textContent=news.date||"";dateEl.classList.toggle("hidden",!news.date);}
    if(textEl) textEl.textContent=news.details||news.content||"ไม่มีรายละเอียดเพิ่มเติม";

    // รองรับทั้ง images: [] และ image เดิม เพื่อไม่ให้ข่าวเก่าเสีย
    const images=(Array.isArray(news.images)?news.images:[])
      .map(value=>String(value||"").trim()).filter(Boolean);
    if(!images.length && String(news.image||"").trim()) images.push(String(news.image).trim());

    if(mediaEl){
      mediaEl.innerHTML="";
      if(images.length){
        const img=document.createElement("img");
        img.className="news-detail-image";
        img.alt=news.title||"รูปข่าวสาร";
        img.onerror=()=>{img.classList.add("news-image-broken");};
        const controls=document.createElement("div");
        controls.className="news-slideshow-controls";
        const previous=document.createElement("button");
        previous.type="button"; previous.className="news-slide-arrow"; previous.textContent="‹"; previous.setAttribute("aria-label","รูปก่อนหน้า");
        const counter=document.createElement("span"); counter.className="news-slide-counter";
        const next=document.createElement("button");
        next.type="button"; next.className="news-slide-arrow"; next.textContent="›"; next.setAttribute("aria-label","รูปถัดไป");
        let imageIndex=0;
        const showImage=(nextIndex)=>{
          imageIndex=(nextIndex+images.length)%images.length;
          img.src=images[imageIndex].startsWith("/")?images[imageIndex]:(images[imageIndex].startsWith("public/")?"/"+images[imageIndex]:images[imageIndex]);
          counter.textContent=`${imageIndex+1} / ${images.length}`;
          previous.disabled=images.length<2; next.disabled=images.length<2;
        };
        previous.addEventListener("click",()=>showImage(imageIndex-1));
        next.addEventListener("click",()=>showImage(imageIndex+1));
        mediaEl.appendChild(img);
        controls.append(previous,counter,next);
        mediaEl.appendChild(controls);
        showImage(0);
        if(images.length>1) newsImageTimer=setInterval(()=>showImage(imageIndex+1),3000);
      }else{
        mediaEl.innerHTML='<div class="news-detail-no-image">SOULVAULT</div>';
      }
    }

    if(linksEl){
      const links=Array.isArray(news.links)?news.links:[];
      linksEl.innerHTML="";
      const validLinks=links.map(link=>typeof link==="string"?{text:link,url:link}:link)
        .filter(link=>link && typeof link.url==="string" && /^(https?:\/\/|\/)/i.test(link.url.trim()));
      if(validLinks.length){
        const heading=document.createElement("h3"); heading.className="news-links-heading"; heading.textContent="ลิงก์ที่เกี่ยวข้อง";
        linksEl.appendChild(heading);
        validLinks.forEach(link=>{
          const a=document.createElement("a");
          a.className="news-detail-link";
          a.href=link.url.trim();
          a.textContent=link.text||link.label||link.url;
          if(/^https?:\/\//i.test(a.href)){a.target="_blank";a.rel="noopener noreferrer";}
          linksEl.appendChild(a);
        });
        linksEl.classList.remove("hidden");
      }else{
        linksEl.classList.add("hidden");
      }
    }

    grid.classList.add("hidden");
    empty.classList.add("hidden");
    detail.classList.remove("hidden");
    detail.scrollIntoView({behavior:"smooth",block:"start"});
  };
  grid.querySelectorAll(".news-card").forEach(card=>{
    const open=()=>openNewsDetail(Number(card.dataset.newsIndex));
    card.addEventListener("click",open);
    card.addEventListener("keydown",event=>{
      if(event.key==="Enter"||event.key===" "){event.preventDefault();open();}
    });
  });
  const backButton=document.querySelector("#newsBackBtn");
  if(backButton){
    // replace avoids accumulating handlers when renderNews runs more than once
    backButton.onclick=()=>{
      stopNewsImageSlideshow();
      detail.classList.add("hidden");
      grid.classList.remove("hidden");
      grid.scrollIntoView({behavior:"smooth",block:"start"});
    };
  }
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
function getSameNameCount(deck, card) {
  if (!deck || !card) return 0;

  return Object.entries(deck.main || {}).reduce(
    (total, [id, qty]) => {
      const existingCard = cards.find(c => c.id === id);

      if (
        existingCard &&
        existingCard.name.trim() === card.name.trim()
      ) {
        return total + (Number(qty) || 0);
      }

      return total;
    },
    0
  );
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
 } else {
  const n = Number(currentDeck.main[c.id] || 0);

  if (c.type === "POCKET") {
    const pocketTotal = getPocketCount();

    if (pocketTotal >= 10)
      return alert("POCKET มีได้สูงสุด 10 ใบ");

    if (n >= 10)
      return alert("POCKET ใบนี้ใส่ได้สูงสุด 10 ใบ");

  } else {
    const sameNameTotal = getSameNameCount(currentDeck, c);

    if (sameNameTotal >= 3) {
      return alert(
        `การ์ดชื่อ "${c.name}" ใส่รวมทุกความแรร์ได้สูงสุด 3 ใบ`
      );
    }
  }

  currentDeck.main[c.id] = n + 1;
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

  set("statMainDeck",`${mainCount} / 60`);
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

  set("statMainDeck",`${mainCount} / 60`);
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
  const list=cards.filter(c=>(t==="All"||c.type===t)&&(s==="All"||c.set===s)&&(r==="All"||c.rarity===r)&&matchesCardStats(c, "deck")&&[c.name,c.subtitle,c.rarity,c.type,c.set].join(" ").toLowerCase().includes(q));

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
      cover.innerHTML=`<span id="coverSymbol">${escapeHtml(c.symbol||"-")}</span>`;
    }
  }else{
    cover.className="deck-cover rarity-common";
    cover.dataset.zoneId="";
    cover.innerHTML=`<span id="coverSymbol">-</span>`;
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
        : `<span>${escapeHtml(c.symbol||"-")}</span>`}
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
  if(mainCount>60){
    alert("ไม่สามารถบันทึก Deck ได้ MAIN DECK มี "+mainCount+" ใบ สูงสุด 60 ใบ Pocket และ Untimeat นับรวมใน 60 ใบนี้");
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
  setTimeout(()=>document.querySelector("#deckLinkInput").focus(),60);
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
  ["deckCostMinFilter","deckCostMaxFilter","deckPowerMinFilter","deckPowerMaxFilter"].forEach(id=>{const el=document.getElementById(id);if(el)el.value="";});
}
document.querySelector("#deckSearch")?.addEventListener("input",renderPicker);
document.querySelector("#deckTypeFilter")?.addEventListener("change",renderPicker);
document.querySelector("#deckSetFilter")?.addEventListener("change",renderPicker);
document.querySelector("#deckRarityFilter")?.addEventListener("change",renderPicker);
["deckCostMinFilter","deckCostMaxFilter","deckPowerMinFilter","deckPowerMaxFilter"].forEach(id=>document.getElementById(id)?.addEventListener("input",renderPicker));
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
let testEnergyCards=[];
let testPocketCards=[];
let selectedPocketUid=null;
let selectedPocketCards=new Map();
let testTurn=0;
let testBoard={freeCards:[],characters:[]};
let testMasterGear=[];
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
    testStack=[];testHand=[];testTomb=[];testEnergyCards=[];testPocketCards=[];testTurn=0;testBoard={freeCards:[],characters:[]};testMasterGear=[];testSoulCoreUnderZone=[];testSpecialRotation={master:0};testZoneFlipped=true;
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
  testStack=testStack.slice(0,60);
  testStack.sort(()=>Math.random()-.5);
  testHand=[];testTomb=[];testEnergyCards=[];testPocketCards=[];testTurn=0;testBoard={freeCards:[],characters:[]};testMasterGear=[];testSoulCoreUnderZone=[];testSpecialRotation={master:0};testZoneFlipped=true;
  renderTest();
}

function drawCards(n){
  for(let i=0;i<n && testStack.length;i++)testHand.push(testStack.pop());
  testTurn++;
  renderTest();
}

// Move exactly one top card from Deck directly into Tomb.
function sendTopDeckCardToTomb(){
  if(!testStack.length)return;
  testTomb.push(String(testStack.pop()));
  testTurn++;
  renderTest();
}
window.sendTopDeckCardToTomb=sendTopDeckCardToTomb;

// Shuffle only the cards that remain in the Deck; all other zones stay unchanged.
function shuffleRemainingDeck(){
  for(let i=testStack.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [testStack[i],testStack[j]]=[testStack[j],testStack[i]];
  }
  testTurn++;
  renderTest();
}

// Move the current top card of the Deck into Energy, face down and landscape.
function addTopCardToEnergy(){
  if(!testStack.length)return;
  testEnergyCards.push(String(testStack.pop()));
  testTurn++;
  renderTest();
}
window.addTopCardToEnergy=addTopCardToEnergy;

// Pay the topmost Energy card to Tomb, one card per click.
function payTopEnergyToTomb(){
  if(!testEnergyCards.length)return;
  const topEnergyId=testEnergyCards.pop();
  testTomb.push(String(topEnergyId));
  testTurn++;
  renderTest();
}
window.payTopEnergyToTomb=payTopEnergyToTomb;

// Pay the topmost Pocket card to Tomb, one card per click.
function payTopPocketToTomb(){
  if(!Array.isArray(testPocketCards)||!testPocketCards.length)return;
  const topPocketCard=testPocketCards.pop();
  if(!topPocketCard)return;
  testTomb.push(String(topPocketCard.id));
  if(selectedPocketUid===topPocketCard.uid)selectedPocketUid=null;
  testTurn++;
  renderTest();
}
window.payTopPocketToTomb=payTopPocketToTomb;

function renderEnergyArea(){
  const list=document.querySelector("#testEnergyCards");
  const count=document.querySelector("#testEnergyCount");
  const button=document.querySelector("#addEnergyBtn");
  if(!list)return;
  list.innerHTML=testEnergyCards.map((id,index)=>{
    const c=cards.find(item=>String(item.id)===String(id));
    const back="public/images/cards/หลังการ์ดปกติ.jpg";
    return `<div class="energy-card-back" data-energy-index="${index}" style="top:${index*14}px;z-index:${index+1}" title="Energy ${index+1}">
      <img src="${back}" alt="ด้านหลังการ์ด Energy" onerror="this.remove()"><span class="energy-back-ornament">✦</span><b>SOULVAULT</b><small>ENERGY SOUL</small><span class="energy-back-ornament">✦</span>
    </div>`;
  }).join("");
  if(count)count.textContent=`${testEnergyCards.length} ใบ`;
  if(button)button.disabled=!testStack.length;
  const payButton=document.querySelector("#payEnergyBtn");
  if(payButton)payButton.disabled=!testEnergyCards.length;
}

function resetTest(){buildTestDeck()}

function canReturnBoardCardToHand(id){
  const type=getTestCardType(id);
  if(["master","zone","soul core","soulcore","energy"].includes(type))return false;
  if(testDeck && [testDeck.master,testDeck.zone,...(testDeck.soulCores||[])].some(value=>String(value)===String(id)))return false;
  return true;
}
function returnBoardCardToHand(id,removeCard){
  if(!canReturnBoardCardToHand(id))return;
  testHand.push(String(id));
  removeCard();
  renderTest();
}

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

function getTestCardType(id){
  return String(cards.find(c=>String(c.id)===String(id))?.type||"").trim().toLowerCase();
}
function isGearCard(id){ return getTestCardType(id)==="gear"; }
function attachedGearStackHTML(ids=[],ownerType="",slotId=""){
  if(!Array.isArray(ids)||!ids.length)return "";
  return `<div class="attached-gear-stack" aria-label="Gear ที่สวมใส่">${ids.map((id,i)=>{
    const c=cards.find(card=>String(card.id)===String(id));
    if(!c)return "";
    const image=c.image ? `<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name||"Gear")}">` : `<span class="attached-gear-fallback">${escapeHtml(c.name||"Gear")}</span>`;
    return `<div class="attached-gear-item" style="--gear-index:${i}" title="${escapeHtml(c.name||"Gear")}">${image}<span class="attached-gear-label">${escapeHtml(c.name||"Gear")}</span><button type="button" class="attached-gear-tomb" data-gear-owner="${escapeHtml(ownerType)}" data-gear-slot="${escapeHtml(slotId)}" data-gear-index="${i}" title="นำ Gear ลง Tomb">T</button></div>`;
  }).join("")}</div>`;
}
function sendAttachedGearToTomb(ownerType,slotId,index){
  const gearIndex=Number(index);
  let list=null;
  if(ownerType==="master") list=testMasterGear;
  else if(ownerType==="character") list=testBoard.characters?.find(item=>String(item.slot)===String(slotId))?.gearIds;
  if(!Array.isArray(list)||!Number.isInteger(gearIndex)||gearIndex<0||gearIndex>=list.length)return;
  const [gearId]=list.splice(gearIndex,1);
  testTomb.push(String(gearId));
  renderTest();
}
function attachGearFromSource(data,target){
  if(!data || !["hand","board"].includes(data.source))return false;
  const sourceList=data.source==="hand"?testHand:testBoard.freeCards;
  const item=sourceList[data.index];
  const id=data.source==="hand"?item:item?.id;
  if(id==null || !isGearCard(id))return false;
  if(data.source==="hand")testHand.splice(data.index,1);
  else testBoard.freeCards.splice(data.index,1);
  if(target.type==="master") testMasterGear.push(String(id));
  else {
    const character=testBoard.characters?.find(c=>c.slot===target.slotId);
    if(!character){
      // No Character occupies this slot; restore the source card and let normal drop behavior continue.
      if(data.source==="hand")testHand.splice(data.index,0,String(id));
      else testBoard.freeCards.splice(data.index,0,item);
      return false;
    }
    if(!Array.isArray(character.gearIds))character.gearIds=[];
    character.gearIds.push(String(id));
  }
  renderTest();
  return true;
}

function openGearTargetPicker(data){
  if(!data || !["hand","board"].includes(data.source))return false;
  const sourceList=data.source==="hand"?testHand:testBoard.freeCards;
  const item=sourceList[data.index];
  const id=data.source==="hand"?item:item?.id;
  if(id==null || !isGearCard(id))return false;
  document.querySelector("#gearTargetPicker")?.remove();
  const targets=[
    ...(testDeck?.master?[{type:"master",label:"Master",id:String(testDeck.master)}]:[]),
    ...(testBoard.characters||[]).map((c,i)=>({type:"character",slotId:c.slot,id:String(c.id),label:`Character ${i+1}: ${(cards.find(x=>String(x.id)===String(c.id))?.name)||"Character"}`}))
  ];
  const overlay=document.createElement("div");
  overlay.id="gearTargetPicker";
  overlay.className="gear-target-overlay";
  overlay.innerHTML=`<div class="gear-target-panel" role="dialog" aria-modal="true" aria-label="เลือกการ์ดสำหรับสวม Gear">
    <h3>เลือกการ์ดที่จะติดตั้ง Gear</h3>
    <p>เลือก Master หรือ Character ที่อยู่บนสนาม</p>
    <div class="gear-target-options">${targets.map((t,i)=>`<button type="button" class="gear-target-option" data-target-index="${i}">${escapeHtml(t.label)}</button>`).join("")}</div>
    <button type="button" class="gear-target-cancel">ยกเลิก</button>
  </div>`;
  document.body.appendChild(overlay);
  overlay.querySelectorAll("[data-target-index]").forEach(btn=>btn.addEventListener("click",()=>{
    const target=targets[Number(btn.dataset.targetIndex)];
    if(target)attachGearFromSource(data,target);
    overlay.remove();
  }));
  overlay.querySelector(".gear-target-cancel")?.addEventListener("click",()=>overlay.remove());
  overlay.addEventListener("click",e=>{if(e.target===overlay)overlay.remove();});
  return true;
}

function openTestCardDetail(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(c) openCard(c);
}
function openDeckViewer(count=null){
  const modal=document.querySelector("#deckViewerModal");
  const grid=document.querySelector("#deckViewerGrid");
  const summary=document.querySelector("#deckViewerSummary");
  if(!modal || !grid || !summary)return;
  const total=testStack.length;
  if(count===null){
    summary.textContent=`Deck มี ${total} ใบ · เลือกจำนวนการ์ดที่ต้องการดู`;
    grid.innerHTML="";
    grid.classList.add("deck-viewer-grid-hidden");
    modal.querySelectorAll("[data-deck-view-count]").forEach(btn=>btn.classList.remove("active"));
    modal.classList.remove("hidden");
    return;
  }
  const amount=count==="all" ? total : Math.min(Math.max(1,Number(count)||1),total);
  // testStack.pop() คือการ์ดบนสุด จึงแสดงจากบนสุดลงไป
  const visibleIds=testStack.slice(Math.max(0,total-amount)).reverse();
  summary.textContent=count==="all"
    ? `แสดงการ์ดทั้งหมด ${total} ใบ · คลิกการ์ดเพื่อเลือกขึ้นมือหรือลงสนาม`
    : `แสดง ${visibleIds.length} ใบจากด้านบนของ Deck · คลิกการ์ดเพื่อเลือกขึ้นมือหรือลงสนาม`;
  grid.innerHTML=visibleIds.map((id,index)=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return "";
    return `<div class="deck-picker-card deck-viewer-card ${rarityClass(c.rarity)}" data-id="${escapeHtml(id)}" title="คลิกเพื่อเลือก ${escapeHtml(c.name)}">
      ${c.image ? `<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}" loading="lazy">` : `<b>${escapeHtml(c.name)}</b>`}
      <span class="deck-picker-count">บนสุด ${index+1}</span>
    </div>`;
  }).join("") || `<div class="deck-viewer-empty">ไม่มีการ์ดเหลือใน Deck</div>`;
  grid.classList.remove("deck-viewer-grid-hidden");
  grid.querySelectorAll(".deck-viewer-card[data-id]").forEach(card=>{
    card.addEventListener("click",()=>openDeckCardChoice(card.dataset.id));
  });
  modal.querySelectorAll("[data-deck-view-count]").forEach(btn=>{
    btn.classList.toggle("active",String(btn.dataset.deckViewCount)===String(count));
  });
  modal.classList.remove("hidden");
}
function closeDeckViewer(){document.querySelector("#deckViewerModal")?.classList.add("hidden");}
document.querySelector("#closeDeckViewer")?.addEventListener("click",closeDeckViewer);
document.querySelectorAll("[data-deck-view-count]").forEach(btn=>btn.addEventListener("click",()=>openDeckViewer(btn.dataset.deckViewCount)));
document.querySelector("#deckViewerModal")?.addEventListener("click",e=>{if(e.target.id==="deckViewerModal")closeDeckViewer();});
window.closeDeckViewer=closeDeckViewer;

function openDeckPicker(){
  const modal=document.querySelector("#deckPickerModal");
  const grid=document.querySelector("#deckPickerGrid");
  if(!modal || !grid)return;
  const counts={};
  testStack.forEach(id=>{counts[id]=(counts[id]||0)+1;});
  grid.innerHTML=Object.entries(counts).map(([id,count])=>{
    const c=cards.find(x=>String(x.id)===String(id));
    if(!c)return "";
    return `<div class="deck-picker-card ${rarityClass(c.rarity)}" data-id="${escapeHtml(id)}">
      ${c.image ? `<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">` : `<b>${escapeHtml(c.name)}</b>`}
      <span class="deck-picker-count">×${count}</span>
    </div>`;
  }).join("");
  grid.querySelectorAll(".deck-picker-card").forEach(card=>card.addEventListener("click",()=>openDeckCardChoice(card.dataset.id)));
  modal.classList.remove("hidden");
}
function openDeckCardChoice(id){
  const c=cards.find(x=>String(x.id)===String(id));
  if(!c || !testStack.some(cardId=>String(cardId)===String(id)))return;
  document.querySelectorAll(".deck-card-choice").forEach(el=>el.remove());
  const choice=document.createElement("div");
  choice.className="deck-card-choice";
  choice.innerHTML=`<div class="deck-card-choice-box">
    <button class="close deck-choice-close" type="button" aria-label="ปิด">×</button>
    <h3>${escapeHtml(c.name)}</h3>
    <p>ต้องการนำการ์ดนี้ไปไว้ที่ไหน?</p>
    <div class="deck-choice-actions">
      <button class="gold-btn" id="choiceToHand" type="button">✋ ขึ้น HAND</button>
      <button class="gold-btn" id="choiceToBoard" type="button">◈ ลงสนาม</button>
    </div>
  </div>`;
  document.body.appendChild(choice);
  choice.querySelector(".deck-choice-close").onclick=()=>choice.remove();
  choice.addEventListener("click",e=>{if(e.target===choice)choice.remove();});
  choice.querySelector("#choiceToHand").onclick=()=>{takeCardFromDeck(id,"hand");choice.remove();};
  choice.querySelector("#choiceToBoard").onclick=()=>{takeCardFromDeck(id,"board");choice.remove();};
}
function takeCardFromDeck(id,destination){
  const index=testStack.findIndex(cardId=>String(cardId)===String(id));
  if(index<0)return;
  const [pickedId]=testStack.splice(index,1);
  if(destination==="hand")testHand.push(String(pickedId));
  if(destination==="board")addBoardCard(String(pickedId),.70,.05);
  closeDeckPicker();
  closeDeckViewer();
  renderTest();
}
function closeDeckPicker(){document.querySelector("#deckPickerModal")?.classList.add("hidden");}

// Four Character slots marked C on the lower player's side of Playmat 60.
// Coordinates are percentages of the supplied square playmat image.
const TEST_CHARACTER_SLOTS = [
  // Measured from the centers and inner edges of the four printed C frames
  // on the lower-player side of เพลแมต60.jpg (2048 × 2048).
  {id:0, x:.385, y:.666, w:.119, h:.151},
  {id:1, x:.615, y:.666, w:.119, h:.151},
  {id:2, x:.282, y:.819, w:.132, h:.140},
  {id:3, x:.718, y:.819, w:.132, h:.140}
];
let pendingCharacterPlacement = null;

function findCharacterSlot(x,y){
  // Use a forgiving drop target around each printed C frame. Native drag-and-drop
  // reports the pointer position (not necessarily the card center), so allow a
  // little extra vertical tolerance while still choosing only a nearby C slot.
  let best=null, bestScore=Infinity;
  for(const slot of TEST_CHARACTER_SLOTS){
    const dx=Math.abs(x-slot.x)/slot.w;
    const dy=Math.abs(y-slot.y)/slot.h;
    const score=dx*dx+dy*dy;
    if(dx<=0.78 && dy<=1.25 && score<bestScore){
      best=slot;
      bestScore=score;
    }
  }
  return best;
}

// Upper-right U frame accepts a regular board card and stores it horizontally.
function isUSlotDrop(x,y){
  // Coordinates follow the actual U frame on the square playmat. Include the
  // full inner frame so a drop near its decorative border is still accepted.
  return x>=0.775 && x<=0.985 && y>=0.145 && y<=0.385;
}
function placeCardInUSlot(id){
  // Place by the card's visual center. The original image stays portrait and
  // CSS rotates the card, so the artwork is never stretched or cropped.
  // The U frame is on the right side directly above the Deck.
  // Position by the real board-card dimensions (96 × 134 px) so the
  // rotated card sits inside the U frame instead of the upper C/M area.
  const board=document.querySelector("#playBoard");
  const rect=board?.getBoundingClientRect();
  const cardWidth=rect?.width ? 96/rect.width : .064;
  const cardHeight=rect?.height ? 134/rect.height : .17;
  const centerX=.866;
  const centerY=.55; // move the horizontal card into the U frame directly above the Deck
  addBoardCard(String(id),centerX-cardWidth/2,centerY-cardHeight/2);
  const item=testBoard.freeCards[testBoard.freeCards.length-1];
  if(item)item.rotation=90;
}

function canMoveCardToUSlot(id){
  const type=getTestCardType(id);
  if(type==="master"||type==="zone")return false;
  if(testDeck && [testDeck.master,testDeck.zone].some(value=>value!=null&&String(value)===String(id)))return false;
  return true;
}
function moveCardToUSlot(source,index){
  let id=null;
  if(source==="hand"){
    const at=Number(index); if(!Number.isInteger(at)||at<0||at>=testHand.length)return;
    id=testHand[at]; if(!canMoveCardToUSlot(id))return;
    testHand.splice(at,1);
  }else if(source==="board"){
    const at=Number(index); const item=testBoard.freeCards[at]; if(!item||!canMoveCardToUSlot(item.id))return;
    id=item.id; testBoard.freeCards.splice(at,1);
  }else if(source==="character"){
    const at=Number(index); const item=testBoard.characters?.[at]; if(!item||!canMoveCardToUSlot(item.id))return;
    id=item.id;
    (item.gearIds||[]).forEach(gearId=>testHand.push(String(gearId)));
    testBoard.characters.splice(at,1);
  }
  if(id==null)return;
  placeCardInUSlot(id);
  renderTest();
}
function makeUSlotButton(source,index,id){
  if(!canMoveCardToUSlot(id))return null;
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="test-u-slot-btn";
  btn.textContent="U";
  btn.title="ย้ายการ์ดไปช่อง U (แนวนอน)";
  btn.setAttribute("aria-label","ย้ายการ์ดไปช่อง U");
  btn.draggable=false;
  btn.addEventListener("pointerdown",e=>e.stopPropagation());
  btn.addEventListener("click",e=>{
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
    moveCardToUSlot(source,index);
  });
  return btn;
}

function placeCharacterCard(id,slotId,gearIds=[]){
  if(!testBoard.characters)testBoard.characters=[];
  // Never delete a card when a C slot is already occupied: return the old one to HAND.
  const occupied=testBoard.characters.find(item=>item.slot===slotId);
  if(occupied){
    testHand.push(String(occupied.id));
    (occupied.gearIds||[]).forEach(gearId=>testHand.push(String(gearId)));
    testBoard.characters=testBoard.characters.filter(item=>item.slot!==slotId);
  }
  testBoard.characters.push({uid:"C"+Date.now()+Math.random().toString(36).slice(2,7),id:String(id),slot:slotId,rotation:0,gearIds:Array.isArray(gearIds)?gearIds.slice():[]});
}

function renderCharacterSlots(){
  const layer=document.querySelector("#testCharacterSlots");
  if(!layer)return;
  const placed=(testBoard.characters||[]).map((item,index)=>{
    const slot=TEST_CHARACTER_SLOTS.find(s=>s.id===item.slot);
    if(!slot)return "";
    return `<div class="character-slot-card" data-character-index="${index}" data-slot-id="${slot.id}" style="left:${slot.x*100}% !important;top:${slot.y*100}% !important;width:${slot.w*92}% !important;height:${slot.h*92}% !important">
      ${testCardHTML(item.id,true,index,"character")}
      ${attachedGearStackHTML(item.gearIds||[],"character",item.slot)}
    </div>`;
  }).join("");
  const pending=pendingCharacterPlacement;
  const pendingCard=pending ? `
    <div class="character-confirm-backdrop">
      <div class="character-confirm-panel" role="dialog" aria-modal="true" aria-label="ยืนยันการวาง Character">
        <strong>ยืนยันการวาง Character?</strong>
        <div class="character-confirm-preview">${testCardHTML(pending.cardId,true,0,"pending-character")}</div>
        <div class="character-confirm-actions">
          <button type="button" class="character-confirm-yes">ยืนยัน</button>
          <button type="button" class="character-confirm-no">ยกเลิก</button>
        </div>
      </div>
    </div>` : "";
  layer.innerHTML=placed+pendingCard;

  layer.querySelectorAll(".character-slot-card .test-card").forEach(card=>{
    const index=Number(card.dataset.index);
    const item=testBoard.characters[index];
    if(!item)return;
    card.draggable=true;
    card.ondragstart=e=>{
      e.dataTransfer.setData("text/plain",JSON.stringify({source:"character",index}));
    };
    card.classList.toggle("board-horizontal",Number(item.rotation||0)===90);
    const cardData=cards.find(c=>String(c.id)===String(item.id));
    if(cardData && !["Zone","Soul Core"].includes(String(cardData.type||"").trim())){
      const rotateBtn=document.createElement("button");
      rotateBtn.type="button";
      rotateBtn.className="character-rotate-btn";
      rotateBtn.title=Number(item.rotation||0)===90 ? "หมุนกลับแนวตั้ง" : "วางแนวนอน";
      rotateBtn.textContent="↻";
      rotateBtn.addEventListener("click",ev=>{
        ev.preventDefault();
        ev.stopPropagation();
        item.rotation=Number(item.rotation||0)===90 ? 0 : 90;
        renderTest();
      });
      card.appendChild(rotateBtn);
    }
    card.onclick=()=>openTestCardDetail(item.id);
    card.ondblclick=()=>sendCharacterToTomb(index);
    if(canReturnBoardCardToHand(item.id)){
      const handBtn=document.createElement("button");
      handBtn.type="button";
      handBtn.className="test-hand-btn character-hand-btn";
      handBtn.textContent="HAND";
      handBtn.title="นำการ์ดขึ้นมือ";
      handBtn.draggable=false;
      handBtn.addEventListener("pointerdown",ev=>ev.stopPropagation());
      handBtn.addEventListener("click",ev=>{
        ev.preventDefault();ev.stopPropagation();ev.stopImmediatePropagation();
        returnBoardCardToHand(item.id,()=>{
          (item.gearIds||[]).forEach(gearId=>testHand.push(String(gearId)));
          const currentIndex=testBoard.characters.indexOf(item);
          if(currentIndex>=0)testBoard.characters.splice(currentIndex,1);
        });
      });
      card.parentElement.appendChild(handBtn);
    }
    const uBtn=makeUSlotButton("character",index,item.id);
    if(uBtn)card.parentElement.appendChild(uBtn);
    const tombBtn=document.createElement("button");
    tombBtn.type="button";
    tombBtn.className="test-tomb-btn board-tomb-btn";
    tombBtn.textContent="TOMB";
    tombBtn.title="นำ Character ลง Tomb";
    tombBtn.addEventListener("click",ev=>{
      ev.preventDefault();ev.stopPropagation();sendCharacterToTomb(index);
    });
    card.appendChild(tombBtn);
  });

  layer.querySelector(".character-confirm-yes")?.addEventListener("click",confirmCharacterPlacement);
  layer.querySelector(".character-confirm-no")?.addEventListener("click",cancelCharacterPlacement);
}

function requestCharacterPlacement(data,slotId){
  let cardId=null;
  if(data.source==="hand") cardId=testHand[data.index];
  else if(data.source==="board") cardId=testBoard.freeCards[data.index]?.id;
  else if(data.source==="character") cardId=testBoard.characters?.[data.index]?.id;
  if(cardId==null || getTestCardType(cardId)!=="character")return false;
  pendingCharacterPlacement={source:data.source,index:data.index,slotId,cardId:String(cardId)};
  renderCharacterSlots();
  return true;
}

function confirmCharacterPlacement(){
  const pending=pendingCharacterPlacement;
  if(!pending)return;
  let cardId=pending.cardId;
  let attachedGear=[];
  if(pending.source==="hand"){
    if(testHand[pending.index]==null){cancelCharacterPlacement();return;}
    cardId=String(testHand.splice(pending.index,1)[0]);
  }else if(pending.source==="board"){
    const item=testBoard.freeCards[pending.index];
    if(!item){cancelCharacterPlacement();return;}
    cardId=String(item.id);
    testBoard.freeCards.splice(pending.index,1);
  }else if(pending.source==="character"){
    const item=testBoard.characters?.[pending.index];
    if(!item){cancelCharacterPlacement();return;}
    cardId=String(item.id);
    attachedGear=Array.isArray(item.gearIds)?item.gearIds.slice():[];
    testBoard.characters.splice(pending.index,1);
  }
  pendingCharacterPlacement=null;
  placeCharacterCard(cardId,pending.slotId,attachedGear);
  renderTest();
}

function cancelCharacterPlacement(){
  pendingCharacterPlacement=null;
  renderCharacterSlots();
}

function sendCharacterToTomb(index){
  const item=testBoard.characters?.[index];
  if(!item)return;
  testTomb.push(item.id);
  (item.gearIds||[]).forEach(gearId=>testTomb.push(String(gearId)));
  testBoard.characters.splice(index,1);
  renderTest();
}

function moveCardToCharacterSlot(data,slotId){
  if(data.source==="hand"){
    const id=testHand[data.index];
    if(id==null)return false;
    testHand.splice(data.index,1);
    placeCharacterCard(id,slotId);
    return true;
  }
  if(data.source==="board"){
    const item=testBoard.freeCards[data.index];
    if(!item)return false;
    testBoard.freeCards.splice(data.index,1);
    placeCharacterCard(item.id,slotId);
    return true;
  }
  if(data.source==="character"){
    const item=testBoard.characters?.[data.index];
    if(!item)return false;
    testBoard.characters.splice(data.index,1);
    placeCharacterCard(item.id,slotId);
    return true;
  }
  return false;
}


function isPocketCard(id){
  const c=cards.find(x=>String(x.id)===String(id));
  return !!c && String(c.type||"").toLowerCase()==="pocket";
}

function openPocketPicker(){
  let modal=document.querySelector("#pocketPickerModal");
  if(!modal){
    modal=document.createElement("div");
    modal.id="pocketPickerModal";
    modal.className="pocket-picker-modal";
    modal.innerHTML=`
      <div class="pocket-picker-panel" role="dialog" aria-modal="true" aria-label="เลือกการ์ด Pocket">
        <button type="button" class="pocket-picker-close" aria-label="ปิด">×</button>
        <h3>เลือกการ์ด POCKET</h3>
        <p>เลือกการ์ดได้หลายใบจาก DECK, TOMB หรือ HAND แล้วกดยืนยัน</p>
        <div class="pocket-source-tabs">
          <button type="button" data-pocket-source="deck" class="active">DECK</button>
          <button type="button" data-pocket-source="tomb">TOMB</button>
          <button type="button" data-pocket-source="hand">HAND</button>
        </div>
        <div class="pocket-picker-list"></div>
        <div class="pocket-picker-footer">
          <small class="pocket-picker-note">เลือกเฉพาะการ์ดประเภท Pocket · วางได้สูงสุด 10 ใบ</small>
          <span class="pocket-selected-count">เลือก 0 ใบ</span>
          <button type="button" class="pocket-picker-confirm">ยืนยันการวาง</button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector(".pocket-picker-close").addEventListener("click",()=>{
      modal.classList.remove("open");
      selectedPocketCards.clear();
    });
    modal.addEventListener("click",e=>{
      if(e.target===modal){modal.classList.remove("open");selectedPocketCards.clear();}
    });
    modal.querySelectorAll("[data-pocket-source]").forEach(btn=>{
      btn.addEventListener("click",()=>{
        modal.querySelectorAll("[data-pocket-source]").forEach(b=>b.classList.toggle("active",b===btn));
        renderPocketPickerList(btn.dataset.pocketSource);
      });
    });
    modal.querySelector(".pocket-picker-confirm").addEventListener("click",confirmPocketSelection);
  }
  selectedPocketCards.clear();
  modal.classList.add("open");
  modal.querySelectorAll("[data-pocket-source]").forEach(b=>b.classList.toggle("active",b.dataset.pocketSource==="deck"));
  renderPocketPickerList("deck");
}

function updatePocketPickerCount(){
  const modal=document.querySelector("#pocketPickerModal");
  const count=selectedPocketCards.size;
  const countEl=modal?.querySelector(".pocket-selected-count");
  const confirm=modal?.querySelector(".pocket-picker-confirm");
  if(countEl)countEl.textContent=`เลือก ${count} ใบ · ช่อง Pocket ${testPocketCards.length+count}/10`;
  if(confirm)confirm.disabled=count===0;
}

function renderPocketPickerList(source){
  const modal=document.querySelector("#pocketPickerModal");
  const list=modal?.querySelector(".pocket-picker-list");
  if(!list)return;
  let sourceArray=source==="deck"?testStack:(source==="hand"?testHand:testTomb);
  const entries=sourceArray
    .map((id,index)=>({id:String(id),source,index}))
    .filter(item=>isPocketCard(item.id));
  if(!entries.length){
    list.innerHTML=`<div class="pocket-picker-empty">ไม่มีการ์ด Pocket ในแหล่งนี้</div>`;
    updatePocketPickerCount();
    return;
  }
  list.innerHTML=entries.map(item=>{
    const c=cards.find(x=>String(x.id)===String(item.id));
    const key=`${item.source}:${item.id}:${item.index}`;
    const selected=selectedPocketCards.has(key);
    return `<button type="button" class="pocket-picker-card${selected?" selected":""}" data-source="${item.source}" data-id="${escapeHtml(item.id)}" data-index="${item.index}" aria-pressed="${selected}">
      ${c?.image?`<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}">`:""}
      <span><b>${escapeHtml(c?.name||item.id)}</b><small>${item.source==="deck"?"การ์ดใน Deck":item.source==="tomb"?"จาก Tomb":"จาก Hand"} · ใบที่ ${item.index+1}</small></span>
      <strong>${selected?"เลือกแล้ว":"เลือก"}</strong>
    </button>`;
  }).join("");
  list.querySelectorAll(".pocket-picker-card").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const {source,id}=btn.dataset;
      const index=Number(btn.dataset.index);
      const key=`${source}:${id}:${index}`;
      if(selectedPocketCards.has(key)){
        selectedPocketCards.delete(key);
      }else{
        if(testPocketCards.length+selectedPocketCards.size>=10){
          alert("POCKET วางได้สูงสุด 10 ใบ");
          return;
        }
        selectedPocketCards.set(key,{source,id:String(id),index});
      }
      renderPocketPickerList(source);
    });
  });
  updatePocketPickerCount();
}

function confirmPocketSelection(){
  const modal=document.querySelector("#pocketPickerModal");
  if(!modal||!selectedPocketCards.size)return;
  const selected=[...selectedPocketCards.values()];
  const available=10-testPocketCards.length;
  if(selected.length>available){
    alert(`ช่อง Pocket เหลือพื้นที่อีก ${available} ใบ`);
    return;
  }
  const moved=[];
  for(const source of ["deck","hand","tomb"]){
    const items=selected.filter(item=>item.source===source).sort((a,b)=>b.index-a.index);
    const sourceArray=source==="deck"?testStack:(source==="hand"?testHand:testTomb);
    for(const item of items){
      if(sourceArray[item.index]===item.id){
        sourceArray.splice(item.index,1);
        moved.push(item.id);
      }
    }
  }
  moved.reverse().forEach(id=>testPocketCards.push({
    uid:"P"+Date.now()+Math.random().toString(36).slice(2,8),
    id,
    rotation:0
  }));
  selectedPocketCards.clear();
  modal.classList.remove("open");
  renderTest();
}

function renderPocketZone(){
  const zone=document.querySelector("#testPocketZone");
  const list=document.querySelector("#testPocketCards");
  if(!zone||!list)return;
  const pocketCountEl=document.querySelector("#testPocketZoneCount");
  if(pocketCountEl)pocketCountEl.textContent=String(testPocketCards.length);
  zone.setAttribute("aria-label",`Pocket มีการ์ด ${testPocketCards.length} ใบ · คลิกเพื่อเลือกการ์ด`);
  let pocketAddBtn=zone.querySelector(".pocket-add-btn");
  if(!pocketAddBtn){
    pocketAddBtn=document.createElement("button");
    pocketAddBtn.type="button";
    pocketAddBtn.className="pocket-add-btn";
    pocketAddBtn.title="จ่ายการ์ด Pocket ใบบนสุดลง Tomb";
    pocketAddBtn.setAttribute("aria-label","จ่ายการ์ด Pocket ใบบนสุดลง Tomb");
    pocketAddBtn.classList.add("pocket-pay-btn");
    pocketAddBtn.innerHTML='<img src="public/images/icon/Pocket.png" alt="Pocket"><span class="pocket-pay-cross" aria-hidden="true">×</span>';
    pocketAddBtn.addEventListener("click",e=>{
      e.preventDefault();e.stopPropagation();
      payTopPocketToTomb();
    });
    zone.appendChild(pocketAddBtn);
  }
  list.innerHTML=testPocketCards.map((item,index)=>`
    <div class="test-pocket-card${Number(item.rotation||0)===90?" pocket-card-horizontal":""}${selectedPocketUid===item.uid?" pocket-card-selected":""}" data-pocket-index="${index}" title="คลิกเพื่อเลือกการ์ด · ดับเบิลคลิกเพื่อคืนการ์ดขึ้นมือ">
      ${testCardHTML(item.id,true,index,"pocket-zone")}
    </div>`).join("");
  zone.onclick=e=>{
    if(e.target.closest(".test-pocket-card"))return;
    openPocketPicker();
  };
  zone.onkeydown=e=>{
    if(e.key==="Enter"||e.key===" "){e.preventDefault();openPocketPicker();}
  };
  list.querySelectorAll(".test-pocket-card").forEach(wrap=>{
    const card=wrap.querySelector(".test-card");
    if(!card)return;
    const index=Number(wrap.dataset.pocketIndex);
    const item=testPocketCards[index];
    // Keep later cards above earlier cards when horizontal cards overlap.
    wrap.style.zIndex=String(index+1);
    card.draggable=false;
    card.style.transform=`rotate(${Number(item?.rotation||0)}deg)`;
    const rotateBtn=document.createElement("button");
    rotateBtn.type="button";
    rotateBtn.className="pocket-rotate-btn";
    rotateBtn.title=Number(item?.rotation||0)===90?"หมุนกลับแนวตั้ง":"วางแนวนอนเหมือน Master";
    rotateBtn.textContent="↻";
    rotateBtn.addEventListener("click",e=>{
      e.preventDefault();e.stopPropagation();
      const current=testPocketCards[index];
      if(!current)return;
      current.rotation=Number(current.rotation||0)===90?0:90;
      renderTest();
    });
    // Keep the rotation control as a sibling of the card image, not inside it,
    // so card overflow/rotation cannot clip the button on stacked cards.
    wrap.appendChild(rotateBtn);
    card.onclick=e=>{
      if(e.target.closest(".pocket-rotate-btn"))return;
      e.stopPropagation();
      selectedPocketUid=item?.uid||null;
      list.querySelectorAll(".test-pocket-card").forEach(node=>node.classList.toggle("pocket-card-selected",node===wrap));
      openTestCardDetail(card.dataset.id);
    };
    card.ondblclick=e=>{
      if(e.target.closest(".pocket-rotate-btn"))return;
      e.preventDefault();e.stopPropagation();
      const current=testPocketCards[index];
      if(!current)return;
      testHand.push(current.id);
      if(selectedPocketUid===current.uid)selectedPocketUid=null;
      testPocketCards.splice(index,1);
      renderTest();
    };
    if(canReturnBoardCardToHand(item?.id)){
      const handBtn=document.createElement("button");
      handBtn.type="button";
      handBtn.className="test-hand-btn pocket-hand-btn";
      handBtn.textContent="HAND";
      handBtn.title="นำการ์ดขึ้นมือ";
      handBtn.draggable=false;
      handBtn.addEventListener("pointerdown",e=>e.stopPropagation());
      handBtn.addEventListener("click",e=>{
        e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
        const current=testPocketCards[index];
        if(!current)return;
        returnBoardCardToHand(current.id,()=>{
          if(selectedPocketUid===current.uid)selectedPocketUid=null;
          testPocketCards.splice(index,1);
        });
      });
      wrap.appendChild(handBtn);
    }
  });
}
function rotateAllPocketVertical(){
  // Reset every card the user can rotate back to portrait, including Pocket,
  // free board cards, Character cards, and Master. Zone and Soul Core are untouched.
  // Update the existing elements in place to preserve positions, stacking, and other state.
  if(Array.isArray(testPocketCards)) testPocketCards.forEach(item=>{ item.rotation=0; });
  if(Array.isArray(testBoard?.freeCards)) testBoard.freeCards.forEach(item=>{ item.rotation=0; });
  if(Array.isArray(testBoard?.characters)) testBoard.characters.forEach(item=>{ item.rotation=0; });
  if(testSpecialRotation) testSpecialRotation.master=0;
  selectedPocketUid=null;

  const pocketList=document.querySelector("#testPocketCards");
  if(pocketList){
    pocketList.querySelectorAll(".test-pocket-card").forEach(wrap=>{
      wrap.classList.remove("pocket-card-horizontal");
      const card=wrap.querySelector(".test-card");
      if(card) card.style.transform="rotate(0deg)";
    });
  }
  document.querySelectorAll("#testBoardCards .test-card, .character-slot-card .test-card, #testMasterCard .test-card").forEach(card=>{
    card.classList.remove("board-horizontal");
    card.style.transform="rotate(0deg)";
    const btn=card.querySelector(".board-rotate-btn, .character-rotate-btn, .special-rotate-btn");
    if(btn){ btn.title="วางแนวนอน"; }
  });
  // Refresh Pocket only; avoid rebuilding the whole field or changing card positions.
  if(pocketList) renderPocketZone();
}
// Keep the inline button handler available even if script loading is later wrapped.
window.rotateAllPocketVertical=rotateAllPocketVertical;

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
    renderEnergyArea();
    if(masterEl)masterEl.innerHTML="";
    if(zoneEl)zoneEl.innerHTML="";
    if(soulEl)soulEl.innerHTML="";
    if(soulUnderEl)soulUnderEl.innerHTML="";
    if(nameEl)nameEl.textContent="-";
    if(handEl)handEl.innerHTML=`<div class="hand-empty">ยังไม่มี Deck สำหรับทดลองเล่น</div>`;
    if(boardEl)boardEl.innerHTML="";
    const pocketZone=document.querySelector("#testPocketZone");
    const pocketList=document.querySelector("#testPocketCards");
    if(pocketList)pocketList.innerHTML="";
    if(pocketZone){const count=pocketZone.querySelector("#testPocketZoneCount");if(count)count.textContent="0";}
    return;
  }
  const setText=(selector,value)=>{
    const el=document.querySelector(selector); if(el)el.textContent=value;
  };
  setText("#testDeckName",testDeck.name);
  setText("#testCardsLeft",testStack.length);
  setText("#testHandCount",testHand.length);
  setText("#testTurn",testTurn);
  setText("#testBoardCount",testBoard.freeCards.length+(testBoard.characters||[]).length);
  setText("#pileCount",testStack.length);
  setText("#tombCount",testTomb.length);
  // Tomb displays the most recently sent card, aligned to the bottom of its frame.
  const tombPile=document.querySelector("#testTombPile");
  if(tombPile){
    const latestTombId=testTomb.length ? String(testTomb[testTomb.length-1]) : "";
    const latestTombCard=latestTombId ? cards.find(c=>String(c.id)===latestTombId) : null;
    tombPile.innerHTML=`${latestTombCard?.image ? `<img class="tomb-top-card-image" src="${escapeHtml(latestTombCard.image)}" alt="${escapeHtml(latestTombCard.name||'Tomb card')}">` : ""}${testTomb.length ? `<b id="tombCount">${testTomb.length}</b>` : ""}`;
    tombPile.title=testTomb.length ? `การ์ดล่าสุดใน Tomb: ${latestTombCard?.name||latestTombId} · ทั้งหมด ${testTomb.length} ใบ` : "Tomb ว่าง";
  }
  renderEnergyArea();

  // Initial battlefield layout: Master center, Zone below, Soul Core as a single clickable pile above.
  if(masterEl){
    masterEl.innerHTML=testDeck.master ? testCardHTML(testDeck.master,true,0,"master") : "";
    const card=masterEl.querySelector(".test-card");
    if(card){
      card.style.transform=`rotate(${Number(testSpecialRotation.master||0)}deg)`;
      card.draggable=false;
      card.onclick=()=>openTestCardDetail(card.dataset.id);
      // Keep the rotation button outside the transformed card so it stays upright and clickable.
      const oldRotate=masterEl.querySelector(":scope > .master-rotate-btn");
      if(oldRotate)oldRotate.remove();
      const btn=document.createElement("button");
      btn.type="button";
      btn.className="special-rotate-btn master-rotate-btn";
      btn.title=Number(testSpecialRotation.master||0)===90 ? "หมุนกลับแนวตั้ง" : "วางแนวนอน";
      btn.setAttribute("aria-label",btn.title);
      btn.textContent="↻";
      btn.addEventListener("click",ev=>{
        ev.preventDefault(); ev.stopPropagation();
        testSpecialRotation.master=Number(testSpecialRotation.master||0)===90?0:90;
        renderTest();
      });
      masterEl.appendChild(btn);
    }
    masterEl.insertAdjacentHTML("beforeend",attachedGearStackHTML(testMasterGear,"master",""));
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
      placeBtn.textContent="ZONE";
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

  renderPocketZone();

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
      const uBtn=makeUSlotButton("hand",Number(el.dataset.index),el.dataset.id);
      if(uBtn)el.appendChild(uBtn);
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

  renderCharacterSlots();

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
      if(canReturnBoardCardToHand(item.id)){
        const handBtn=document.createElement("button");
        handBtn.type="button";
        handBtn.className="test-hand-btn board-hand-btn";
        handBtn.title="นำการ์ดขึ้นมือ";
        handBtn.textContent="HAND";
        handBtn.draggable=false;
        handBtn.addEventListener("pointerdown",ev=>ev.stopPropagation());
        handBtn.addEventListener("click",ev=>{
          ev.preventDefault();ev.stopPropagation();ev.stopImmediatePropagation();
          returnBoardCardToHand(item.id,()=>{
            const currentIndex=testBoard.freeCards.indexOf(item);
            if(currentIndex>=0)testBoard.freeCards.splice(currentIndex,1);
          });
        });
        el.appendChild(handBtn);
      }
      const uBtn=makeUSlotButton("board",idx,item.id);
      if(uBtn)el.appendChild(uBtn);
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

  document.querySelectorAll(".attached-gear-tomb").forEach(btn=>{
    btn.onclick=ev=>{
      ev.preventDefault();ev.stopPropagation();
      sendAttachedGearToTomb(btn.dataset.gearOwner,btn.dataset.gearSlot,btn.dataset.gearIndex);
    };
  });
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
    Counter: "public/images/icon/Counter.png",
  E: "public/images/icon/E.png",
  Pocket: "public/images/icon/Pocket.png",
  Dot: "public/images/icon/Dot.jpg",
  OpenZone: "public/images/icon/OpenZone.png",
  Forever: "public/images/icon/Forever.png",
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
document.querySelector("#testDeckPile").onclick=()=>openDeckViewer();
document.querySelector("#deckDrawAction")?.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();drawCards(1);});
document.querySelector("#deckTopToTombAction")?.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();sendTopDeckCardToTomb();});
document.querySelector("#deckShuffleAction")?.addEventListener("click",e=>{
  e.preventDefault();e.stopPropagation();
  const pile=document.querySelector("#testDeckPile");
  if(pile){
    pile.classList.remove("deck-shuffle-anim");
    void pile.offsetWidth;
    pile.classList.add("deck-shuffle-anim");
    window.setTimeout(()=>pile.classList.remove("deck-shuffle-anim"),950);
  }
  shuffleRemainingDeck();
});
document.querySelector("#drawPileBtn").onclick=()=>drawCards(1);
document.querySelector("#addEnergyBtn")?.addEventListener("click",addTopCardToEnergy);
document.querySelector("#payEnergyBtn")?.addEventListener("click",payTopEnergyToTomb);

const playBoard=document.querySelector("#playBoard");
const testHandEl=document.querySelector("#testHand");

// Mobile tap-to-place: tap a card to select it, then tap a position on the playmat.
// Desktop keeps the original native drag/drop behavior below.
(function enableMobileTapPlacement(){
  if(!testHandEl || !playBoard) return;
  const coarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  if(!coarsePointer) return;
  let selected=null; // {source:"hand"|"board", id:string}

  function clearSelection(){
    document.querySelectorAll(".test-card.mobile-place-selected").forEach(el=>el.classList.remove("mobile-place-selected"));
    selected=null;
    playBoard.classList.remove("mobile-place-target");
  }
  function selectCard(card){
    const source=card.dataset.source;
    if(source!=="hand" && source!=="board" && source!=="character") return;
    if(selected && selected.source===source && selected.id===String(card.dataset.id)){
      clearSelection();
      return;
    }
    document.querySelectorAll(".test-card.mobile-place-selected").forEach(el=>el.classList.remove("mobile-place-selected"));
    selected={source,id:String(card.dataset.id)};
    card.classList.add("mobile-place-selected");
    playBoard.classList.add("mobile-place-target");
  }

  document.addEventListener("click",e=>{
    if(e.target.closest("button")) return; // keep Tomb/rotate buttons working
    const card=e.target.closest(".test-card[data-source]");
    if(card && (testHandEl.contains(card) || playBoard.contains(card))){
      e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
      selectCard(card);
      return;
    }
    if(!selected) return;
    const handArea=e.target.closest("#testHand");
    if(handArea && selected.source==="board"){
      const index=testBoard.freeCards.findIndex(item=>String(item.id)===selected.id);
      if(index>=0){testHand.push(testBoard.freeCards[index].id);testBoard.freeCards.splice(index,1);clearSelection();renderTest();}
      e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
      return;
    }
    if(!playBoard.contains(e.target)) return;
    const rect=playBoard.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width;
    const y=(e.clientY-rect.top)/rect.height;
    const slot=findCharacterSlot(x,y);
    let selectedCardId=null;
    if(selected.source==="hand")selectedCardId=testHand.find(id=>String(id)===selected.id);
    else if(selected.source==="board")selectedCardId=testBoard.freeCards.find(item=>String(item.id)===selected.id)?.id;
    else if(selected.source==="character")selectedCardId=testBoard.characters.find(item=>String(item.id)===selected.id)?.id;
    if(isUSlotDrop(x,y)){
      if(selected.source==="hand"){
        const index=testHand.findIndex(id=>String(id)===selected.id);
        if(index>=0){const id=testHand.splice(index,1)[0];placeCardInUSlot(id);}
      }else if(selected.source==="board"){
        const index=testBoard.freeCards.findIndex(item=>String(item.id)===selected.id);
        if(index>=0){const item=testBoard.freeCards.splice(index,1)[0];placeCardInUSlot(item.id);}
      }else if(selected.source==="character"){
        const index=testBoard.characters.findIndex(item=>String(item.id)===selected.id);
        if(index>=0){const item=testBoard.characters.splice(index,1)[0];placeCardInUSlot(item.id);(item.gearIds||[]).forEach(gearId=>testHand.push(String(gearId)));}
      }
    }else if(isGearCard(selectedCardId)){
      let gearIndex=-1;
      if(selected.source==="hand")gearIndex=testHand.findIndex(id=>String(id)===selected.id);
      else if(selected.source==="board")gearIndex=testBoard.freeCards.findIndex(item=>String(item.id)===selected.id);
      if(gearIndex>=0)openGearTargetPicker({source:selected.source,index:gearIndex});
    }else if(slot){
      let index=-1;
      if(selected.source==="hand") index=testHand.findIndex(id=>String(id)===selected.id);
      else if(selected.source==="board") index=testBoard.freeCards.findIndex(item=>String(item.id)===selected.id);
      else if(selected.source==="character") index=testBoard.characters.findIndex(item=>String(item.id)===selected.id);
      if(index>=0) requestCharacterPlacement({source:selected.source,index},slot.id);
    }else if(selected.source==="hand"){
      const index=testHand.findIndex(id=>String(id)===selected.id);
      if(index>=0){const id=testHand.splice(index,1)[0];addBoardCard(id,x-.07,y-.13);}
    }else if(selected.source==="board"){
      const item=testBoard.freeCards.find(item=>String(item.id)===selected.id);
      if(item){item.x=Math.max(.02,Math.min(.90,x-.07));item.y=Math.max(.02,Math.min(.68,y-.12));}
    }else if(selected.source==="character"){
      const index=testBoard.characters.findIndex(item=>String(item.id)===selected.id);
      if(index>=0){const item=testBoard.characters.splice(index,1)[0];addBoardCard(item.id,x-.07,y-.13);}
    }
    clearSelection();
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
    renderTest();
  },true);
})();

function boardDropHandler(e){
  e.preventDefault();
  if(!playBoard)return;
  const raw=e.dataTransfer.getData("text/plain");
  if(!raw)return;
  let data; try{data=JSON.parse(raw)}catch(_){return;}
  const rect=playBoard.getBoundingClientRect();
  const x=(e.clientX-rect.left)/rect.width;
  const y=(e.clientY-rect.top)/rect.height;
  const characterSlot=findCharacterSlot(x,y);
  const draggedId=data.source==="hand" ? testHand[data.index] : data.source==="board" ? testBoard.freeCards[data.index]?.id : data.source==="character" ? testBoard.characters[data.index]?.id : null;
  // Test the U slot before the gear-target handler so dropping a card directly
  // onto U always places it there instead of opening the gear attachment picker.
  if(isUSlotDrop(x,y)){
    if(data.source==="hand"){
      const id=testHand[data.index]; if(!id)return;
      testHand.splice(data.index,1); placeCardInUSlot(id);
    }else if(data.source==="board"){
      const item=testBoard.freeCards[data.index]; if(!item)return;
      testBoard.freeCards.splice(data.index,1); placeCardInUSlot(item.id);
    }else if(data.source==="character"){
      const item=testBoard.characters?.[data.index]; if(!item)return;
      testBoard.characters.splice(data.index,1); placeCardInUSlot(item.id);
      (item.gearIds||[]).forEach(gearId=>testHand.push(String(gearId)));
    }
    renderTest();
    return;
  }
  if(isGearCard(draggedId)){
    openGearTargetPicker(data);
    return;
  }
  if(characterSlot){
    // C slots accept Character cards only; other card types remain where they are.
    if(getTestCardType(draggedId)==="character")requestCharacterPlacement(data,characterSlot.id);
    return;
  }
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
  }else if(data.source==="character"){
    const item=testBoard.characters?.[data.index];
    if(!item)return;
    testBoard.characters.splice(data.index,1);
    addBoardCard(item.id,x-.07,y-.13);
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




/* ===== SOULVAULT HOME PAGE INTERACTIONS (mobile-safe, scoped) ===== */
(()=>{
  const banner=document.getElementById("svHomeBanner");
  if(!banner || banner.dataset.homeInteractionsReady==="1") return;
  banner.dataset.homeInteractionsReady="1";

  const latestHomeNews=(Array.isArray(newsList)?newsList:[])
    .map((news,index)=>({news,index,sortDate:(()=>{
      const match=String(news.date||"").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/);
      return match ? new Date(Number(match[3]),Number(match[2])-1,Number(match[1])).getTime() : 0;
    })()}))
    .sort((a,b)=>b.sortDate-a.sortDate)
    .slice(0,3);
  const slides=[
    {image:"/public/images/logo/ผี.jpg",alt:"SOULVAULT — รายการการ์ด",target:"roster"},
    ...latestHomeNews.map(({news,index})=>({
      image:(()=>{const path=String((Array.isArray(news.images)&&news.images[0])||news.image||"").trim();return path.startsWith("/")?path:(path.startsWith("public/")?"/"+path:path);})(),
      alt:`SOULVAULT — ข่าวสาร: ${news.title||"ข่าวสาร"}`,
      target:"news",newsIndex:index,title:news.title||"ข่าวสาร"
    }))
  ];
  const dotsContainer=banner.querySelector(".sv-home-dots");
  if(dotsContainer){
    dotsContainer.innerHTML=slides.map((slide,index)=>
      `<button class="${index===0?"active":""}" type="button" data-home-slide="${index}" aria-label="แบนเนอร์ ${index+1}"></button>`
    ).join("");
  }
  let current=0;
  const show=(index)=>{
    if(!slides.length) return;
    current=(index+slides.length)%slides.length;
    const slide=slides[current];
    const image=document.getElementById("svHomeBannerImage");
    if(image){image.src=slide.image;image.alt=slide.alt;}
    banner.dataset.slide=String(current);
    banner.setAttribute("aria-label",current===0
      ?"แตะเพื่อเปิดหน้า List Card"
      :`แตะเพื่ออ่านข่าว: ${slide.title||"ข่าวสาร"}`);
    banner.querySelectorAll("[data-home-slide]").forEach((dot,i)=>{
      dot.classList.toggle("active",i===current);
      dot.setAttribute("aria-current",i===current?"true":"false");
    });
  };
  const navigateToCurrentSlide=()=>{
    const slide=slides[current];
    if(!slide) return;
    const nav=document.querySelector(`.nav[data-section="${slide.target}"]`);
    if(nav) nav.click();
    else {
      document.querySelectorAll(".section").forEach(section=>section.classList.remove("active-section"));
      document.getElementById(slide.target)?.classList.add("active-section");
      document.querySelector(".sidebar")?.classList.remove("open");
    }
    if(slide.target==="news" && Number.isInteger(slide.newsIndex)){
      requestAnimationFrame(()=>{
        const card=document.querySelector(`#newsGrid .news-card[data-news-index="${slide.newsIndex}"]`);
        if(card) card.click();
      });
    }
  };

  // Use click for taps and desktop; touch events are only used to detect swipes.
  let touchStartX=0,touchStartY=0,swiped=false;
  banner.addEventListener("touchstart",event=>{
    if(!event.touches||event.touches.length!==1) return;
    touchStartX=event.touches[0].clientX;touchStartY=event.touches[0].clientY;swiped=false;
  },{passive:true});
  banner.addEventListener("touchend",event=>{
    if(!event.changedTouches||!event.changedTouches.length) return;
    const dx=event.changedTouches[0].clientX-touchStartX;
    const dy=event.changedTouches[0].clientY-touchStartY;
    if(Math.abs(dx)>42 && Math.abs(dx)>Math.abs(dy)*1.2){
      swiped=true;show(current+(dx<0?1:-1));window.setTimeout(()=>{swiped=false;},450);
    }
  },{passive:true});
  banner.addEventListener("click",event=>{
    const dot=event.target.closest("[data-home-slide]");
    if(dot){event.preventDefault();event.stopPropagation();show(Number(dot.dataset.homeSlide));return;}
    if(swiped){swiped=false;return;}
    navigateToCurrentSlide();
  });
  banner.addEventListener("keydown",event=>{
    if(event.target.closest("[data-home-slide]")) return;
    if(event.key==="Enter"||event.key===" "){event.preventDefault();navigateToCurrentSlide();}
    if(event.key==="ArrowRight") show(current+1);
    if(event.key==="ArrowLeft") show(current-1);
  });

  // Never pause the carousel on touch devices: mobile browsers may emulate mouseenter
  // after a tap and otherwise leave the timer stopped indefinitely.
  const canHover=window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  let autoSlideTimer=window.setInterval(()=>show(current+1),2000);
  if(canHover){
    banner.addEventListener("mouseenter",()=>window.clearInterval(autoSlideTimer));
    banner.addEventListener("mouseleave",()=>{
      window.clearInterval(autoSlideTimer);
      autoSlideTimer=window.setInterval(()=>show(current+1),2000);
    });
  }

  const activateHomeShortcut=button=>{
    const target=button?.dataset?.homeGo;
    if(!target) return;
    const nav=document.querySelector(`.nav[data-section="${target}"]`);
    if(nav){nav.click();return;}
    document.querySelectorAll(".section").forEach(section=>section.classList.remove("active-section"));
    document.getElementById(target)?.classList.add("active-section");
    document.body.classList.toggle("show-page-welcome-heading",["home","roster"].includes(target));
    document.querySelector(".sidebar")?.classList.remove("open");
    if(target==="deck") initDeck();
    if(target==="supply") initSupply();
    if(target==="artists") renderArtistDirectory();
    if(target==="news") renderNews();
  };
  // Delegate clicks so buttons still work if their labels or layout are changed.
  document.addEventListener("click",event=>{
    const button=event.target.closest("[data-home-go]");
    if(!button) return;
    event.preventDefault();activateHomeShortcut(button);
  });
  show(0);
})();

// initialize news cards when the page loads
renderNews(); // initialize news cards


/* On first entry, align the center of the home banner with the viewport center.
   This runs only once on page load and does not affect other section navigation. */
window.addEventListener("load", () => {
  const homeBanner = document.getElementById("svHomeBanner");
  const homeSection = document.getElementById("home");
  if (!homeBanner || !homeSection || !homeSection.classList.contains("active-section")) return;

  requestAnimationFrame(() => {
    const rect = homeBanner.getBoundingClientRect();
    const bannerCenterY = window.scrollY + rect.top + rect.height / 2;
    const targetScrollY = bannerCenterY - window.innerHeight / 2;
    window.scrollTo({ top: Math.max(0, targetScrollY), behavior: "auto" });
  });
}, { once: true });


/* Click/tap the site logo to return to Home. */
(()=>{
  const logo=document.getElementById("siteLogo");
  if(!logo || logo.dataset.homeLogoReady==="1") return;
  logo.dataset.homeLogoReady="1";
  const goHome=event=>{
    if(event){event.preventDefault();event.stopPropagation();}
    const homeNav=document.querySelector('.nav[data-section="home"]');
    if(homeNav){homeNav.click();return;}
    document.querySelectorAll(".nav").forEach(button=>button.classList.remove("active"));
    document.querySelectorAll(".section").forEach(section=>section.classList.remove("active-section"));
    document.getElementById("home")?.classList.add("active-section");
    document.body.classList.add("show-page-welcome-heading");
    document.querySelector(".sidebar")?.classList.remove("open");
    window.scrollTo({top:0,behavior:"auto"});
  };
  logo.addEventListener("click",goHome);
  logo.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" ") goHome(event);
  });
})();

/* ===== ONLINE SHARED PLAYMAT (PeerJS) — additive; Play Test rules remain unchanged ===== */
(function initOnlinePlaytest(){
  const status=document.getElementById("onlinePlayStatus");
  if(!status)return;
  const createBtn=document.getElementById("onlineCreateRoom");
  const joinBtn=document.getElementById("onlineJoinRoom");
  const leaveBtn=document.getElementById("onlineLeaveRoom");
  const codeInput=document.getElementById("onlineRoomCode");
  let peer=null, connection=null, isHost=false, applyingRemote=false, lastSent="";
  const roomPrefix="soulvault-match-";
  const setStatus=(message,connected=false)=>{
    status.textContent=message;
    status.classList.toggle("is-connected",connected);
  };
  const getSnapshot=()=>{
    try{
      return {
        testDeck,testStack,testHand,testTomb,testEnergyCards,testPocketCards,testTurn,
        testBoard,testMasterGear,testSoulCoreUnderZone,testSpecialRotation,testZoneFlipped
      };
    }catch(_){return null;}
  };
  const fingerprint=value=>JSON.stringify(value);
  const sendSnapshot=()=>{
    if(!connection||!connection.open||applyingRemote)return;
    const state=getSnapshot();
    if(!state)return;
    const encoded=fingerprint(state);
    if(encoded===lastSent)return;
    lastSent=encoded;
    try{connection.send({type:"soulvault-state",state});}catch(_){}
  };
  const applySnapshot=state=>{
    if(!state||typeof state!=="object")return;
    applyingRemote=true;
    try{
      if("testDeck" in state)testDeck=state.testDeck;
      ["testStack","testHand","testTomb","testEnergyCards","testPocketCards","testTurn","testBoard","testMasterGear","testSoulCoreUnderZone","testSpecialRotation","testZoneFlipped"].forEach(key=>{
        if(key in state)window[key]=state[key];
      });
      // These variables are lexical bindings, so assign them explicitly.
      testStack=state.testStack||[];
      testHand=state.testHand||[];
      testTomb=state.testTomb||[];
      testEnergyCards=state.testEnergyCards||[];
      testPocketCards=state.testPocketCards||[];
      testTurn=Number(state.testTurn)||0;
      testBoard=state.testBoard||{freeCards:[],characters:[]};
      testMasterGear=state.testMasterGear||[];
      testSoulCoreUnderZone=state.testSoulCoreUnderZone||[];
      testSpecialRotation=state.testSpecialRotation||{master:0};
      testZoneFlipped=state.testZoneFlipped!==false;
      lastSent=fingerprint(getSnapshot());
      if(typeof renderTest==="function")renderTest();
    }catch(error){console.warn("Online state sync failed",error);}
    finally{applyingRemote=false;}
  };
  const teardown=(message="ONLINE: OFFLINE")=>{
    try{connection?.close();}catch(_){}
    try{peer?.destroy();}catch(_){}
    connection=null;peer=null;isHost=false;lastSent="";
    setStatus(message,false);
  };
  const wireConnection=conn=>{
    connection=conn;
    conn.on("open",()=>{
      setStatus("ONLINE: CONNECTED",true);
      if(isHost)sendSnapshot();
      else { try{conn.send({type:"soulvault-request-state"});}catch(_){} }
    });
    conn.on("data",message=>{
      if(!message)return;
      if(message.type==="soulvault-state"){
        if(isHost){applySnapshot(message.state);sendSnapshot();}
        else applySnapshot(message.state);
      }else if(message.type==="soulvault-request-state"&&isHost)sendSnapshot();
    });
    conn.on("close",()=>{connection=null;setStatus("ONLINE: DISCONNECTED",false);});
    conn.on("error",()=>setStatus("ONLINE: CONNECTION ERROR",false));
  };
  createBtn?.addEventListener("click",()=>{
    teardown("กำลังสร้างห้อง...");
    if(!window.Peer){setStatus("โหลดระบบออนไลน์ไม่สำเร็จ");return;}
    const room=(Math.floor(100000+Math.random()*900000)).toString();
    codeInput.value=room;
    isHost=true;
    peer=new Peer(roomPrefix+room);
    peer.on("open",()=>setStatus("ห้อง "+room+" พร้อมให้เข้าร่วม",true));
    peer.on("connection",conn=>{if(connection){conn.close();return;}wireConnection(conn);});
    peer.on("error",error=>{
      if(error.type==="unavailable-id")setStatus("รหัสห้องซ้ำ กรุณาสร้างห้องใหม่");
      else setStatus("สร้างห้องไม่สำเร็จ: "+(error.type||"network"));
    });
  });
  joinBtn?.addEventListener("click",()=>{
    const room=(codeInput.value||"").trim().replace(/\s/g,"");
    if(!/^\d{6}$/.test(room)){setStatus("กรุณาใส่รหัสห้อง 6 หลัก");return;}
    teardown("กำลังเข้าร่วมห้อง...");
    if(!window.Peer){setStatus("โหลดระบบออนไลน์ไม่สำเร็จ");return;}
    peer=new Peer();
    peer.on("open",()=>wireConnection(peer.connect(roomPrefix+room,{reliable:true})));
    peer.on("error",error=>setStatus("เชื่อมต่อไม่สำเร็จ: "+(error.type||"network")));
  });
  leaveBtn?.addEventListener("click",()=>teardown());
  window.addEventListener("beforeunload",()=>{try{connection?.close();peer?.destroy();}catch(_){}});
  // renderTest and board interactions update these shared state objects; polling also
  // captures mutations made by drag/rotate controls without modifying their handlers.
  setInterval(sendSnapshot,500);
})();
