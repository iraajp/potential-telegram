import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Books from './pages/Books';
import Thoughts from './pages/Thoughts';
import Builds from './pages/Projects';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/thoughts" element={<Thoughts />} />
        <Route path="/builds" element={<Builds />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
