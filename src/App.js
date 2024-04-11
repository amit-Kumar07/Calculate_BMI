import { useState, useMemo } from "react";
import './App.css'
function App() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  function onWeightchange(e){
    setWeight(e.target.value)
  }
  function onHeightchange(e){
    setHeight(e.target.value)
  }

  const output = useMemo(()=>{
   const calculateHeight = height/100;
   return (height/(calculateHeight*calculateHeight)).toFixed(1);

  },[height])
  return (
    <main>
      <h1>Project 4: BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="40"
          max="200"
          onChange={onWeightchange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input 
         type="range" 
         className="input-slider" 
         step="1" 
         onChange={onHeightchange}
         min='140'
         max='220'
         />
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
