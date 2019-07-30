import React from "react";
import PropTypes from "prop-types";
import { InputTextField } from "../styled";
import { connect } from "react-redux";

const InputField = ({ typedEquation }) => {
  return (
    <InputTextField>
      <p>{typedEquation}</p>
    </InputTextField>
  );
};

InputField.propTypes = {};

const mapStateToProps = state => ({
  typedEquation: state.calculate.typedEquation
});

export default connect(
  mapStateToProps,
  {}
)(InputField);
