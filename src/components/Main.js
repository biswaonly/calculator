import React from "react";

import { MainDiv } from "./styled";
import InputField from "./results/InputField";
import Buttons from "./buttons/Buttons";

const Main = () => {
  return (
    <MainDiv>
      <InputField />
      <Buttons />
    </MainDiv>
  );
};

Main.propTypes = {};

export default Main;
