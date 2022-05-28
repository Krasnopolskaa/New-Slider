let img = document.getElementsByTagName('IMG');
let slideShow = function() {
  if (!img[0].classList.contains('hide')) {
    img[0].classList.add('hide');
  } else if (!img[1].classList.contains('hide')) {
    img[1].classList.add('hide');
  } else if (!img[2].classList.contains('hide')) {
    img[2].classList.add('hide');
  } else {
    img[0].classList.remove('hide');
    img[1].classList.remove('hide');
    img[2].classList.remove('hide');
  }
};
 
let reverse = function() {
  if (img[2].classList.contains('hide')) {
    img[2].classList.remove('hide');
  } else if (img[1].classList.contains('hide')) {
    img[1].classList.remove('hide');
  } else if (img[0].classList.contains('hide')) {
    img[0].classList.remove('hide');
  } else {
    img[2].classList.add('hide');
    img[1].classList.add('hide');
    img[0].classList.add('hide');
  }
}
 
let start = setInterval(slideShow, 2000);
let toggled = true;
 
function toggle(bool) {
  if (toggled | bool) {
    clearInterval(start);
    toggled = false;
    $('.toggle').html('play');
    $('.toggle').addClass('paused');
    $('.dailog').addClass('show');
  } else {
    start = setInterval(slideShow, 2000);
    toggled = true;
    $('.toggle').html('pause');
    $('.toggle').removeClass('paused');
    $('.dailog').removeClass('show');
  }
}
 
let transition = false;
 
$('.slideshow').click(function(e) {
  if ($(e.target).is('.toggle')) {
    toggle();
  } else if ($(e.target).is('.next')) {
    toggle(true);
    if (transition == false) {
      transition = true;
      setTimeout(function() {
        slideShow();
        transition = false;
      }, 150);
    }
  } else if ($(e.target).is('.back')) {
    toggle(true);
    if (transition == false) {
      transition = true;
      setTimeout(function() {
        reverse();
        transition = false;
      }, 150);
    }
  } else {
    toggle()
  }
})
 