// BEGIN navbar animation
let linkClicked = document.getElementsByClassName('nav-link');
let numClass = linkClicked.length;

for (let i = 0; i < numClass; i++) {
    linkClicked[i].addEventListener('click', function () {
        let onTheMoment = document.getElementsByClassName('active');
        onTheMoment[0].className = onTheMoment[0].className.replace(' active', '');
        this.className += ' active';
    }, false);
}
// END navbar animation

// BEGIN hamburger animation
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
// END hamburger animation

// BEGIN bouncing arrow bottom of full screen. Fades when scrolling.
$(window).scroll(function(){
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
//250 is fade pixels
});
// END bouncing arrow bottom of full screen. Fades when scrolling.

// BEGIN testing for overflow issues. * in CSS adds red border.
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
// END testing for overflow issues. * in CSS adds red border.