import {
  NUMERIC_DIGITS,
  MANEGE_OPERATORS,
  SHOW_RESULT,
  FLOAT_VALUE_CREATE,
  CHANGE_TO_POS_NEG,
  NUMERIC_DIGIT_ZERO,
  CLEAR_COMPLETELY,
  BACKSPACE_PRESSED
} from "../actions/types";

const initialState = {
  typedEquation: "",
  resValue: "",
  evalTrigger: false
};

// Get Last Non Integer
const getLastNonInteger = str => {
  let re = /[0-9]/g;
  let i = str.length - 1;
  while (i >= 0) {
    if (str[i].match(re) === null) {
      return Object.assign(
        {},
        { symbol: str[i] },
        { index: i },
        { preNum: str[i - 1] },
        { postNum: str[i + 1] }
      );
    }
    i--;
  }
  return Object.assign({}, { symbol: null }, { index: str.length - 1 });
};

// Result onChange
const resValueGenerate = str => {
  let obj = getLastNonInteger(str);
  let eVal;
  if (obj.index === str.length - 1) {
    eVal = eval(str.slice(0, str.length - 1));
  } else {
    eVal = eval(str);
  }
  return eVal;
};

// REDUCER
export default function(state = initialState, action) {
  const { type, payload } = action;
  let o = getLastNonInteger(state.typedEquation);
  let equation, result;

  switch (type) {
    /* -----NUMERIC_DIGITS----- */
    case NUMERIC_DIGITS:
      if (o.symbol === null && state.typedEquation == 0) {
        equation = payload;
      } else if (
        o.symbol !== null &&
        o.symbol !== "." &&
        state.typedEquation.slice(o.index) == 0
      ) {
        equation = state.typedEquation.slice(0, o.index + 1) + payload;
      } else {
        equation = state.typedEquation + payload;
      }
      result = state.evalTrigger && resValueGenerate(equation);
      return { ...state, typedEquation: equation, resValue: result };

    /* -----NUMERIC_DIGIT_ZERO----- */
    case NUMERIC_DIGIT_ZERO:
      if (state.typedEquation.length != 0) {
        if (o.symbol === null && state.typedEquation == 0) {
          return { ...state };
        }
        if (
          o.symbol !== null &&
          o.symbol !== "." &&
          state.typedEquation.slice(o.index) == 0
        ) {
          return { ...state };
        }
      }
      equation = state.typedEquation + "0";
      result = state.evalTrigger && resValueGenerate(equation);
      return { ...state, typedEquation: equation, resValue: result };

    /* -----MANEGE_OPERATORS----- */
    case MANEGE_OPERATORS:
      if (o.symbol !== null && o.index === state.typedEquation.length - 1) {
        equation = state.typedEquation.slice(0, o.index) + payload;
      } else {
        equation = state.typedEquation + payload;
      }
      result = state.evalTrigger && resValueGenerate(equation);
      return {
        ...state,
        typedEquation: equation,
        evalTrigger: true,
        resValue: result
      };

    /* -----SHOW_RESULT----- */
    case SHOW_RESULT:
      return { ...state, typedEquation: state.resValue, resValue: "" };

    /* -----FLOAT_VALUE_CREATE----- */
    case FLOAT_VALUE_CREATE:
      if (o.symbol === null && o.index === -1) {
        equation = "0." + state.typedEquation;
      } else if (o.symbol === null) {
        equation = state.typedEquation + ".";
      }
      if (o.symbol !== "." && o.index === state.typedEquation.length - 1) {
        equation = state.typedEquation + "0.";
      } else if (o.symbol !== ".") {
        equation = state.typedEquation + ".";
      } else {
        equation = state.typedEquation;
      }
      result = state.evalTrigger && resValueGenerate(equation);
      return { ...state, typedEquation: equation, resValue: result };

    /* -----CHANGE_TO_POS_NEG----- */
    case CHANGE_TO_POS_NEG:
      equation = state.typedEquation;
      if (o.symbol === "-") {
        if (o.index === 0) {
          equation = state.typedEquation.slice(1);
        } else {
          equation =
            state.typedEquation.slice(0, o.index) +
            "+" +
            state.typedEquation.slice(o.index + 1);
        }
      }
      if (o.symbol === "+") {
        equation =
          state.typedEquation.slice(0, o.index) +
          "-" +
          state.typedEquation.slice(o.index + 1);
      }
      if (o.symbol === "/" || o.symbol === "*") {
        equation =
          state.typedEquation.slice(0, o.index + 1) +
          "-" +
          state.typedEquation.slice(o.index + 1);
      }
      if (o.symbol === null && o.index === -1) {
        equation = "-";
      }
      if (o.symbol === null && o.index !== -1) {
        equation = "-" + state.typedEquation;
      }
      result = state.evalTrigger && resValueGenerate(equation);
      return { ...state, typedEquation: equation, resValue: result };

    /* -----CLEAR_COMPLETELY----- */
    case CLEAR_COMPLETELY:
      return { ...state, typedEquation: "", resValue: "" };

    /* -----BACKSPACE_PRESSED----- */
    case BACKSPACE_PRESSED:
      equation = state.typedEquation.slice(0, state.typedEquation.length - 1);
      result = state.evalTrigger && resValueGenerate(equation);
      return { ...state, typedEquation: equation, resValue: result };

    default:
      return state;
  }
}
