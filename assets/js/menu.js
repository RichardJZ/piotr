var mobileMenu = document.querySelector(".mobile-menu");
var menuBox = document.getElementById("js--menu")  
    
function toggleMenu(){
  if(mobileMenu.style.display == "block" ){
    mobileMenu.style.display = "none";
    menuBox.innerHTML = "MENU";

  }

  else {
    mobileMenu.style.display = "block";
    menuBox.innerHTML = "X";
   

  }
}
