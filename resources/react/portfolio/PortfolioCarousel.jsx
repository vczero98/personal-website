import React from 'react';

const PortfolioCarousel = props => {
	const renderIndicators = () => {
		let ctr = -1;
		return props.project.images.map(() => (
			<React.Fragment key={++ctr}>
				<li
					data-target="#splittale-carousel"
					data-slide-to={ctr}
					className={ctr == 0 ? 'active' : ''} />
				{' '}
			</React.Fragment>
		));
	};

	const renderWrapper = () => {
		let ctr = -1;
		return (
			<div className="carousel-inner" role="listbox">
				{props.project.images.map(i => (
					<div key={++ctr} className={`item${ctr == 0 ? ' active' : ''}`}>
						<img src={i} alt="..." />
					</div>
				))}
			</div>
		);
	};

	return (
		<div id={`portfolio-${props.id}-carousel`} className="carousel slide" data-ride="carousel">
			{/* Indicators */}
			<ol className="carousel-indicators">
				{renderIndicators()}
			</ol>

			{/* Wrapper for slides */}
			{renderWrapper()}

			{/* Controls */}
			<a className="left carousel-control" href={`#portfolio-${props.id}-carousel`} role="button" data-slide="prev">
				<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				<span className="sr-only">Previous</span>
			</a>
			<a className="right carousel-control" href={`#portfolio-${props.id}-carousel`} role="button" data-slide="next">
				<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				<span className="sr-only">Next</span>
			</a>
		</div>
	);
};

export default PortfolioCarousel;