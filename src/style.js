import './style.scss';
import 'slick-carousel';

jQuery( function( $ ) {
	$( '.block-slider .blocks-section-inner' ).slick( {
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	} );
} );
