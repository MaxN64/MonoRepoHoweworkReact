import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        "https://682d82ec4fae188947564789.mockapi.io/cart"
      );
      setCartItems(response.data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

 
  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "https://682d82ec4fae188947564789.mockapi.io/cart",
        product
      );
      setCartItems((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    }
  };

  
  const deleteFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://682d82ec4fae188947564789.mockapi.io/cart/${productId}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Failed to delete from cart:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider
      value={{ cartItems, fetchCartItems, addToCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
