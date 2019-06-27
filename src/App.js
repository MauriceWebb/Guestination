import React from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Game from './Components/Game';
import Footer from './Components/Footer';

import DESTINATIONS from './Stuff/destinations';
class App extends React.Component {
    state = {
        places: DESTINATIONS,
        selected: [],
        score: 0,
        topScore: 0,
        choice: false
    };

    reset = () => {
        this.setState( { selected: [], score: 0, choice: false } );
    };

    getSelected = (id) => {
        console.log('the captured id is:', id);
        let selected = this.state.selected;

        if (selected.includes(id)) {
            console.log('You guessed wrong!!');
            this.reset();
        } else {
            selected.push(id);

            let upScore = this.state.score + 1,
                currTop = this.state.topScore,
                topScore = upScore > currTop ? upScore : currTop;

            this.setState( {
                selected: selected,
                score: upScore,
                topScore: topScore,
                choice: true
            } );
        }
    };
    
    render() {
        return (
            <div>
                <Navigation score={this.state.score} topScore={this.state.topScore} choice={this.state.choice}/>
                <Hero />
                <Game places={this.state.places} getSelected={this.getSelected}/>
                <Footer />
            </div>
        )
    }
}

export default App;