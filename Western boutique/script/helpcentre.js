
    const questionBox = document.getElementById("questionBox");
    const optionItems = document.querySelectorAll(".query-option");

    const questions = {
      buying: [
        "How do I buy a product from Western Boutique?",
        "Is Cash on Delivery available?",
        "Can I cancel my order?",
        "How do I list my products?",
        "Is there a seller fee?",
        "How do I manage inventory?"
      ],
      selling: [
        "How do I list my products?",
        "Is there a seller fee?",
        "How do I manage inventory?",
         "How do I list my products?",
        "Is there a seller fee?",
        "How do I manage inventory?",
      ],
      account: [
        "How do I reset my password?",
        "Can I change my registered email?",
        "How to delete my account?",
         "How do I list my products?",
        "Is there a seller fee?",
        "How do I manage inventory?",
         "How do I list my products?",
        "Is there a seller fee?",
        "How do I manage inventory?"
      ],
      returns: [
        "How do I initiate a return?",
        "What is your return window?",
        "Can I exchange instead of return?"
      ],
      shipping: [
        "What are the delivery charges?",
        "How long does delivery take?",
        "Can I track my order?"
      ],
      security: [
        "Is my payment info secure?",
        "How do I report suspicious activity?",
        "Can I enable 2FA?"
      ],
      payments: [
        "Which payment methods are accepted?",
        "Can I use UPI or Wallet?",
        "What if my payment fails?"
      ],
      tracking: [
      "Where can I track my order?",
      "What do the tracking statuses mean?",
      "I haven’t received my package, what should I do?"
    ],
    products: [
      "How do I check if a product is in stock?",
      "What size should I order?",
      "Do you restock sold-out items?"
    ],
    refunds: [
      "How long does a refund take?",
      "Can I get a refund to my original payment method?",
      "Why was my refund rejected?"
    ]
    };

    let activeCategory = null;

    optionItems.forEach(option => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const category = option.getAttribute("data-category");

        if (activeCategory === category) {
          questionBox.classList.toggle("hidden");
          return;
        }

        activeCategory = category;
        const qList = questions[category] || [];

        questionBox.innerHTML = `
          <h3 class="text-lg font-bold font-serif mb-4 text-center text-white">Frequently Asked Questions</h3>
          <ul id="questionList" class="space-y-4">
          </ul>
        `;

        const list = document.getElementById("questionList");
       
        qList.forEach(q => {
          const card = document.createElement("li");
          card.className = "bg-white shadow-md border border-gray-300 rounded-xl px-4 py-3 text-base text-left max-w-3xl mx-auto";
          card.textContent = q;
          list.appendChild(card);
        });

        questionBox.classList.remove("hidden");
      });
    });

    // Close question box when clicking outside
    document.addEventListener("click", (e) => {
      if (!questionBox.contains(e.target) && !e.target.closest('.query-option')) {
        questionBox.classList.add("hidden");
        activeCategory = null;
      }
    });
  