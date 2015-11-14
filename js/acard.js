jQuery(document).ready(function($) {

	//custom animation for open/close
        $.fn.slideFadeToggle = function(speed, easing, callback) {
            return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
        };

        $('.accordion-check').accordion({
            defaultOpen: 'section1',
            cookieName: 'nav',
            speed: 'slow',
            animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            },
            animateClose: function (elem, opts) { //replace the standard slideDown with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            }
        });
		
		$( ".accordion-widget" ).click( function(event) {
		if ( $( this ).find(".accordion-widget-plus").length ) {
			$( ".accordion-widget .accordion-widget-minus" ).parent().prepend("<span class='accordion-widget-plus'>+</span>").find(".accordion-widget-minus").remove();
			$( ".accordion-widget" ).next(".collapse.in").collapse( 'hide' );
			$( this ).prepend("<span class='accordion-widget-minus'>-</span>").find(".accordion-widget-plus").remove();
			$( this ).parent().find( ".collapse" ).collapse( 'show' );
		} else { 
			$( ".accordion-widget .accordion-widget-minus" ).parent().prepend("<span class='accordion-widget-plus'>+</span>").find(".accordion-widget-minus").remove();
			$( ".accordion-widget" ).next(".collapse.in").collapse( 'hide' );
		}
		});

	

});	 