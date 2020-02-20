import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { EleBtn } from "../styled";
import {
  handleCompleteClear,
  handlePercentageModule,
  handlePosNeg
} from "../../actions/calculate";

const BtnExecutor = ({
  ele,
  handleCompleteClear,
  handlePercentageModule,
  handlePosNeg
}) => {
  const onClick = () => {
    if (ele === "C") {
      handleCompleteClear();
    } else if (ele === "+/-") {
      handlePosNeg();
    } else if (ele === "%") {
      handlePercentageModule();
    }
  };
  return (
    <EleBtn ele={ele} onClick={onClick} keyType="executor">
      <h2>{ele}</h2>
    </EleBtn>
  );
};

BtnExecutor.propTypes = {
  handleCompleteClear: PropTypes.func.isRequired,
  handlePosNeg: PropTypes.func.isRequired,
  handlePercentageModule: PropTypes.func.isRequired
};

export default connect(
  null,
  { handleCompleteClear, handlePosNeg, handlePercentageModule }
)(BtnExecutor);
