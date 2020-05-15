$(function(){

      $('.slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-down',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              autoplay: true,
            }
          },
          
        ]
      });

      $('.slider-down').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider-top',
        dots: false,
        centerMode: false,
        arrows: false,
        variableWidth: true, 
        focusOnSelect: true
      });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
      });

      


  });