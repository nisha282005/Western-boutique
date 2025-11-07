// Tailwind custom config
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

// Alpine.js data
document.addEventListener("alpine:init", () => {
  Alpine.data("terms", () => ({
    terms: [
      {
        title: "Acceptance of Terms",
        content: "By accessing and using our website, you agree to our terms. If you do not agree, please refrain from using our platform."
      },
      {
        title: "Use of Content",
        content: "All site materials are owned by Western Boutique. Unauthorized usage is prohibited."
      },
      {
        title: "Pricing & Availability",
        content: "Prices are subject to change. Product availability may vary."
      },
      {
        title: "Limitation of Liability",
        content: "Western Boutique is not responsible for indirect or incidental damages."
      },
      {
        title: "Changes to Terms",
        content: "We may revise these terms at any time. Continued use implies acceptance."
      },
      {
        title: "Governing Law",
        content: "These terms are governed by Indian law. Disputes will be handled in Mumbai courts."
      }
    ]
  }));
});

// Dynamic header/footer loader
window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      const script = document.createElement("script");
      script.src = "header.js";
      document.body.appendChild(script);
    });

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
