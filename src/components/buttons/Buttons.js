import React, { useState } from "react";

import {
  BtnArea,
  BtnNumbers,
  BtnOperators,
  BtnClear,
  BtnResult,
  BtnZeroDiv
} from "../styled";
import BtnNumeric from "./BtnNumeric";
import BtnOperator from "./BtnOperator";
import BtnExecutor from "./BtnExecutor";

const Buttons = () => {
  const [isActive, setIsActive] = useState(false);

  const num = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  const ope = ["/", "*", "-", "+", "="];
  const exe = ["C", "+/-", "%"];
  const flo = ["."];
  const zro = ["0"];

  return (
    <BtnArea onClick={() => setIsActive("")}>
      <BtnNumbers>
        {num.map(e => (
          <BtnNumeric ele={e} key={e} />
        ))}
      </BtnNumbers>
      <BtnOperators>
        {ope.map(e => (
          <BtnOperator
            ele={e}
            key={e}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </BtnOperators>
      <BtnClear>
        {exe.map(e => (
          <BtnExecutor ele={e} key={e} />
        ))}
      </BtnClear>
      <BtnResult>
        {flo.map(e => (
          <BtnNumeric ele={e} key={e} />
        ))}
      </BtnResult>
      <BtnZeroDiv>
        {zro.map(e => (
          <BtnNumeric ele={e} key={e} />
        ))}
      </BtnZeroDiv>
    </BtnArea>
  );
};

export default Buttons;
