import React, { useState } from "react";
import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

const defautLevels = [
  { label: "Happy", value: 10 },
  { label: "Normal", value: 5 },
  { label: "Sad", value: 0 },
];
const Level = ({ levels = defautLevels, label, name, onChange, value }) => {
  const [val, setValue] = useState(value);
  const onChangeValue = (e) => {
    e.preventDefault();
    const { value } = e.target;
    const intValue = parseInt(value, 10);
    setValue(intValue);
    onChange && onChange({ target: { name, value: intValue } });
  };

  const onListClick = (e, value) => {
    e.preventDefault();
    const intValue = parseInt(value, 10);
    setValue(intValue);
    onChange && onChange({ target: { name, value: intValue } });
  };

  return (
    <div>
      <Typography variant="h6" color="blue-gray" className="mb-3">
        {label}
      </Typography>
      <Card className="w-full max-w-[24rem]">
        <List className="flex-row">
          {levels.map((level) => (
            <ListItem
              className="p-0"
              onClick={(e) => onListClick(e, level.value)}
            >
              <label
                htmlFor="horizontal-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Radio
                    name={name}
                    value={level.value}
                    id="horizontal-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    checked={val == level.value}
                    onChange={onChangeValue}
                  />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="font-medium text-blue-gray-400"
                >
                  {level.label}
                </Typography>
              </label>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
};

export default Level;
