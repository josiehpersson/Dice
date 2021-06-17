import React, { useState, useEffect } from 'react';
import DiceSlider from './DiceSlider';
import { DICE_SIDES, DEFAULT_SLIDE_VALUES } from '../../utils/constants';
import { CREATE_DICE_ARRAY } from '../../utils/diceFunctions';

const styles = {
  container: {
    width: 600,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

const SliderContainer = (props) => {
  const [slides, setSlides] = useState(DEFAULT_SLIDE_VALUES);

  useEffect(() => {
    const diceArr = CREATE_DICE_ARRAY(slides);
    props.onChange(diceArr);
  }, []);

  const handleUpdateSlide = (value, name) => {
    setSlides({ ...slides, [name]: value });
    const diceArr = CREATE_DICE_ARRAY(slides);
    props.onChange(diceArr);
  };

  const sliders = DICE_SIDES.map((diceside) => {
    return (
      <div key={diceside} style={styles.container}>
        <label>{diceside}</label>
        <DiceSlider
          onChange={handleUpdateSlide}
          id={`slide${diceside}`}
          color={props.color}
          invertedColor={props.invertedColor}
        />
      </div>
    );
  });

  return <>{sliders}</>;
};
export default SliderContainer;
