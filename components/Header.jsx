import React from "react";

const Header = () => (
  <>
    <div id="totop" className="header">
      <div className="container">
        {/* menu */}
        <div className="menu">
          {/* <span className="menu-icon"> </span> */}
          <ul>
            <li>
              <a href="#portfolio" className="scroll">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#skills" className="scroll">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="scroll">
                Education
              </a>
            </li>
            <li>
              <a href="#contact" className="scroll">
                Contact
              </a>
            </li>
            <div className="clearfix"> </div>
          </ul>
        </div>
        {/* /menu */}

        {/* header-info */}
        <div className="header-info text-center">
          {/* <img src="images/me.jpg" alt="Portrait of myself"> */}
          <h1>Vilmos Czeroczky</h1>
          <span> </span>
          <h2>Student of Computer Science and Software Engineering</h2>
          <a href="#intro" className="scroll">
            <label className="downarrow"> </label>
          </a>
        </div>
        {/* /header-info */}
      </div>
    </div>
  </>
);

export default Header;
