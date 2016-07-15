$(document).ready(function(){

  // Slider functionality
  function slickReinit(){
    $('.slider').on('init', function(event, slick){
      // Apply browser height to wrapper and slider blocks
      var browserHeight = $(window).height();
      $('.wrapper').height(browserHeight);
      $('.slider .page-img').height(browserHeight);
      // Apply new image width to slider width
      var pageImgWidth = $('.slider .page-img').width();
      $('.slider').width(pageImgWidth);
      // Apply width of sign link and position
      var signLinkWidth = Math.ceil(pageImgWidth / 5);
      console.log(pageImgWidth);
      console.log(signLinkWidth);
      $('.sign-link').width(signLinkWidth);
      var signLinkPosition = Math.ceil(signLinkWidth / 10);
      console.log(signLinkPosition);
      $('.sign-link').css({ top: signLinkPosition, right: signLinkPosition});
    });
    $('.slider').slick({
      infinite: true,
      dots: false,
      fade: true,
      cssEase: 'linear'
    });
  }
  $(window).on('resize', function(){
    slickReinit();
  });
  slickReinit();

  // Sign pop-up functionality
  $('.sign-link').magnificPopup({type:'image'});

});
