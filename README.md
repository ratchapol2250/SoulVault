# STEAL AREA — Roster

ต้นแบบเว็บ Card Database / Roster สไตล์ dark fantasy

## เปิดใช้งาน
เปิด `index.html` ใน browser ได้ทันที

## แก้ข้อมูลการ์ด
เปิด `app.js` แล้วแก้ข้อมูลในตัวแปร `cards`

แต่ละใบมี:
- id
- name
- subtitle
- type
- rarity
- element
- cost
- ability
- symbol

## ใส่รูปการ์ดจริง
ภายหลังสามารถเปลี่ยน `.card-art` ให้ใช้รูปจาก GitHub/GitHub Pages หรือ `/assets/cards/...` ได้

## Deploy
สามารถอัปโหลดทั้งโฟลเดอร์ขึ้น GitHub แล้วเชื่อมกับ Vercel ได้


## ระบบ Deck Builder
- สร้าง Deck ได้หลายเด็ค
- ตั้งชื่อ Deck
- เลือกหน้าปก Deck
- Leader สูงสุด 1 ใบ
- Zone สูงสุด 1 ใบ
- Main Deck การ์ดแต่ละใบสูงสุด 3 ใบ
- กำหนด Rarity ในข้อมูลการ์ด
- Rarity แต่ละระดับใช้พื้นหลัง/ภาพคนละแบบในต้นแบบ
- บันทึก Deck ด้วย localStorage ของ Browser

### เปลี่ยนรูป Rarity จริง
ตอนนี้ระบบใช้พื้นหลังจำลองแยกตาม Common / Rare / Epic / Legendary
ถ้าต้องการใช้รูปจริง ให้เปลี่ยน CSS ของ `.rarity-common`, `.rarity-rare`, `.rarity-epic`, `.rarity-legendary`
เป็น `background-image: url(...)` หรือเชื่อมกับรูปใน `/assets/rarity/`
