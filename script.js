let darkMode = document.querySelector("#dark_mode");
let data = 0;
let tikTak_data=0;
darkMode.addEventListener("click", () => {
 

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



let tikTak = document.querySelector("#tiktak_menu");
let linkContainer = document.body.querySelector("#links_container");

tikTak.addEventListener("click" , ()=>{
  console.log("you clicked me");


  if (tikTak_data === 0) {
    tikTak.classList.remove("fa-bars");
    tikTak.classList.add("fa-xmark");
    tikTak_data = 1;
    linkContainer.style.right = '10px';
  }else{
    
    tikTak.classList.remove("fa-xmark");
    tikTak.classList.add("fa-bars");
    tikTak_data = 0;
    linkContainer.style.right = '-50px';

  }
})