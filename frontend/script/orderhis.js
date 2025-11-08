function toggleDetails(orderId) {
  const section = document.getElementById(`details${orderId}`);
  const button = event.currentTarget;
  section.classList.toggle('hidden');
  button.innerHTML = section.classList.contains('hidden')
    ? `<i class="fas fa-info-circle mr-2"></i> View Details`
    : `<i class="fas fa-chevron-up mr-2"></i> Hide Details`;
}


  function setRating(star) {
    const rating = parseInt(star.getAttribute('data-rating'));
    const parent = star.parentElement;
    const stars = parent.querySelectorAll('.fa-star, .fa-star-half, .far');
    const orderId = parent.getAttribute('data-order-id');
    const ratingDisplay = document.getElementById(`currentRating${orderId}`);

    stars.forEach((s, index) => {
      s.classList.remove('far');
      s.classList.remove('fas');
      s.classList.add(index < rating ? 'fas' : 'far');
    });

    ratingDisplay.textContent = `${rating} Star${rating > 1 ? 's' : ''}`;
  }

  function downloadInvoice(orderId) {
    alert(`Downloading invoice for ${orderId} (demo placeholder).`);
  }

  function reorder(orderId) {
    alert(`Reordering ${orderId} (demo placeholder).`);
  }

  function filterOrders() {
    const dateVal = document.getElementById('dateFilter').value;
    const statusVal = document.getElementById('statusFilter').value;
    const cards = document.querySelectorAll('.order-card');

    cards.forEach(card => {
      const cardDate = card.getAttribute('data-date');
      const cardStatus = card.getAttribute('data-status');
      let show = true;

      if (dateVal && cardDate !== dateVal) show = false;
      if (statusVal !== 'all' && cardStatus !== statusVal) show = false;

      card.style.display = show ? 'block' : 'none';
    });
  }