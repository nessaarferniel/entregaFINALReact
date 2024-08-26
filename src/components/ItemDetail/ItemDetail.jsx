import React from 'react'
import '../../style.css';
import propTypes from "prop-types"
import { IconHeart } from '@tabler/icons-react'
import { IconMessage } from '@tabler/icons-react'
import { IconShare } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import CartContext from "../context/CartContext";



const ItemDetail = ({ producto }) => {
  const {addItem}= useContext(CartContext);
 

  return (
    <>
      <div className="card mb-3" >
        <div className="row g-0">
          <h3>{producto.titulo}</h3>
          <div className="col-md-4 contenedor">
            <Link to="404.html">
              <img
                src={producto.ubicacion}
                className="img-fluid rounded-start card-img-top w-55 mx-20 p-2"
                alt={producto.alt}
              />
            </Link>
          </div>
          <div className="col-md-8 contenedor">
            <div className="card-body mt-200">
              <p className="card-text "> {producto.descripcion}
                <Link to="404.html"> Ver+</Link></p>
              <p className="fw-semibold fs-7 p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle ">Cant. disponible: {producto.inventario} </p>
              <Link to="404.html">  {producto.tema}</Link>
              <div className="mt-4">
                <IconHeart className="me-2" color="red" size={32} />
                <IconMessage className="me-2" size={32} />
                <IconShare className="me-2" color="green" size={32} />
                </div>
              <p className="precio">  Precio $ {producto.precio} </p>
              <button   onClick={() => addItem(producto) } className="btn btn-primary me-2 mt-200">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ItemDetail.propTypes = {
  producto: propTypes.array
};

export default ItemDetail