
    function selectMethod(event, method) {
      event.stopPropagation();
      document.querySelectorAll('#payment-sections > div').forEach(div => div.classList.add('hidden'));
      ['credit-form', 'debit-form', 'upi-form'].forEach(id => document.getElementById(id)?.classList.add('hidden'));
      document.getElementById("card-type-label").innerHTML = '';
      document.getElementById("upi-label").innerHTML = '';
      document.getElementById(method)?.classList.remove('hidden');
    }

    function toggleCardForm(event, type) {
      event.stopPropagation();
      document.getElementById('credit-form').classList.add('hidden');
      document.getElementById('debit-form').classList.add('hidden');
      const form = document.getElementById(`${type}-form`);
      form?.classList.remove('hidden');
      const icon = "💳";
      const label = `${icon} You selected <span class="capitalize">${type}</span> Card`;
      document.getElementById("card-type-label").innerHTML = label;
    }

   function showUPI(provider) {
  document.getElementById("upi-form").classList.remove('hidden');

  const upiIcons = {
    "GPay": "../project_images/gpay.jpg",
    "PhonePe": "../project_images/phonepe.jpg",
    "Paytm": "../project_images/paytm.jpg",
    "BHIM": "../project_images/bhim.jpg"
  };

  const upiLabel = document.getElementById("upi-label");

  // Clear previous content
  upiLabel.innerHTML = "";

  // Create image and label
  const img = document.createElement("img");
  img.src = upiIcons[provider];
  img.alt = provider + " logo";
  img.className = "w-6 h-6 object-contain inline-block mr-2";

  const span = document.createElement("span");
  span.textContent = provider;

  upiLabel.appendChild(img);
  upiLabel.appendChild(span);
}


    function hideAllForms(event) {
      if (!event.target.closest('#payment-sections')) {
        document.querySelectorAll('#payment-sections > div').forEach(div => div.classList.add('hidden'));
        ['credit-form', 'debit-form', 'upi-form'].forEach(id => document.getElementById(id)?.classList.add('hidden'));
        document.getElementById("card-type-label").innerHTML = '';
        document.getElementById("upi-label").innerHTML = '';
      }
    }

  document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cartSummary'));
  const address = localStorage.getItem('deliveryAddress');

  if (cart) {
    document.getElementById('summary-items').textContent = cart.items;
    document.getElementById('summary-subtotal').textContent = cart.subtotal;
    document.getElementById('summary-discount').textContent = cart.discount;
    document.getElementById('summary-total').textContent = cart.total;
  }

  if (address) {
    document.getElementById('summary-address').textContent = address;
  }
});


  window.addEventListener('DOMContentLoaded', () => {
    const address = JSON.parse(localStorage.getItem('userAddress'));
    if (address) {
      const full = `${address.name}, ${address.phone}, ${address.flat}, ${address.landmark}, ${address.fullAddress}, ${address.pincode}, ${address.state}, ${address.country}`;
      document.getElementById('summary-address').textContent = full;
    } else {
      document.getElementById('summary-address').textContent = "No address found.";
    }

    // Optionally also load cart data if needed here...
  });

