//function add_img() { 
//	var img = document.createElement('img'); 
 //   img.src = 'images/home-banner1'; 
//	document.getElementById('body').appendChild(img);
//}

// Hamburger Menu
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});
// End Hamburger Menu