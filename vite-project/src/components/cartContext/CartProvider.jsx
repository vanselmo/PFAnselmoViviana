import React, { createContext, useState } from 'react';
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        try {
            const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
            if (existingItem) {
                setCart(cart.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
                ));
            } else {
                setCart([...cart, item]);
            }
            toast.success(`Has agregado ${item.name} al carrito `);
        } catch (error) {
            toast.error(error);
            console.error("Error al agregar el artículo al carrito:", error);
        }
    };
    

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
