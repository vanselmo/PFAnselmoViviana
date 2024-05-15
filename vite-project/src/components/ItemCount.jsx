import React, { useState } from 'react';

function ItemCount({ initialQuantity, onQuantityChange }) {
    const [quantity, setQuantity] = useState(initialQuantity);

    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <button onClick={decrementQuantity} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg mr-2">-</button>
            <span className="text-xl">{quantity}</span>
            <button onClick={incrementQuantity} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg ml-2">+</button>
        </div>
    );
}

export default ItemCount;
