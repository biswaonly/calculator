import React from "react";
import PropTypes from "prop-types";
import { EleBtn } from "../styled";
import { handleNumericDigits } from "../../actions/calculate";
import { connect } from "react-redux";

const Numbers = ({ ele, handleNumericDigits }) => {
  const onClick = () => {
    handleNumericDigits(ele);
  };
  return (
    <EleBtn onClick={onClick}>
      <h1>{ele}</h1>
    </EleBtn>
  );
};

Numbers.propTypes = { handleNumericDigits: PropTypes.func.isRequired };

export default connect(
  null,
  { handleNumericDigits }
)(Numbers);
