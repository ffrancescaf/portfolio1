$(document).ready(function(){
    $('.slick-gallery').slick();
  });
  
  $(function(){ // onLoad...
    
    var isDebug = false;
    var controller = new ScrollMagic.Controller();



/**/
  // scene 1 "HELLO,nice to meet you"
  var splitText1 = new SplitText("div.intro", {type: "words,chars"});
  var animation2 = gsap.timeline()
  .from(splitText1.chars.reverse(), {duration: 2, opacity: 0, x: -$(window).width(), stagger: 0.3})
  .to(splitText1.chars, {duration: 2, x: $(window).width(), opacity: 0, stagger: 0.3}, "+=3");
  
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    duration: "100%",
    triggerHook: "onLeave"
  })
  .setTween(animation2)
  .setPin("#section2")
  .addTo(controller);
  if(isDebug) scene2.addIndicators();
  
})