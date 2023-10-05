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