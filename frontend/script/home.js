function addToCart(id, title, price, image) {
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const existingItem = cart.find(item => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, title, price, image, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cart));
  updateCartCount();
}

const container = document.getElementById('cardContainer');

function scrollLeft() {
  container.scrollBy({ left: -260, behavior: 'smooth' });
}

function scrollRight() {
  container.scrollBy({ left: 260, behavior: 'smooth' });
}

// Header & Footer
fetch("header.html").then(res => res.text()).then(data => {
  document.getElementById("header-container").innerHTML = data;
  updateCartCount();
});

fetch("footer.html").then(res => res.text()).then(data => {
  document.getElementById("footer-container").innerHTML = data;
});

// Banner
const banners = [
  { type: "image", src: "../project_images/hero.jpg" },
  { type: "video", src: "../project_images/look.mp4" },
  { type: "image", src: "../project_images/hero3.jpg" },
  { type: "video", src: "../project_images/look1.mp4" },
];

let currentIndex = 0;
const bannerContainer = document.getElementById("bannerContainer");

function renderBanner(index) {
  const item = banners[index];
  bannerContainer.innerHTML = "";
  const media = document.createElement(item.type === "image" ? "img" : "video");
  media.src = item.src;
  media.className = "w-full h-full object-cover transition-opacity duration-700 ease-in-out";
  media.alt = "Banner";
  if (item.type === "video") {
    media.autoplay = media.muted = media.loop = media.playsInline = true;
  }
  bannerContainer.appendChild(media);
}

function nextBanner() {
  currentIndex = (currentIndex + 1) % banners.length;
  renderBanner(currentIndex);
}

function prevBanner() {
  currentIndex = (currentIndex - 1 + banners.length) % banners.length;
  renderBanner(currentIndex);
}

setInterval(nextBanner, 10000);
renderBanner(currentIndex);

// Category Cards
const categories = [
  { title: "Dresses", img: "../project_images/dress.jpg", gender: "Women", type: "Dresses" },
  { title: "Tops", img: "../project_images/top.jpg", gender: "Women", type: "Tops" },
  { title: "Bottoms", img: "../project_images/bottom.jpg", gender: "Women", type: "Bottoms" },
  { title: "Outerwear", img: "../project_images/outer.jpg", gender: "Women", type: "Outerwear" },
  { title: "Accessories", img: "../project_images/accessories.jpg", gender: "Women", type: "Accessories" },
  { title: "Footwear", img: "../project_images/footwear.jpg", gender: "Teens", type: "Footwear" },
  { title: "Partygown", img: "../project_images/party gown.jpg", gender: "Women", type: "Ethnic" },
  { title: "Summer", img: "../project_images/summer.jpg", gender: "Women", type: "Summer" },
  { title: "Hoodie", img: "../project_images/hoodie.jpg", gender: "Women", type: "Hoodie" }
];

function createCategoryCard({ title, img, gender, type }) {
  return `
    <div class="min-w-[180px] relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
         onclick="showProductPage('${gender}', '${type}')">
      <img src="${img}" alt="${title}" class="w-full h-40 object-cover group-hover:scale-105 transition duration-300">
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <p class="text-white text-lg font-heading font-semibold">${title}</p>
      </div>
    </div>`;
}
document.getElementById("category-wrapper").innerHTML = categories.map(createCategoryCard).join("");

// Our Collection
function addFlipCard(title, desc, img, price, rating) {
  const stars = () => {
    const full = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
    const half = rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '';
    const empty = '<i class="far fa-star"></i>'.repeat(5 - Math.ceil(rating));
    return full + half + empty;
  };

  const cardHTML = `
    <div class="flex-shrink-0 w-[240px] snap-start">
      <div class="perspective-[1000px]">
        <div class="relative w-full h-[320px] transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
          <div class="absolute w-full h-full backface-hidden bg-white rounded-t-[120px] rounded-b-xl shadow-xl overflow-hidden">
            <img src="${img}" alt="${title}" class="w-full h-full object-cover rounded-t-[120px]" />
          </div>
          <div class="absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-t-[120px] rounded-b-xl shadow-xl overflow-hidden">
            <div class="relative w-full h-full">
              <img src="${img}" class="w-full h-full object-cover blur-sm rounded-t-[120px]" />
              <div class="absolute top-4 left-1/2 transform -translate-x-1/2">
                <i class="fas fa-heart text-white text-2xl"></i>
              </div>
              <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button class="bg-white text-navy font-body font-semibold px-3 py-1 rounded-full hover:bg-opacity-90 transition">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 text-center">
        <h3 class="font-heading font-bold text-navy text-lg">${title}</h3>
        <p class="font-body text-navy">${desc}</p>
        <div class="text-rose-gold mt-1">${stars()}</div>
        <p class="text-navy font-bold mt-1 font-body">${price}</p>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', cardHTML);
}

// Call examples
addFlipCard("Casual Jumpsuit", "Effortless chic look", "../project_images/ruffled.jpg", "₹2,299", 4);
addFlipCard("Boho Chic Dress", "Vibrant and flowy", "../project_images/two_piece.jpg", "₹2,099", 2.5);
addFlipCard("Ruffle Dress", "Playful layers", "../project_images/velvet.jpg", "₹2,599", 4.5);
addFlipCard("Tiered Dress", "Layered for elegance", "../project_images/sparkle.jpg", "₹1,899", 1.5);
addFlipCard("Net Saree Look", "Modern desi glam", "../project_images/skinny.jpg", "₹2,499", 2);
addFlipCard("Casual Maxi", "Relaxed and pretty", "../project_images/top.jpg", "₹1,999", 3);

// New Arrivals
function createNewArrivalCard(title, price, img, rating, alt) {
  const stars = () => {
    const full = '<i class="fas fa-star"></i>'.repeat(Math.floor(rating));
    const half = rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '';
    const empty = '<i class="far fa-star"></i>'.repeat(5 - Math.ceil(rating));
    return full + half + empty;
  };

  const cardHTML = `
    <div class="w-64 min-w-[16rem] h-96 bg-white rounded-2xl shadow-lg border border-gray-300 relative overflow-hidden group">
      <div class="absolute top-3 right-3 z-10">
        <button class="text-navy text-lg"> <i class="far fa-heart"></i></button>
      </div>
      <div class="h-3/4 relative">
        <img src="${img}" alt="${alt}" class="w-full h-full object-cover rounded-t-2xl">
        <span class="absolute top-3 left-3 bg-rose-500 text-white text-xs font-heading font-bold px-3 py-1 rounded-full shadow">NEW</span>
      </div>
      <div class="flex justify-between items-center px-4 py-3 h-1/4">
        <div>
          <h3 class="text-md font-heading font-bold text-navy">${title}</h3>
          <div class="flex text-rose-gold text-sm">${stars()}</div>
          <p class="text-sm text-navy font-body mt-1">${price}</p>
        </div>
        <button class="text-navy hover:text-rose-gold transition text-xl"><i class="fas fa-shopping-cart"></i></button>
      </div>
    </div>`;
  document.getElementById("newArrivalsContainer").insertAdjacentHTML("beforeend", cardHTML);
}

createNewArrivalCard("Boho Ruffle Dress", "₹2,499", "../project_images/croptop.jpg", 3.5, "Boho Dress");
createNewArrivalCard("Floral Summer Top", "₹1,299", "../project_images/blouse.jpg", 3, "Floral Top");
createNewArrivalCard("Pleated Skirt", "₹1,899", "../project_images/ball_gown.jpg", 2.5, "Pleated Skirt");
createNewArrivalCard("Denim Jacket", "₹3,199", "../project_images/outer.jpg", 3, "Jacket");
createNewArrivalCard("Layered Necklace", "₹799", "../project_images/accessories.jpg", 1.5, "Accessories");
createNewArrivalCard("Heeled Sandals", "₹2,299", "../project_images/croptop.jpg", 3, "Footwear");
createNewArrivalCard("Mini Leather Bag", "₹1,499", "../project_images/blouse.jpg", 2, "Bag");
createNewArrivalCard("Retro Sunglass", "₹999", "../project_images/ball_gown.jpg", 1.5, "Sunglass");
createNewArrivalCard("Bucket Hat", "₹699", "../project_images/denim_skirt.jpg", 1.5, "Bucket Hat");

// Testimonials
const testimonials = [
    {
      tagName: "Mike Wigger",
      stars: "★★★★★",
      name: "Johnna Hancock-Blake",
      role: "Realtor",
      message: "Johnna immediately picked up on my personality type and provided a tailored experience. She is very good at what she does."
    },
    {
      tagName: "Emily Stone",
      stars: "★★★★★",
      name: "Sophie Reynolds",
      role: "Fashion Blogger",
      message: "Amazing service and stunning collection. Loved every piece I bought!"
    },
    {
      tagName: "James Ray",
      stars: "★★★★★",
      name: "Ella Martinez",
      role: "Stylist",
      message: "Great experience! Always find something unique and elegant."
    },
    {
      tagName: "Maya Lewis",
      stars: "★★★★★",
      name: "Nina Carter",
      role: "Fashion Enthusiast",
      message: "The collection and quality are unbeatable. Fast delivery too!"
    },
    {
      tagName: "Ryan Keller",
      stars: "★★★★★",
      name: "Ava Johnson",
      role: "Content Creator",
      message: "Very trendy pieces. My audience loved the outfits I wore from here!"
    }
  ];

function createTestimonialCard(data) {
  return `
    <div class="relative bg-gray-100 rounded-xl border border-gray-300 shadow-md p-6 w-72 min-w-[18rem] h-64 flex-shrink-0">
      <div class="absolute top-0 left-0 bg-navy text-white px-4 py-2 rounded-br-lg rounded-tl-lg shadow">
        <p class="text-sm font-heading font-semibold">${data.tagName}</p>
        <p class="text-xs text-gray-300 -mt-0.5 font-body">Review</p>
        <div class="text-rose-gold text-sm">${data.stars}</div>
      </div>
      <div class="pt-16 text-sm text-gray-700 font-body">
        <h4 class="text-navy font-heading font-bold uppercase text-sm mb-1">${data.name}</h4>
        <p class="text-xs text-navy mb-2 font-body">${data.role}</p>
        <p class="text-sm text-gray-700">${data.message}</p>
      </div>
    </div>`;
}
document.getElementById("testimonial-container").innerHTML = testimonials.map(createTestimonialCard).join("");

// Cart count update
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) cartCount.textContent = count;
}

window.addEventListener("DOMContentLoaded", () => updateCartCount());
