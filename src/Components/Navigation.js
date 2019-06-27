import React from 'react';

class Navigation extends React.Component {
	state = {};

	getMessage = () => {
		if (this.props.choice === true) {
			return 'You guessed correctly!';
		} else if (this.props.choice === false && this.props.score === 0) {
			return 'Click an image to begin!';
		} else if (this.props.choice === false) {
			return 'You guessed incorrectly!';
		}
	};

	render() {
		return (
			<div>
				<ul className='nav bg-dark text-center py-3 fixed-top shadow-sm border-bottom'>
					<li className='nav-item col-md-4'>
						<h5 className='nav-link active text-light mb-2' href='#'>
							<strong className='font-weight-bold'>Guestination</strong>
						</h5>
					</li>
					<li className='nav-item col-md-4'>
						<p className='nav-link text-light disabled'>{this.getMessage()}</p>
					</li>
					<li className='nav-item col-md-4'>
						<p className='nav-link text-light disabled'>
							{/* {`Score: ${this.props.score} | Top Score: ${this.props.topScore}`} */}
							<strong>Score: </strong> {this.props.score} |{' '}
							<strong>Top Score: </strong> {this.props.topScore}
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
