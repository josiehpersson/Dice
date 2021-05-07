import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: (props) => props.color,
    color: (props) => props.invertedColor,
    width: 100,
    padding: 4,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  const classes = useStyles(props);
  const countRef = useRef(null);
//kan funka med vanlig const istället för ref
  useEffect(() => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(countRef.current);
    };
  }, []);

  //pad start, pad end
  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className={classes.container}>
      <p>{formatTime()}</p>
    </div>
  );
};

export default Timer;
