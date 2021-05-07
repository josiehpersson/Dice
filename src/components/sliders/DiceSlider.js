import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Slider } from '@material-ui/core';

const useStyles = makeStyles({
  slider: {
    width: 500,
    color: (props) => props.color,
    '& .MuiSlider-thumb' :{
      color: (props) => props.invertedColor,
    }
  },
});

const marks = [
  {
    value: 5,
    label: 'Less probability',
  },
  {
    value: 10,
    label: 'Neutral',
  },
  {
    value: 15,
    label: 'Higher probability',
  },
];

const DiceSlider = (props) => {
  const [val, setVal] = useState(10);
  const classes = useStyles(props);

  const handleRangeUpdate = (e, data) => {
    setVal(data);
    props.onChange(data, e.target.id);
  };

  return (
    <Slider
      id={props.id}
      value={val}
      onChange={handleRangeUpdate}
      marks={marks}
      max={15}
      min={5}
      className={classes.slider}
      step={null}
    />
  );
};

export default DiceSlider;
