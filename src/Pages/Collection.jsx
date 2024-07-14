import React , {useState} from 'react';
import Navbar from '../components/navbar';
import Major from '../assets/svg/major_collection.svg';
import Expert from '../assets/svg/expert_collection.svg'
import CharacterItem from '../components/characteritem';
import '../assets/scss/collection.scss';
import EndingModal from '../components/endingmodal';

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

const endingmsg = [
  {title:'颱風假宣布得當',
   description:'市長在適當的時機宣布颱風假，成功保護市民安全，大家在颱風期間妥善應對，城市平穩渡過颱風。', 
}, 
{title:'未宣布颱風假引發混亂',
  description:'市長未在適當的時機宣布颱風假，導致市民混亂，交通擁擠，社會秩序受到一定程度的影響。', 
}, 
{title:'提前宣布颱風假過於保守',
   description:'市長提前宣布颱風假，但颱風實際影響不大，導致市民對市長決策提出質疑，認為是過於保守。', 
}]
function Collection() {
  const [activeIndex, setActiveIndex] = useState(0); // 初始展開第一張圖片
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  };


  const openEndingModal = (message) => {
    setCurrentMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentMessage(null);
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
        <div className="ending-container h100 d-flex flex-wrap pl-4 pr-4 mt-1 col-12" style={{ gap: '1rem' }}>
          {endingmsg.map((msg, index) => (
            <div
              key={index}
              className="ending-item bg-black white bdrs-5 d-flex justify-content-between align-items-center mr-1 ml-1 pl-2 pr-2"
              onClick={() => openEndingModal(msg)}
            >
              <div className="title-4">結局</div>
              <div className="body-4">已解鎖</div>
            </div>
          ))}
        </div>
      </div>
      <EndingModal show={modalVisible} onClose={closeModal} message={currentMessage} />
    </>
  );
}

export default Collection;