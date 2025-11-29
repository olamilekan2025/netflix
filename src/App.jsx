import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import useAuthStore from "./store/authStore";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  const logout = useAuthStore(state => state.logout);

  return (
    <Router>
      <Routes>

        
        <Route 
          path="/" 
          element={isAuthenticated ? <Home onLogout={logout} /> : <LandingPage />} 
        />

        
        <Route path="/login" element={<Login />} />

        
        <Route path="/signup" element={<Signup />} />

        
        <Route 
          path="/home" 
          element={isAuthenticated ? <Home onLogout={logout} /> : <LandingPage />} 
        />
      </Routes>
    </Router>
  );
}

export default App;



