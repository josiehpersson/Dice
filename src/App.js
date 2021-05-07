import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import RollDice from './components/dice/RollDice';
import SliderContainer from './components/sliders/SliderContainer';
import DisplayOutcome from './components/DisplayOutcome';
import Timer from './components/Timer';
import ColorPicker from './components/ColorPicker';
import OutcomeTable from './components/OutcomeTable';
import { INVERT_COLOR } from './utils/colorFunctions';
import { createOutcome } from './actions/index';

const useStyles = makeStyles(() => ({
  container: {
    padding: 40
  }
}))

function App(props) {
  const [diceArr, setDiceArr] = useState([]);
  const [color, setColor] = useState('#FFD600');
  const [invertedColor, setInvertedColor] = useState(INVERT_COLOR(color));

  const classes = useStyles();

  const handleSlideChange = (arr) => {
    setDiceArr(arr);
    //uppdaterar inte riktigt som den ska, delayed
  };

  const handleColorChange = (color) => {
    setColor(color);
    setInvertedColor(INVERT_COLOR(color));
  };

  const onCreateOutcome = (dice) => {
    props.dispatch(createOutcome(dice));
  };

  return (
    <Grid container spacing={4} className={classes.container}>
      <Grid item xs={4}>
        <Timer 
        color={color} 
        invertedColor={invertedColor} />
      </Grid>
      <Grid item xs={6}>
        <ColorPicker 
        onSubmit={handleColorChange} 
        color={color} />
      </Grid>
      <Grid item xs={12}>
        <RollDice
          onCreateOutcome={onCreateOutcome}
          diceArr={diceArr}
          color={color}
          invertedColor={invertedColor}
        />
      </Grid>
      <Grid item xs={12}>
        <DisplayOutcome 
        outcomes={props.outcomes} 
        color={color} 
        invertedColor={invertedColor} />
      </Grid>
      <Grid item xs={12}>
        <SliderContainer
          onChange={handleSlideChange}
          color={color}
          invertedColor={invertedColor}
        />
      </Grid>
      <Grid item xs={6}>
        <OutcomeTable 
        outcomes={props.outcomes} 
        color={color} 
        invertedColor={invertedColor} />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    outcomes: state.outcomes,
    //diceArray : state.diceArray,
  };
};

export default connect(mapStateToProps)(App);
