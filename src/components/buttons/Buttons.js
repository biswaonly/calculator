import React from "react";
import PropTypes from "prop-types";
import Numbers from "./Numbers";
import {
  BtnArea,
  BtnNumbers,
  BtnOperators,
  BtnClear,
  BtnResult
} from "../styled";
import Operators from "./Operators";
import CleanNClear from "./CleanNClear";
import CalculateResult from "./CalculateResult";

const Buttons = () => {
  const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const ope = ["/", "*", "-", "+"];
  const cle = ["CE", "C", "%"];
  const res = ["+/-", "0", ".", "="];

  return (
    <BtnArea>
      <BtnNumbers>
        {num.map(e => (
          <Numbers ele={e} key={e} />
        ))}
      </BtnNumbers>
      <BtnOperators>
        {ope.map(e => (
          <Operators ele={e} key={e} />
        ))}
      </BtnOperators>
      <BtnClear>
        {cle.map(e => (
          <CleanNClear ele={e} key={e} />
        ))}
      </BtnClear>
      <BtnResult>
        {res.map(e => (
          <CalculateResult ele={e} key={e} />
        ))}
      </BtnResult>
    </BtnArea>
  );
};

Buttons.propTypes = {};

export default Buttons;
