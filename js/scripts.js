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