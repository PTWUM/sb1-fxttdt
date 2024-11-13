import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PharmacyDashboard from './pages/PharmacyDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Auth from './pages/Auth';
import { useAuthStore } from './store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/pharmacy-dashboard/*" 
            element={user?.role === 'pharmacy' ? <PharmacyDashboard /> : <Auth />} 
          />
          <Route 
            path="/customer-dashboard/*" 
            element={user?.role === 'customer' ? <CustomerDashboard /> : <Auth />} 
          />
          <Route 
            path="/admin-dashboard/*" 
            element={user?.role === 'admin' ? <AdminDashboard /> : <Auth />} 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;