import React from "react";
import { Col } from "react-bootstrap";

const PortifolioButton = ({ image, name, onClick }) => {
  return (
    <Col md={6} lg={4}>
      <a {...{ onClick }}>
        <div className="portfolio-item">
          <img src={image} alt="Project photo" />
          <div className="title">
            <h2 dangerouslySetInnerHTML={{ __html: name }} />
          </div>
          <div className="hover-link">
            <i className="fas fa-search-plus"></i>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default PortifolioButton;
