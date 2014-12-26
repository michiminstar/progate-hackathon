 $(function(){
   $('#clock-day').countdown('2015/01/01 00:00:00', function(event) {
   var $this = $(this).html(event.strftime(''
   + '<span>%-D</span> day%!D '));
    });

   $('#clock').countdown('2015/01/01 00:00:00', function(event) {
   var $this = $(this).html(event.strftime(''
   + '<span>%H</span> hour%!H '
   + '<span>%M</span> minutes '
   + '<span>%S</span> seconds'));
    });
 });
// $(function(){
//   $('#clock').countDown({
//         targetDate: {
//             'day': 1,
//             'month': 10,
//             'year': 2015,
//             'hour': 0,
//             'min': 0,
//             'sec': 0
//         },
//         omitWeeks: true
//     });
//   });

var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-inverse' ),
        didScroll = false,
        changeHeaderOn = 150;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-scroll' );
        }
        else {
            classie.remove( header, 'navbar-scroll' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
