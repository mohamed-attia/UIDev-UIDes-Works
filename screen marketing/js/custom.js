/*social media slider*/
// $("#social-media-slider > div:gt(0)").hide();
// setInterval(function() { 
//   $('#social-media-slider > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#social-media-slider');
// },  2000);

//indicators
$(document).ready(function () {
  var numItems = $('.hero').length
  console.log(numItems);
  var div = document.getElementsByClassName('carousel-indicators')
  for (i = 1; i < numItems; i++) {
    $(div).append("<li data-target='#bs-carousel' data-slide-to= " + i + "></li>");
  }
});

window.onload = function () {
  //h-progress
  var hCounter = document.getElementsByClassName('h-progress');
  var hCon = Number($(hCounter).attr('data-interval'));
  function hloop() {
    $('.h-progress').css({ width: 0 });
    $('.h-progress').animate({
      width: '1114px',
    }, hCon, 'linear', function () {
      // console.log(hCon)
      hloop();
    });
  }
  hloop();

  //v-progress
  var vCounter = document.getElementsByClassName('v-progress');
  var vCon = Number($(vCounter).attr('data-interval'));
  function vloop() {
    $('.v-progress').css({ width: 0 });
    $('.v-progress').animate({
      width: '1083px',
    }, vCon, 'linear', function () {
      // console.log(vCon)
      vloop();
    });
  }
  vloop();

  //refresh h-page
  var href = Number(hCon * $('.hero').length);
  setTimeout(function () {
    window.location.reload(1);
  }, href);

  //refresh h-page
  var vref = Number(vCon * $('.hero').length);
  setTimeout(function () {
    window.location.reload(1);
  }, vref);
}
