import React from 'react';
import '../ComponentStyles/Footer.css';
class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer className='pt-5'>
					<ul className='nav bg-dark py-1 mt-5 border-top d-flex justify-content-center'>
						<li className='nav-item'>
							<button className='nav-link active text-light disabled border-0 bg-dark text-cnter'>
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
