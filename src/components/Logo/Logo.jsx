import React from 'react';
import Tilt from 'react-tilt';
import brain from './thinking.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma5 mt0 o-80'>
      <Tilt className="Tilt br2 shadow-2" options={{ max: 66 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> <img alt='logo' src={brain} /></div>
      </Tilt>
    </div>
  );
}

export default Logo;