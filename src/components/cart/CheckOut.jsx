import React from 'react';
import '../../style.css';
import propTypes from 'prop-types';
import { IconTrash } from '@tabler/icons-react';
import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import { cartPesosQuantity, parseItemsOrder } from '../../services/utils';
import { crearPedido } from '../../services/services';
import { serverTimestamp } from 'firebase/firestore';

const CheckOut = ({ productos }) => {
  const { cart, removeItem, clear, mas, menos } = useContext(CartContext);
  const precioTotal = cartPesosQuantity(cart);
  const [pedidoId, setPedidoId] = useState(null);

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mail, setMail] = useState('');

  function onChange(evt, campo) {
    if (campo == 'nombre') {
      setNombre(evt.target.value);
    } else if (campo == 'telefono') {
      setTelefono(evt.target.value);
    } else {
      setMail(evt.target.value);
    }
  }

  function onSubmit() {
    const orden = {
      comprador: {
        nombre: nombre,
        telefono: telefono,
        mail: mail,
      },
      items: parseItemsOrder(cart),
      total: precioTotal,
      fecha: serverTimestamp(),
    };
    crearPedido(orden).then((docRef) => {
      setPedidoId(docRef.id);
    });
    clear();
  }

  const isUserValid = nombre && telefono && mail;

  return (
    <>
      {pedidoId && (
        <>
          <div className="card mb-3 contenedor">
            <img
              src="../img/content/tracking-pedido.png"
              className="pedido"
              alt="..."
            />
            <div className="col-md-5 contenedor">
              <h4 className="card-title">Pedido realizado con éxito:</h4>
              <p className="card-text">
                {nombre} Muchas gracias por su compra!!{' '}
              </p>
              <p className="card-text">
                Para realizar el seguimiento de su pedido utilice el siguiente
                código:
              </p>
              <h5 className="bg-success text-center p-2 text-dark bg-opacity-50">
                {pedidoId}
              </h5>
              <p class="card-text">
                <small className="text-body-secondary">
                  Ante cualquier duda consultenes al 0800 - COMPFOODIER
                </small>
              </p>
            </div>
          </div>
        </>
      )}
      {!pedidoId && (
        <>
          <h2>Resumen del Pedido</h2>
          <div className="table-responsive ">
            <div className="bg-light">
              <div className="table-responsive ">
                <table className="table table-striped-columns table-hover mb-3 text-center ">
                  <thead>
                    <tr>
                      <th align="center">Producto</th>
                      <th align="center">Precio</th>
                      <th align="center">-</th>
                      <th align="center">Cantidad</th>
                      <th align="center">+</th>
                      <th align="center">Total ($)</th>
                    </tr>
                  </thead>
                  <tbody id="tablaAlimentos">
                    {productos.map((item, i) => (
                      <tr key={i}>
                        <td>{item.titulo}</td>
                        <td align="center">{item.precio}</td>
                        <td align="center">
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => menos(item.id)}
                          >
                            -
                          </button>
                        </td>
                        <td align="center">{item.cantidad}</td>
                        <td align="center">
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => mas(item.id)}
                          >
                            +
                          </button>
                        </td>
                        <td align="right">{item.cantidad * item.precio}</td>
                        <td align="right">
                          <IconTrash
                            onClick={() => removeItem(item.id)}
                            className="me-2"
                            size={40}
                            id={i}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="fs-6 fw-bolder text-center ">
                  {precioTotal > 0 ? 'Total $: ' + precioTotal : ''}
                </p>
                <div className="mx-auto col-10 col-md-8 col-lg-6">
                  <h1>Ingresa tus datos para completar la compra</h1>
                  <form onSubmit={onSubmit}>
                    <div className="form-group mb-3 mt-3">
                      <label for="nombre" className="col-sm-4 col-form-label fs-5">Nombre y Apellido</label>
                      <div className="col-sm-10">
                        <input type="email" className="form-control w-80" id="nombre" onChange={(evt) => onChange(evt, 'nombre')} />
                      </div>
                    </div>
                    <div className="form-group mb-3 mt-3">
                      <label for="telefono" className="col-sm-4 col-form-label fs-5">Teléfono: </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control w-80" id="telefono" onChange={(evt) => onChange(evt, 'telefono')} />
                      </div>
                    </div>
                    <div className="form-group mb-3 mt-3">
                      <label for="mail" className="col-sm-4 col-form-label fs-5">Mail: </label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control w-80" id="mail" onChange={(evt) => onChange(evt, 'mail')} />
                      </div>
                    </div>

                  </form>

                </div>
                <div className="d-flex justify-content-end col-sm-10">
                  {precioTotal > 0 && !pedidoId ? (
                    <>
                      <button
                        disabled={!isUserValid}
                        type="submit"
                        onClick={(evt) => onSubmit(evt)}
                        className="btn btn-success me-2"
                      >
                        Realizar Pedido
                      </button>
                      <button
                        onClick={() => clear()}
                        className="btn btn-danger me-2"
                      >
                        Vaciar Carrito
                      </button>{' '}
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
CheckOut.propTypes = {
  productos: propTypes.array,
};

export default CheckOut;