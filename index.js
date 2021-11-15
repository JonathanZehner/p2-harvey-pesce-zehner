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

hamburger.style.display = "block";
closeIcon.style.display = "none";

// Hamburger Function: code that makes it work
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

// Hamburger Event: code that makes it happen
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function(menuItems) {
    menuItems.addEventListener("click", toggleMenu);
  }
);
// End Hamburger Menu

//CONTACT FORM
//grab elements from html
var formEl = document.querySelector('form');
var nameInput = document.querySelector('input[type=text]');
var emailInput = document.getElementById('email');

//onsubmit, formData
formEl.onsubmit = function(e) {
  e.preventDefault();
  var formData = new FormData(e.target);
  console.log(formData.get('name'));
  console.log(formData.get('email'));
  console.log(Object.fromEntries(formData));
};

//submit form
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = nameInput.value;
  var email = emailInput(emailInput.value);
  console.log("event listener", {name, email});
});

//dropdown menu toggle
function mainNav() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}
//close menu
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-menu')) {
    var dropdowns = document.getElementsByClassName("dropdown-pages");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
