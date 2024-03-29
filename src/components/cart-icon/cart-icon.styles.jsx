import styled from "styled-components";
import { ReactComponent as ShoppingItem} from "../../assets/cart-icon.svg";

export const ShoppingIcon = styled(ShoppingItem)`
  width: 24px;
  height: 24px;
`

export const CartIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`



/*
.cart-icon-container {
  

  .shopping-icon {
    
  }

  .item-count {
  
  }
}
*/