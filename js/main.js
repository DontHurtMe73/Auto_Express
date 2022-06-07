$(function () {

      $(".carousel__inner").slick({
        arrows: false,
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 841,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 601,
            settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

      });