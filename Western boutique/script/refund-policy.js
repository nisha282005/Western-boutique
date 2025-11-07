// Tailwind Theme Config
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        navy: "#1A365D",
        "rose-gold": "#D4956B",
        cream: "#F7FAFC",
        charcoal: "#2D3748"
      },
    },
  },
};

// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
    const script = document.createElement('script');
    script.src = "header.js";
    document.body.appendChild(script);
    lucide?.createIcons?.();
  });

// Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
    lucide?.createIcons?.();
  });