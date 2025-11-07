function toggleEdit() {
      document.getElementById("saved-address").classList.add("hidden");
      document.getElementById("edit-address-form").classList.remove("hidden");
      document.getElementById("edit-success").classList.add("hidden");
    }
    function saveEdit() {
      document.getElementById("edit-address-form").classList.add("hidden");
      document.getElementById("saved-address").classList.remove("hidden");
      document.getElementById("edit-success").classList.remove("hidden");
    }
    function showForm() {
      document.getElementById("new-address-form").classList.remove("hidden");
      document.getElementById("new-address-success").classList.add("hidden");
    }
    function saveNewAddress() {
      document.getElementById("new-address-form").classList.add("hidden");
      document.getElementById("new-address-success").classList.remove("hidden");
      document.querySelectorAll("input[name='addressType']").forEach(r => r.checked = false);
    }
  
  window.onload = function () {
    const summary = JSON.parse(localStorage.getItem("cartSummary"));
    if (summary) {
      document.getElementById("summary-items").textContent = summary.items;
      document.getElementById("summary-subtotal").textContent = summary.subtotal;
      document.getElementById("summary-discount").textContent = summary.discount;
      document.getElementById("summary-total").textContent = summary.total;
    }
  };

  function proceedToCheckout() {
    // Save address info to localStorage if needed (optional)

    window.location.href = "checkout.html";
  }

 document.addEventListener('DOMContentLoaded', () => {
  const cartSummary = JSON.parse(localStorage.getItem('cartSummary'));
  if (cartSummary) {
    document.getElementById('summary-items').textContent = cartSummary.items;
    document.getElementById('summary-subtotal').textContent = cartSummary.subtotal;
    document.getElementById('summary-discount').textContent = cartSummary.discount;
    document.getElementById('summary-total').textContent = cartSummary.total;
  }
});
function proceedToCheckout() {
  localStorage.setItem('deliveryAddress', address);
  window.location.href = 'checkout.html';
}


  function saveNewAddress() {
    const name = document.querySelector('#new-address-form input[placeholder="Full Name"]').value;
    const phone = document.querySelector('#new-address-form input[placeholder="Phone Number"]').value;
    const flat = document.querySelector('#new-address-form input[placeholder="Door No. / Flat No."]').value;
    const landmark = document.querySelector('#new-address-form input[placeholder="Landmark (Optional)"]').value;
    const fullAddress = document.querySelector('#new-address-form textarea').value;
    const pincode = document.querySelector('#new-address-form input[placeholder="Pincode"]').value;
    const state = document.querySelector('#new-address-form select:nth-of-type(1)').value;
    const country = document.querySelector('#new-address-form select:nth-of-type(2)').value;

    const addressData = {
      name,
      phone,
      flat,
      landmark,
      fullAddress,
      pincode,
      state,
      country
    };

    localStorage.setItem("userAddress", JSON.stringify(addressData));

    // Optional: Confirmation
    document.getElementById("new-address-success").classList.remove("hidden");
    document.getElementById("new-address-form").classList.add("hidden");
  }



  