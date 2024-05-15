import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './cartContext/CartProvider';

function ItemDetail({ mealDetail }) {
    const { addItemToCart } = useContext(CartContext);
    const [quantityToAdd, setQuantityToAdd] = useState(1);

    const handleAddToCart = () => {
        addItemToCart({ ...mealDetail, quantity: quantityToAdd });
        
    };

    const handleQuantityChange = (newQuantity) => {
        setQuantityToAdd(newQuantity);
    };

    return (
        <div>
            <img className="w-full object-cover" src={mealDetail.photo} alt="Imagen de comida" />
            <div className="p-4">
                <h1 className="text-2xl font-semibold mb-2">{mealDetail.name}</h1>
                <p className="text-gray-700 mb-2">Desciprcion: {mealDetail.description}</p>
                <p className="text-gray-700 mb-2 font-bold">Precio: ${mealDetail.price}</p>
                <ItemCount initialQuantity={1} onQuantityChange={handleQuantityChange} />
                <div className="flex justify-center">
                    <button onClick={handleAddToCart} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
