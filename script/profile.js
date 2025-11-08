
document.addEventListener("alpine:init", () => {
  Alpine.data("profilePage", () => ({
    activeTab: 'personal',
    showPasswordBox: false,
    savePassword() {
      this.showPasswordBox = false;
    },
  }));
});

window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});
// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
    const script = document.createElement('script');
    script.src = "../script/header.js";
    document.body.appendChild(script);
    lucide?.createIcons?.();
  });

