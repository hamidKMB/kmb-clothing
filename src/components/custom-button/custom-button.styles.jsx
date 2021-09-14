import styled, { css } from "styled-components";

const BaseButton = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoogleSignIn = css`
  background-color: #4285f4;
  color: #fff;
  &:hover {
    background-color: #357ae8;
  }
`;

const Inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const detectTypeOfButton = ({ inverted, IsGoogleSignIn }) => {
  if (IsGoogleSignIn) {
    return GoogleSignIn;
  }

  return inverted ? Inverted : BaseButton;
};

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${(props) => detectTypeOfButton(props)}
`;
