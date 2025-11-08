function addToCart() {
  alert("Item added to cart!");
}

function toggleProfileDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  if (dropdown) {
    dropdown.classList.toggle("hidden");
  }
}

// ✅ Optional: Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  const button = document.querySelector("[onclick='toggleProfileDropdown()']");
  const dropdown = document.getElementById("profileDropdown");

  if (button && dropdown && !button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

// ✅ Load header.html into header-container (correct ID)
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header-container");

  if (headerContainer) {
    fetch("../html/header.html") // Adjust path if needed
      .then(res => res.text())
      .then(data => {
        headerContainer.innerHTML = data;
      })
      .catch(err => console.error("Error loading header:", err));
  } else {
    console.error("Header container not found!");
  }
});
