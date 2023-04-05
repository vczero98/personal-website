import React, { useMemo, useState } from "react";
import PortfolioButton from "./PortfolioButton.jsx";
import projects from "./projects";
import PortfolioModals from "./PortfolioModal.jsx";
import { Row } from "react-bootstrap";

const Portfolio = () => {
  const [openProject, setOpenProject] = useState(null);

  const projectButtons = useMemo(
    () =>
      projects.map((p, idx) => (
        <PortfolioButton
          key={idx}
          name={p.name}
          image={p.coverImage}
          onClick={() => setOpenProject(idx)}
        />
      )),
    [projects]
  );

  const projectModals = useMemo(
    () =>
      projects.map((p, idx) => (
        <PortfolioModals
          key={idx}
          id={idx}
          project={p}
          show={openProject == idx}
          handleClose={() => setOpenProject(null)}
        />
      )),
    [projects, openProject]
  );

  return (
    <div id="portfolio" className="portfolio text-center">
      <div className="container">
        {/* head-section */}
        <div className="head-section text-center">
          <h2>Portfolio</h2>
          <span />
        </div>
        {/* /head-section */}
        <p className="portfolio-head">
          If you are looking for my <strong>work experience</strong>, check my{" "}
          <a href="https://www.linkedin.com/in/vilmos-czeroczky-45b050160/">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>{" "}
          page.
          <br />
          Here are some of my <strong>personal projects</strong>:
        </p>
        {/* <div className="row"></div> */}

        <Row>{projectButtons}</Row>
        {projectModals}
      </div>
    </div>
  );
};

export default Portfolio;
