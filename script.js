// TAB SYSTEM
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// PORTFOLIO CLICK
document.querySelectorAll(".portfolio-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.dataset.link;
    if (link) window.open(link, "_blank");
  });
});// CONTACT CLICK
document.querySelectorAll(".contact-item").forEach(item => {
  item.addEventListener("click", () => {
    const link = item.dataset.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
});// CV BUTTON CLICK
document.querySelectorAll(".cv-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.dataset.link;
    if (link) {
      window.open(link, "_blank");
    }
  });
});