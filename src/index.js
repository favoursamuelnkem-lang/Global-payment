
  // const rate = 0.00065; // NGN → USD

  // function setAmount(value) {
  //   document.getElementById("amountInput").value = value;
  //   updateUSD(value);
  // }

  // function updateUSD(amount) {
  //   const usd = amount * rate;
  //   document.getElementById("usdText").innerText =
  //     "(≈ $" + usd.toFixed(2) + ")";
  // }

  // document.getElementById("amountInput").addEventListener("input", function () {
  //   updateUSD(this.value || 0);
  // });


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

