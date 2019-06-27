import React from 'react';
// import $ from 'jquery';

class Game extends React.Component {
	state = {
		places: this.props.places.filter( place => place ? true : false )
	};

	shuffledArr = (array) => {
        for (let i = array.length; i > 0; i --) {
            let j = Math.floor( Math.random() * (i + 1) );
            [array[i], array[j]] = [array[j], array[i]];
            array = array.filter( (place) => place ? true : false );
            this.setState( { places: array } );
        }
	};

	render() {
		return (
			<div>
				<div id='game' className='container d-flex py-3'>
					<div className='row text-center justify-content-center align-items-center flex-wrap'>
						{this.state.places.map(place => (
							<div
                                key={place.id}
                                id={place.id}
								className='m-3 rounded dest'
								style={{
									height: 170,
                                    width: 170,
                                    flexBasis: 200,
									backgroundImage: `url("${place.img}")`,
									backgroundSize: 'cover',
									backgroundPosition: 'center'
                                }}
                                onClick={(e) => {
                                    this.props.getSelected(place.id);
                                    let arr = this.state.places.map( place => place ? place : null);
									this.shuffledArr(arr);
                                }}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Game;
