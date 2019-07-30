import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { OutputTextField } from "../styled";

const OutputField = ({ resValue }) => {
  return (
    <OutputTextField>
      <p>{resValue}</p>
    </OutputTextField>
  );
};

OutputField.propTypes = {};

const mapStateToProps = state => ({
  resValue: state.calculate.resValue
});

export default connect(mapStateToProps)(OutputField);
