"use strict";

(function(){ 

  var templateSlideItems = document.getElementById('template-slideShow').innerHTML;
  Mustache.parse(templateSlideItems);
  var slideItem = '';
  var slides = document.getElementById('slides');

    for (var i = 0; i < slideShow.length; i++){
  
      slideItem += Mustache.render(templateSlideItems, slideShow[i]);
  
    }

  slides.innerHTML = slideItem;
  var elem = document.querySelector('.main-carousel');

  var flkty = new Flickity('.main-carousel', {
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

  // Definujemy funkcję initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  window.initMap = function () {
    // Zapisujemy w zmiennej obiekty zawierające współrzędne geograficzne.
    var uluru = {lat: -25.344, lng: 131.036};
    // W zmiennej map zapisujemy nową instancję obiektu Map. 
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    // Definiujemy marker jako nową instancję obiektu Marker.
    var marker = new google.maps.Marker({position: uluru, map: map});
  }
  // Po dodaniu markera możemy użyć jego metody addListener:
		markerOne.addListener('click', function(){
    // Wewnątrz funcji wpisujemy kod, który ma się wykonać po kliknięciu markera. W tym przykładzie wyświetlimy tekst na stronie. 
    infos.innerHTML = 'You clicked markerOne';
  });		

})();  