let darkMode = document.querySelector("#dark_mode");
let data = 0;

darkMode.addEventListener("click", () => {
  console.log("you clicked me");

  if (data === 0) {
    darkMode.classList.remove("fa-moon");
    darkMode.classList.add("fa-sun");
    data = 1;
    document.body.classList.add('dark')


  } else {

    darkMode.classList.remove("fa-sun");
    darkMode.classList.add("fa-moon");
    data = 0;
    document.body.classList.remove('dark')

  }
});
