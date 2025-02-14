$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('about')) {
      extraOptions = {
        slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoPlay: true,
          dots: true,
        responsive: [
          
          
  ] 
      }
    } else if (slider.hasClass('advantages')) {
      extraOptions = {
        slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoPlay: true,
          dots: false,
        responsive: [
          {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
          },
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
          },
          {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ] 
      }
    }else if (slider.hasClass('directions')) {
      extraOptions = {
        slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          autoPlay: true,
          dots: false,
        responsive: [
          {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
          },
          {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ] 
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
})