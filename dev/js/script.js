"use strict"

//questions
var $articleTitle = $('.article__title');
$articleTitle.on('click', function() {
	$(this).toggleClass('article__title_active');
	$(this).siblings().slideToggle(500);
});

//consultation
var $formConsultation = $('.js-formConsultation');
$formConsultation.on('submit', function(event) {
	event.preventDefault();
});

//about
var $videoButtonAbout = $('.js-videoButtonAbout');
$videoButtonAbout.on('click', function() {	
	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
});

//reviews
var $videosReviews = $('.js-videosReviews');
var $videoReview = $('.js-videoReview');
var $videoReviewButton = $('.js-videoReviewButton');

$videoReviewButton.on('click', function() {
	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
});





// //Button go-up
// var $goUp = $('.go-up');
// var $buttonAppear = 500; //the distance at which the button appears
// var $html =  $('html');

// $goUp.on('click', function() {
// 	$html.animate({scrollTop: 0}, 1000);
// });

// function showGoUp() {
		
// 	if(	($window.scrollTop() > $buttonAppear) ) {
// 		$goUp.fadeIn();
// 	}

// 	else {
// 		$goUp.fadeOut();
// 	}
// }


// //Event scroll
// $window.on('scroll', function() {
// 	showNav();
// 	showGoUp();
// 	// console.log( $window.scrollTop() );
// });

// //Mask
// var $inputTel = $('input[type=tel]');
// $inputTel.mask('(000) 000 00 00');




// WOW.js
// Animate.css
new WOW().init();

//header
var $headerTop = $('.js-headerTop');
var $captionTitleSizeM = $('.js-captionTitleSizeM');
var $captionTitleSizeL = $('.js-captionTitleSizeL');
var $captionTitleSizeS = $('.js-captionTitleSizeS');
var $booking = $('.js-booking');

$headerTop.addClass('wow fadeInDown');
// $headerTop.attr('data-wow-delay', 0 + 's');

$captionTitleSizeM.addClass('wow fadeInDown');
$captionTitleSizeM.attr('data-wow-delay', 1 + 's');

$captionTitleSizeL.addClass('wow fadeInDown');
$captionTitleSizeL.attr('data-wow-delay', 1 + 's');

$captionTitleSizeS.addClass('wow fadeIn');
$captionTitleSizeS.attr('data-wow-delay', 2 + 's');

$booking.addClass('wow fadeIn');
$booking.attr('data-wow-delay', 2 + 's');


//dates
var $dates = $('.js-dates');
$dates.addClass('wow fadeIn');
$dates.attr('data-wow-duration', 2 + 's');
$dates.attr('data-wow-offset', 400);


//about
var $about = $('.js-about');
var $aboutContainer = $('.js-aboutContainer');

$aboutContainer.css({
	'display': 'none',
	'position': 'relative',
});

$aboutContainer.addClass('wow fadeIn');
$aboutContainer.attr('data-wow-duration', 2 + 's');
$aboutContainer.attr('data-wow-delay', 2 + 's');
$aboutContainer.attr('data-wow-offset', 400);

var $aboutContent = $('.js-aboutContent');
$aboutContent.addClass('wow slideInUp');
$aboutContent.attr('data-wow-duration', 5 + 's');
// $aboutContainer.attr('data-wow-delay', 2 + 's');

var $cloud = $('.js-cloud');
$cloud.addClass('wow slideInDown');
$cloud.attr('data-wow-duration', 3 + 's');
$cloud.attr('data-wow-delay', 1 + 's');


//advantages
// var $advantagesContent = $('.js-advantagesContent');
// $advantagesContent.addClass('wow fadeInUp');
// $advantagesContent.attr('data-wow-duration', 2 + 's');
// $advantagesContent.attr('data-wow-delay', 2 + 's');
// $advantagesContent.attr('data-wow-offset', 500);

// var $cards = $('.js-cards');
// $cloud.addClass('wow slideInUp');
// $cloud.attr('data-wow-duration', 3 + 's');
// $cloud.attr('data-wow-delay', 1 + 's');

var $card = $('.js-card');
$card.addClass('wow fadeInDown');
$card.attr('data-wow-offset', 300);
doDelay($card);

function doDelay(element) {
	var $initialDelay = 0;
	element.each(function(index, item) {
		var $resultDelay = $initialDelay+=0.05;
		var $resultDelayFix = +$resultDelay.toFixed(10);
		$(item).attr('data-wow-delay', $resultDelayFix + 's');
	});
}


//reviews
var $reviews = $('.js-reviews');
$reviews.addClass('wow fadeInUp');
$reviews.attr('data-wow-duration', 2 + 's');
$reviews.attr('data-wow-offset', 300);

var $showMoreReviews = $('.js-showMoreReviews');
$showMoreReviews.addClass('wow fadeIn');
$showMoreReviews.attr('data-wow-duration', 2.5 + 's');


//needs
var $needs = $('.js-needs');
$needs.addClass('wow fadeIn');
$needs.attr('data-wow-duration', 2 + 's');
$needs.attr('data-wow-offset', 500);

var $formNeeds = $('.js-formNeeds');
$formNeeds.addClass('wow fadeInUp');
$formNeeds.attr('data-wow-duration', 2 + 's');
$formNeeds.attr('data-wow-delay', 2 + 's');
// $needs.attr('data-wow-offset', 300);

//questions
var $questions = $('.js-questions');
var $questionsContainer = $('.js-questionsContainer');

$questionsContainer.css({
	'display': 'none',
	'position': 'relative',
});


//consultation
var $formConsultation = $('.js-formConsultation');
$formConsultation.addClass('wow fadeInUp');
$formConsultation.attr('data-wow-duration', 2 + 's');
$formConsultation.attr('data-wow-offset', 300);


// contacts
var $contacts = $('.js-contacts');
$contacts.addClass('wow fadeIn');
$contacts.attr('data-wow-duration', 2 + 's');
$contacts.attr('data-wow-offset', 300);

var $addresses = $('.js-addresses');
$addresses.addClass('wow fadeInLeft');
$addresses.attr('data-wow-duration', 2.5 + 's');
$addresses.attr('data-wow-offset', 300);

var $map = $('.js-map');
$map.addClass('wow fadeInRight');
$map.attr('data-wow-duration', 2.5 + 's');
$map.attr('data-wow-offset', 300);


//footer
var $footerContainer = $('.js-footerContainer');
$footerContainer.addClass('wow fadeInUp');
$footerContainer.attr('data-wow-duration', 2 + 's');




//Event scroll
function getDistance($element) {
	var $scrollTop = $(window).scrollTop();
	var $elementOffset = $element.offset().top;
	var $distance = ($elementOffset - $scrollTop);
	return $distance;
}

$(window).on('scroll', function() {

	if( getDistance($about) < 200 ) {
		$aboutContainer.slideDown(2000);
	}

	if( getDistance($questions) < 200 ) {
		$questionsContainer.slideDown(3000);
	}
	// console.log(getDistance($questions));

});





//google maps
initMap();
function initMap() {
	var myLatLng = {lat: 55.757920, lng: 37.623515};

	var	map = new google.maps.Map(document.querySelector('.js-map'), {
		center: myLatLng,
		zoom: 17,
		// disableDefaultUI: true,
		mapTypeControl: false,
		styles: [
			{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#e9e9e9"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f5f5f5"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 17
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 29
							},
							{
									"weight": 0.2
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 18
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#ffffff"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f5f5f5"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#dedede"
							},
							{
									"lightness": 21
							}
					]
			},
			{
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"visibility": "on"
							},
							{
									"color": "#ffffff"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"saturation": 36
							},
							{
									"color": "#333333"
							},
							{
									"lightness": 40
							}
					]
			},
			{
					"elementType": "labels.icon",
					"stylers": [
							{
									"visibility": "off"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#f2f2f2"
							},
							{
									"lightness": 19
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 20
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#fefefe"
							},
							{
									"lightness": 17
							},
							{
									"weight": 1.2
							}
					]
			}
	]
	});

	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		icon: 'img/bg_map_icon-1.png?raw=true',
		draggable: true,
    animation: google.maps.Animation.DROP
	});
	marker.setMap(map);
}