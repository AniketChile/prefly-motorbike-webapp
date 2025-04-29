import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Specs from './components/Specs';
import Model from './components/models_of_prefly/Model';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/specs" element={<Specs />} />
        <Route path="/models" element={<Model />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
