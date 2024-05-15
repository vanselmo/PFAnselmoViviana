import React, { useContext } from 'react';
import { CartContext } from './cartContext/CartProvider';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, clearCart, removeItemFromCart } = useContext(CartContext);

    const handleRemoveItem = (itemName) => {
        removeItemFromCart(itemName);
    };

    const total = cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-b border-gray-300 py-2">
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio unitario: ${item.price}</p>
                                <p>Subtotal: ${item.quantity * item.price}</p>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)}>&times;</button>
                        </div>
                    ))}
                    <div className="mt-4 text-right">
                        <p className="font-bold">Total: ${total}</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Limpiar carrito</button>
                        <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Ir al checkout</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
