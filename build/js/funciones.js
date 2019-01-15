
//Scrolling effect
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  $("#navBar").css("width", scrolled + "%");
}

// Función ancla

$("#goToForm").click( function() {
  $('html, body').animate({
    scrollTop: $(".banner-form").offset().top - 150
  }, 700);
  console.log('nfnvjfnjvf')
})