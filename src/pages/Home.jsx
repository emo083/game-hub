import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort((a, b) => b.ratings - a.ratings);
        setGames(sortedGames.slice(0, 3)); 
      });
  }, []);

  return (
    <div className="container mx-auto px-4">
     
      <BannerSlider />

      
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Popular Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Link
            to="/games"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition"
          >
            View All Games
          </Link>
        </div>
      </section>

    
      <section className="bg-gray-100 rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="mb-4 text-gray-700">
          Get the latest news, updates, and upcoming game releases delivered straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded border border-gray-300 flex-1 text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
