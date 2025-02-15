import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Apps from './pages/Apps';
import WebApps from './pages/WebApps';
import BookConsultation from './pages/BookConsultation';
import Navbar from './components/Navbar';
import useAuthStore from './store/authStore';
import Scrollup from "./sections/Scrollup";
import HeroSectionFooter from "./sections/HeroSectionFooter";

function App() {
  const user = useAuthStore((state) => state.user);
  
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/dashboard" replace /> : <Home />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/web-apps" element={<WebApps />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/dashboard" replace /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/dashboard" replace /> : <Signup />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
      </div>

      <section className="">
        <Scrollup />
        <HeroSectionFooter />
      </section>
    </BrowserRouter>
  );
}

export default App;