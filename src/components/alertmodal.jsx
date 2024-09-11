import React from 'react';
import Modal from './Modal.js';
import '../assets/scss/alert.scss';

function AlertModal({ show, handleStart, onClose }) {


  return (
    <Modal show={show} onClose={onClose} size="modal-content-dialog">
        <div className="modal-body d-flex flex-column text-center">
          <div className="alert-title mt-1">
            <div className="title-4">是否以訪客帳號開始遊戲？</div>
          </div>
          <div className="alert-text mt-1">
            <div className="body-5">
              注意！訪客帳號將不保存遊戲資料，<br></br>建議登入帳號後再開始遊戲。</div>
          </div>
          <div className="alert-button d-flex justify-content-center mt-2">
          <button className="btn-white m-1" onClick={onClose}>取消</button>
           <button className="btn m-1" onClick={handleStart}>確認</button>
          </div>
        </div>
    </Modal>
  );
}

export default AlertModal;