import React from 'react';
import propTypes from 'prop-types';
import '../../style.css';
import { Link } from 'react-router-dom';
import { IconHeart } from '@tabler/icons-react'
import { IconMessage } from '@tabler/icons-react'
import { IconShare } from '@tabler/icons-react'

const ItemList = ({ productos, isLoading }) => {
  if (isLoading) {
    return <h2 className="bg-info">Preparando...</h2>;
  } else {
    return (
      <>
        {productos.map((item, i) => (
          <article key={i} className="col-sm-12 col-md-6 col-lg-3 mt-3">
            <div className="card gradiente">
              <h3>{item.titulo}</h3>
              <Link to={`/item/${item.id}`}>
                <img
                  src={item.ubicacion}
                  className="imagenReceta card-img-top w-100 mx-auto p-2"
                  alt={item.alt}
                />
              </Link>
              <div className="card-body">
                <p className="precio"> Precio $ {item.precio} </p>
              </div>
              <div className="card-body">
                <IconHeart className="me-2" color="red" size={32} />
                <IconMessage className="me-2" size={32} />
                <IconShare className="me-2" color="green" size={32} />
                <p className="fs-4 fw-semibold"> {item.megusta} </p>
              </div>
              <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary me-2 mb-3">
                  Ver Producto
                </button>
              </Link>
            </div>
          </article>
        ))}
      </>
    );
  }
};

ItemList.propTypes = {
  productos: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;