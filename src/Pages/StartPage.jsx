import React , { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../components/navbar';
import '../assets/scss/startpage.scss';
import Logo from '../assets/svg/LOGO.svg';
import { UserContext } from '../context/UserContext';
import AlertModal from '../components/alertmodal';

function StartPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [showAlertModal, setShowAlertModal] = useState(false);

  const handleStart = () => {
    if (user) {
      navigate('/area');
    } else {
      setShowAlertModal(true);
    }
  };

   const handleCloseModal = () => {
    setShowAlertModal(false);
  };

  const handleConfirm = () => {
    setShowAlertModal(false);
    navigate('/area');
  };


  return (
<div className='homepage' style={{ height: '100vh' }}>
      <Navbar />
      <div className="home-container w100 h100 d-flex">
        <div className="home-section d-flex justify-content-center align-items-center w100 h100">
          <div className="home-section-left h100"></div>
           <div className="home-section-right h100"></div>
          <div className="section-container d-flex flex-column align-items-center">
            <div className='section-title title-1'>
              <img src={Logo} alt="市長，我想放颱風假" />
            </div>
            <div className="section body-4 text-center white mt-4">
              風雨來臨，市政有你，在你的領導下，命運等待著改變。<br />
              你準備好了嗎？
            </div>
            <div className="section button mt-4">
              <Button className='btn title-4' onClick={handleStart}>開始遊戲</Button>
            </div>
          </div>
        </div>
      </div>
       {showAlertModal&& <AlertModal show={showAlertModal} handleStart={handleConfirm} onClose={handleCloseModal} />}
    </div>
  );
}

export default StartPage;