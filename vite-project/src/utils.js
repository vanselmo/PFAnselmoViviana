import { app } from './firebase.js';
import { getFirestore, collection, getDocs, query, where, getDoc, doc, Timestamp, addDoc } from 'firebase/firestore';


export const getItems = () => {
    const db = getFirestore(app)
    const itemsCollection = collection(db, 'items')
    const consulta = getDocs(itemsCollection)

    return consulta
        .then((resultado) => {
            const productos = resultado.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id
                return producto
            })
            return productos
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getItemsFromCategories = (category) => {
    const db = getFirestore(app);
    const itemsCollection = collection(db, "items");
    const filtro = query(itemsCollection, where("category", "==", category));
    const consulta = getDocs(filtro)

    return consulta
        .then((resultado) => {
            const productos = resultado.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id
                return producto
            })
            return productos
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getItemDetail = (foodId) => {
    const db = getFirestore(app);
    const itemsCollection = collection(db, "items");
    const filtro = doc(itemsCollection, foodId);
    const consulta = getDoc(filtro);

    return consulta
    .then((resultado) => {
        if (resultado.exists()) {
            const producto = resultado.data()
            producto.id = resultado.id
            return producto
        } else {
            return null; // Retorna null en lugar de lanzar un error
        }
    })
    .catch((error) => {
        console.log(error)
        throw error;
    })
}

export const createOrder = async (formData, cart, total) => {
    const db = getFirestore(app);
    const ordersCollection = collection(db, 'orders');

    try {
        const newOrderRef = await addDoc(ordersCollection, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date()), 
            status: 'generada'
        });
        return newOrderRef.id;
    } catch (error) {
        console.error('Error creando la orden:', error);
        throw new Error('No se pudo crear la orden');
    }
};
