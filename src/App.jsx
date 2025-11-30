
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import useAuthStore from "./store/authStore";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Shows from "./pages/Shows";
import Movies from "./pages/Movies";
import NewPopular from "./pages/NewPopular";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const logout = useAuthStore((state) => state.logout);

  return (
    <Router>
      <Routes>

       
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home onLogout={logout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shows"
          element={
            <ProtectedRoute>
                <Shows onLogout={logout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies onLogout={logout}/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-popular"
          element={
            <ProtectedRoute>
              <NewPopular onLogout={logout} />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;




