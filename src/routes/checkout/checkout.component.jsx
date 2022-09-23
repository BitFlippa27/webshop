import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import { 
  CheckoutContainer, 
  CheckoutHeader, 
  TotalPrice,
  HeaderBlock 
} from "./checkout.styles";


const Checkout = () => {
  //const { cartItems, totalPrice } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems  = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
        <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
        <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
        <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
        <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
        {cartItems.map(item => 
          <CheckoutItem key={item.id} cartItem={item}/>
        )}
      <TotalPrice>${totalPrice}</TotalPrice>
      <PaymentForm />
    </CheckoutContainer>
  
  )
}

export default Checkout;