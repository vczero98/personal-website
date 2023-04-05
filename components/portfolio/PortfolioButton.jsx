import React from "react";

const PortifolioButton = ({ image, name, onClick }) => {
  return (
    <div className="col-md-6 col-lg-4">
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
    </div>
  );
};

export default PortifolioButton;
