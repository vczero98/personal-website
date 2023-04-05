import React from "react";

const Intro = () => (
  <>
    {/* intro */}
    <div id="intro" className="intro text-center">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h2>Hello, world!</h2>
          <span> </span>
        </div>
        {/* /head-section */}
        <p>
          I am a bright, enthusiastic and open-minded individual, who enjoys
          learning new skills and overcoming challanges. I am a quick learner,
          and I am always open to learning about new technologies. In my free
          time, I enjoy learning new languages and cycling.
        </p>
        <p>
          I have been interested in programming ever since I was child, when I
          discovered my uncle's old Commodore 64. Since then, I have developed
          my skills further in more modern langauges such as Python and
          JavaScript, and study Java at university.
        </p>
        <a href="#portfolio" className="scroll">
          <label className="downarrow1"> </label>
        </a>
      </div>
    </div>
    {/* /intro */}
    {/* video  */}
    {/* video -- */}
    {/* -pop-up-box-- */}

    <script type="text/javascript" src="js/modernizr.custom.min.js"></script>
    <link
      href="css/popuo-box.css"
      rel="stylesheet"
      type="text/css"
      media="all"
    />

    <script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
    {/* -//pop-up-box-- */}
    <div id="small-dialog" className="mfp-hide">
      <iframe src="//player.vimeo.com/video/38584262"> </iframe>
    </div>

    {/* // fea-video-- */}
    <div id="price" className="video">
      <a className="play popup-with-zoom-anim" href="#small-dialog">
        {/* <span> </span>*/}
      </a>
    </div>
  </>
);

export default Intro;
