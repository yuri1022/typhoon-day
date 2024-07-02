import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../components/navbar';
import '../assets/scss/startpage.scss';
import HintModal from '../components/hintmodal'

function StartPage() {
  const [showHint,setShowHint] = useState(false);
  const navigate = useNavigate();

  const openHintModal = () => {
    setShowHint(true);
  };

  const closeModal = () => {
    setShowHint(false);
  };

  const handleStart = () =>{
    navigate('/area')
  }

  return (
<div className='homepage' style={{ height: '100vh' }}>
      <Navbar />
      <div className="home-container w100 h100 d-flex">
        <div className="home-section d-flex flex-column justify-content-center align-items-center w100 h100">
          <div className="section-container d-flex flex-column align-items-center pl-2 pr-2">
            <div className='section title-1 mb-1'>
              市長，我想放颱風假
            </div>
            <div className="section body-4 mb-4 text-center">
              風雨來臨，市政有你，在你的領導下，命運等待著改變。<br />
              你準備好了嗎？
            </div>
            <div className="section button mt-2">
              <Button className='btn title-4' onClick={handleStart}>開始遊戲</Button>
            </div>
            <div className="section button mt-2">
              <div className='m-2 p-1 bdrs-5 pointer' onClick={openHintModal}>
                <div className="title-5">遊玩指南</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showHint && <HintModal show={showHint} onClose={closeModal} />}
    </div>
  );
}

export default StartPage;