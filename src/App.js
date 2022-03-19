import React from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo.jsx';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx'
import Rank from './components/Rank/Rank.jsx'
import ParticlesBG from "./components/Particles/ParticlesBG.jsx";
import './App.css';



function App() {
  return (
    <div className="App">
      <ParticlesBG />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
