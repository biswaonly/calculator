import styled, { css } from "styled-components";

export const MainDiv = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid darkgray;
  box-shadow: 0px 0px 9px 2px darkgray;
`;

/* -----BUTTONS----- */
const basedStyle = css`
  background-color: whitesmoke;
  display: grid;
`;
export const BtnArea = styled.div`
  display: grid;
  border: 0.09rem solid gray;
  grid-template-areas:
    "clear-g clear-g clear-g operator-g"
    "number-g number-g number-g operator-g"
    "result-g result-g result-g result-g";
`;
export const BtnNumbers = styled.div`
  grid-area: number-g;
  grid-template-areas: "auto auto auto";
  ${basedStyle}
`;
export const BtnOperators = styled.div`
  grid-area: operator-g;
  grid-template-areas: "auto";
  ${basedStyle}
`;
export const BtnClear = styled.div`
  grid-area: clear-g;
  grid-template-areas: "auto auto auto";
  ${basedStyle}
`;
export const BtnResult = styled.div`
  grid-area: result-g;
  grid-template-areas: "auto auto auto auto";
  ${basedStyle}
`;
export const EleBtn = styled.div`
  border: 0.09rem solid gray;
  background-color: ${props => props.ele == "=" && "darkblue"};
  cursor: pointer;
  h1 {
    color: ${props =>
      ((props.ele == "C" || props.ele == "CE") && "red") ||
      (props.ele == "=" && "white")};
    width: 50px;
    height: 40px;
    margin: 12px auto;
    user-select: none;
  }
`;

/* -----RESULTS----- */
export const ResultDiv = styled.div`
  background-color: lavender;
`;
export const InputTextField = styled.div`
  height: 50px;
  width: 440px;
  position: relative;
  p {
    font-size: 20px;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    position: absolute;
  }
`;
export const OutputTextField = styled.div`
  height: 50px;
  width: 440px;
  position: relative;
  p {
    font-size: 40px;
    font-weight: 600;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    position: absolute;
  }
`;
