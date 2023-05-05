import React, { useState } from "react";
import "../styles/Slider.css";

function Slider(props) {
  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    props.onValueChange(newValue);
  };

  return (
    <div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        onChange={handleSliderChange}
        className="Slider"
      />
      <p>
        {props.name} : {props.value}
      </p>
    </div>
  );
}

export default Slider;
