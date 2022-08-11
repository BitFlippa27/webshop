import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existigCartItem = cartItems.find(item => item.id === productToAdd.id);

  if(existigCartItem) {
    return cartItems.map(item => item.id === productToAdd.id ? 
      {...item, quantity: item.quantity++} : item)
  }

  return [...cartItems, {...productToAdd, quantity:1}] // case for new Item
} 

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], 
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
