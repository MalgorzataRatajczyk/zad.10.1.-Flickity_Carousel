"use strict";

var templateSlideItems = document.getElementById('template-slideShow').innerHTML;
Mustache.parse(templateSlideItems);
var slideItem = '';
var elem = document.querySelector('.main-carousel');
var slides = document.getElementById('slides');

for (var i = 0; i < slideShow.length; i++){
  
  slideItem += Mustache.render(templateSlideItems, slideShow[i]);
  
}

slides.innerHTML = slideItem;

var flkty = new Flickity('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
  autoPlay: 3000,
  pauseAutoPlayOnHover: true,
  hash: true,
  contain: true,
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

var button = document.querySelector('.button');
var buttons = button.querySelector('.button-restart');
buttons = fizzyUIUtils.makeArray( buttons );

button.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.button-restart' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.selectCell( 0 );
});

