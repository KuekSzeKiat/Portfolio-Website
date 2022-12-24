$(document).ready(function(){
  // Toggle navbar background-color
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".nav-bar").addClass("sticky")
    }else{
      $(".nav-bar").removeClass("sticky")
    }
  })

  //toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.nav-bar .nav-bar-menu').toggleClass('active');
    $(".nav-bar").toggleClass("active");
    $(".nav-bar .nav-bar-logo").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Kuek Sze Kiat.", "Software Developer."],
     typeSpeed: 120,
     backSpeed: 72,
     loop: true
   });

   //skills carousel
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:3
      },
      600:{
          items:5
      },
      1000:{
        items:8
      }
    }
  });
});

//Toggle disapperance of navbar when side menu is toggled
$(document).on("click", function(event){
  var $trigger = $(".menu-btn");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $('.nav-bar .nav-bar-menu').removeClass('active');
    $(".nav-bar").removeClass("active");
    $(".nav-bar .nav-bar-logo").removeClass("active");
  }            
});

function portfolio_alert(){
  alert("You are looking at it >_<");
}