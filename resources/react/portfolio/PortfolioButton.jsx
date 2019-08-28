import React from 'react';

class PortifolioButton extends React.Component {
	render() {
		return (
			<div className="col-md-6 col-lg-4">
				<a data-toggle="modal" data-target={`#portfolio-modal-${this.props.id}`}>
					<div className="portfolio-item">
						<img src={this.props.image} alt="" />
						<div className="title">
							<h2>{this.props.name}</h2>
						</div>
						<div className="hover-link">
							<i className="fas fa-search-plus"></i>
						</div>
					</div>
				</a>
			</div>
		);
	}
}

export default PortifolioButton;