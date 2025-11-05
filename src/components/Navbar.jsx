
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold">
          Gamehub
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`hover:underline ${isActive("/") ? "text-yellow-400 font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`hover:underline ${isActive("/games") ? "text-yellow-400 font-semibold" : ""}`}
          >
            All Games
          </Link>
          <Link
            to="/extra-info"
            className={`hover:underline ${isActive("/extra-info") ? "text-yellow-400 font-semibold" : ""}`}
          >
            Warning
          </Link>

          {currentUser ? (
            <>
              <Link to="/my-profile">
                <img
                  src={currentUser.photoURL || "/images/default-user.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`hover:underline ${isActive("/login") ? "text-yellow-400 font-semibold" : ""}`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition ${
                  isActive("/register") ? "bg-yellow-400 text-black" : ""
                }`}
              >
                Register
              </Link>
            </>
          )}
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-2">
          <Link
            to="/"
            className={`hover:underline ${isActive("/") ? "text-yellow-400 font-semibold" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`hover:underline ${isActive("/games") ? "text-yellow-400 font-semibold" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            All Games
          </Link>
          <Link
            to="/extra-info"
            className={`hover:underline ${isActive("/extra-info") ? "text-yellow-400 font-semibold" : ""}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Extra Info
          </Link>

          {currentUser ? (
            <>
              <Link
                to="/my-profile"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`hover:underline ${isActive("/login") ? "text-yellow-400 font-semibold" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 transition ${
                  isActive("/register") ? "bg-yellow-400 text-black" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
