import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

function Item({ meal }) {
    return (
        <div className="bg-white border-2 border-gray-100 rounded-lg p-4 hover:scale-105 transition text-center">
            <img className='mb-4 rounded-lg' src={meal.thumbnail} alt={meal.name} />
            <h2 className='my-2 font-bold text-sm text-center'>{meal.name}</h2>
            <p className='text-center mb-2'>Precio: ${meal.price}</p>
            <div className='flex items-center justify-center gap-x-2'>
                <Link to={`/item/${meal.id}`}>
                    <Button>Ver más</Button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
