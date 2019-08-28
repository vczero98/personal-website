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
					<p className="portfolio-head">To gain experience, I have worked on several projects:</p>
					<div className="row"></div>

					{this.renderProjectButtons()}
					{this.renderProjectModals()}
				</div>
			</div>
		);
	}
}

export default Portfolio;