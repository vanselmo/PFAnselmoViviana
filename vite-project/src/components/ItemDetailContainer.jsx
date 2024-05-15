import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemDetail } from '../utils';
import ItemDetail from './ItemDetail.jsx'; 
import { toast } from "react-toastify";

function ItemDetailContainer() {
    const { foodId } = useParams();
    const [mealDetail, setMealDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getItemDetail(foodId)
            .then((resultado) => {
                if (resultado) {
                    setMealDetail(resultado);
                    setLoading(false);
                } else {
                    setError(true); 
                    setLoading(false);
                }
            })
            .catch((error) => {
                toast.error(error);
                console.log("Error al obtener el detalle del artículo:", error);
                setError(true); 
                setLoading(false);
            });
    }, [foodId]);

    return (
        <div className="flex justify-center">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md w-full">
                {loading ? (
                    <p className="p-4 text-center">Cargando...</p>
                ) : error ? (
                    <p className="p-4 text-center text-red-500">No se encontró el artículo.</p>
                ) : (
                    <ItemDetail mealDetail={mealDetail} />
                )}
            </div>
        </div>
    );
}

export default ItemDetailContainer;
