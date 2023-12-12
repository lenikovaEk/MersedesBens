$(function() {
  $('.design__slider').slick({
  dots: false,
  slidesToShow: 4,
  variableWidth: true,
  prevArrow: '<img class="arrow arrow-left" src="images/Arrow-left.svg" alt="">',
  nextArrow: '<img class="arrow arrow-right" src="images/Arrow-right.svg" alt="">',
  responsive: [
    {
      breakpoint: 361,
      settings:{
        variableWidth: false,
        slidesToShow: 1,
        dots: false,
      }

    }
  ]
  });

  
  $('.header__nav,.header__menu').on('click', function () {
    $('.header__menu-nav').toggleClass('active');
});


  $(".header__menu a").on("click",  function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});
