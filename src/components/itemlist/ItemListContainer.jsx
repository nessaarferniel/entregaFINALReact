import React from 'react';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services/services";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { clase } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setIsLoading(true);
    getProducts(clase).then((response) => {
       setItems(response);
      setIsLoading(false);
    });
  }, [clase]);

 


  return <ItemList productos={items} isLoading={isLoading} />;
};

export default ItemListContainer;