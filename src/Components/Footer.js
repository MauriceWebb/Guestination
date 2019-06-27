import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer className='bg-secondary pt-5'>
					<ul className='nav bg-light py-1 mt-5'>
						<li className='nav-item'>
							<button className='nav-link active text-dark disabled border-0 bg-none'>
								Guestination!
							</button>
						</li>
					</ul>
				</footer>
			</div>
		);
	}
}

export default Footer;
