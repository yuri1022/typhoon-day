import React, { createContext, useContext, useState, useEffect } from 'react';
import APIService from '../service/APIService.ts';
import { UserContext } from './UserContext';
import Modal from '../components/Modal.js';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [selectedMessageIndex, setSelectedMessageIndex] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [history, setHistory] = useState([]);
  const [polling, setPolling] = useState(25);
  const [funding, setFunding] = useState(25);
  const [environment, setEnvironment] = useState(25);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [answeredMessages, setAnsweredMessages] = useState([]);
  const [showTyphoonModal, setShowTyphoonModal] = useState(false);
  const [showNextRoundModal, setShowNextRoundModal] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showEndingModal, setShowEndingModal] = useState(false);
  const [endingMessage, setEndingMessage] = useState('');

  useEffect(() => {
    APIService.getMainScreen()
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success' && Array.isArray(data.data)) {
          setMessages(data.data);
          setSelectedMessage(null);
        } else {
          console.error('API returned unexpected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  useEffect(() => {
    if (polling <= 0) {
      fetchEnding(2); // 使用ID 2對應結局
    } else if (funding <= 0) {
      fetchEnding(1); 
    } else if (environment <= 0) {
      fetchEnding(3); 
    } 
  }, [polling, funding, environment]);

 const fetchEnding = (Id) => {
    APIService.getEndings()
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success' && Array.isArray(data.data)) {
          const ending = data.data.find(e => e.id === Id);
          console.log('success',data)
          if (ending) {
            setEndingMessage(ending);
            setShowEndingModal(true);

            if (user) {
              APIService.postProgress({ charId: 0, endingId:Id }, user.token)
                .then(response => response.json())
                .then(result => {
                  if (result.status === 'success') {
                    console.log('Progress saved successfully');
                  } else {
                    console.error('Failed to save progress');
                  }
                })
                .catch(error => {
                  console.error('Error saving progress:', error);
                });
            }
          }
        } else {
          console.error('API returned unexpected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching endings:', error);
      });
  };

  const handleReplyClick = (message, messageIndex) => {
    if (answeredMessages.includes(messageIndex)) {
      return;
    }
    setSelectedMessageIndex(messageIndex);
    setSelectedMessage(message);
    setIsOptionSelected(false);
  };

  const handleOptionClick = (option, index) => {
    if (isOptionSelected) return;
    setPolling(prev => prev + option.polling);
    setFunding(prev => prev + option.funding);
    setEnvironment(prev => prev + option.environment);
    const newHistoryItem = {
      message: selectedMessage.comment,
      option: option.description,
    };

    setHistory(prevHistory => [...prevHistory, newHistoryItem]);
    setIsOptionSelected(true);
    setSelectedOptionIndex(index);
    setShowNotice(true);
    setAnsweredMessages([...answeredMessages, selectedMessageIndex]);

    if (answeredMessages.length + 1 === messages.length) {
      setShowTyphoonModal(true);
    }
  };

  const handleCloseNoticeModal = () => {
    setShowNotice(false);
  };

  const handleTyphoonDecision = (decision) => {
    setShowTyphoonModal(false);
    setShowNextRoundModal(true);
  };

  const handleNextRoundDecision = (decision) => {
    setShowNextRoundModal(false);
    console.log(decision);
    console.log('Current state:', { polling, funding, environment });
    if (decision===true) {
      const savedData = {
        polling,
        funding,
        environment,
      };
      console.log('Saved Data:', savedData);
      setSelectedMessage(null);
      APIService.getMainScreen()
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success' && Array.isArray(data.data)) {
            setMessages(data.data);
            setAnsweredMessages([]);
          } else {
            console.error('API returned unexpected data structure:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching messages:', error);
        });
    } else if (decision === false) {
      if (polling < 15 || funding < 15 || environment < 15) {
        const lowValues = [];
        if (polling < 15) lowValues.push(5); 
        if (funding < 15) lowValues.push(4); 
        if (environment < 15) lowValues.push(6); 
        const selectedEnding = lowValues[Math.floor(Math.random() * lowValues.length)];
        console.log('Selected Ending for Low Values:', selectedEnding);
        fetchEnding(selectedEnding);
      } else if (polling > 25 || funding > 25 || environment > 25) {
        const highValues = [];
        if (polling > 25) highValues.push(8); 
        if (funding > 25) highValues.push(7); 
        if (environment > 25) highValues.push(9); 
        const selectedEnding = highValues[Math.floor(Math.random() * highValues.length)];
        console.log('Selected Ending for Low Values:', selectedEnding);
        fetchEnding(selectedEnding);
      } else {
        console.log('No ending conditions met.');
      }
    }
  };

  const numberToChinese = (num) => {
    const chineseNumbers = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    return chineseNumbers[num - 1];
  };

  return (
    <GameContext.Provider
      value={{
        messages,
        selectedMessage,
        selectedMessageIndex,
        history,
        polling,
        funding,
        environment,
        isOptionSelected,
        selectedOptionIndex,
        answeredMessages,
        showNotice,
        showTyphoonModal,
        showNextRoundModal,
        handleReplyClick,
        handleOptionClick,
        handleTyphoonDecision,
        handleNextRoundDecision,
        numberToChinese,
        handleCloseNoticeModal
      }}
    >
      {children}
      {showEndingModal && (
      <Modal show={showEndingModal} onClose={() => setShowEndingModal(false)} size="modal-content-dialog">
        <div className="modal-body m-1">
        <p className='title-4 m-1'>{endingMessage?.name}</p>
        <p className='body-5 m-1'>{endingMessage?.description}</p>
      </div>
      </Modal>
    )}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);