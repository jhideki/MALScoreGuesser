import React, { useState } from "react";
import "../styles/Slider.css";

function Slider(props) {
  const [value, setValue] = useState(5);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={value}
        step={props.step}
        onChange={handleSliderChange}
        className="Slider"
      />
      <p>
        {props.name} : {value}
      </p>
    </div>
  );
}

export default Slider;
