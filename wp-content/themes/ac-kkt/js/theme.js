/*------------------------------------------------------------------
[Table of contents]

- Author:  Andrey Sokoltsov
- Profile:	http://themeforest.net/user/andreysokoltsov
--*/

(function($) {

	"use strict";
	

		$('.wpb_map_wraper').click(function () {
    $('iframe').css("pointer-events", "auto");
});
    
    
    
    		
		
    /////////////////////////////////////
    //  Sticky Header
    /////////////////////////////////////


     var windowHeight = $(window).height();
    var windowWidth = $(window).width();
     var tabletWidth = 1000;
        var mobileWidth = 640;

    if (windowWidth > tabletWidth) {



        var headerSticky = $(".layout-theme").data("header");
        var headerTop = $(".layout-theme").data("header-top");


        if (headerSticky.length) {
            $(window).on('scroll', function() {
                var winH = $(window).scrollTop();
                var $pageHeader = $('#this-is-top');
                if (winH > headerTop) {

                    $('#main-menu').addClass("animated");
                    $('#main-menu').addClass("animation-done");
                    $('#main-menu').addClass("bounce");
                    $pageHeader.addClass(headerSticky);



                } else {

                    $('#main-menu').removeClass("bounce");
                    $('#main-menu').removeClass("animated");
                    $('#main-menu').removeClass("animation-done");
                    $pageHeader.removeClass(headerSticky);

                }


            });
        }

    }
	
	
	
	
  
  



$( '#main-menu  li:has(ul)' ).doubleTapToGo();

  /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

               $('.pix-easy-chart').waypoint(function() {
                $('.chart').each(function() {
                    CharsStart();
                });
            }, {
                offset: '80%'
            });


        });
    }



    function CharsStart() {


        $('.chart').easyPieChart({

            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 7000,


            onStep: function(from, to, percent) {

                $(this.el).find('.percent').text(Math.round(percent));



            }
        });

    }

	
	var $preloader = $('#page-preloader'),
    $spinner   = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');
	

	var Core = {

		initialized: false,

		initialize: function() {

			if (this.initialized) return;
			this.initialized = true;

			this.build();

		},

		build: function() {

			//Placeholder for IE
			$('input, textarea').placeholder();
			
			// Dropdown menu
			this.dropdownhover();

			//Setup WOW.js
			this.initScrollAnimations();

			// Owl Carousel
			this.initOwlCarousel();

			//Isotope Filter
			this.isotopeFilter();

			// Go to top
			this.initGoToTop();

			// Accordion
			this.initAccordion();

			// Slide Effect
			this.initSlideEffect();

			// Tabs
			this.initTabs();

			// Menu nav
			this.initMenuNavJs();

			// Search
			this.initSearchModal();
		},

		initScrollAnimations: function(options) {
			var scrollingAnimations = $('body').data("scrolling-animations");
			if(scrollingAnimations){
				new WOW().init();
			}
		},
		
		
		
		dropdownhover: function(options) {
			
			/** Extra script for smoother navigation effect **/
	

	
	
				$('.navbar-main-slide').on('mouseenter', '.navbar-nav > .dropdown', function() {
					
				
		
					$(this).addClass('open');
				}).on('mouseleave', '.navbar-nav > .dropdown', function() {
			
					$(this).removeClass('open');
				});
		
			
			
			
		},
		
		
		
		
		
		initOwlCarousel: function(options) {
			$(".enable-owl-carousel").each(function(i) {
				var $owl = $(this);
				var mainSliderData = $owl.data('main-slider');
				var singleItemData = $owl.data('single-item');
				var navigationData = $owl.data('navigation');
				var paginationData = $owl.data('pagination');
				var autoPlayData = $owl.data('auto-play');
				var stopOnHoverData = $owl.data('stop-on-hover');
				var min450 = $owl.data('min450');
				var min600 = $owl.data('min600');
				var min768 = $owl.data('min768');

				$owl.owlCarousel({
					singleItem: singleItemData,
					navigation: navigationData,
					pagination: paginationData,
					autoPlay: autoPlayData,
					stopOnHover: stopOnHoverData,
					navigationText:["<i class=\"fa fa-angle-left\"></i>", "<i class=\"fa fa-angle-right\"></i>"],
					itemsCustom:[
						[0, 1],
						[450, min450],
						[600, min600],
						[768, min768]
					],
				});
				if(mainSliderData){
					$owl.find(".item").each(function(index, element){
						var slide = element;
						$(element).find("img").each(function(index, element){
							$(slide).attr("style", "background-image:url("+$(element).attr("src")+");");
							$(element).detach();
						});
					});
					$owl.find("a.next").on('click', function(){
						$owl.next();
					});
					$owl.find("a.prev").on('click', function(){
						$owl.prev();
					});
					var $owl = $owl.data('owlCarousel');
				}
			});
		},
	
	
	
	
		isotopeFilter: function(options) {
			var $container = $('.isotope-filter');

			$container.imagesLoaded(function() {
				$container.isotope({
					// options
					filter: '*',
					itemSelector: '.isotope-item'
				});
			});
			// filter items when filter link is clicked
			$('#filter').on('click', 'a', function() {
				$('#filter  li').removeClass('active');
				$(this).parent('li').addClass('active');
				var selector = $(this).attr('data-filter');
				$container.isotope({
					filter: selector
				});
				return false;
			});
		},
		
		
		initGoToTop: function(options) {
			$("#to-top").smoothScroll();
		},
		initAccordion: function(options) {
			$(document).on('click', '.why-us li span', function(){
				if($(this).text() == "+"){
					$(this).text("-");
				}
				else{
					$(this).text("+");
				}
				$(this).parent().find("p").slideToggle();
			}); 
		},
		initSlideEffect: function(options) {
			$(document).on('mouseenter', '.team.hover-eff > div > div', function(){
				$(this).find("span").slideDown(200);
			});
			$(document).on('mouseleave', '.team.hover-eff > div > div', function(){
				$(this).find("span").slideUp(200);
			});
		},
		initTabs: function(options) {
			$('#myTab a:first').tab('show');
		},
		initMenuNavJs: function(options) {
			$(document).on('click', 'li.submenu > a', function(e){
				e.preventDefault();
			});
			$(document).on('click', 'li.submenu', function(e){
				$(this).find("ul").slideToggle();
			});
			$(document).on('click', '#menu-close', function(e){
				e.preventDefault();
				$("body").removeClass('menu-open');
				$(this).removeClass('show').hide();
				$(".main-menu").slideUp(1000, function(){
					$(this).removeAttr("style");
				});
			});
			$(document).on('click', '#menu-open', function(e){
				e.preventDefault();
				$("body").addClass('menu-open');
				$(".main-menu").slideDown();
				$("#menu-close").addClass('show').show();
			});
		},
		

		
		
		initSearchModal: function(options) {
			$(document).on("click", ".btn_header_search", function (event) {
				event.preventDefault();
				$(".search-form-modal").addClass("open");
			});
			$(document).on("click", ".search-form_close", function (event) {
				event.preventDefault();
				$(".search-form-modal").removeClass("open");
			});
		},
		
		
	};

	Core.initialize();

})(jQuery);



