import React from 'react';
import SliderWithMarks from './sliderwithmark';
import '../assets/scss/setting.scss';

function SettingsModal({ onClose,user }) {

  console.log('i am user',user)
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
           <div className="modal-body">
            <div className="text-center">
              <div className='title-3'>設定</div>
            </div>
              <div className="setting-body d-flex flex-column">
                <div className="setting-body-top d-flex mt-2 mb-2">
                  <div className="player-info d-flex">
              <div className="player-picture over-hidden bd-2 bdrs-5 mr-2" style={{width:'140px',height:'140px'}}>
                  <img src="" alt="" />
                </div>
                <div className="player-btn d-flex flex-column mr-1">
                  <div className="name title-5 mb-3" style={{width:'12.5rem',height:'3.75rem'}}>
                    {user[0].name}
                    </div>
                  
                  <button className='btn'>更換圖片</button>
                </div>
                  </div>


                <div className="player-btn d-flex flex-column">
                  <button className='btn mb-3'>
                    Google 帳號綁定
                  </button>
                  <button className='btn'>
                    Facebook 帳號綁定
                  </button>
                </div>
                </div>
                <div className="setting-body-bot d-flex flex-column">
                  <div className="music w100">
                  <SliderWithMarks title="背景音樂" />                
                  </div>
                  <div className="sound w100 mt-2">
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
      </div>
    </div>
  );
}

export default SettingsModal;