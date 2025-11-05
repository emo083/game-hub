
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const { currentUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await updateUserProfile({ displayName: name, photoURL: photoURL });
      alert("Profile updated successfully!");
      navigate("/my-profile"); 
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="p-3 border rounded"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded transition"
        >
          {loading ? "Updating..." : "Update Information"}
        </button>
      </form>
    </div>
  );
}
