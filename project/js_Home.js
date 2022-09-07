
//Dark mode
function myFunction() {
  var icon = document.getElementById("sun");
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    icon.src ="img/moon.png";
  }else{
    icon.src="img/sun.png"
  }
}
// Add proudic in cart
var cart= document.getElementById("badge");
count = 0;
function myCart(){
  count +=1;
  cart.innerHTML= count;
}
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex =1;
  }    
  else if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
function add(){
    document.getElementsByClassName('container1')[0].innerHTML +=`<div class="card">
    <i onclick="dlt(this.parentElement)" class="fa fa-trash"></i>
    <img src="img/1.jpg">
    <h3>Cat</h3>
    <div class="icon_star">
      <i class="fa fa-star checked"></i>
      <i class="fa fa-star checked"></i>
      <i class="fa fa-star "></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
    </div>
    <h5>$15.99</h5>
    <button class="button1">ADD TO CART</button>
</div>`
}
function dlt(e) {

    e.remove()
    
}
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}