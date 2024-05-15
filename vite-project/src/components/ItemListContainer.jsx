import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems, getItemsFromCategories } from '../utils.js';
import Item from './Item.jsx';
import { toast } from "react-toastify";

function ItemListContainer() {
    const params = useParams();
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Comidas");

    useEffect(() => {
        if (params.category) {
            getItemsFromCategories(params.category)
                .then((resultado) => {
                    setMeals(resultado);
                    setLoading(false);
                    setTitle(getCategoryTitle(params.category));
                })
                .catch((error) => {
                    toast.error(error);
                    console.error('Error al obtener los productos:', error);
                    setLoading(false);
                });
        } else {
            getItems()
                .then((resultado) => {
                    setMeals(resultado);
                    setLoading(false);
                    setTitle(getCategoryTitle(params.category));
                })
                .catch((error) => {
                    toast.error(error);
                    console.error('Error al obtener los productos:', error);
                    setLoading(false);
                });
        }

    }, [params.category]);

    const getCategoryTitle = (category) => {
        switch (category) {
            case 'vegan':
                return 'Veganas';
            case 'glutenfree':
                return 'Sin Gluten';
            default:
                return 'Comidas';
        }
    };

    return (
        <div>
            <h1>{title}</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {meals.map((meal) => (
                        <Item key={meal.id} meal={meal} />
                    ))}
                </section>
            )}
        </div>
    );
}

export default ItemListContainer;
