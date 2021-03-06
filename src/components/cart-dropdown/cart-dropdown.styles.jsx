import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }
  &::-webkit-scrollbar-track {
    border-radius: 50px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background-color: black;
  }
  &::-webkit-scrollbar-button {
    visibility: hidden;
  }
`;

export const Message = styled.span`
  font-size: 18px;
  margin: 5px auto;
`;
