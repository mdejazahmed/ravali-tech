
$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items:1,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true
        }
    );
  });

  let menuBtn=document.getElementById("menuIcon")
  let crossBtn=document.getElementById("crossIcon")
  let mobileNavbar=document.getElementById("mobileNavbar")

  menuBtn.addEventListener("click", function(){
   crossBtn.classList.toggle("d-none")
   menuBtn.classList.toggle("d-none")
   mobileNavbar.classList.toggle("d-none")
  });

  crossBtn.addEventListener("click",function(){
    crossBtn.classList.toggle("d-none")
   menuBtn.classList.toggle("d-none")
   mobileNavbar.classList.toggle("d-none")
  })