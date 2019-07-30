import React from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";
import OutputField from "./OutputField";
import { ResultDiv } from "../styled";

const Results = () => {
  return (
    <ResultDiv>
      <InputField />
      <OutputField />
    </ResultDiv>
  );
};

Results.propTypes = {};

export default Results;
