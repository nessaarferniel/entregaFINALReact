import React from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from "../../services/services";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setItem(response);
      })
      .catch(() => {
        setItem(null);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [id]);


  return (
    <>
      {isLoading && <h2 className="bg-info" >Preparando... </h2>}
      {!isLoading && !item && <h2 className="bg-info" >Alimento no encontrado </h2>}
      {!isLoading && item && <ItemDetail producto={item} />}
    </>
  );
};

export default ItemDetailContainer;