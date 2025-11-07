
function addToCart() {
    alert("Item added to cart!");
  }

function toggleProfileDropdown() {
  const dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("hidden");
}

// Optional: Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  const button = document.querySelector("[onclick='toggleProfileDropdown()']");
  const dropdown = document.getElementById("profileDropdown");
  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});
