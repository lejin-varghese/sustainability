$(document).ready(function() {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  // Gets the video src from the data-src on each button
  var $videoSrc;  
  $('.video-btn').click(function() {
      $videoSrc = $(this).data( "src" );
  });
  console.log($videoSrc);
  
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {
      
  // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
  $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })
  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
      // a poor man's stop video
      $("#video").attr('src',$videoSrc); 
  }) 
  // document ready  
  $(window).scroll(function(){
   
  });

  //Click event to scroll to top
  $('.top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  }); 

});



$(window).scroll(function() {
  
  var scrollDistance = $(window).scrollTop();

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
    if ($(this).position().top <= scrollDistance) {
      $('.navigator li a.active').removeClass('active');
      $('.navigator li a').eq(i).addClass('active');
    }
  });

  if ($(this).scrollTop() > 1000) {
    $('.scrollToTop ').css( {"opacity":"1", "bottom": "4px", "visibility": "visible"});
  } else {
      $('.scrollToTop ').css( {"opacity":"0", "bottom": "-60px", "visibility": "hidden"} );
  }


  // sticky header
  var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

  if (scroll >= 200) sticky.addClass('fixed');
  else sticky.removeClass('fixed');



}).scroll();







