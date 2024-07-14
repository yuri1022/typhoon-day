// src/components/CharacterItem.jsx
import React ,{useState,useEffect}from 'react';
import '../assets/scss/CharacterItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function CharacterItem({ character, isActive, onClick,handleNext, handlePrevious }) {
 const [isMobile, setIsMobile] = useState(false); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      onClick();
    }
  };
 return (
    <div
      className={`character-item bd-2 bdrs-5 bg-black ${isActive ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      <div className="picture-container bg-grey200">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="text pl-2 pr-2">
        {isActive && (
          <>
          <div className="text-title title-4 text-center">{character.name}</div>
          <div className="text-bot d-flex">
          <div className="previous white pointer" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}> 
          <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="text-description">
            {character.description}
          </div>
          <div className="next white pointer" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

          </>
        )}
      </div>
    </div>
  );
}

export default CharacterItem;