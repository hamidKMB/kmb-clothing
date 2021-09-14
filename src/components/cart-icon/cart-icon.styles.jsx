import styled from "styled-components";

import { ReactComponent as Shopping } from "./11.2 shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingLogo = styled(Shopping)`
  width: 24px;
  height: 24px;
`;

export const CartItemsCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
