const swiper = new Swiper('.swiper', {
// Optional parameters
direction: 'vertical', 
speed: 1500,
loop: true,
autoplay: {
  delay: 1000,
  reverseDirection: true,
}
});

/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
  //duration in milliseconds of the marquee
  duration: 10000,
  //gap in pixels between the tickers
  gap: 50,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: -12000,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});

// 스크롤 이미지 애니메이션
$(function () {
  $(window).scroll(function () {
      var top = $(window).scrollTop();
      if (matchMedia("screen and (min-width: 1024px)").matches) {
        if (top > 120) {
          $('.middle').css({ 'transform': 'translateY(-100px)'});
        }
        if (top > 180) {
          $('.content').css({ 'transform': 'translateY(-230px)'});
        }
      }
  })
})


// 컬러 체인지

$(function () {
  $(window).scroll(function () {
      var top = $(window).scrollTop();

      if (0 < top && "800" > top) {
        $('header a').css({ 'color': '#212226'});
      }

      if (800 < top && 2000 > top) {
        $('header a').css({ 'color': '#fff'});
      }

      if (2000 < top) {
        $('header a').css({ 'color': '#212226'});
      }
  })
})