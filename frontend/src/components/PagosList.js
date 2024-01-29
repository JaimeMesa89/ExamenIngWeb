import React from 'react';
import CloudinaryImage from '../components/CloudinaryImage'

const PagosList = ({pagos}) => {

  const handleClick = (id) => {
    fetch('http://localhost:4000/api/gastos/' + id,{
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
            <h3>{pago.concepto}</h3>
            <p>{pago.mail}</p>
            <p>{pago.direccion}</p>
            <img src={CloudinaryImage(pago.image)}  alt={"Imagen"}/>
            <br/>
            <button onClick={() => handleClick(pago._id)}>Delete</button>
        </div>
      ))}
      <br/>
      <br/>
    </div>
  );
};

export default PagosList;
