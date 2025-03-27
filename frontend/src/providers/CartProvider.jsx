"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

function CartProvider({ children }) {
  // Initialize state with a function to avoid hydration issues
  const [cart, setCart] = useState(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
          return [];
        }
      }
    }
    return []; // Default to empty array
  });

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Calculate total items and price
    const itemCount = cart.length;
    const price = cart.reduce(
      (total, item) => total + (parseFloat(item.price) || 0),
      0
    );

    setTotalItems(itemCount);
    setTotalPrice(price);
  }, [cart]);

  // Add item to cart
  const addToCart = (course) => {
    // Check if the course is already in the cart
    const courseExists = cart.find((item) => item.id === course.id);

    if (!courseExists) {
      setCart([...cart, course]);
    }
  };

  // Remove item from cart
  const removeFromCart = (courseId) => {
    setCart(cart.filter((item) => item.id !== courseId));
  };

  // Check if an item is in cart
  const isInCart = (courseId) => {
    return cart.some((item) => item.id === courseId);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    isInCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartProvider;
