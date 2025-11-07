// Alpine.js data
function helpData() {
  return {
    faqs: {
      order: [
        { title: 'How can I track my order?', content: 'You’ll receive a tracking link via SMS/email once your order is shipped.' },
        { title: 'Can I cancel my order?', content: 'Orders can be cancelled within 2 hours. Contact us immediately for changes.' },
        { title: 'Can I modify my order after placing it?', content: 'Unfortunately, orders cannot be changed once placed. Please contact us to cancel and reorder.' },
        { title: 'What should I do if I receive a damaged product?', content: 'We’re sorry! Please email us photos of the damage within 48 hours, and we’ll help with a replacement or refund.' },
        { title: 'Do you offer express delivery?', content: 'Yes, express delivery is available in select cities at checkout with an additional charge.' },
      ],
      nonorder: [
        { title: 'How do I reset my password?', content: 'Click “Forgot Password” on the login page and follow the email instructions.' },
        { title: 'How do I change my address?', content: 'You can update your address in your profile before placing a new order.' },
        { title: 'How can I delete my account?', content: 'Send a deletion request to our support email. Your data will be permanently removed within 5–7 days.' },
        { title: 'How do I unsubscribe from promotional emails?', content: 'Click the unsubscribe link in any promotional email or update your preferences in account settings.' },
      ],
      recent: [
        { title: 'Why is my order delayed?', content: 'Delays can happen due to high demand or delivery partner issues.' },
        { title: 'How do I get a refund?', content: 'Refunds are processed within 5–7 business days once return is approved.' },
        { title: 'Why haven’t I received my confirmation email?', content: 'Check your spam or promotions folder. If it’s missing, contact support to resend the confirmation.' },
        { title: 'Why is my return still pending?', content: 'Returns may take up to 7 days to process after pickup. If it exceeds this time, contact our support team.' },
        { title: 'Why was my payment declined?', content: 'Payments may be declined due to incorrect card details, insufficient funds, or bank issues. Please try again or use a different method.' },
      ]
    }
  };
}

// Load header and footer
window.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
      const script = document.createElement("script");
      script.src = "header/header.js";
      document.body.appendChild(script);
      lucide.createIcons();
    });

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
      lucide.createIcons();
    });

  lucide.createIcons();
});