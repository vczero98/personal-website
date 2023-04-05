import React from "react";
import { Row } from "react-bootstrap";

const Skills = () => (
  <>
    <div id="skills" className="services text-center">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h2>Skills</h2>
          <span> </span>
        </div>
        {/* /head-section */}
        <p>
          During the past couple of years, I have had the chance to get to know
          and obtain experience in several proramming languages and
          technologies, each with a slightly different approach to problems and
          different purposes.
        </p>
        {/* service-grids */}
        <div className="service-grids">
          <Row>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar0" className="skillProgressBar"></div>
              <h4>Java</h4>
              <p>Have been studying the language at univeristy in depth</p>
            </div>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar1" className="skillProgressBar"></div>
              <h4>Python</h4>
              <p>Learning the language since over three years</p>
            </div>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar4" className="skillProgressBar"></div>
              <h4>HTML / CSS</h4>
              <p>Creating the personal website and minesweeper game</p>
            </div>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar5" className="skillProgressBar"></div>
              <h4>JavaScript</h4>
              <p>Programmed minesweeper and website animations</p>
            </div>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar2" className="skillProgressBar"></div>
              <h4>SQL</h4>
              <p>Used it for back-end databases for projects and websites</p>
            </div>
            <div className="col-md-4 service-grid text-center">
              <div id="skillBar3" className="skillProgressBar"></div>
              <h4>Visual Basic</h4>
              <p>
                Used in Visual Studio projects, for A-Level project and other
                projects outside of school
              </p>
            </div>
            <div className="clearfix"> </div>
          </Row>
        </div>
        {/* service-grids */}
        <a href="#education" className="scroll">
          <label className="downarrow1"> </label>
        </a>
      </div>
    </div>
  </>
);

export default Skills;
