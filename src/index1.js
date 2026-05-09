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
