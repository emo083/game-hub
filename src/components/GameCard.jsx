
import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4">
      <img src={game.coverPhoto} alt={game.title} className="mb-2 w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mb-1">{game.title}</h3>
      <p className="text-sm mb-2">Rating: {game.ratings}</p>
      <Link to={`/game/${game.id}`} className="text-blue-600 hover:underline">
        View Details
      </Link>
    </div>
  );
}
