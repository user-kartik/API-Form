import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FormPage from './components/FormPage';
import APIPage from './components/APIPage';
import DisplayDetails from './components/DisplayDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/form/details" element={<DisplayDetails />} />
        <Route path="/api" element={<APIPage />} />
      </Routes>
    </Router>
  );
};

export default App;
