$(document).ready(function(){

	"use strict";
	
	/* =================================
	LOADER 
	=================================== */
	$(".loader").delay(400).fadeOut();
    $(".animationload").delay(400).fadeOut("fast");
	
	/* =================================
	NAVBAR 
	=================================== */
	var top = jQuery(document).scrollTop();
	var batas = 200;
	if ( top > batas ) {
		jQuery('.navbar-main').addClass('stiky');
	}
	jQuery(window).scroll(function () {
		top = jQuery(document).scrollTop();
		if ( top > batas ) {
			jQuery('.navbar-main').addClass('stiky');
		}else {
			jQuery('.navbar-main').removeClass('stiky'); 
		}
	});
	
	/* =================================
	BANNER ROTATOR IMAGE 
	=================================== */
	$('#slides').superslides({
		//animation: "fade",
		play: 5000,
		slide_speed: 800,
		pagination: true,
		hashchange: false,
		scrollable: true,
		
	});

	/* =================================
	BACK TO TOP 
	=================================== */
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
	
	/* =================================
	SCROLL TO
	=================================== */
	$('a[href^="#"]').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

	/* =================================
	OWL
	=================================== */
	
	var caro = $("#caro");
	caro.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
	});
	
	var slide = $("#slide-image");
	slide.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		loop: true,
	});
	
	var owl = $("#owl-testimony");
	owl.owlCarousel({
		autoplay: 5000,
		stopOnHover: true,
		margin: 30,
		items : 2,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			1000:{
				items:2
			}
		}
	});

	var testimony2 = $("#owl-testimony2");
	testimony2.owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true
	});

	var project = $("#caro-project");
	project.owlCarousel({
		margin: 10,
		items : 4,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: true,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	var project2 = $("#caro-project-2");
	project2.owlCarousel({
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		items : 4,
		nav: true,
		navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
		dots: false,
		loop: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	/* =================================
	FAQ
	=================================== */	
	$(".panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
  	}); 
	
	/* =================================
	MAGNIFIC POPUP
	=================================== */
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });


    /* =================================
	SKILLBAR
	=================================== */
	$('.skill-progress .skill').each(function () {
	    var $this = $(this);
	    var myVal = $(this).data("value");
	    var mypercent = $(this).attr("data-percent");
	    var targetbox = $(this).children('.outer-box');
	    $this.appear(function() {
	        $(window).one('scroll', function() {
	            progress(mypercent, $(targetbox));
	        });
	    });

  		function progress(percent, $element) {
          	var myItem = $element.children('div');
          	myItem.append('<span></sapn>');

          	var progressBarWidth = percent * $element.width() / 100;
          	$element.find('div').animate({ width: progressBarWidth }, 2000).find('span').html(percent + "% ");
      	}
  	});


	/* =================================
	GOOGLE MAPS
	=================================== */

	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map
		var controlUIzoomIn= document.getElementById('cd-zoom-in'),
			controlUIzoomOut= document.getElementById('cd-zoom-out');
		controlDiv.appendChild(controlUIzoomIn);
		controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
			map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
			map.setZoom(map.getZoom()-1)
		});
	}

	if ($('#maps').length) {
	//set your google maps parameters
	var myLat = $('#maps').data('lat'),
	myLng = $('#maps').data('lng'),
	myMarkerx = $('#maps').data('marker');
	
	
	var latitude = myLat,
		longitude = myLng,
		markerx = myMarkerx,
		map_zoom = 14;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var marker_url = ( is_internetExplorer11 ) ? markerx : markerx;

	//define the basic color of your map, plus a value for saturation and brightness
	var main_color = '#000000',
		saturation_value= -80,
		brightness_value= 5;

	//we define here the style of the map
	var style= [
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},
		{ //poi stands for point of interest - don't show these lables on the map
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
			featureType: 'road.highway',
			elementType: 'labels',
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show local road lables on the map
			featureType: "road.local",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show arterial road lables on the map
			featureType: "road.arterial",
			elementType: "labels.icon",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		},
		//style different elements on the map
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" },
				{ lightness: brightness_value },
				{ saturation: saturation_value }
			]
		}
	];

	//set google map options
	var map_options = {
		center: new google.maps.LatLng(latitude, longitude),
		zoom: map_zoom,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		streetViewControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false,
		styles: style,
	}
	//inizialize the map
	var map = new google.maps.Map(document.getElementById('maps'), map_options);
	//add a custom marker to the map
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(latitude, longitude),
		map: map,
		visible: true,
		icon: marker_url,
	});

	var zoomControlDiv = document.createElement('div');
	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

	//insert the zoom div on the top left of the map
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  }
	
});

function showProject(name){
    var title="",description="",logo="",details="",url="",country="";
    switch (name) {
  case "gomart":
    title = "GoMart";
    logo = "images/projects/gomart.svg";
    url = "https://www.gomart.ae/";
    country = "United Arab Emirates";
    description = "GoMart is an omni-channel marketplace which aims to provide adequate resources to the merchants and services providers so that they can manage their business efficiently. Today's retail market is getting very tough and challenging due to changing customer buying patterns which have resulted in a struggle for small retailers and service providers to maintain their sales and probability. GoMart is the solution the reliable and reasonable solution which can empower them to fulfill the customer's need and provide them with a unified shopping experience.";
    details = "Frontend, Backend functionality, and APIs for mobile applications";
    break;
    case "sofra":
    title = "Al Sofra";
    logo = "images/projects/al-sofra.svg";
    url = "http://alsofra.com/";
    country = "United Arab Emirates";
    description = "Al Sofra is an online restaurant POS app, it has a user friendly interface that everyone can use without difficulty. The POS can be used online, on iPads, Android tablets or laptops. <br/>Say goodbye to ugly, expensive, outdated POS systems and enjoy the Al Sofra web POS web interface designed for the modern retailer.";
    details = "Frontend developer UI/UX";
    break;
    case "simplyweight":
    title = "Simply Weight";
    logo = "images/projects/simply-weight.png";
    url = "https://www.simplyweight.co.uk/";
    country = "United Kingdom";
    description = "SimplyWeight is a new, revolutionary weight loss application that has already transformed many lives, it is an online portal to get daily, weekly, monthly diet plans, vidoes for healthy excercise, motivational stories and live chat with the doctors.";
    details = "Frontend and Backend functionality";
    break;
    case "mbg":
    title = "My Best Gift";
    logo = "images/projects/mbg.png";
    url = "https://www.mybestgift.com.au/";
    country = "United Arab Emirates";
    description = "My Best Gift is Australia's only online marketplace dedicated to kids activities and experiences. It cater for all ages, from new - borns to 18 - year - olds.";
    details = "Frontend and Backend functionality";
    break;
    case "iconnectx":
    title = "iConnectX";
    logo = "images/projects/iConnectX.png";
    url = "https://play.google.com/store/apps/details?id=com.v2soft.iconnectx";
    country = "United States";
    description = "iConnectX is a fundraising platform for nonprofit charities to raise funds through online auctions, silent auctions, online donations, ticketed events, mentoring, programs, volunteering, and more to support charity programs and causes.<br/>iConnectX offers features to individual professionals to create fundraiser events, and auctions on nonprofit's behalf help raise funds to support their cause and programs.";
    details = "Frontend developer UI/UX";
    break;
    case "omla":
    title = "Omla - Multi Currency";
    logo = "images/projects/omla.png";
    url = "http://151.253.147.221:6652/";
    country = "United Arab Emirates";
    description = "OMLA Gift Card can be used to pay for all or part of your transactions at any location where ever the scheme (which is on the front of your card is accepeted) across the world.";
    details = "Frontend developer UI/UX";
}
    $('#project-details .project-name').html(title+' <small class="float-right"><i class="fa fa-map-marker"></i> '+country+'</small>');
    $('#project-details .modal-title').html(title);
    $('#project-details .product-logo').attr({'src':logo,'alt':'Yousuf S A | Work | '+title});
    $('#project-details .project-desc').html(description);
    $('#project-details .project-role').html(details);
    $('#project-details .project-link').html(url).attr('href',url);
    $('#project-details').modal('show');
}

  
  