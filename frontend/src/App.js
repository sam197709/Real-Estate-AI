import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cerca" element={<SearchPage />} />
            <Route path="/compra" element={<SearchPage />} />
            <Route path="/affitta" element={<SearchPage />} />
            <Route path="/venduto" element={<SearchPage />} />
            <Route path="/proprieta/:id" element={<PropertyDetailPage />} />
            <Route path="/salvati" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Case Salvate - Coming Soon</h2></div>} />
            <Route path="/ricerche-salvate" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Ricerche Salvate - Coming Soon</h2></div>} />
            <Route path="/mutuo" element={<div className="min-h-screen flex items-center justify-center"><h2 className="text-2xl">Calcolatore Mutuo - Coming Soon</h2></div>} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;