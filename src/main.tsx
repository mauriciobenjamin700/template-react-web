import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import AboutPage from './pages/AboutPage/index.tsx';
import ContactPage from './pages/ContactPage/index.tsx';
import HomePage from './pages/HomePage/index.tsx';
import ProductPage from './pages/ProductPage/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="product/:id" element={<ProductPage />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
