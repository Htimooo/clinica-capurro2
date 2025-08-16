import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NotFound.css'; // Asumimos que le pondremos un poco de estilo

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <button onClick={handleGoHome}>Volver al inicio</button>
    </div>
  );
}

export default NotFound;
