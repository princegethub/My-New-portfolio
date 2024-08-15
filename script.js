let darkMode = document.querySelector("#dark_mode");
<<<<<<< HEAD
let data = 0; // 0 for light mode, 1 for dark mode

let tikTak = document.querySelector("#tiktak_menu");
let linkContainer = document.querySelector("#links_container");
let tikTak_data = 0; // Initialize the variable

// Dark Mode Toggle
darkMode.addEventListener("click", () => {
  console.log("Dark mode toggled");
=======
let data = 0;

darkMode.addEventListener("click", () => {
  console.log("you clicked me");
>>>>>>> origin/main

  if (data === 0) {
    darkMode.classList.remove("fa-moon");
    darkMode.classList.add("fa-sun");
    data = 1;
<<<<<<< HEAD
    document.body.classList.add('dark');
  } else {
    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
    data = 0;
    document.body.classList.remove('dark');
  }
});

// Menu Toggle
tikTak.addEventListener("click", () => {
  console.log("Menu toggled");

  if (tikTak_data === 0) {
    tikTak.classList.remove("fa-bars");
    tikTak.classList.add("fa-xmark");
    tikTak_data = 1;
    linkContainer.style.right = '10px';
  } else {
    tikTak.classList.remove("fa-xmark");
    tikTak.classList.add("fa-bars");
    tikTak_data = 0;
    linkContainer.style.right = '-50px';
=======
    document.body.classList.add('dark')


  } else {

    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
    data = 0;
    document.body.classList.remove('dark')

>>>>>>> origin/main
  }
});
