import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  return (
    <div className="home-container h-screen flex items-center justify-center bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Welcome to La Italiana</h1>
        <p className="text-2xl md:text-4xl mb-6">Experience the best Italian cuisine</p>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-lg" onClick={()=>{navigate('/menu')}}>
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default Home;
