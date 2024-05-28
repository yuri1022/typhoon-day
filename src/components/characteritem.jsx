// src/components/CharacterItem.jsx
import React from 'react';
import '../assets/scss/CharacterItem.scss'

function CharacterItem({ character, isActive, onClick }) {
 return (
    <div
      className={`character-item bd-2 bdrs-5 bg-black ${isActive ? 'expanded' : ''}`}
      onMouseEnter={onClick}
      onClick={onClick}
    >
      <div className="picture-container bg-grey200">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="text pl-4 pr-4">
        {isActive && (
          <>
          <div className="text-title title-4 text-center">{character.name}</div>
          <div className="text-description">
            {character.description}
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CharacterItem;