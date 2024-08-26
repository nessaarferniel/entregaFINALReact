import React from 'react';
import { useState, useEffect } from 'react';
import CartContext from './CartContext.js';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const addItem = (producto) => {
    const itemInCart = cart.find((item) => item.id === producto.id);
    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad = item.cantidad + 1;
          return {
            ...item,
          };
        }

        return item;
      });
      setCart(newCart);
    } else {
      producto.cantidad = producto.cantidad + 1;
      setCart([...cart, producto]);
    }
  };

  const menos = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.cantidad > 0) {
        item.cantidad = item.cantidad - 1;
        return {
          ...item,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const mas = (id) => {
    const newCart = cart.map((item) => {
      console.log(item);
      if (item.cantidad < item.inventario) {
        if (item.id === id) {
          item.cantidad = item.cantidad + 1;
          return {
            ...item,
          };
        }
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, mas, menos }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;