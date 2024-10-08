import React , {useState,useEffect,useContext} from 'react';
import Navbar from '../components/navbar';
import CharacterItem from '../components/characteritem';
import '../assets/scss/collection.scss';
import EndingModal from '../components/endingmodal';
import { useAPI } from '../context/APIContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';


function Collection() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const { characters, endings } = useAPI();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

    useEffect(() => {
    if (!user) {
      alert('please Login!');
      navigate('/start');
    }
  }, [user]);


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
                {endings.map((msg, index) => (
            <div
              key={index}
              className={`ending-item bdrs-5 d-flex justify-content-between align-items-center mr-1 ml-1 pl-2 pr-2 white ${msg.unlocked ? 'bg-black' : 'bg-grey200'}`}
              onClick={() => msg.unlocked && openEndingModal(msg)}
            >
              <div className="title-4">結局</div>
              <div className="body-4">{msg.unlocked ? '已解鎖' : '未解鎖'}</div>
            </div>
          ))}
        </div>
      </div>
{modalVisible&& <EndingModal show={modalVisible} onClose={closeModal} message={currentMessage} />}
    </>
  );
}

export default Collection;