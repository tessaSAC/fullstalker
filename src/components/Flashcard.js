import React, { Component } from 'react';
import SingleFace from './SingleFace';
import Buttons from './Buttons';

class Flashcard extends Component {

	constructor() {
		super();

		this.state = {
			currentName: 'Sophia',
			currentFace: '/media/sophia.png',
			flipped: false
		};

		this.flipCard = this.flipCard.bind(this);
	}

	flipCard() {
		this.setState({flipped: true});
	}

	render() {
		return (
			<div>
				<div className="row center">
					<br />
					<br />
					<div className="col s2">
						<a className="btn-floating btn-large waves-effect waves-light amber darken-3">
							<i className="material-icons">chevron_left</i>
						</a>
					</div>
					<div className="col s8">
					<SingleFace currentName={this.state.currentName} currentFace={this.state.currentFace} flipped={this.state.flipped} />
					<Buttons flipped={this.state.flipped} flipCard={this.flipCard} />
					</div>
					<div className="col s2">
						<a className="btn-floating btn-large waves-effect waves-light amber darken-3">
							<i className="material-icons">chevron_right</i>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Flashcard;
