import React from 'react';
import './App.css';

import LightBox from './components/lightbox/lightbox';
import img1 from './images/img1.jpg';
import img2 from './images/img2.png';
import img3 from './images/img3.png';

const collection = [
  { src: img1, caption: "Caption eight" },
  { src: img2, caption: "Caption nine" },
  { src: img3, caption: "Caption ten" },
];

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>LightBox</h2>
        <p>Click on each image below to show the Slideshow Gallery.</p>

        <LightBox
          input={collection}
          ratio={`3:2`}
        />

        <div>
          Made by <a href=""></a>.
          Visit me at <a href="/">completejavascript.com</a>.
        </div>
      </div>
    );
  }
}