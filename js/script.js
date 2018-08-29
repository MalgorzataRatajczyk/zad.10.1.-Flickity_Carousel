"use strict";

(function(){ 
// kod generujący slajdy z szablonu html
  var templateSlideItems = document.getElementById('template-slideShow').innerHTML;
  Mustache.parse(templateSlideItems);
  var slideItem = '';
  var slides = document.getElementById('slides');

    for (var i = 0; i < slideShow.length; i++){
  
      slideItem += Mustache.render(templateSlideItems, slideShow[i]);
  
    }

  slides.innerHTML = slideItem;

  // kod dla FlickityCarousel
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

  // Dodajemy mapę do projektu poprzez  zdefiniowanie funkcji initMap w zakresie globalnym (czyli jako właściwość obiektu window).
  window.initMap = function () {

    var infos = document.getElementById('infos');

    // Zapisujemy w zmiennej obiekt zawierający współrzędne geograficzne pierwszego slajdu.
    var ansouis = {lat: 43.7375434, lng: 5.4639664};

    // Wyśrodkowanie mapy na współrzędne z pierwszego slajdu. 
    var map = new google.maps.Map(document.getElementById('map'),
      {zoom: 10,
      center: ansouis
    });

    // Pętla dodająca po jednym markerze do każdego slajdu
    for (i = 0; i < slideShow.length; i++) {
      var marker = new google.maps.Marker({
        position: slideShow[i].coords,
        map: map
      })

    }

  }		

})();  