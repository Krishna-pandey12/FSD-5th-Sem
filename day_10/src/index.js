import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Imageslider from './Imageslider.js';
import ImageRotater from './ImageRotater.js';
import ImageShifter from './ImageShifter.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Imageslider></Imageslider>
    <ImageRotater></ImageRotater>
    <ImageShifter></ImageShifter>
  </React.StrictMode>
);

