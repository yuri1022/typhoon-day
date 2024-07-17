import React , {useState,useEffect,useContext} from 'react';
import Navbar from '../components/navbar';
import CharacterItem from '../components/characteritem';
import '../assets/scss/collection.scss';
import EndingModal from '../components/endingmodal';
import APIService from '../service/APIService.ts';
import { UserContext } from '../context/UserContext.js';

function Collection() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(null);
  const [endingmsg, setEndingmsg] = useState([]);
  const [characters,setCharacters] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    APIService.getAllCharacters()
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setCharacters(data.data);
          console.log(data)
        } else {
          console.error('API did not return the expected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching endings data:', error);
      });
  }, []);

 useEffect(() => {
    if (user) {
      let allEndings = [];
      APIService.getEndings()
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success') {
            allEndings = data.data;
          } else {
            console.error('API did not return the expected data structure:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching all endings data:', error);
        })
        .then(() => {
          return APIService.getUnlockableEndings(user.id)
            .then(response => response.json())
            .then(data => {
              if (data.status === 'success') {
                const unlockedEndings = data.data.map(item => item.endingId);
                return Promise.all(unlockedEndings.map(id => APIService.getOutcome(id, user.token).then(response => response.json())));
              } else {
                console.error('API did not return the expected data structure:', data);
              }
            });
        })
        .then(unlockedEndingsData => {
          if (Array.isArray(unlockedEndingsData)) {
            const unlockedEndings = unlockedEndingsData.filter(ending => ending.status === 'success').map(ending => ending.data);

            const combinedEndings = allEndings.map(ending => {
              const unlockedEnding = unlockedEndings.find(e => e.id === ending.id);
              return unlockedEnding ? { ...ending, unlocked: true } : { ...ending, unlocked: false };
            });

            setEndingmsg(combinedEndings);
          } else {
            console.error('Unlockable endings data is not in expected format:', unlockedEndingsData);
          }
        })
        .catch(error => {
          console.error('Error fetching unlockable endings data:', error);
        });
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
                {endingmsg.map((msg, index) => (
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