(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
    
     /* ================================
       Sidebar Toggle Js Start
    ================================ */

      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
      
       /* ================================
       Body Overlay Js Start
    ================================ */

      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
      /* ================================
       Sticky Header Js Start
    ================================ */

      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });     
      
    //>> Scrolldown Start <<//
    $("#scrollDown").on("click", function () {
        setTimeout(function () {
            $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
        }, 1000);
    });
      
      /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

    /* ================================
       Progress Bar Js Start
    ================================ */

    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
            animation: "animate-positive 2.6s",
            opacity: "1"
        });
    }, { offset: '75%' });


     /* ================================
       Banner Active Js Start
    ================================ */

       if($('.banner-active').length > 0) {
            const bannerActive = new Swiper(".banner-active", {
                speed:1500,
                loop: true,
                slidesPerView: 1,
                effect:'fade',
                autoplay: {
                    delay: 3000,         
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,  
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
				el: ".banner__dot",
				clickable: true,
				renderBullet: function (index, className) {
					const dotContent = document.querySelectorAll(
						".banner__dot .dot-content"
					);
					return `
                <span class="${className}">
                    ${dotContent[index]?.outerHTML || ""}
                </span>
            `;
				},
			},
		
            });
        }

       /* ================================
       Brand Slider Js Start
    ================================ */
      if($('.brand-slider').length > 0) {
        const BrandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 6,
                },
                991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 2,
                },
            },
        });
      }

       /* ================================
       Team Slider Js Start
    ================================ */
      if($('.team-slider').length > 0) {
        const teamSlider = new Swiper(".team-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

             pagination: {
                el: ".dot",
                clickable: true,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 3.9,
                },
                991: {
                    slidesPerView: 3.2,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1.4,
                },
            },
        });
      }

      /* ================================
       Testimonial Slider Js Start
    ================================ */
      if($('.testimonial-slider').length > 0) {
        const testimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".dot2",
                clickable: true,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 1.7,
                },
                0: {
                    slidesPerView: 1.3,
                },
            },
        });
      }

    if($('.testimonial-slider-2').length > 0) {
        const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
            spaceBetween: 30,
            speed: 1500,
            loop: true,
            autoplay: {
                delay: 1700,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2.5,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1.3,
                },
            },
        });
      }

       if($('.testimonial-slider-3').length > 0) {
        const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
        });
      }

       if($('.testimonial-slider-5').length > 0) {
        const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
            spaceBetween: 30,
            speed: 1200,
            loop: true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 2.6,
                },
                767: {
                    slidesPerView: 2.3,
                },
                575: {
                    slidesPerView: 1.5,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

       if($('.testimonial-slider-6').length > 0) {
        const testimonialSlider6 = new Swiper(".testimonial-slider-6", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             pagination: {
                el: ".dot",
                clickable: true,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 3.3,
                },
                 1199: {
                    slidesPerView: 2.9,
                },
                991: {
                    slidesPerView: 2.5,
                },
                767: {
                    slidesPerView: 2.2,
                },
                575: {
                    slidesPerView: 1.6,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

       if($('.testimonial-slider-7').length > 0) {
        const testimonialSlider7 = new Swiper(".testimonial-slider-7", {
           spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                reverseDirection: true,
            },
          
           breakpoints: {
                1399: {
                    slidesPerView: 3.3,
                },
                 1199: {
                    slidesPerView: 2.9,
                },
                991: {
                    slidesPerView: 2.5,
                },
                767: {
                    slidesPerView: 2.2,
                },
                575: {
                    slidesPerView: 1.6,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

      /* ================================
       Service Slider Js Start
    ================================ */
      if($('.service-slider-2').length > 0) {
        const serviceSlider2 = new Swiper(".service-slider-2", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            navigation: {
                prevEl: ".array-prev",
                nextEl: ".array-next",
            },
            breakpoints: {
                1399: {
                    slidesPerView: 4,
                },
                 1199: {
                    slidesPerView: 3.2,
                },
                991: {
                    slidesPerView: 2.8,
                },
                767: {
                    slidesPerView: 2.1,
                },
                575: {
                    slidesPerView: 1.8,
                },
                0: {
                    slidesPerView: 1.3,
                },
            },
        });
      }
    
     /* ================================
      Gallery Slider Js Start
    ================================ */
      if($('.gallery-slider-3').length > 0) {
        const gallerySlider3 = new Swiper(".gallery-slider-3", {
            spaceBetween: 0,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 5,
                },
                991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
      }

    /* ================================
       Project Slider Js Start
    ================================ */
      if($('.project-slider-3').length > 0) {
        const projectSlider3 = new Swiper(".project-slider-3", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1199: {
                    slidesPerView: 2.9,
                },
                991: {
                    slidesPerView: 2.7,
                },
                767: {
                    slidesPerView: 2.3,
                },
                575: {
                    slidesPerView: 1.4,
                },
                0: {
                    slidesPerView: 1.2,
                },
            },
        });
      }

       if($('.project-slider-5').length > 0) {
        const projectSlider5 = new Swiper(".project-slider-5", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
          
            breakpoints: {
                1399: {
                    slidesPerView: 4.9,
                },
                1199: {
                    slidesPerView: 3.9,
                },
                991: {
                    slidesPerView: 3.6,
                },
                767: {
                    slidesPerView: 2.5,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1.3,
                },
            },
        });
      }
     

    /* ================================
        Quantity Increment/Decrement Js Start
    ================================ */
        const quantityButtons = document.querySelectorAll(".quantityIncrement, .quantityDecrement");
        if (quantityButtons.length) {
            quantityButtons.forEach((button) => {
                button.addEventListener("click", function () {
                    const input = button.parentElement.querySelector("input");
                    let value = parseInt(input.value, 10) || 0;

                    if (button.classList.contains("quantityIncrement")) {
                        input.value = value + 1;
                    } else if (button.classList.contains("quantityDecrement") && value > 1) {
                        input.value = value - 1;
                    }
                });
            });
        }
    
    
     /* ================================
       Payment Method Update Js Start
    ================================ */

    function updatePaymentMethod() {
        let paymentMethod = $("input[name='pay-method']:checked").val();
        $(".payment").html(paymentMethod);
    }

    // Initial load
    updatePaymentMethod();

    // On click of radio option
    $(".checkout-radio-single input[name='pay-method']").on("change", function () {
        updatePaymentMethod();
    });

     /* ================================
       Additional Quantity Controls Js Start
    ================================ */

    const inputs = document.querySelectorAll('#qty, #qty2, #qty3');
    const btnminus = document.querySelectorAll('.qtyminus');
    const btnplus = document.querySelectorAll('.qtyplus');

    if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {

        inputs.forEach(function(input, index) {
            const min = Number(input.getAttribute('min'));
            const max = Number(input.getAttribute('max'));
            const step = Number(input.getAttribute('step'));

            function qtyminus(e) {
                const current = Number(input.value);
                const newval = (current - step);
                if (newval < min) {
                    newval = min;
                } else if (newval > max) {
                    newval = max;
                }
                input.value = Number(newval);
                e.preventDefault();
            }

            function qtyplus(e) {
                const current = Number(input.value);
                const newval = (current + step);
                if (newval > max) newval = max;
                input.value = Number(newval);
                e.preventDefault();
            }

            btnminus[index].addEventListener('click', qtyminus);
            btnplus[index].addEventListener('click', qtyplus);
        });
    }

          /* ================================
         Search Popup Toggle Js Start
      ================================ */
  
      if ($(".search-toggler").length) {
          $(".search-toggler").on("click", function(e) {
              e.preventDefault();
              $(".search-popup").toggleClass("active");
              $("body").toggleClass("locked");
          });
      }

      /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
      }

        /* ================================
       Back To Top Button Js Start
    ================================ */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 20) {
			$('#back-top').addClass('show');
		} else {
			$('#back-top').removeClass('show');
		}
	});

	// Smooth scroll to top on click
	$(document).on('click', '#back-top', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
	});
		

		// Smooth scroll to top on click
		$(document).on('click', '#back-top', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, 800);
		});
      

      /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

     /* ================================
      Text Invert Js Start
    ================================ */

    const split2 = new SplitText(".text_invert-2", { type: "lines" });

    split2.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center",
            }
        });
    });

    if ($(".text-anim").length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll(".text-anim");

        animatedTextElements.forEach(element => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });

            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                    });
                },
            });
        });
    }

    }); // End Document Ready Function

     /* ================================
      Pricing Toggle Js Start
    ================================ */

    document.addEventListener("DOMContentLoaded", function () {
            const toggle = document.getElementById("pricing-toggle");
            const monthlyLabel = document.querySelector(".monthly-label");
            const yearlyLabel = document.querySelector(".yearly-label");
            const prices = document.querySelectorAll(".price");

            if (!toggle || !monthlyLabel || !yearlyLabel || !prices.length) return;

            // Update price text based on toggle state
            const updatePrices = (isYearly) => {
            prices.forEach((price) => {
                const monthly = price.getAttribute("data-monthly");
                const yearly = price.getAttribute("data-yearly");

                if (monthly && yearly) {
                price.innerHTML = isYearly
                    ? `$${yearly}<sub>/ per year</sub>`
                    : `$${monthly}<sub>/ per month</sub>`;
                }
            });

            monthlyLabel.classList.toggle("active", !isYearly);
            yearlyLabel.classList.toggle("active", isYearly);
            };

            // Initialize with monthly by default
            updatePrices(false);

            // Toggle switch change
            toggle.addEventListener("change", function () {
            updatePrices(this.checked);
            });

            // Monthly label click
            monthlyLabel.addEventListener("click", function () {
            toggle.checked = false;
            updatePrices(false);
            });

            // Yearly label click
            yearlyLabel.addEventListener("click", function () {
            toggle.checked = true;
            updatePrices(true);
            });
    });

    /* ================================
        Price Range Slider Js Start
        ================================ */
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");
    
        // Exit early if essential elements are missing
        if (!minSlider || !maxSlider || !amount) return;
    
        function updateAmount() {
            let minValue = parseInt(minSlider.value, 10);
            let maxValue = parseInt(maxSlider.value, 10);
    
            // Swap values if min is greater than max
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                minSlider.value = minValue;
                maxSlider.value = maxValue;
            }
    
            // Update amount input
            amount.value = `$${minValue} - $${maxValue}`;
    
            // Calculate percentages for gradient
            const minPercent = ((minValue - minSlider.min) / (minSlider.max - minSlider.min)) * 100;
            const maxPercent = ((maxValue - maxSlider.min) / (maxSlider.max - maxSlider.min)) * 100;
    
            const trackStyle = `linear-gradient(to right, #063232 ${minPercent}%, #005DB5 ${minPercent}%, #005DB5 ${maxPercent}%, #063232 ${maxPercent}%)`;
    
            minSlider.style.background = trackStyle;
            maxSlider.style.background = trackStyle;
        }
    
        // Initialize on page load
        updateAmount();
    
        // Add event listeners
        minSlider.addEventListener("input", updateAmount);
        maxSlider.addEventListener("input", updateAmount);
    });
    
    /* ================================
       Preloader Js Start
    ================================ */
    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');                    
            $(".preloader").delay(600).fadeOut();                       
        });
    }
    loader();
  
  })(jQuery); // End jQuery