import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';
import { cartQuantity } from '../../services/utils';

const Total = () => {
  const { cart } = useContext(CartContext);
  const quantity = cartQuantity(cart);

  return (
    <div className="p-2">
      <p className="fs-6 fw-bolder text-white text-center ">
        {quantity > 0 ? quantity : ''}
      </p>
    </div>
  );
};
export default Total;