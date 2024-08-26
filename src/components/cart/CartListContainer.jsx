import React from 'react';
import CheckOut from './CheckOut.jsx';
import { useContext } from "react";
import CartContext from "../context/CartContext";


const CartListContainer = () => {
  const contexto= useContext(CartContext);

  return <CheckOut productos={contexto.cart} />;
};

export default CartListContainer;