$(document).ready(function () {
  //    For The Sticky Navigation
  $(".js--feature-section").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "50px",
    }
  );

  // --Scroll On Buttons--

  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--plan-section").offset().top },
      1000
    );
  });
  $(".js--scroll-to-features").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--feature-section").offset().top },
      1000
    );
  });

  $(".js-nav-scroll-to-features").click(function () {
    $("html,body").animate({ scrollTop: $("#features").offset().top }, 1000);
  });

  $(".js-nav-scroll-to-howitworks").click(function () {
    $("html,body").animate({ scrollTop: $("#howitworks").offset().top }, 1000);
  });

  $(".js-nav-scroll-to-cities").click(function () {
    $("html,body").animate({ scrollTop: $("#Cities").offset().top }, 1000);
  });

  $(".js-nav-scroll-to-plans").click(function () {
    $("html,body").animate({ scrollTop: $("#PlanSection").offset().top }, 1000);
  });

  // -- NAVBAR SMOOTH SCROLL --
  // $(function() {
  //     $('a[href*=#]:not([href=#])').click(function() {
  //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //             var target = $(this.hash);
  //             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //             if (target.length) {
  //                 $('html,body').animate({
  //                     scrollTop: target.offset().top
  //                 }, 1000);
  //                 return false;
  //             }
  //         }
  //     });
  // });
  //-- End of SMOOTH SCROLL --

  // -- Animations On Scroll --

  $(".js-wp-1").waypoint(
    function (direction) {
      $(".js-wp-1").addClass("animated fadeIn"); // it will occur only for once for first time only
    },
    {
      offset: "60%",
    }
  );

  $(".js-wp-2").waypoint(
    function (direction) {
      $(".js-wp-2").addClass("animated fadeInUp"); // it will occur only for once for first time only
    },
    {
      offset: "80%",
    }
  );

  $(".js-wp-3").waypoint(
    function (direction) {
      $(".js-wp-3").addClass("animated fadeIn"); // it will occur only for once for first time only
    },
    {
      offset: "70%",
    }
  );

  $(".js-wp-4").waypoint(
    function (direction) {
      $(".js-wp-4").addClass("animated pulse"); // it will occur only for once for first time only
    },
    {
      offset: "60%",
    }
  );

  // STYLE REMOVER PLUGIN OF JQUERY
  // I USED THIS TO REMOVE INLINE DISPLAY PROPERTY NONE THAT IS APPLYING BY TOGGLER DUE TO WHICH THE MAIN NAV IS HIDDEN EVEN AFTER
  // TOGGLE IS ENDED AND NONE OF CLASS PROPERTY IS APPLYING SO REMOVE THAT INLINE STYLE I USED THIS......

  (function ($) {
    $.fn.removeStyle = function (style) {
      var search = new RegExp(style + "[^;]+;?", "g");

      return this.each(function () {
        $(this).attr("style", function (i, style) {
          return style && style.replace(search, "");
        });
      });
    };
  })(jQuery);

  // STYLE REMOVER PLUGIN ENDED /// * IT DOSEN't WORKS ON TOOGLE

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    // nav.slideToggle(200);   // i didn't used this bcoz of inline display property
    if (icon.hasClass("fas fa-bars")) {
      icon.removeClass("fas fa-bars");
      icon.addClass("fas fa-times");
      nav.show();
      nav.css("display", "inline-block");
      $(".logo").css("margin-bottom", "6.5%");
      $(".logo-black").css("margin-bottom", "9.5%");
    } else {
      icon.removeClass("fas fa-times");
      icon.addClass("fas fa-bars");
      nav.hide();
      $(".logo").css("margin-bottom", "auto");
      $(".logo-black").css("margin-bottom", "auto");
      nav.removeAttr("style");
    }
  });

  $("onsubmit").click(function () {
    $("success").css("display", "block");
  });
});
