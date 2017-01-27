$(window).load(function(){

  // external js: isotope.pkgd.js

  // init Isotope
  $('.grid').isotope({
    itemSelector: '.detail',
    masonry: {
      columnWidth: 100,
      gutter: 20
    }
  });

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

});
