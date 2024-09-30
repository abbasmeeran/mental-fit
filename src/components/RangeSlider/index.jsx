import { Slider, Tooltip, Typography } from "@material-tailwind/react";
import React, { useRef, useState } from "react";

const RangeSlider = ({ name, onChange, label }) => {
  const [value, setValue] = useState(0);
  const inputRef = useRef(null);
  const onSliderChange = (e) => {
    const { value } = e.target;
    setValue(value);
    onChange && onChange({ target: { name, value } });
  };
  return (
    <>
      <Typography variant="h6" color="blue-gray" className="mb-3">
        {label}
      </Typography>
      <Tooltip content={value}>
        <Slider
          defaultValue={0}
          min={0}
          max={10}
          size="lg"
          onChange={onSliderChange}
          step={1}
          inputRef={inputRef}
        />
      </Tooltip>
    </>
  );
};

export default RangeSlider;
