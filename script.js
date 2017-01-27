$(window).load(function(){
  
// external js: isotope.pkgd.js


// init Isotope
var iso = new Isotope( '.grid', {
  //itemSelector: '.detail',
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.detail',
  masonry: {
    // use element for option
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer'
  },
  stagger: 50,
  transitionDuration: '1s',
  // only opacity for reveal/hide transition
  hiddenStyle: {
    opacity: 0,
  },
  visibleStyle: {
    opacity: 1,
  },
  layoutMode: 'masonry'/*,
  getSortData: {
    quote: '.quote',
    movie: '.movie'*/
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt( number, 10 ) > 50;
    }
  };

  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });

  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }

  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }

  function onButtonGroupClick( event ) {
    // only button clicks
    if ( !matchesSelector( event.target, '.button' ) ) {
      return;
    }
    var button = event.target;
    button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
    button.classList.add('is-checked');
  }

  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  $grid.isotope({
    // disable opacity transition when hiding
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }
  })
  
  
});
