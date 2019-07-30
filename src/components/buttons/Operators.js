import React from "react";
import PropTypes from "prop-types";
import { EleBtn } from "../styled";
import { handleOperators } from "../../actions/calculate";
import { connect } from "react-redux";

const Operators = ({ ele, handleOperators, typedEquation }) => {
  const onClick = () => {
    typedEquation.length && handleOperators(ele);
  };
  return (
    <EleBtn onClick={onClick} style={{ color: "darkblue" }}>
      <h1>{ele}</h1>
    </EleBtn>
  );
};

Operators.propTypes = {
  handleOperators: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  typedEquation: state.calculate.typedEquation
});

export default connect(
  mapStateToProps,
  { handleOperators }
)(Operators);
