;(function($) {
	'use strict';

	/*====================================================
	=                   Fullpage 2.9.5                   =
	====================================================*/

	function fullPage() {
		$('#fullpage').fullpage({
			css3: true,
			scrollingSpeed: 900,
			sectionSelector: ".cd-section",
			anchors: [
				"number",
				"info",
				"news",
				"team",
				"clients",
				"franchise",
				"archive",
				"contacts",
				"footer"
			],
			menu: "#menu_header",
			fitToSection: false,
			autoScrolling: false,
			//normalScrollElements: '#section4',
			//bigSectionsDestination: top,

			afterLoad: function(anchorLink, index) {
				if (index == 1) {
				$("#section0 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section0 .header-title h3")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section0 .number-preview")
					.css({ visibility: "visible" })
					.addClass("animated fadeIn");
				$("#section0 .left-text p, #section0 .left-text ul")
					.css({ visibility: "visible" })
					.addClass("animated fadeInUp");
				}
				if (index == 2) {
				$("#section1 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section1 .tabs-block")
					.css({ visibility: "visible" })
					.addClass("visible animated fadeInLeft");
				$("#section1 .tab-content")
					.css({ visibility: "visible" })
					.addClass("visible animated fadeInRight");
				}
				if (index == 3) {
				$("#section2 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section2 .tabs-block")
					.css({ visibility: "visible" })
					.addClass("visible animated fadeInLeft");
				$("#section2 .tab-content")
					.css({ visibility: "visible" })
					.addClass("visible animated fadeInRight");
				}
				if (index == 4) {
				$("#section3 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section3 .ms-view")
					.css({ visibility: "visible" })
					.addClass("animated fadeIn");
				//$('#section2 .ms-info').css({'visibility':'visible'}).addClass('animated fadeIn');
				}

				if (index == 5) {
				$(".clients-block .client-logo")
					.css({ visibility: "visible" })
					.addClass("animated fadeIn");
				$("#section4 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				}

				if (index == 6) {
				$("#section5 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section5 .right-column")
					.css({ visibility: "visible" })
					.addClass("animated fadeIn");
				}

				if (index == 7) {
				$("#section6 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section6 .ms-view")
					.css({ visibility: "visible" })
					.addClass("animated fadeIn");
				//$('#section6 .archive-block').css({'visibility':'visible'}).addClass('animated fadeIn');
				}

				if (index == 8) {
				$("#section7 .header-title h2")
					.css({ visibility: "visible" })
					.addClass("animated fadeInDown");
				$("#section7 .left-text")
					.css({ visibility: "visible" })
					.addClass("animated fadeInLeft");
				$("#section7 .form-contact")
					.css({ visibility: "visible" })
					.addClass("animated fadeInUp");
				$("#section7 .certification-block")
					.css({ visibility: "visible" })
					.addClass("animated fadeInRight");
				}
			}
		});
	}

	function fullPageMobile() {
		var myFullpageMobile = new fullpage("#fullpage", {
			css3: true,
			scrollingSpeed: 900,
			sectionSelector: ".cd-section",
			anchors: [
				"number",
				"info",
				"team",
				"clients",
				"franchise",
				"archive",
				"contacts",
				"footer"
			],
			menu: "#menu_header",
			fitToSection: false,
			autoScrolling: false
		});
	}

	/*============  End of Fullpage 2.9.5  =============*/

	//Portfolio magnifix popup //
/*
	$('.certification-block').magnificPopup({
        delegate: '.certificate_1 a, .certificate_2 a',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        zoom: {
			enabled: true, // By default it's false, so don't forget to enable it
			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function
		}
    });
*/

    /*=============================================================
	=                   Master slider (Команда)                   =
	=============================================================*/

	const slider = new MasterSlider();
	if($(window).width() <= 1024 || screen.width <= 1024) {
		slider.setup('masterslider' , {
			loop:true,
			width:216,
			height:216,
			layout:'boxed',
			speed:20,
			view:'mask',
			preload:0,
			space:0,
			viewOptions:{centerSpace:1}
		});
	} else {
		slider.setup('masterslider' , {
			loop:true,
			width:200,
			height:200,
			layout:'boxed',
			speed:20,
			view:'focus',
			preload:0,
			space:70,
			viewOptions:{centerSpace:3},
			//wheel: true,
			filters: {
	            grayscale: 0.8
	        }
		});
	}
	slider.control('arrows', {autohide:false});
	slider.control('slideinfo',{insertTo:'#staff-info'});

	/*============  End of Master slider (Команда)  =============*/


	/*=============================================================
	=                   Master slider (Archive)                   =
	=============================================================*/

	const slider1 = new MasterSlider();
	if($(window).width() <= 1024 || screen.width <= 1024) {
		slider1.setup('masterslider1' , {
			loop:true,
			width: 320,
			height: 400,
			layout: 'boxed',
			speed: 20,
			view: 'mask',
			preload: 0,
			space: 0,
			viewOptions:{centerSpace:4}
		});
	} else {
		slider1.setup('masterslider1' , {
			loop:true,
			width: 320,
			height: 400,
			layout: 'boxed',
			speed: 20,
			view: 'focus',
			preload: 0,
			space: 50,
			viewOptions:{centerSpace:4},
			//wheel: true,
			filters: {
	            grayscale: 0.8
	        }
		});
	}
	slider1.control('arrows', {autohide:false});
	slider1.control('slideinfo',{insertTo:'#staff-info1'});

	/*============  End of Master slider (Archive)  =============*/


	/*====================================================
	=                   Modal for turn                   =
	====================================================*/

	$('.last-number-img a').click(function(){
		var buttonId = $(this).attr('id');
		$('#modal-container').removeAttr('class').addClass(buttonId);
		$('body').addClass('modal-active');
		$('.close').removeClass('out-close');
	});

	$('.close').click(function(){
		$(this).addClass('out-close');
		$('#modal-container').addClass('out');
		$('body').removeClass('modal-active');
	});

	if($('#modal-container').hasClass('out'), function() {
		$('.close').removeClass('out-close');
	});

	/*============  End of Modal for turn  =============*/


	/*==========================================
	=                   Turn                   =
	==========================================*/

	function addPage(page, book) {

		var id, pages = book.turn('pages');

		var element = $('<div />', {});

		if (book.turn('addPage', element, page)) {
			element.html('<div class="gradient"></div><div class="loader"></div>');
			loadPage(page);
		}
	}

	function loadPage(page) {

		var img = $('<img />');
		img.load(function() {
			var container = $('#mybook .p'+page);
			img.css({width: '100%', height: '100%'});
			img.appendTo($('#mybook .p'+page));
			container.find('.loader').remove();
		});

		//img.attr('src', samplePath + 'pages/' +  page + '.jpg');

	}

	function lastMagazine() {
		$('#mybook').turn({
			display: 'double',
			acceleration: true,
			gradients: true,
			elevation:10,
			when: {
				turning: function(e, page, view) {

					var book = $(this),
					currentPage = book.turn('page'),
					pages = book.turn('pages');

					if (page==1)
						$('.flipbook-left').css({'opacity':'0'});
					else
						$('.flipbook-left').css({'opacity':'1'});


					if (page==pages)
						$('.flipbook-right').css({'opacity':'0'});
					else
						$('.flipbook-right').css({'opacity':'1'});

				}
			}
		});
	}

	$(window).bind('keydown', function(e){
		if (e.keyCode==37)
			$('#mybook').turn('previous');
		else if (e.keyCode==39)
			$('#mybook').turn('next');
	});

	$('.flipbook-left').click(function(){
		$('#mybook').turn('previous');
	});

	$('.flipbook-right').click(function(){
		$('#mybook').turn('next');
	});

	/*============  End of Turn  =============*/

	function initDesktop() {
		// fullPage();
		lastMagazine();
	}

	function initMobile() {

	}

	if (document.body.clientWidth > 420 || screen.width > 420) {
		initDesktop();
	} else {
		initMobile();
	}

})(jQuery);
