import logo from './logo.svg';
import './App.css';
import { Button, Slider } from "@mui/material";
import React, {useState} from "react";
function App() {
  const [value, setValue] = useState(55);
 

  function onSliderChange(event){
    const newValue = event.target.value;
    console.log(newValue);
    setValue(event.target.value);
  }


  return (
    <div className="App">
 
      <Slider style={{marginTop: "500px"}} value={value} onChange={onSliderChange}/>
    </div>
  );
}


export default App;
