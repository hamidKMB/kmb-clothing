import styled, { css } from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

const StyledButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

const Images = css`
  width: 100%;
  height: 92%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionItemsContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${Images} {
      opacity: 0.8;
    }
    ${StyledButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Image = styled.div`
  ${Images}
`;

export const StyledCustomButton = StyledButton;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
