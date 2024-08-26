import {
    doc,
    getDoc,
    collection,
    getDocs,
    addDoc,
    query,
    where,
    getFirestore,
} from "firebase/firestore";



export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "alimentos", id);

        getDoc(itemDoc)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({ id: doc.id, ...doc.data() });
                } else {
                    resolve(null);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = collection(db, "alimentos");

        let q;
        if (categoryId) {
            q = query(itemCollection, where("clase", "==", categoryId));
        } else {
            q = query(itemCollection);
        }

        getDocs(q)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(products);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const crearPedido = (orden) => {
    const db = getFirestore();

    const pedido = collection(db, "ordenes");
    return addDoc(pedido, orden);
};