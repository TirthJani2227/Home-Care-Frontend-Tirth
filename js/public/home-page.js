/* ---------- Services Available ---------- */
const row_s = document.getElementById("serviceRow");
const scrollRight_s = document.getElementById("serviceScrollRight");
const scrollLeft_s = document.getElementById("serviceScrollLeft");
 
function getCardWidth(rowEl, cardClass) {
    const card = rowEl.querySelector(cardClass);
    const gap = 16;
    return card.offsetWidth + gap;
}
 
scrollRight_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: getCardWidth(row_s, ".service-available-card"),
        behavior: "smooth"
    });
});
 
scrollLeft_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: -getCardWidth(row_s, ".service-available-card"),
        behavior: "smooth"
    });
});
 
 
const row = document.getElementById("cardRow");
const scrollRight = document.getElementById("scrollRight");
const scrollLeft = document.getElementById("scrollLeft");
 
scrollRight.addEventListener("click", () => {
    row.scrollBy({
        left: getCardWidth(row,".service-card"),
        behavior: "smooth"
    });
});
 
scrollLeft.addEventListener("click", () => {
    row.scrollBy({
        left: -getCardWidth(row,".service-card"),
        behavior: "smooth"
    });
});
 
 
const row_service = document.getElementById("cardRow_s");
const scrollRight_service = document.getElementById("scrollRight_s");
const scrollLeft_service = document.getElementById("scrollLeft_s");
 
 
scrollRight_service.addEventListener("click", () => {
    row_service.scrollBy({
        left: getCardWidth(row_service,'.service-card'),
        behavior: "smooth"
    });
});
 
scrollLeft_service.addEventListener("click", () => {
    row_service.scrollBy({
        left: -getCardWidth_s(row_service,'.service-card'),
        behavior: "smooth"
    });
});
 