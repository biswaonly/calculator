import React from "react";
import { connect } from "react-redux";

import { InputTextField } from "../styled";

const InputField = ({ currentDigit, previousDigit }) => {
  return (
    <InputTextField>
      <p>
        {!currentDigit && previousDigit
          ? previousDigit
          : currentDigit || (!currentDigit && !previousDigit && "0")}
      </p>
    </InputTextField>
  );
};

const mapStateToProps = state => ({
  currentDigit: state.calculate.currentDigit,
  previousDigit: state.calculate.previousDigit
});

export default connect(mapStateToProps)(InputField);
