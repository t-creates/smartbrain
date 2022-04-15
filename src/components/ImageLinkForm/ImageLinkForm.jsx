import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className=''>
      <p className='f3'>
        {'This magic brain will detect faces in your pictures, give it a try!'}
        <p>
          {'Post an image address link, hit "Detect" then let Smart Brain do the work.'}
        </p>
      </p>
      <div className='center o-80'>
        <div className='form center pa4 br3 shadow-5'>
          <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
          <button className='flex center w-30 grow f4 link ph3 pv2 dib white ba b--silver bg-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}



export default ImageLinkForm;