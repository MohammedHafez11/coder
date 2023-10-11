{
  // Animation AOS

  setTimeout(() => {
    AOS.init({
      duration: 1000,

      easing: "ease-in-out",

      once: true,

      mirror: false,
    });
  }, 120);
}

{
  const whatsappContact = document.querySelector(".whatsappContact"); // Whatsapp Icons

  const button__Scroll = document.querySelector(".btnScroll"); // Button To Scroll

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
      if (button__Scroll != null) {
        button__Scroll.classList.add("active");
      } // Add Class Active To Button Scroll From "-60px" To "25px"

      whatsappContact.classList.add("active"); // Add Class Active From right "-80px" To right "50px"
    } else {
      if (button__Scroll != null) {
        button__Scroll.classList.remove("active"); // Remove Class Active Form "25px" To "-60px"
      }

      whatsappContact.classList.remove("active"); // Remove Class active From right "50px" To "-80px"
    }
  });

  if (button__Scroll != null) {
    button__Scroll.addEventListener("click", (e) => {
      // When Click On Button Scroll Add Top "0" And Scroll Smooth

      window.scrollTo({
        top: 0,

        behavior: "smooth",
      });
    });
  }
}

var menuLinks;
var menu__Bar;
{
  const allMenu = document.querySelector(".allMenu"); // Menu Navbar "background"

  const menu = document.querySelector(".menu"); // menu

  menuLinks = document.querySelector(".menuLinks"); // Links Menu

  const toggle = document.querySelector(".toggle ion-icon"); // Toggle Icon

  const iconClose = document.querySelector(".iconClose"); // close icon

  menu__Bar = document.querySelector(".menu__Bar"); // menuBar

  function removeMenuBar() {
    // Function remove Active From Menu Bar Mobile

    menuLinks.classList.remove("active"); // Remove class Active From menu links

    menu__Bar.classList.remove("active"); // Remove class Active From menu bar overlay

    // menu__Social__Container.classList.remove("active"); // Remove class Active From menu social From "0" To left "-34px"
  }

  window.onscroll = (e) => {
    // Window On Scroll

    removeMenuBar(); // Remove Class Active From menu Links In "mobile"

    // toggle.classList.replace(`fa-close`, `fa-bars`); // Change Icon "Close" To Iocn "Bars"

    if (window.scrollY >= 500) {
      // If Window Increese Than or Aquel 500px

      menu.classList.add("active"); // add Class Acive To menu Form Static To "fixed"

      allMenu.classList.add("active"); // Add class Active To All menu Heigh Form "70px" To "60px"
    } else {
      menu.classList.remove("active"); // Remove Class active Form Menu Fixed To "static"

      allMenu.classList.remove("active"); // Remove Class Active From Height "60px" To Height "70px"
    }
  };

  toggle.addEventListener("click", (e) => {
    // Toggle Bars

    menuLinks.classList.add("active"); // Add Class Active To menu Links from right -100% To Right 0

    menu__Bar.classList.add("active"); // Add Class Active To menu bar Overlay From right  -100% To 0
  });

  iconClose.addEventListener("click", (e) => {
    removeMenuBar(); // Function remove class active from menubar & menulinks
  });

  menu__Bar.addEventListener("click", (e) => {
    removeMenuBar(); // Function remove class active from menubar & menulinks
  });
}

{
  // type Speed "text"

  (function () {
    var strings = [];

    var string_data = JSON.parse(
      document.getElementById("banner-strings").value
    );

    string_data.forEach(function (el) {
      strings.push(el);
    });

    const typed = new Typed(".typed", {
      strings: strings,

      typeSpeed: 120,

      backSpeed: 120,

      loop: true,
    });
  })();
}

{
  //slider Mockup mobile

  $(".slider").owlCarousel({
    items: 1,

    singleItem: true,

    dots: false,

    loop: true,

    autoPlay: 3000,
  });
}

{
  // slider Services

  $(".slider-one").owlCarousel({
    nav: true,

    dots: true,

    loop: true,

    margin: 40,

    navText: false,

    items: 3,

    thumbs: false,

    smartSpeed: 1300,

    autoplay: true,

    autoplayTimeout: 4000,

    autoplayHoverPause: false,

    responsiveClass: true,

    autoHeight: true,

    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },

      1200: {
        items: 3,
      },

      1400: {
        items: 4,
      },
    },
  });
}

{
  // slider reviews

  $(".slider-Two").owlCarousel({
    nav: true,

    dots: true,

    loop: true,

    margin: 15,

    navText: false,

    items: 3,

    thumbs: false,

    smartSpeed: 1300,

    autoplay: true,

    autoplayTimeout: 4000,

    autoplayHoverPause: false,

    responsiveClass: true,

    autoHeight: true,

    responsive: {
      0: {
        items: 1.5,
      },

      768: {
        items: 2,
      },

      1200: {
        items: 4,
      },

      1400: {
        items: 4,
      },
    },
  });
}


// projects


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }




  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()