import Dice2 from '../media/dices/dice_2.svg';
import Dice3 from '../media/dices/dice_3.svg';
import Dice4 from '../media/dices/dice_4.svg';
import Dice5 from '../media/dices/dice_5.svg';
import Dice6 from '../media/dices/dice_6.svg';
import Dice1 from '../media/dices/dice_1.svg';

const testArr = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 6, 6, 6, 6];
const testNum = 6;

export const GET_DICE = (dice) => {
  if (dice === 1) {
    return Dice1;
  } else if (dice === 2) {
    return Dice2;
  } else if (dice === 3) {
    return Dice3;
  } else if (dice === 4) {
    return Dice4;
  } else if (dice === 5) {
    return Dice5;
  } else if (dice === 6) {
    return Dice6;
  } else {
    console.log('Invalid number provided to getDice');
  }
};

const CREATE_ARRAY_NUMBERS = (slide, number) => {
  const diceArr = [];
  for (let i = 0; i < slide; i++) {
    diceArr.push(number);
  }

  return diceArr;
};

export const CREATE_DICE_ARRAY = (values) => {
  const { slide1, slide2, slide3, slide4, slide5, slide6 } = values;
  const diceArr = [
    ...CREATE_ARRAY_NUMBERS(slide1, 1),
    ...CREATE_ARRAY_NUMBERS(slide2, 2),
    ...CREATE_ARRAY_NUMBERS(slide3, 3),
    ...CREATE_ARRAY_NUMBERS(slide4, 4),
    ...CREATE_ARRAY_NUMBERS(slide5, 5),
    ...CREATE_ARRAY_NUMBERS(slide6, 6),
  ];
  return diceArr;
};

export const GET_NUMBER_ROLLS = (arr, number) => {
  const findNum = arr.filter((num) => num === number);
  return findNum.length;
};


export const GET_ROLL_PERCENTAGE = (arr, number) => {
  const findNum = arr.filter((num) => num === number);
  const calculatePercentage = findNum.length / arr.length;
  const percentageString = `${calculatePercentage}`.slice(2, 4);
  let displayPercentage;

  if (percentageString.length === 1) {
    displayPercentage = `${percentageString}0 %`;
  } else if (percentageString === isNaN || percentageString === undefined) {
    displayPercentage = '0 %';
  } else {
    displayPercentage = `${percentageString} %`;
  }

  return displayPercentage;
};
