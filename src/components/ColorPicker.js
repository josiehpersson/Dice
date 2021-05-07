import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';


const ColorPicker = (props) => {
const [color, setColor] = useState('#FFD600');

const handleColorChange = (e) => {
    setColor(e.target.value);
}

const handleColorSubmit = () => {
    props.onSubmit(color);
}
  return (
      <div>
          <TextField 
          type="text"
          value={color}
          onChange={handleColorChange}
          />
          <Button
          type="button"
          onClick={handleColorSubmit}
          >
              CHANGE COLOR
          </Button>
      </div>
  )
}

export default ColorPicker;
