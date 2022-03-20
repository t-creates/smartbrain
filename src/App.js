import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo.jsx';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import ParticlesBG from "./components/Particles/ParticlesBG.jsx";
import './App.css';

const app = new Clarifai.App({
  apiKey: '44568a297a0f4119b0f6e64d93aec392'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('CLICK');
    app.models.predict('44568a297a0f4119b0f6e64d93aec392', 'https://samples.clarifai.com/face-det.jpg').then(
      function (response) {
        console.log(response);
      },
      function (error) {

      }
    )
  }

  render() {
    return (
      <div className="App">
        <ParticlesBG />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
