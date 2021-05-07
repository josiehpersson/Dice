export function outcomes(state = { outcomes: [] }, action) {
  if (action.type === 'CREATE_OUTCOME') {
    const tempArr = [...state.outcomes];

    tempArr.splice(0, 0, action.payload);

    return {
      ...state,
      outcomes: tempArr,
    };
  }
  if(action.type === 'CREATE_DICE_ARR'){
    return {diceArray: action.payload}
  }

  return state;
}
