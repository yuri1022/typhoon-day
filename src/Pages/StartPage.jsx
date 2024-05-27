import React from 'react';
import Major from '../assets/svg/major.svg';
import { Button } from 'react-bootstrap';
import Navbar from '../components/navbar'

function StartPage() {
  return (
    <div className='homepage' style={{height:'100vh'}}>
      <Navbar />
      <div className="home-container w100 h100 d-flex">
        <div className="section d-flex flex-column justify-content-center align-items-center w100 h100" style={{
            backgroundImage: `url(${Major})`,
            backgroundSize: '30%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom'
          }}>
            <div className="section-container d-flex flex-column align-items-center">
          <div className='section title-1 mb-1'>
          市長，我想放颱風假
        </div>
        <div className="section body-4 mb-4 text-center">
          風雨來臨，市政有你，在你的領導下，命運等待著改變。<br />
          你準備好了嗎？
        </div>
        <div className="section button mt-2">
          <Button className='btn title-4'>開始遊戲</Button>
        </div>
            </div>

        </div>
      </div>

    </div>
  );
}

export default StartPage;