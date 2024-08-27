import React from 'react';
import './App.css';

function CharacterCard({character}) {
    if (!character) return null;

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p><strong>Height: </strong>{character.height}</p>
            <p><strong>Homeworld: </strong>{character.homeworld}</p>
            <p><strong>Species: </strong>{character.species}</p>
        </div>
    );
}

export default CharacterCard;