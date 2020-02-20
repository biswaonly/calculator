import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { EleBtn } from "../styled";
import {
  handleNumericDigits,
  handleFloatNumbers
} from "../../actions/calculate";

const BtnNumeric = ({ ele, handleNumericDigits, handleFloatNumbers }) => {
  const onClick = () => {
    if (ele === ".") {
      handleFloatNumbers();
    } else {
      handleNumericDigits(ele);
    }
  };
  return (
    <EleBtn onClick={onClick} keyType="numeric" ele={ele}>
      <h2>{ele}</h2>
    </EleBtn>
  );
};

BtnNumeric.propTypes = {
  handleNumericDigits: PropTypes.func.isRequired,
  handleFloatNumbers: PropTypes.func.isRequired
};

export default connect(
  null,
  { handleNumericDigits, handleFloatNumbers }
)(BtnNumeric);
