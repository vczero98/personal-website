import React from 'react';
import PortfolioButton from './PortfolioButton.jsx';
import projects from './projects';
import PortfolioModals from './PortfolioModal.jsx';

class Portfolio extends React.Component {
	renderProjectButtons() {
		let ctr = 0;
		return projects.map(p => (
			<PortfolioButton
				key={ctr}
				id={ctr++}
				name={p.name}
				image={p.coverImage} />
		));
	}

	renderProjectModals() {
		let ctr = 0;
		return projects.map(p => (
			<PortfolioModals
				key={ctr}
				id={ctr++}
				project={p} />
		));
	}

	render() {
		return (
			<div id="portfolio" className="portfolio text-center">
				<div className="container">
					{/* head-section */}
					<div className="head-section text-center">
						<h2>Portfolio</h2>
						<span />
					</div>
					{/* /head-section */}
					<p className="portfolio-head">If you are looking for my <strong>work experience</strong>, check my <a href='https://www.linkedin.com/in/vilmos-czeroczky-45b050160/'><i class="fab fa-linkedin"></i> LinkedIn</a> page.<br/>Here are some of the projects I have worked on:</p>
					<div className="row"></div>

					{this.renderProjectButtons()}
					{this.renderProjectModals()}
				</div>
			</div>
		);
	}
}

export default Portfolio;