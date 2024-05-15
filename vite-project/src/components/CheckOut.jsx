import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './cartContext/CartProvider';
import { createOrder } from '../utils';
import { toast } from "react-toastify";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newOrderId = await createOrder(formData, cart, calculateTotal());
      clearCart();
      toast.success(`¡Orden creada con éxito! ID de orden: ${newOrderId}`);
      navigate('/');
    } catch (error) {
      toast.error('Ocurrió un error al crear la orden. Por favor, inténtalo de nuevo.');
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.quantity * item.price), 0);
  };

  const isCartEmpty = cart.length === 0;

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <h2 className="text-2xl font-semibold mb-4">Resumen del carrito</h2>
      <div className="border border-gray-300 rounded-md p-4 mb-4">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between mb-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.quantity * item.price}</span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block">Nombre:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block">Apellido:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="phone" className="block">Teléfono:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="email" className="block">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
        </div>
        <div>
          <label htmlFor="confirmEmail" className="block">Confirmar Email:</label>
          <input type="email" id="confirmEmail" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2 w-full" required />
        </div>
        <button type="submit" className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ${isCartEmpty && 'opacity-50 cursor-not-allowed'}`} disabled={isCartEmpty}>Realizar compra</button>
      </form>
    </div>
  );
}

export default Checkout;
