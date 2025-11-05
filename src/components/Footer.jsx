
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        
        <div>
          <h3 className="font-bold text-lg mb-2">Gamehub</h3>
          <p className="text-sm">
            Discover, play, and enjoy the best games. Join our community of gamers and explore new adventures every day.
          </p>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/developers" className="hover:underline">Developers</Link></li>
            <li><Link to="/my-profile" className="hover:underline">My Profile</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-bold text-lg mb-2">Newsletter</h3>
          <p className="text-sm mb-2">Subscribe to get the latest game updates!</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black flex-1"
            />
            <button className="bg-blue-600 px-4 py-2 rounded text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center bg-gray-800 py-4 text-sm">
        &copy; {new Date().getFullYear()} Gamehub. All rights reserved.
      </div>
    </footer>
  );
}
