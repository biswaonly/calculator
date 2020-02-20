import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { EleBtn } from "../styled";
import { handleOperators } from "../../actions/calculate";

const BtnOperator = ({ ele, handleOperators, isActive, setIsActive }) => {
  const onClick = e => {
    e.stopPropagation();
    handleOperators(ele);
    ele === "=" ? setIsActive("") : setIsActive(ele);
  };
  return (
    <EleBtn onClick={onClick} keyType="operators" isActive={isActive} ele={ele}>
      <h2>{ele}</h2>
    </EleBtn>
  );
};

BtnOperator.propTypes = {
  handleOperators: PropTypes.func.isRequired
};

export default connect(
  null,
  { handleOperators }
)(BtnOperator);
