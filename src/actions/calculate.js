import {
  NUMERIC_DIGITS,
  NUMERIC_DIGIT_ZERO,
  MANEGE_OPERATORS,
  SHOW_RESULT,
  FLOAT_VALUE_CREATE,
  CHANGE_TO_POS_NEG,
  CLEAR_COMPLETELY,
  BACKSPACE_PRESSED
} from "./types";

export const handleNumericDigits = value => dispatch => {
  dispatch({
    type: NUMERIC_DIGITS,
    payload: value
  });
};
export const handleNumberZero = () => dispatch => {
  dispatch({
    type: NUMERIC_DIGIT_ZERO
  });
};
export const handleOperators = value => dispatch => {
  dispatch({
    type: MANEGE_OPERATORS,
    payload: value
  });
};

export const showResult = value => dispatch => {
  dispatch({
    type: SHOW_RESULT
  });
};

export const handleFloatNumbers = () => dispatch => {
  dispatch({
    type: FLOAT_VALUE_CREATE
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

export const handleBackSpace = () => dispatch => {
  dispatch({
    type: BACKSPACE_PRESSED
  });
};
