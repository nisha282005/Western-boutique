const products = [
  { id: 1, name: "Floral Western Dress", price: 499, discount: 49, image: "top.jpg", qty: 1 },
  { id: 2, name: "Denim Jacket", price: 899, discount: 99, image: "bow.jpg", qty: 1 },
  { id: 3, name: "Boho Skirt", price: 699, discount: 69, image: "croptop.jpg", qty: 1 },
  { id: 4, name: "Cocktail Dress", price: 1299, discount: 149, image: "cocktail.jpg", qty: 1 },
  { id: 5, name: "Denim Skirt", price: 799, discount: 89, image: "denim_skirt.jpg", qty: 1 },
  { id: 6, name: "Floral Western Dress", price: 499, discount: 49, image: "top.jpg", qty: 1 },
  { id: 7, name: "Denim Jacket", price: 899, discount: 99, image: "bow.jpg", qty: 1 },
  { id: 8, name: "Boho Skirt", price: 699, discount: 69, image: "croptop.jpg", qty: 1 },
  { id: 9, name: "Cocktail Dress", price: 1299, discount: 149, image: "cocktail.jpg", qty: 1 },
  { id: 10, name: "Denim Skirt", price: 799, discount: 89, image: "denim_skirt.jpg", qty: 1 }
];

function createCard(product) {
  const div = document.createElement("div");
  div.className = "product-card grid grid-cols-1 sm:grid-cols-5 gap-4 p-4 border shadow rounded-xl bg-white items-center";
  div.dataset.price = product.price;
  div.dataset.discount = product.discount;
  div.dataset.id = product.id;

  div.innerHTML = `
    <img src="../project_images/${product.image}" class="w-24 h-24 object-cover rounded-md col-span-1">
    <div class="col-span-2">
      <h3 class="text-navy font-semibold text-lg">${product.name}</h3>
      <p class="text-gray-600 text-sm font-sans">₹${product.price}</p>
      <div class="flex items-center gap-2 mt-2">
        <label class="text-sm">Size:</label>
        <select class="border rounded px-2 py-1 text-sm size-select font-sans">
          <option class="font-sans">S</option>
          <option class="font-sans">M</option>
          <option class="font-sans">L</option>
          <option class="font-sans">XL</option>
        </select>
        <a href="#" class="text-xs text-blue-600 underline" onclick="openSizeChart(event)">Size Chart</a>
      </div>
    </div>
    <div class="col-span-1 flex items-center gap-2">
      <button onclick="updateQty(${product.id}, -1)" class="px-2 py-1 border rounded font-sans">-</button>
      <span id="qty-${product.id}" class="qty-count font-sans">${product.qty}</span>
      <button onclick="updateQty(${product.id}, 1)" class="px-2 py-1 border rounded font-sans">+</button>
    </div>
    <div class="text-right col-span-1">
      <button onclick="removeProduct(${product.id})" class="text-red-600 hover:underline text-sm">Remove</button>
    </div>
  `;
  return div;
}

function updateQty(id, delta) {
  const qtyEl = document.getElementById(`qty-${id}`);
  let qty = parseInt(qtyEl.textContent);
  qty = Math.max(1, qty + delta);
  qtyEl.textContent = qty;
  updateSummary();
}

function removeProduct(id) {
  const card = document.querySelector(`.product-card[data-id="${id}"]`);
  if (card) {
    card.remove();
    updateSummary();
  }
}

function updateSummary() {
  const cards = document.querySelectorAll(".product-card");
  let totalItems = 0, subtotal = 0, discount = 0;
  cards.forEach(card => {
    const qty = parseInt(card.querySelector(".qty-count").textContent);
    const price = parseInt(card.dataset.price);
    const disc = parseInt(card.dataset.discount);
    totalItems += qty;
    subtotal += price * qty;
    discount += disc * qty;
  });

  document.getElementById("summary-items").textContent = totalItems;
  document.getElementById("summary-subtotal").textContent = `₹${subtotal}`;
  document.getElementById("summary-discount").textContent = `-₹${discount}`;
  document.getElementById("summary-total").textContent = `₹${subtotal - discount}`;

  // Apply font-sans to all summary numbers
  ["summary-items", "summary-subtotal", "summary-discount", "summary-total"].forEach(id => {
    document.getElementById(id).classList.add("font-sans");
  });
}

function openSizeChart(e) {
  e.preventDefault();
  document.getElementById("size-chart-modal").classList.remove("hidden");
  document.getElementById("size-chart-modal").classList.add("flex");
}

function closeSizeChart() {
  document.getElementById("size-chart-modal").classList.add("hidden");
  document.getElementById("size-chart-modal").classList.remove("flex");
}

window.onload = () => {
  const container = document.getElementById("cart-container");
  products.forEach(p => container.appendChild(createCard(p)));
  updateSummary();
};

  function proceedToAddress() {
  const items = document.getElementById("summary-items").textContent;
  const subtotal = document.getElementById("summary-subtotal").textContent;
  const discount = document.getElementById("summary-discount").textContent;
  const total = document.getElementById("summary-total").textContent;

  const cartSummary = {
    items,
    subtotal,
    discount,
    total
  };

  localStorage.setItem("cartSummary", JSON.stringify(cartSummary));
  window.location.href = "address.html";
}

