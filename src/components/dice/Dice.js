import React from 'react';
import { rubberBand, bounce, merge } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { GET_DICE } from '../../utils/diceFunctions';

const rubberBounce = merge(rubberBand, bounce);

const styles = {
  dice: {
    height: 100,
  },
  rubberBounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rubberBounce, 'rubberBounce'),
  },
};

const Dice = (props) => {
  const dice = GET_DICE(props.dice);

  return (
    <StyleRoot>
      <img
        src={dice}
        alt={`Dice face number ${props.dice}`}
        style={[props.isRolling ? styles.rubberBounce : null, styles.dice]}
      />
    </StyleRoot>
  );
};
export default Dice;
