import React from "react";

const Footer = () => (
  <>
    {/* footer */}
    <div className="footer">
      <div className="container">
        {/* <div className="footer-left">
						<p>Designed by <a href="http://w3layouts.com/">W3layouts</a></p>
					</div> */}
        <div className="footer-right">
          <p>
            <a href="#totop" className="scroll">
              Back to top<span> </span>
            </a>
          </p>

          <a href="#" id="toTop" style={{ display: "block" }}>
            {" "}
            <span id="toTopHover" style={{ opacity: 1 }}>
              {" "}
            </span>
          </a>
        </div>
      </div>
    </div>
    {/* footer */}
  </>
);

export default Footer;
