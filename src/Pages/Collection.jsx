import React , {useState} from 'react';
import Navbar from '../components/navbar';
import Major from '../assets/svg/major_collection.svg';
import Expert from '../assets/svg/expert_collection.svg'
import CharacterItem from '../components/characteritem';
import '../assets/scss/collection.scss'

const characters = [
  {
    name: '市長',
    image: Major,
    description: '負責城市的管理和領導，需要處理各種政府事務，包括應對自然災害、制定政策、促進城市發展等。'
  },
  {
    name: '氣象學家',
    image: Expert,
    description: '專業預測天氣，提供關於颱風、降雨等氣象事件的專業建議和意見。'
  },
  {
    name: '緊急應變專家',
    image: Major,
    description: '擁有應急管理和災害應變專業知識，負責協調應對自然災害和其他緊急情況。'
  },
    {
    name: '市長',
    image: Major,
    description: '負責城市的管理和領導，需要處理各種政府事務，包括應對自然災害、制定政策、促進城市發展等。'
  },
  {
    name: '氣象學家',
    image: Major,
    description: '專業預測天氣，提供關於颱風、降雨等氣象事件的專業建議和意見。'
  },
  {
    name: '緊急應變專家',
    image: Major,
    description: '擁有應急管理和災害應變專業知識，負責協調應對自然災害和其他緊急情況。'
  },  {
    name: '市長',
    image: Major,
    description: '負責城市的管理和領導，需要處理各種政府事務，包括應對自然災害、制定政策、促進城市發展等。'
  },
  {
    name: '氣象學家',
    image: Major,
    description: '專業預測天氣，提供關於颱風、降雨等氣象事件的專業建議和意見。'
  },
  {
    name: '緊急應變專家',
    image: Major,
    description: '擁有應急管理和災害應變專業知識，負責協調應對自然災害和其他緊急情況。'
  }
];


function Collection() {
  const [activeIndex, setActiveIndex] = useState(0); // 初始展開第一張圖片
  console.log(activeIndex)
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  };
  return (
    <>
      <Navbar />
      <div className="collection-page" style={{ paddingTop: '5rem' }}>
        <div className="title title-3 mt-2 ml-4">角色簡介</div>
        <div className="collection-container w100 h100 d-flex flex-wrap col-12 pl-4 pr-4 mt-1" style={{gap:'0.5rem'}}>
        {characters.map((character, index) => (
            <CharacterItem
              key={index}
              character={character}
              isActive={index === activeIndex}
              activeIndex={activeIndex}
              onClick={() => setActiveIndex(index)}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          ))}
        </div>
        <div className="title title-3 mt-2 ml-4">結局解鎖</div>
        <div className="ending-container h100 d-flex flex-wrap pl-4 pr-4 mt-1 col-12" style={{gap:'1rem'}}>
          <div className="ending-item bg-black white bdrs-5 d-flex justify-content-between align-items-center mr-1 ml-1 pl-2 pr-2">
            <div className="title-4">結局</div>
            <div className="body-4">已解鎖</div>
            </div>
          <div className="ending-item bg-black white bdrs-5 d-flex justify-content-between align-items-center mr-1 ml-1 pl-2 pr-2">
            <div className="title-4">結局</div>
            <div className="body-4">已解鎖</div>
            </div>
          <div className="ending-item bg-black white bdrs-5 d-flex justify-content-between align-items-center mr-1 ml-1 pl-2 pr-2">
            <div className="title-4">結局</div>
            <div className="body-4">已解鎖</div>
            </div>

            
        </div>
      </div>
    </>
  );
}

export default Collection;