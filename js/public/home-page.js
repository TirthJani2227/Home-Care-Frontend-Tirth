document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-inner .d-flex");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  nextBtn.addEventListener("click", () => {
    container.appendChild(container.firstElementChild);
  });

  prevBtn.addEventListener("click", () => {
    container.prepend(container.lastElementChild);
  });
});



const row2 = document.getElementById("cardRow2");
const scrollRight2 = document.getElementById("scrollRight2");
const scrollLeft2 = document.getElementById("scrollLeft2");

function getCardWidth() {
    const card = row2.querySelector(".customer_card");
    const gap = 16;
    return card.offsetWidth + gap;
}

scrollRight2.addEventListener("click", () => {
    row2.scrollBy({
        left: getCardWidth(),
        behavior: "smooth"
    });
});

scrollLeft2.addEventListener("click", () => {
    row2.scrollBy({
        left: -getCardWidth(),
        behavior: "smooth"
    });
});

const row_s = document.getElementById("cardRow_s");
const scrollRight_s = document.getElementById("scrollRight_s");
const scrollLeft_s = document.getElementById("scrollLeft_s");

function getCardWidth_s() {
    const card = row2.querySelector(".service-card");
    const gap = 16;
    return card.offsetWidth + gap;
}

scrollRight_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: getCardWidth_s(),
        behavior: "smooth"
    });
});

scrollLeft_s.addEventListener("click", () => {
    row_s.scrollBy({
        left: -getCardWidth_s(),
        behavior: "smooth"
    });
});
