import React, { useEffect } from "react";
import Intro from "./Intro";
import Header from "./Header";
import Portfolio from "./portfolio/Portfolio";
import Blog from "./Blog";
import Skills from "./Skills";
import Quotes from "./Quotes";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import $ from "jquery";

const Main = () => {
  /** Legacy scripts */
  useEffect(() => {
    // Smooth scrolling
    $(document).ready(function () {
      $(".scroll").click(function (event) {
        event.preventDefault();
        $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
      });
    });

    // $(document).ready(function () {
    //   $(".popup-with-zoom-anim").magnificPopup({
    //     type: "inline",
    //     fixedContentPos: false,
    //     fixedBgPos: true,
    //     overflowY: "auto",
    //     closeBtnInside: true,
    //     preloader: false,
    //     midClick: true,
    //     removalDelay: 300,
    //     mainClass: "my-mfp-zoom-in",
    //   });
    // });

    $(document).ready(function () {
      /*
        var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear'
        };
        */
      // TODO: Re-enable
      //   $().UItoTop({ easingType: "easeOutQuart" });
    });
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <Portfolio />
      <Blog />
      <Skills />
      <Quotes />
      <Education />
      <Contact />
      <Footer />
      {/* <script type="text/javascript" src="js/progressbar.min.js"></script>
      <script type="text/javascript" src="js/quotes.js"></script>
      <script type="text/javascript" src="js/animations.js"></script> */}
      {/* <!--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!-- <title>arcadia Website Template | Home :: w3layouts</title> --> */}
    </>
  );
};

export default Main;
