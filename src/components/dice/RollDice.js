import React, { useState, useEffect } from 'react';
import { Button, Grid, makeStyles } from '@material-ui/core';
import Dice from './Dice';

const useStyles = makeStyles({
  button: {
    backgroundColor: props => props.color,
    color: props => props.invertedColor,
    '&:hover' : {
      backgroundColor: props => props.color,
    }
  },
})
const RollDice = (props) => {
  const [dice, setDice] = useState(2);
  const [isRolling, setIsRolling] = useState(false);
  const [diceArr, setDiceArr] = useState([]);
  const classes = useStyles(props);

  useEffect(() => {
    setDiceArr(props.diceArr);
  }, [props.diceArr]);

  const handleRoll = () => {
    setIsRolling(true);
    const tmpArr = [...diceArr];
    setTimeout(() => {
      let pos = Math.floor(Math.random() * tmpArr.length);
      const [newNumber] = tmpArr.splice(pos, 1);
      setDice(newNumber);
      props.onCreateOutcome(newNumber);
    }, 700);
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
      <Dice dice={dice} isRolling={isRolling} />
      </Grid>
      <Grid item xs={12}>
      <Button
        type="button"
        variant="contained"
        color={props.color}
        onClick={handleRoll}
        disabled={isRolling}
        className={classes.button}
      >
        Roll
      </Button>
      </Grid>
    </Grid>
  );
};

export default RollDice;
