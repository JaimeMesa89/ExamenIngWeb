// Main.js
import React from 'react';
import { useAuth } from '../components/AuthContext';
import { useState, useEffect } from 'react';
import PagosList from '../components/PagosList';
import CreateGasto from '../components/CreateGasto';
import MapSelector from '../components/MapSelector';

function Home() {
  const { email, token } = useAuth();
  const [pagosData, setPagosData] = useState(null);
  useEffect(() => {

    const fetchPagos = async () => {
      const response = await fetch("http://localhost:4000/api/gastos/");
      const json = await response.json();

      if (response.ok) {
        setPagosData(json);
      }
    };

    fetchPagos();
  }, []);

  return (
    <div>
      <h1>Crear Gasto</h1>
      <CreateGasto/>
      { pagosData && <PagosList pagos={pagosData}/> }
      { pagosData && <MapSelector marks={pagosData}/>}
    </div>
  );
}

export default Home;