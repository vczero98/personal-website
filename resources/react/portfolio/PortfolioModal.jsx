import React from 'react';
import PortfolioCarousel from './PortfolioCarousel.jsx';

const Youtube = props => (
	<div className='portfolio-video'>
		<iframe
			width="560"
			height="315"
			src={props.src}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen />
	</div>
);

const PortfolioModal = props => {
	const renderSkills = () => (
		<>
			<h3>Skills developed</h3>
			<p className="skills-list">
				{props.project.skills.map(s => (
					<React.Fragment key={s}>
						<span className="portfolio-skill">{s}</span>
						{' '}
					</React.Fragment>
				))}
			</p>
		</>
	);

	const renderSections = () => {
		if (!props.project.sections) return [];
		let ctr = 0;
		return props.project.sections.map(s => (
			<React.Fragment key={ctr++} >
				<h3>{s.title}</h3>
				<p>{s.text}</p>
				{s.video && <Youtube src={s.video} />}
			</React.Fragment>
		));
	}

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
					{renderSections()}
					{renderSkills()}
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