import React from 'react';
import PortfolioCarousel from './PortfolioCarousel.jsx';

const PortfolioModal = props => {
	const skills = (
		<>
			<h3>Skills developed</h3>
			<p>
				{props.project.skills.map(s => (
					<React.Fragment key={s}>
						<span className="portfolio-skill">{s}</span>
						{' '}
					</React.Fragment>
				))}
			</p>
		</>
	);

	const renderButtons = () => {
		if (!props.project.buttons) return [];
		let ctr = 0;
		return props.project.buttons.map(b => (
			<React.Fragment key={ctr++} >
				<a
					href={b.href}
					target="_blank"
					type="button"
					className="btn btn-default" >
					{b.icon && <i className={b.icon} />} {b.text}
				</a>
				{' '}
			</React.Fragment>
		));
	};

	return (
		<div className="modal fade" id={`portfolio-modal-${props.id}`} tabIndex="-1" role="dialog" aria-labelledby={`portfolio-modal-${props.id}-label`}>
		<div className="modal-dialog modal-lg" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
					<h4 className="modal-title" id={`portfolio-modal-${props.id}-label`}>{props.project.title}</h4>
				</div>
				<div className="modal-body">
					{props.project.images && <PortfolioCarousel id={props.id} project={props.project} />}
					<h3>The Project</h3>
					<p>SplitTale is another one of my personal projects, solely developed by me. The website is a game, where players can write stories together using, at each turn being able to add up to 5 words to the story. The game uses Facebook for logging in. Users can start their own stories. Check it out at www.splittale.com!</p>
					<h3>Development</h3>
					<p>To further practise my Node.js skill I have taught myself, I decided to work on another web application developed with Node.js using the Express framework. To handle the Facebook login, I have used Passport. The front-end is developed using jQuery.</p>
					{skills}
				</div>
				<div className="modal-footer">
					{renderButtons()}
					<button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	);
};

export default PortfolioModal;