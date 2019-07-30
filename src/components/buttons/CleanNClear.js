import React from "react";
import PropTypes from "prop-types";
import { EleBtn } from "../styled";
import { handleCompleteClear, handleBackSpace } from "../../actions/calculate";
import { connect } from "react-redux";

const CleanNClear = ({ ele, handleCompleteClear, handleBackSpace }) => {
  const onClick = () => {
    if (ele == "CE") {
      handleCompleteClear();
    } else if (ele == "C") {
      handleBackSpace();
    }
  };
  return (
    <EleBtn ele={ele} onClick={onClick}>
      <h1>{ele}</h1>
    </EleBtn>
  );
};

CleanNClear.propTypes = {
  handleCompleteClear: PropTypes.func.isRequired,
  handleBackSpace: PropTypes.func.isRequired
};

export default connect(
  null,
  { handleCompleteClear, handleBackSpace }
)(CleanNClear);
