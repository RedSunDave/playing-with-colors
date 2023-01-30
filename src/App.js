import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Treeline from './Components/Treeline/Treeline';
import Gate from './Components/Gate/Gate';
import TextCard from './Components/TextCard/TextCard';
import CherryBlossom from './Components/Overlay/CherryBlossom';

function App() {

  const [count, setCount] = useState(0)

  let slideOne = "One hears of you solely,"
  let slideTwo = "As a man who abhors the world"
  let slideThree = "I can only hope"
  let slideFour = "Your mind is not detained"
  let slideFive = "By this transient lodging"

  let wordArray = [slideOne, slideTwo, slideThree, slideFour]

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // setInterval(function() {
  //   if (count < 4) {
  //     setCount(count + 1)
  //   }
  //   else {
  //     setCount(0)
  //   }
  // }, 5000)

  return (
    <div className="App">
        {/* <CherryBlossom /> */}
        <Header />
        <Treeline />
        <Gate />
        {/* <TextCard style={{margin: 20}} text={wordArray[count]} /> */}
    </div>
  );
}

export default App;
