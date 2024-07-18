import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Major from '../assets/svg/major_collection.svg';
import ArrowDown from '../assets/svg/arrowdown.svg';
import DataModal from '../components/MeteorologicalData';
import HistoryModal from '../components/replyhistory';
import '../assets/scss/mainpage.scss';
import NoticeModal from '../components/noticemodal.jsx';
import TyphoonModal from '../components/typhoonmodal.jsx';
import NextRoundModal from '../components/nextroundmodal.jsx';
import { useGame } from '../context/GameContext';

function MainPage() {
  const {
    messages,
    selectedMessage,
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
  } = useGame();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openDataModal = () => setShowData(true);
  const closeDataModal = () => setShowData(false);
  const openHistoryModal = () => setShowHistory(true);
  const closeHistoryModal = () => setShowHistory(false);

  return (
    <>
      <Navbar />
      <div className="main-page w100 h100 pl-2 pr-2" style={{ paddingTop: '5rem', height: '100vh' }}>
        <div className="main-page-container w100 h100 d-flex pt-2 pb-2">
          <div className="main-page-left col-12 col-md-7 mb-2">
            <div className="left-picture w-100" style={{ height: '25rem' }}>
              <img className="h100 w100 contain bg-grey200 bdrs-5" src={Major} alt="" />

            </div>
            <div className="chat-room-container bd-2 bdrs-5 mt-2">

             <div className="header title-4 d-flex align-items-center justify-content-center" style={{ height: '4rem' ,borderBottom:'2px solid black'}}>聊天室</div>           
            <div className="left-chat w-100 over-y-scroll" style={{ height: '20.5rem' }}>

          {messages.map((message,index) => (
            <div key={message.id} className="chat-box-container d-flex pt-2 pl-1">
            <div className="chat-box-l col-1">
              <div className="img-container d-flex justify-content-center pl-1">
                <img className="img-circle bd-2" src={message.character.image} alt={message.character.name} />
              </div>
            </div>
            <div className="chat-box-r col-11 pr-1">
              <div className="chat-box title-5 ml-2">{message.character.name}</div>
              <div className={`chat-box-black ${answeredMessages.includes(index) ? 'bg-grey300' : 'bg-black'} bdrs-5 mt-1 ml-2 p-2 d-flex flex-column justify-content-between`}>
                <div className="chat-box-text white body-5">
                  {message.comment}
                </div>
                <div className="chat-box-btn d-flex justify-content-end">
                  <button className="btn-white-xs" onClick={() => handleReplyClick(message,index)}>回覆</button>
                </div>
              </div>
            </div>
            </div>
          ))}

              </div>
            </div>

            </div>
          <div className="main-page-right col-12 col-md-5 mb-2">

           <div className="tools w-100 bd-2 bdrs-5 d-flex" style={{ height: '4rem' }}>
              <div className="status w100 d-flex title-4 align-items-center justify-content-center">
                <div className="polling">民調：{polling}</div>
                <div className="progress-line">｜</div>
                <div className="funding">資金：{funding}</div>
                <div className="progress-line">｜</div>
                <div className="enviroment">環境：{environment}</div>
              </div>

           </div>
            

            <div className="tools w-100 bd-2 bdrs-5 d-flex mt-2" style={{ height: '4rem' }}>
              <div className="title-4 d-flex w100 justify-content-center align-items-center">小工具</div>
              <div className="arrow-down mr-2" onClick={toggleDropdown}>
                <img src={ArrowDown} alt="" />
              </div>
            </div>
            <div className="dropdown">
              {showDropdown && (
                <div className={`dropdown-content bg-white w100 bd-2 bdrs-5 ${showDropdown ? 'show' : ''}`}>
                  <div className="button-container h100 mr-2 ml-2">
                    <button className='btn-xl searching mt-2' onClick={openDataModal}>查看氣象資料</button>
                    <button className='btn-xl searching mt-2' onClick={openHistoryModal}>查看歷史回覆紀錄</button>
                  </div>
                </div>
              )}
              {showData && <DataModal onClose={closeDataModal} />}
              {showHistory && <HistoryModal onClose={closeHistoryModal} history={history} />}

            </div>

            <div className="reply w-100 bd-2 bdrs-5 mt-2" style={{ height: '40.6rem' }}>
              <div className="header title-4 d-flex align-items-center justify-content-center" style={{ height: '4rem', borderBottom: '2px solid var(--black)' }}>回覆</div>
              <div className="character" style={{ height: '9.06rem', borderBottom: '2px solid var(--black)' }}>
                <div className="chat-box-container d-flex pt-2 pl-1">
            <div className="chat-box-l col-1">
              <div className={`img-container justify-content-center ml-1 ${selectedMessage ? 'd-flex':'d-none'}`}>
                <img className="img-circle bd-2" src={selectedMessage?.character.image} alt={selectedMessage?.character.name} />
              </div>
            </div>

                  <div className="chat-box-r col-11 pr-1">
                    <div className="chat-box title-5 ml-2">                {selectedMessage?.character.name}</div>
                    <div className="chat-box bdrs-5 mt-1 d-flex flex-column justify-content-between ml-2" style={{ height: '5rem' }}>

                      <div className="chat-box-text body-5 over-y-scroll">
                      {selectedMessage?.comment}
                      </div>


                    </div>
                  </div>

                </div>

              </div>
              <div className="chat over-y-scroll" style={{ height: '27.4rem' }}>
                
                {selectedMessage?.options.map((option,index) => (
                  <div className={`chat-box m-2 ${isOptionSelected && selectedOptionIndex !== index ? 'bg-grey300' : 'bg-black'} bg-black white bdrs-5 p-2`} style={{ height: '9.3rem' }} onClick={() => handleOptionClick(option,index)}>
                    <div className="title-5">{`選項${numberToChinese(index + 1)}`}</div>
                    <div className="body-5 mt-1">{option.description}</div>
                    </div>
                ))}
               
              </div>
              {showNotice && <NoticeModal show={showNotice} onClose={handleCloseNoticeModal} option={selectedMessage.options[selectedOptionIndex]} />}
              {showTyphoonModal && <TyphoonModal show={showTyphoonModal} onClose={handleTyphoonDecision} />}
              {showNextRoundModal && <NextRoundModal onClose={handleNextRoundDecision} />}
            </div>
          </div>            
          </div>

        </div>

    </>
  );
}

export default MainPage;