import React, { useState } from "react";
import {
  Button,
  Input,
  Typography,
  Checkbox,
  Tooltip,
} from "@material-tailwind/react";
import Slider from "../RangeSlider";
import Level from "../Level";
import DatePicker from "../DatePicker";
import { now } from "mongoose";

const MentalStatForm = ({ value, onFormChange, onSave, error }) => {
  const [formState, setFormState] = useState({
    anxiety: 0,
    mood: 5,
    sleepQuality: 5,
    hoursSleep: 6,
    stress: 0,
    logDate: new Date(),
  });

  function onChange(e) {
    const { name, value } = e.target;
    setFormState((state) => {
      return { ...state, [name]: value };
    });
    onFormChange && onFormChange(formState);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <div className="mt-10 flex flex-col gap-5 basis-1/3">
        <div className="mt-2">
          <DatePicker
            name="logDate"
            value={formState.date}
            onChange={onChange}
            label={"Date"}
          />
        </div>
        <div>
          <Level
            onChange={onChange}
            label={"Mood Rating"}
            name="mood"
            value={formState.mood}
          />
        </div>
        <div>
          <Slider
            onChange={onChange}
            label={"Anxiety Level"}
            name="anxiety"
            value={formState.anxiety}
          />
        </div>
        <div>
          <Level
            onChange={onChange}
            label={"Quality Of Sleep"}
            name="sleepQuality"
            value={formState.sleepQuality}
          />
        </div>
        <div>
          <Slider
            onChange={onChange}
            label={"Hours of Sleep"}
            name="hoursSleep"
            value={formState.hoursSleep}
          />
        </div>
        <div>
          <Slider
            onChange={onChange}
            label={"Stress Level"}
            name="stress"
            value={formState.stress}
          />
        </div>
        <Button type="button" onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default MentalStatForm;
