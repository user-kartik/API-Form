import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={() => navigate('/form')} style={{ margin: '10px' }}>
        Form
      </button>
      <button onClick={() => navigate('/api')} style={{ margin: '10px' }}>
        API
      </button>
    </div>
  );
};

export default Home;
