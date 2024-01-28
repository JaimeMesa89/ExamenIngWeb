import React from 'react';
import CloudinaryImage from '../components/CloudinaryImage'

const PagosList = ({pagos}) => {

  const handleClick = (id) => {
    fetch('http://localhost:3000/' + id,{
        method: 'DELETE'
    }).then(() => {
      //
    })
  }
  return (
    <div className='pagos-list'>
      <h2>Pagos</h2>
      {pagos.map(pago => (
        <div className='pagos-preview' key={pago._id}>
            <h2>{pago.timestamp}</h2>
            <p>{pago.mail}</p>
            <p>{pago.concepto}</p>
            <p>{pago.direccion}</p>
            <p>{pago.importe}</p>
            <img src={CloudinaryImage(pago.image)}  alt={"Imagen"}/>
            <br/>
            <button onClick={handleClick(pago._id)}> Delete </button>
        </div>
      ))}
    </div>
  );
};

export default PagosList;
