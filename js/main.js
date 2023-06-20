$(document).ready(function(){
  $('.slider').slick();
});

$(document).ready(function(){
  $('.slider-car').slick({
    arrows: true,
    vertical: true,
    slidesToShow: 3,
    
  });
});

$(document).ready(function(){
  $('.slider-colour').slick({
    arrows: false,
    dots: true,
  });
});


const modal = document.querySelector('#modal-form')
const button = document.querySelector('#order-call');
button.addEventListener('click', function () {
  modal.style.display = 'block';
});