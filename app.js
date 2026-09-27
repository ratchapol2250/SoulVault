
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
function bindLanguageButtons(){
  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      currentLang=btn.dataset.lang;
      localStorage.setItem("stealAreaLang",currentLang);
      applyLanguage();
    });
  });
}
window.addEventListener('DOMContentLoaded',()=>{bindLanguageButtons();applyLanguage();});
