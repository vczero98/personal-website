import React, { useEffect } from "react";
import PortfolioCarousel from "./PortfolioCarousel.jsx";
import { Button, Modal } from "react-bootstrap";

const Youtube = (props) => (
  <div className="portfolio-video">
    <iframe
      width="560"
      height="315"
      src={props.src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const PortfolioModal = ({ id, project, handleClose, show }) => {
  const renderSkills = () => (
    <>
      <h3>Skills developed</h3>
      <p className="skills-list">
        {project.skills.map((s) => (
          <React.Fragment key={s}>
            <span className="portfolio-skill">{s}</span>{" "}
          </React.Fragment>
        ))}
      </p>
    </>
  );

  const renderSections = () => {
    if (!project.sections) return [];
    let ctr = 0;
    return project.sections.map((s) => (
      <React.Fragment key={ctr++}>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        {s.video && <Youtube src={s.video} />}
      </React.Fragment>
    ));
  };

  const renderButtons = () => {
    if (!project.buttons) return [];
    let ctr = 0;
    return project.buttons.map((b) => (
      <React.Fragment key={ctr++}>
        <a
          href={b.href}
          target="_blank"
          type="button"
          className="btn btn-default"
        >
          {b.icon && <i className={b.icon} />} {b.text}
        </a>{" "}
      </React.Fragment>
    ));
  };

  useEffect(() => {
    if (show) {
      console.log("WE ARE SHOWN!");
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {project.images && <PortfolioCarousel {...{ id, project }} />}
        {renderSections()}
        {renderSkills()}
      </Modal.Body>
      <Modal.Footer>
        {renderButtons()}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PortfolioModal;
