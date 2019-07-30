import React from "react";
import PropTypes from "prop-types";
import { EleBtn } from "../styled";
import {
  showResult,
  handleNumberZero,
  handleFloatNumbers,
  handlePosNeg
} from "../../actions/calculate";
import { connect } from "react-redux";

const CalculateResult = ({
  ele,
  handleNumberZero,
  showResult,
  handleFloatNumbers,
  handlePosNeg
}) => {
  const onClick = () => {
    if (ele == "=") {
      showResult();
    } else if (ele == "0") {
      handleNumberZero(ele);
    } else if (ele == ".") {
      handleFloatNumbers();
    } else if (ele == "+/-") {
      handlePosNeg(ele);
    }
  };
  return (
    <EleBtn onClick={onClick} ele={ele}>
      <h1>{ele}</h1>
    </EleBtn>
  );
};

CalculateResult.propTypes = {
  showResult: PropTypes.func.isRequired,
  handleFloatNumbers: PropTypes.func.isRequired,
  handleFloatNumbers: PropTypes.func.isRequired,
  handlePosNeg: PropTypes.func.isRequired
};

export default connect(
  null,
  { showResult, handleNumberZero, handleFloatNumbers, handlePosNeg }
)(CalculateResult);
