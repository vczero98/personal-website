import React from "react";

const Contact = () => (
  <>
    {/* contact */}
    <div id="contact" className="contact">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h2>Contact me</h2>
          <span> </span>
        </div>
        {/* /head-section */}
        {/* contact-grids */}
        <div className="contact-grids">
          <div className="col-md-4 contact-left">
            {/* <h4>Address</h4> */}
            <ul className="address">
              <li>
                <strong>Email:</strong>
              </li>
              <li>v.czeroczky@gmail.com</li>
              <li>
                <strong>Address:</strong>
              </li>
              <li>Birmingham, United Kingdom</li>
            </ul>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100013303060639">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/vilmos-czeroczky-45b050160/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/vczero98">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              {/* <li><a href="#"><span className="twitter"> </span></a></li>
								<li><a href="#"><span className="vimeo"> </span></a></li> */}
            </ul>
          </div>
          {/* <<div className="col-md-8 contact-right">
							<form>
								<div className="text-boxs">
									<div className="text-box">
										<input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}">
									</div>
									<div className="text-box">
										<input type="text" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}">
									</div>
									<div className="text-box">
										<input type="text" value="Telephone" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone';}">
									</div>
									<div className="text-box">
										<input type="text" value="Subject" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Subject';}">
									</div>
								</div>
								<div className="subject-box">
									<textarea>Message</textarea>
								</div>
								<input type="submit" value="Send" />
							</form>
						</div> */}
          <div className="clearfix"> </div>
        </div>
        {/* contact-grids */}
      </div>
    </div>
    {/* contact */}
  </>
);

export default Contact;
