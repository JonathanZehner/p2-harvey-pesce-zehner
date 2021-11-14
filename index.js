//function add_img() { 
//	var img = document.createElement('img'); 
 //   img.src = 'images/home-banner1'; 
//	document.getElementById('body').appendChild(img);
//}

// Hamburger Menu
// Hamburger Variables
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menuItem");
var hamburger= document.querySelector(".hamburger");
var closeIcon= document.querySelector(".closeIcon");
var menuIcon = document.querySelector(".menuIcon");

// Hamburger Function: code that makes it work
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

// Hamburger Event: code that makes it happen
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function(menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)
// End Hamburger Menu

//