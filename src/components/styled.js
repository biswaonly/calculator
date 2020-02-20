import styled, { css } from "styled-components";

export const MainDiv = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  box-shadow: 0px 0px 10px 1px darkgray;
  border-radius: 5px;
  overflow: hidden;
`;

/* -----BUTTONS----- */
const basedStyle = css`
  display: grid;
  grid-gap: 1px;
  background-color: #444444;
`;
export const BtnArea = styled.div`
  display: grid;
  grid-template-areas:
    "clear-g clear-g clear-g operator-g"
    "number-g number-g number-g operator-g"
    "zero-g zero-g result-g operator-g";
`;
export const BtnNumbers = styled.div`
  border-top: 1px solid #444444;
  border-bottom: 1px solid #444444;
  grid-area: number-g;
  grid-template-areas: "auto auto auto";
  ${basedStyle}
`;
export const BtnOperators = styled.div`
  grid-area: operator-g;
  grid-template-areas: "auto";
  border-left: 1px solid #444444;
  ${basedStyle}
`;
export const BtnClear = styled.div`
  grid-area: clear-g;
  grid-template-areas: "auto auto auto";
  ${basedStyle}
`;
export const BtnResult = styled.div`
  border-left: 1px solid #444444;

  grid-area: result-g;
  grid-template-areas: "auto";
  ${basedStyle}
`;
export const BtnZeroDiv = styled.div`
  grid-area: zero-g;
  grid-template-areas: "auto";
  ${basedStyle}
`;
export const EleBtn = styled.div`
  background-color: ${props =>
    (props.keyType === "numeric" && "#8a8a8a") ||
    (props.keyType === "operators" && "#fc9f0d") ||
    (props.keyType === "executor" && "#656565")};
  cursor: pointer;
  border: ${props =>
    (props.keyType === "operators" &&
      props.isActive === props.ele &&
      "2px solid #444444") ||
    "2px solid transparent"};
  h2 {
    color: white;
    width: ${props => (props.ele === "0" && "85px") || "40px"};
    height: "30px";
    margin: 12px auto;
    user-select: none;
    font-weight: 400;
  }
`;

/* -----RESULTS----- */
export const ResultDiv = styled.div`
  background-color: lavender;
`;
export const InputTextField = styled.div`
  background-color: #444444;
  border-bottom: 1px solid #444444;
  height: 100px;
  width: 300px;
  position: relative;
  cursor: default;
  user-select: none;
  p {
    font-size: 50px;
    font-weight: 300;
    color: white;
    bottom: 5px;
    right: 10px;
    position: absolute;
  }
`;
