import React, { Component } from 'react';
import grass from './grass.png';
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

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App" style={{ 
        backgroundImage: `url(${grass})`,width: '1920px', height:'1080px',backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
      <header className="App-header">
        <h5 className="App-title">"This site is for us to get rich off your behavior, rooted in our monkey-brain. We are constantly updating the money we make off your clicks, we will show our new cars and mansions, with the rotating girlfriends. We will also keep you updated on the scientific studies about how social media makes you dumber and more suicidal."
"We developed, in 5 seconds development time, the lowest form of predatory practice, the patented TouchGrass ©️ system. .... "
"You get some pennies for your clicks, while you could make 10-100 times more with any actual work in the same time."
"We added the new PyramidGrass ©️ system, a pyramid scheme, where you can invest your earnings, until we pull the rug."
"Help us get rich. Say NO to other social media sites and webpages, where they do the same, pretending they are making actual content for your money. Wake up! And touch grass! 🟩 "</h5>
      <h1>You have touched the grass {this.state.touchCounter} times</h1>
      <Button variant="outlined" color="success" size="large" onClick={() => this.setState({touchCounter: this.state.touchCounter+1}) }>Touch grass</Button>
      </header>
      </div>
    );
  }
}

export default App;