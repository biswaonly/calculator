import {
  NUMERIC_DIGITS,
  MANEGE_OPERATORS,
  FLOAT_VALUE_CREATE,
  CHANGE_TO_POS_NEG,
  CLEAR_COMPLETELY,
  PERCENTAGE_MODULE
} from "./types";

export const handleNumericDigits = value => dispatch => {
  dispatch({
    type: NUMERIC_DIGITS,
    payload: value
  });
};
export const handleFloatNumbers = () => dispatch => {
  dispatch({
    type: FLOAT_VALUE_CREATE
  });
};
export const handleOperators = value => dispatch => {
  dispatch({
    type: MANEGE_OPERATORS,
    payload: value
  });
};
export const handlePosNeg = value => dispatch => {
  dispatch({
    type: CHANGE_TO_POS_NEG,
    payload: value
  });
};
export const handleCompleteClear = () => dispatch => {
  dispatch({
    type: CLEAR_COMPLETELY
  });
};
export const handlePercentageModule = () => dispatch => {
  dispatch({
    type: PERCENTAGE_MODULE
  });
};
