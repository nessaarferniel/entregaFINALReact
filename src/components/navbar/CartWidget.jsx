import React from 'react';
import { IconShoppingCart } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const CartWidget = (props) => {
  return (
    <div className="p-2">
      <NavLink to="/cart">
        <IconShoppingCart color="white" size={48} />
      </NavLink>
    </div>
  );
};
export default CartWidget;