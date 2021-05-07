export function createOutcome(dice) {
  return {
    type: 'CREATE_OUTCOME',
    payload: dice,
  };
}

export function createDiceArray(diceArr) {
  return {
    type: 'CREATE_DICE_ARR',
    payload: {
      diceArr,
    }
  }
}