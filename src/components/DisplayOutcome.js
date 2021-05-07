import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    fontSize: 24,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    width: 800,
    height: 40,
    backgroundColor: (props) => props.color,
    color: (props) => props.invertedColor,
    overflowX: 'clip',
  },
});

const DisplayOutcome = (props) => {
  const classes = useStyles(props);
  const showOutcome = props.outcomes.map((outcome, index) => {
    let fontStyle;

    if (index === 0) {
      fontStyle = 900;
    } else {
      fontStyle = 400;
    }
    return (
      <p
        key={index}
        style={{ fontWeight: `${fontStyle}`, marginRight: 8, marginLeft: 8 }}
      >
        {outcome}
      </p>
    );
  });

  return (
    <>
      <div className={classes.container}>{showOutcome}</div>
    </>
  );
};

export default DisplayOutcome;
