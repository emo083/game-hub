import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedGame = data.find((g) => g.id === id);
        setGame(selectedGame);
      });
  }, [currentUser, id, navigate]);

  if (!game) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
      <img src={game.coverPhoto} alt={game.title} className="mb-4 w-full max-w-md" />
      <p className="mb-2"><strong>Category:</strong> {game.category}</p>
      <p className="mb-2"><strong>Ratings:</strong> {game.ratings}</p>
      <p className="mb-2"><strong>Developer:</strong> {game.developer}</p>
      <p className="mb-4">{game.description}</p>
      <a
        href={game.downloadLink}
        target="_blank"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download Game
      </a>
    </div>
  );
}
