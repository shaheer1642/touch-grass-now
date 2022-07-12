
import grass from './grass.png';
import React, { Component } from 'react';
import Button from '@mui/material/Button';

import './App.css';

class App extends Component {
  
  constructor(props){ 
    super(props) 
        
    // Set initial state 
  this.state = {
    data: null,
    touchCounter: 0
  };

  } 

  render() {
    return (
      <div className="App" style={{ 
        backgroundImage: `url(${grass})`,width: '100vw', height:'100vh',backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <header className="App-header">
        <h5 className="App-title">"This site is for us to get rich off your behavior, rooted in our monkey-brain. We are constantly updating the money we make off your clicks, we will show our new cars and mansions, with the rotating girlfriends. We will also keep you updated on the scientific studies about how social media makes you dumber and more suicidal."
"We developed, in 5 seconds development time, the lowest form of predatory practice, the patented TouchGrass ©️ system. .... "
"You get some pennies for your clicks, while you could make 10-100 times more with any actual work in the same time."
"We added the new PyramidGrass ©️ system, a pyramid scheme, where you can invest your earnings, until we pull the rug."
"Help us get rich. Say NO to other social media sites and webpages, where they do the same, pretending they are making actual content for your money. Wake up! And touch grass! 🟩 "</h5>
      <Button variant="outlined" size="large" color="success" onClick={() => this.setState({touchCounter: this.state.touchCounter+1}) }>Touch Grass</Button>
      <h1>You have touched the grass {this.state.touchCounter} times</h1>
      </header>
      </div>
    );
  }
}

export default App;
