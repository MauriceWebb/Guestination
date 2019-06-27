import React from 'react';

class Hero extends React.Component {
	render() {
		return (
			<div>
				<div
					className='jumbotron jumbotron-fluid bg-dark text-white d-flex mb-0 mt-5 pt-5 shadow-sm'
					style={{
						height: 400,
						backgroundImage:
							'url("https://images.studentuniverse.com/new/suwebui/photos/marketing/homepage-flights.jpg")',
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<div className='container d-flex flex-column justify-content-center justify-content-md-center align-items-center text-center mt-5 pt-5 mt-md-5 pt-md-0'>
						<h1 className='display-4 pt-5 pt-md-4 mt-5 mt-md-0 font-weight-bold'>
							Guestination!
						</h1>
						<p className='lead'>
							Click on an image to earn points, but don't click on any more than
							once!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
