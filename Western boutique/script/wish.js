let products = [
  { name: "Casual Jumpsuit", desc: "Effortless chic look", price: "₹2,299", rating: 4, img: "../project_images/ruffled.jpg" },
  { name: "Boho Chic Dress", desc: "Vibrant and flowy", price: "₹2,099", rating: 3.5, img: "../project_images/two_piece.jpg" },
  { name: "Ruffle Dress", desc: "Playful layers", price: "₹2,599", rating: 4.5, img: "../project_images/velvet.jpg" },
  { name: "Saree Gown", desc: "Fusion elegance", price: "₹3,199", rating: 3, img: "../project_images/summer.jpg" },
  { name: "Tiered Dress", desc: "Layered for elegance", price: "₹1,899", rating: 2.5, img: "../project_images/sparkle.jpg" },
  { name: "Net Saree", desc: "Modern desi glam", price: "₹2,499", rating: 2, img: "../project_images/skinny.jpg" },
  { name: "Casual Maxi", desc: "Relaxed and pretty", price: "₹1,999", rating: 4, img: "../project_images/top.jpg" },
];

let cartCount = 0;
const wishlistContainer = document.getElementById("wishlistContainer");

function renderWishlist() {
  wishlistContainer.innerHTML = '';

  if (products.length === 0) {
    wishlistContainer.innerHTML = '<p class="text-center text-gray-600 font-body">Your wishlist is empty.</p>';
    return;
  }

  products.forEach((product, index) => {
    wishlistContainer.innerHTML += `
      <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row relative border border-gray-200 font-body">
        <div class="absolute top-3 right-3">
          <i class="fas fa-heart wishlist-heart text-[#990F4B] text-xl cursor-pointer hover:scale-110 transition" onclick="removeFromWishlist(${index})"></i>
        </div>
        <div class="w-full md:w-1/3 h-[260px] flex items-center justify-center">
          <img src="${product.img}" alt="${product.name}" class="object-contain h-full w-full p-3 rounded-lg" />
        </div>
        <div class="w-full md:w-2/3 px-4 py-4 flex flex-col justify-center">
          <h3 class="font-heading font-semibold text-charcoal text-lg">${product.name}</h3>
          <p class="text-sm text-gray-600 mt-2">${product.desc}</p>
          <p class="text-sm text-rose-gold mt-1">${getStars(product.rating)}</p>
          <p class="text-sm text-navy mt-1">${product.price}</p>
          <div class="mt-4">
            <button class="bg-navy text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-rose-gold transition">View Details</button>
          </div>
        </div>
      </div>
    `;
  });
}

function removeFromWishlist(index) {
  products.splice(index, 1);
  renderWishlist();
}

function addToCart() {
  cartCount++;
  alert("Item added to cart!");
}

function getStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full).replace(/★/g, '<i class="fas fa-star text-rose-gold"></i>') +
         (half ? '<i class="fas fa-star-half-alt text-rose-gold"></i>' : '') +
         '☆'.repeat(empty).replace(/☆/g, '<i class="far fa-star text-rose-gold"></i>');
}

renderWishlist();
