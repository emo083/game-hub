import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const { currentUser } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <img
        src={currentUser.photoURL}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <p className="mb-2"><strong>Name:</strong> {currentUser.displayName}</p>
      <p className="mb-4"><strong>Email:</strong> {currentUser.email}</p>
      <Link
        to="/update-profile"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Update Information
      </Link>
    </div>
  );
}
