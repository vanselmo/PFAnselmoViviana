import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './cartContext/CartProvider';

function CartWidget() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0); 
  return (
    <div className="flex items-center">
      <Link to="/cart">
        <ShoppingCartOutlined className="text-2xl text-black" />
        <span className="ml-1">
          {totalItems} (${totalPrice.toFixed(2)}) 
        </span>
      </Link>
    </div>
  );
}

export default CartWidget;
