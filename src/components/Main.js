import React from "react";
import PropTypes from "prop-types";
import Buttons from "./buttons/Buttons";
import Results from "./results/Results";
import { MainDiv } from "./styled";

const Main = props => {
  return (
    <MainDiv>
      <Results />
      <Buttons />
    </MainDiv>
  );
};

Main.propTypes = {};

export default Main;
