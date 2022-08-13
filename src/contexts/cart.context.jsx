import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existigCartItem = cartItems.find(item => item.id === itemToAdd.id);

  if(existigCartItem) {
    return cartItems.map(item => item.id === itemToAdd.id ? 
      {...item, quantity: item.quantity = item.quantity + 1} : item) //creating new Object because otherwise it is still the same object just with a property changed, React doenst update then
  }

  return [...cartItems, {...itemToAdd, quantity:1}] // case for new Item
} 

const removeCartItem = (cartItems, itemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (item) => item.id === itemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], 
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);


  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearCartItem(cartItems, productToRemove));
  }

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemFromCart, 
    cartItems, 
    cartCount, 
    setCartCount, 
    clearItemFromCart 
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
