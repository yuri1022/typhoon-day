import React from 'react';
import SliderWithMarks from './sliderwithmark';
import '../assets/scss/setting.scss';
import Major from '../assets/svg/major_collection.svg';
import Logo from '../assets/svg/LOGO.svg';
import Modal from './Modal.js';


function SettingsModal({ show,onClose,user }) {
  console.log('i am user',user)
  return (
    <div className="modal">
       <Modal show={show} onClose={onClose} size="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
           <div className="modal-body">
            <div className="setting-title text-center">
              <img className="logo-mb" src={Logo} alt="市長，我想放颱風假" />
              <div className='title title-3'>設定</div>
            </div>
              <div className="setting-body d-flex flex-column">
                <div className="setting-body-top d-flex mt-2 mb-2">
                  <div className="player-info d-flex col-12">
              <div className="player-picture over-hidden bd-2 bdrs-5 col-6 col-md-4 mr-1">
                  <img src={Major} alt=""/>
                  <button className='btn-changepic white title-5'>
                    <div className="text">
                    更換圖片
                    </div>
                    </button>
                </div>

                <div className="player-btn d-flex flex-column justify-content-between col-6 col-md-8">
                  <div className="name title-5" style={{width:'12.5rem',height:'3.75rem'}}>
                    {user.name}
                    </div>
                  <button className='btn-xl'>
                    Google 帳號綁定
                  </button>
                  <button className='btn-changepic-mb align-items-center justify-content-center bdrs-5'>
                    更換圖片
                  </button>
                </div>

                  </div>
                <div className="player-btn-mb d-flex flex-column w100 mt-3" style={{height:'45px'}}>
                   <button className='btn btn-google'>
                    Google 帳號綁定
                  </button>
                </div>

                </div>
                <div className="setting-body-bot d-flex flex-column">
                  <div className="music w100">
                  <SliderWithMarks title="背景音樂" />                
                  </div>
                  <div className="sound w100">
                  <SliderWithMarks title="音效" />
                  </div>
                 
                </div>
                </div>  
            
           </div>
        <div className="modal-footer">
          <div className="btn-container d-flex justify-content-end">
            <div className="btn-white-sm mr-2" onClick={onClose}>取消</div>
            <div className="btn-sm mr-2">確認</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SettingsModal;