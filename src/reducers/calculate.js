import {
  NUMERIC_DIGITS,
  MANEGE_OPERATORS,
  FLOAT_VALUE_CREATE,
  CHANGE_TO_POS_NEG,
  CLEAR_COMPLETELY,
  PERCENTAGE_MODULE
} from "../actions/types";

const initialState = {
  currentDigit: "",
  stack: [],
  previousDigit: ""
};

const postfixOperation = (ope, pv, cv) => {
  switch (ope) {
    case "+":
      return parseFloat(pv) + parseFloat(cv) + "";
    case "-":
      return parseFloat(pv) - parseFloat(cv) + "";
    case "*":
      return parseFloat(pv) * parseFloat(cv) + "";
    case "/":
      return parseFloat(pv) / parseFloat(cv) + "";
    default:
      return "0";
  }
};

// REDUCER
export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case NUMERIC_DIGITS:
      return {
        ...state,
        currentDigit:
          state.currentDigit === "0" ? payload : state.currentDigit + payload
      };

    case FLOAT_VALUE_CREATE:
      return {
        ...state,
        currentDigit:
          (state.currentDigit.includes(".") && state.currentDigit) ||
          (!state.currentDigit.includes(".") && state.currentDigit === ""
            ? "0."
            : state.currentDigit + ".")
      };

    case MANEGE_OPERATORS:
      if (state.stack.length === 0 && state.currentDigit.length !== 0) {
        return {
          ...state,
          stack: [payload],
          previousDigit: state.currentDigit,
          currentDigit: ""
        };
      } else if (state.stack.length === 0 && state.currentDigit.length === 0) {
        return {
          ...state,
          stack: [payload],
          previousDigit: "0",
          currentDigit: ""
        };
      } else if (state.stack.length !== 0 && state.currentDigit.length !== 0) {
        let res = postfixOperation(
          state.stack[0],
          state.previousDigit,
          state.currentDigit
        );
        return {
          ...state,
          currentDigit: "",
          previousDigit: res,
          stack: [payload]
        };
      } else if (state.stack.length !== 0 && state.currentDigit.length === 0) {
        return { ...state, stack: [payload] };
      }
      return state;

    case CHANGE_TO_POS_NEG:
      if (state.currentDigit.length === 0) {
        // state.currentDigit = "0";
        return {
          ...state,
          previousDigit: !isNaN(state.previousDigit[0])
            ? "-" + state.previousDigit
            : state.previousDigit.substring(1)
        };
      } else if (state.currentDigit !== "0") {
        return {
          ...state,
          currentDigit: !isNaN(state.currentDigit[0])
            ? "-" + state.currentDigit
            : state.currentDigit.substring(1)
        };
      }
      return state;
    case CLEAR_COMPLETELY:
      return { currentDigit: "", stack: [], previousDigit: "" };

    case PERCENTAGE_MODULE:
      return {
        ...state,
        previousDigit: "",
        currentDigit:
          (state.previousDigit &&
            (state.previousDigit * state.currentDigit) / 100) ||
          state.currentDigit / 100
      };

    default:
      return state;
  }
}
