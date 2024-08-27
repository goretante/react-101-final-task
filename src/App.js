import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import './App.css';
import logo from './logo.png';  // Uvoz slike

function App() {
  const [character, setCharacter] = useState(null);

  const fetchRandomCharacter = async () => {
    try {
      const response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
      const data = await response.json();
      const randomCharacter = data[Math.floor(Math.random() * data.length)];

      setCharacter({
        name: randomCharacter.name,
        image: randomCharacter.image,
        height: randomCharacter.height,
        homeworld: randomCharacter.homeworld,
        species: randomCharacter.species
      });
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Star Wars Logo" className="logo" />
      <button onClick={fetchRandomCharacter}>
        Generate Character
      </button>
      <CharacterCard character={character} />
    </div>
  );
}

export default App;
