document.addEventListener("scroll", () => {
document.querySelectorAll(".glass").forEach(card => {
const rect = card.getBoundingClientRect();
if (rect.top < window.innerHeight) {
card.style.boxShadow = "0 0 30px rgba(0,245,212,0.2)";
}
});
});

