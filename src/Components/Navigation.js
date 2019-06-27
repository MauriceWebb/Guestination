import React from 'react';

class Navigation extends React.Component {
	state = {};

	getMessage = () => {
		if ( this.props.choice === true ) {
			return 'You guessed correctly!';
		} else if ( this.props.choice === false && this.props.score === 0 ) {
			return 'Click an image to begin!';
		} else if ( this.props.choice === false ) {
			return 'You guessed incorrectly!';
		}
	};

	render() {
		return (
			<div>
				<ul className='nav bg-light text-center py-3 fixed-top shadow-sm'>
					<li className='nav-item col-md-4'>
						<p className='nav-link active text-dark' href='#'>
							<strong>Guestination</strong>
						</p>
					</li>
					<li className='nav-item col-md-4'>
						<p className='nav-link text-dark disabled'>
							{this.getMessage()}
						</p>
					</li>
					<li className='nav-item col-md-4'>
						<p className='nav-link text-dark disabled'>
							{`Score: ${this.props.score} | Top Score: ${this.props.topScore}`}
						</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
