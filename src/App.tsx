import React from 'react';
import ProductWrapper from './wrappers/ProductWrapper.tsx';
import { defineCustomElements } from 'mfe-ui-kit/loader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderWrapper from './wrappers/OrderWrapper.tsx';
import Shell from './wrappers/Shell.tsx';
import './styles.css';

defineCustomElements();

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shell />} />
          <Route path="/order" element={<OrderWrapper />} />
          <Route path="/product/:id" element={<ProductWrapper />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;