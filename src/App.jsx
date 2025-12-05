
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
import Footer from "./components/Footer"
import FilmDataXFAQ from "./pages/FilmDataXFAQ"
import MoviesApi from "./Api/MoviesApi"
import Trending from "./Api/Trending"
import UpComing from "./Api/UpComing";
import TopRated from "./Api/TopRated";
import DiscoverMovies from "./Api/DiscoverMovies";
import TvShows from "./Api/TvShows";

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
              <Footer/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/shows"
          element={
            <ProtectedRoute>
                <Shows onLogout={logout} />
                <Footer/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies onLogout={logout}/>
              <Footer/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/new-popular"
          element={
            <ProtectedRoute>
              <NewPopular onLogout={logout} />
              <Footer/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/filmDataXFAQ"
          element={
            <ProtectedRoute>
              <FilmDataXFAQ onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/moviesApi"
          element={
            <ProtectedRoute>
              <MoviesApi onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/trending"
          element={
            <ProtectedRoute>
              <Trending onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/upComing"
          element={
            <ProtectedRoute>
              <UpComing onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/topRated"
          element={
            <ProtectedRoute>
              <TopRated onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/discoverMovies"
          element={
            <ProtectedRoute>
              <DiscoverMovies onLogout={logout} />
              
            </ProtectedRoute>
          }
        />
        <Route
          path="/tvShows"
          element={
            <ProtectedRoute>
              <TvShows onLogout={logout} />
              
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;




