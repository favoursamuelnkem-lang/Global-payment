


  function setAmount(value) {
  document.getElementById("amountInput").value = value;
  updateDisplay(value);
}

function updateDisplay(amount) {
  document.getElementById("usdText").innerText = "$" + Number(amount || 0).toFixed(2);
}

document.getElementById("amountInput").addEventListener("input", function () {
  updateDisplay(this.value);
});



document.getElementById("payBtn").addEventListener("click", function () {

  let amount = document.getElementById("amountInput").value;

  FlutterwaveCheckout({
    public_key: "FLWPUBK-ab46a67dfb1a6016ae7159462676aee7-X",

    tx_ref: "tx-" + Date.now(),

    amount: amount,

    currency: "USD",

    payment_options: "card, banktransfer, ussd",

    customer: {
      email: "customer@gmail.com",
      phone_number: "08000000000",
      name: "Customer"
    },

    customizations: {
      title: "Global Payment",
      description: "Deposit Payment",
    }
  });

});






































  // nav menu button
    const menubtn = document.getElementById("menu-btn");
    const mobilemenu = document.getElementById("mobile-menu");

    menubtn.addEventListener("click", () => {
    mobilemenu.classList.toggle("hidden");

    });



    const navLinks = document.querySelectorAll("#mobile-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobilemenu.classList.add("hidden");
  });
});

