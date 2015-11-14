jQuery(document).ready(function($) {
	/* --------------------------------------------------------
	* = Search box's animation
	* -------------------------------------------------------*/
	$(".search-box form").hover( function() {		  	
   		$("#slide_width").animate({
   			"width": "237px",
   			"paddingLeft": "10px",
   			"paddingRight":"34px",
   			"border-width": "1px"
		});
   	}, function() {
		$("#slide_width").animate({
			"width": "0px",
			"paddingLeft": "0px",
			"paddingRight": "0px",
			"border-width": "0px"
	   	});	
	});

	/* --------------------------------------------------------
	* = Language and Currency Dropdowns
	* -------------------------------------------------------*/
	$('#currency, #language').mouseover(function() {
		$(this).find('> ul').slideDown('fast');
		$(this).bind('mouseleave', function() {
			$(this).find('> ul').slideUp('fast');
		});
	});

	$( "#currency li" ).click( function( event  ) {
		event.preventDefault();
		$( ".current-currency" ).html( $(this).html() );
	});

	$( "#language li" ).click( function( event ) {
		event.preventDefault();
		$( ".current-lang" ).html( $(this).html() );
	});

	/* --------------------------------------------------------
	* = Shopping Cart
	* -------------------------------------------------------*/ 
	$('.shopping-cart-block').mouseover( function() {
		$(".shoppingCartMenu").slideDown('fast');
		$(".shopping-cart-block").bind( 'mouseleave', function() {
			$(".shoppingCartMenu").slideUp('fast');
		});
	});

	var deleteEl = false
	,	currentElIndex;
	$(".delete-prod").click( function() {
		deleteEl = true;
	});

	$(".leave-prod").click( function() {
		deleteEl = false;
	});

	$('.shoppingCartMenu .fa-trash').click( function () {
		$('#myModal').modal('toggle');
		currentElIndex = $(this).parent().index();
	});

	$('#myModal').on('hide.bs.modal', function () {
 		if ( deleteEl ) {
			$('.shoppingCartMenu>li').eq( currentElIndex ).remove();
			deleteEl = false;
			currentElIndex = undefined;
		}
	});

	/* --------------------------------------------------------
	* = Testimonials slider
	* -------------------------------------------------------*/ 
	try {
		$('.bxslider').bxSlider({
			// "mode": "fade",
			"speed": 1000,
			"infiniteLoop": true,
			// "easing": "ease",
			"pager": false,
			"auto": true,
			"autoStart": true,
			"autoHover": true,
			"prevText": "<i class='fa fa-chevron-left'></i>",
			"nextText": "<i class='fa fa-chevron-right'></i>"
		});
	} catch( err ) {

	}

	/* --------------------------------------------------------
	* = Bustrap slider in the different viewports
	* -------------------------------------------------------*/ 
	if ( window.innerWidth > 1199 ) {
		changeSliderItemCount( 5, ".product-wide-slider" );
		changeSliderItemCount( 4, ".product-left-norrow-slider" );
		changeSliderItemCount( 4, ".product-right-norrow-slider" );
		changeSliderItemCount( 3, ".posts-slider" );
		changeSliderItemCount( 4, ".posts-slider-home2" );
		changeSliderItemCount( 6, ".brands-slider" );
		changeSliderItemCount( 6, ".brands-slider-home2" );
		changeSliderItemCount( 4, ".product-price-page-slider" );
	}

	if ( window.innerWidth < 1199 && window.innerWidth >= 992 ) {
		changeSliderItemCount( 4, ".product-wide-slider" );
		changeSliderItemCount( 4, ".product-left-norrow-slider" );
		changeSliderItemCount( 4, ".product-right-norrow-slider" );
		changeSliderItemCount( 2, ".posts-slider" );
		changeSliderItemCount( 3, ".posts-slider-home2" );
		changeSliderItemCount( 6, ".brands-slider" );
		changeSliderItemCount( 5, ".brands-slider-home2" );
		changeSliderItemCount( 2, ".product-price-page-slider" );
	}

	if ( window.innerWidth < 991 && window.innerWidth >= 768 ) {
		changeSliderItemCount( 3, ".product-wide-slider" );
		changeSliderItemCount( 4, ".product-left-norrow-slider" );
		changeSliderItemCount( 4, ".product-right-norrow-slider" );	
		changeSliderItemCount( 2, ".posts-slider" );
		changeSliderItemCount( 2, ".posts-slider-home2" );
		changeSliderItemCount( 4, ".brands-slider" );
		changeSliderItemCount( 2, ".product-price-page-slider" );
	}

	if ( window.innerWidth < 767 ) {
		changeSliderItemCount( 1, ".product-wide-slider" );
		changeSliderItemCount( 1, ".product-left-norrow-slider" );
		changeSliderItemCount( 1, ".product-right-norrow-slider" );
		changeSliderItemCount( 1, ".posts-slider" );
		changeSliderItemCount( 1, ".posts-slider-home2" );
		changeSliderItemCount( 1, ".brands-slider" );
		changeSliderItemCount( 1, ".product-price-page-slider" );
	}

	$( window ).resize( function() {
		if ( window.innerWidth > 1199 ) {
			changeSliderItemCount( 5, ".product-wide-slider" );
			changeSliderItemCount( 4, ".product-left-norrow-slider" );
			changeSliderItemCount( 4, ".product-right-norrow-slider" );
			changeSliderItemCount( 3, ".posts-slider" );
			changeSliderItemCount( 6, ".brands-slider" );
			changeSliderItemCount( 4, ".posts-slider-home2" );
			changeSliderItemCount( 4, ".product-price-page-slider" );
		}

		if ( window.innerWidth < 1199 && window.innerWidth >= 992 ) {
			changeSliderItemCount( 4, ".product-wide-slider" );
			changeSliderItemCount( 4, ".product-left-norrow-slider" );
			changeSliderItemCount( 4, ".product-right-norrow-slider" );
			changeSliderItemCount( 2, ".posts-slider" );
			changeSliderItemCount( 3, ".posts-slider-home2" );
			changeSliderItemCount( 6, ".brands-slider" );
			changeSliderItemCount( 2, ".product-price-page-slider" );
		}

		if ( window.innerWidth < 991 && window.innerWidth >= 768 ) {
			changeSliderItemCount( 3, ".product-wide-slider" );
			changeSliderItemCount( 4, ".product-left-norrow-slider" );
			changeSliderItemCount( 4, ".product-right-norrow-slider" );	
			changeSliderItemCount( 2, ".posts-slider" );
			changeSliderItemCount( 4, ".brands-slider" );
			changeSliderItemCount( 2, ".posts-slider-home2" );		
			changeSliderItemCount( 2, ".product-price-page-slider" );
		}

		if ( window.innerWidth < 767 ) {
			changeSliderItemCount( 1, ".product-wide-slider" );
			changeSliderItemCount( 1, ".product-left-norrow-slider" );
			changeSliderItemCount( 1, ".product-right-norrow-slider" );
			changeSliderItemCount( 1, ".posts-slider" );
			changeSliderItemCount( 1, ".brands-slider" );
			changeSliderItemCount( 1, ".posts-slider-home2" );
			changeSliderItemCount( 1, ".product-price-page-slider" );
		}
	});

	/**
	 * This function changes the number of items of Bootstrap slider's slides for any viewport
	 * @param  {int} 	itemCount   The number of items we want		
	 * @param  {string} sliderClass The class of our slider
	 */
	function changeSliderItemCount( itemCount, sliderClass ) {
		var firstdSliderItemCount = $( sliderClass + " .item" )
				.eq( 0 ).find( sliderClass + "-item" ).length;

		if( firstdSliderItemCount > itemCount ) {
			/*Loop for all curent slider slides*/
			for ( var t = 0; t < $(sliderClass + " .item").length; ++t ) {

				var sliderItemCount = $( sliderClass + " .item" )
					.eq( t ).find( sliderClass + "-item" ).length; 

				while ( sliderItemCount > itemCount ) {
					var sliderItem = $( sliderClass + " .item" ).eq( t ).find( sliderClass + "-item" ).last().detach();
					if ( $( sliderClass + " .item" ).eq( t ).next().get( 0 ) ) {
						$( sliderClass + " .item" ).eq( t ).next().find( '>.row' ).prepend( sliderItem );
					} else {
						$( sliderClass + " .carousel-inner" )
							.append( "<div class='item'><div class='row'></div></div>" );
						$( sliderClass + " .item" ).eq( t ).next().find( '>.row' ).prepend( sliderItem );
					}
					--sliderItemCount;
				}
			} 
		} else if ( firstdSliderItemCount < itemCount ) {
			var bigginingCount = $(sliderClass + " .item").length;

			for ( var m = 0; m < $(sliderClass + " .item").length; ++m ) {
			
				var sliderItemCount = $( sliderClass + " .item" ).eq( m ).find( sliderClass + "-item" ).length;

				for ( var i = m + 1; i < $(sliderClass + " .item").length && sliderItemCount < itemCount; i++ ) {
					while( sliderItemCount < itemCount ) {
						var nextSliderFirstItem = $( sliderClass + " .item" ).eq( i ).find( sliderClass + "-item" ).first().detach();
						if ( nextSliderFirstItem.get( 0 ) ) {
							$( sliderClass + " .item" ).eq( m ).find( '>.row' ).append( nextSliderFirstItem );
							++sliderItemCount;

							/*if this slide empty we need remove it */
							if(!$( sliderClass + " .item" ).eq( i ).find( sliderClass + "-item" ).length) {
								$( sliderClass + " .item" ).eq( i ).remove();
							}
						} else {
							$( sliderClass + " .item" ).eq( i ).remove();
							break;
						}
					}
					
				}
			}
			var item = $(sliderClass + " .item").eq( $(sliderClass + " .item").length - 1 )
			if( !item.find( sliderClass + "-item" ).length ) {
				item.remove();
			}
			$(sliderClass + " .item").removeClass('active')
			$(sliderClass + " .item").eq( 0 ).addClass('active');
		}			
	}

	/* --------------------------------------------------------
	* = Accordion widget in sidebar
	* -------------------------------------------------------*/ 
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
	
	/* --------------------------------------------------------
	* = The tabs in "single-product" page
	* -------------------------------------------------------*/ 
	$("#tabs li").click(function() {
		//	First remove class "active" from currently active tab
		$("#tabs li").removeClass('active');

		//	Now add class "active" to the selected/clicked tab
		$(this).addClass("active");

		//	Hide all tab content
		$(".tab_content").hide();

		//	Here we get the href value of the selected tab
		var selected_tab = $(this).find("a").attr("href");

		//	Show the selected tab content
		$(selected_tab).fadeIn();

		//	At the end, we add return false so that the click on the link is not executed
		return false;
	});	
	
/* --------------------------------------------------------
	* = Resizes images in "single-product" page
	* -------------------------------------------------------*/
	$(".smaill-img-zoom").click(function(){
		$('.small-img-popup').slideDown(1000).fadeIn(1000);
		$('.back').fadeIn(1000);
	});

	$('.back').click(function(){
		$('.small-img-popup').slideUp(1000).fadeOut(1000);
		$('.back').fadeOut();
	
	});
	
	$('.close-img').click(function(){
		$('.small-img-popup').slideUp(1000).fadeOut(1000);
		$('.back').fadeOut();
	
	});
	/* --------------------------------------------------------
	* = noUiSlider slider
	* -------------------------------------------------------*/
	try {
		$('#slider-snap').noUiSlider({
			start: [ 100, 800 ],
			connect: true,
			range: {
				'min': 0,
				'max': 1000
			}
		});

		$('#slider-snap').Link('lower').to($('#slider-snap-value-lower'));
		$('#slider-snap').Link('upper').to($('#slider-snap-value-upper'));
	} catch(err) {

	}

	/* --------------------------------------------------------
	* = The view button of products in "products" page
	* -------------------------------------------------------*/
	$("#grid-top").click(function() {
		$("#grid-bottom").addClass("active");
		$(".th-list-color").css("color","#dddddd");
		$(".th-grid-color").css("color","#f39c12");
		$("#list-bottom").removeClass("active");
	});

	$("#list-top").click(function() {
		$("#list-bottom").addClass("active");
		$(".th-list-color").css("color","#f39c12");
		$(".th-grid-color").css("color","#dddddd");
		$("#grid-bottom").removeClass("active");
	});

	$("#grid-bottom").click(function() {
		$("#grid-top").addClass("active");
		$(".th-list-color").css("color","#dddddd");
		$(".th-grid-color").css("color","#f39c12");
		$("#list-top").removeClass("active");
	});

	$("#list-bottom").click(function() {
		$("#list-top").addClass("active");
		$(".th-list-color").css("color","#f39c12");
		$(".th-grid-color").css("color","#dddddd");
		$("#grid-top").removeClass("active");
	});

	/* --------------------------------------------------------
	* = Latest tweet (You need to be online and adjust config.php)
	* -------------------------------------------------------*/
	try {
		$('.tweet').twittie({
			username: 'NASA',
			dateFormat: '%B %d, %Y',
			count: 3,
			apiPath: 'api/tweet.php',
			template: '<span class="fa fa-twitter fa-li fa-twitter-color"></span><span class="twitter-name">{{user_name}}</span> {{tweet}} <span class="twitter-footer">{{date}}</span>'
		}, function() {
	   		$('.tweet>ul').addClass('list-unstyled list-image twitter fa-ul'); 
	   		$('.tweet li').css({
	   			'line-height': '1.7em',
	   			'margin-bottom' : '20px'
	   		}); 
			$('.tweet a').css('color', '#f39c12'); 
		}); 
	} catch( err ) {

	}

	/* --------------------------------------------------------
	* = Contact form validation
	* -------------------------------------------------------*/
	try {
		$( "#send" ).click(function(event) {
		//	event.preventDefault();
		});
	    jQuery("#contactForm").validate({
			submitHandler: function() {
				var postvalues =  jQuery("#contactForm").serialize();
					
				jQuery.ajax
				 ({
				   type: "POST",
				   url: "contact/process-form.php",
				   data: postvalues,
				   success: function(response)
				   {
					 jQuery("#status").html(response).show('normal');
					 jQuery('#inputMessage, #inputEmail, #inputName').val("");
				   }
				 });
				return false;
				
			},
			focusInvalid: true,
			focusCleanup: false,
			// //errorLabelContainer: jQuery("#registerErrors"),
			rules: 
			{
				inputName: {required: true},
				inputEmail: {required: true, minlength: 6,maxlength: 50, email:true},
				inputMessage: {required: true, minlength: 6}
			},
			
			messages: 
			{
				inputName: {required: "This field is required"},
				inputEmail: {required: "This field is required", email: "Please provide a valid e-mail"},
				inputMessage: {required: "This field is required"}
			},
			
			errorPlacement: function(error, element) 
			{
				error.insertBefore(element);
				jQuery('<span class="errorarr"></span>').insertBefore(element);
			},
			invalidHandler: function()
			{
				//jQuery("body").animate({ scrollTop: 0 }, "slow");
			}
				
			});		
	} catch ( err ) {

	}

});	 