import React from 'react';
import '../assets/scss/replyhistory.scss';

function HistoryModal({ onClose,history }) {
  console.log(history)
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body">
          <div className="dialog-container">
            <div className="dialog-title title-3 text-center">
              歷史回覆紀錄
            </div>
        <div className="dialog-box mt-2 mb-1">
          <div className="title-4 mb-1">第一次颱風</div>
        <div className="history-content over-y-scroll">
          {history.map((item, index) => (
            <div key={index} className="history-item m-1">
              <div className="question mt-2">
              <div className="history-character title-5 grey400">{item.character}</div>
              <div className="history-message body-5 grey400">{item.message}</div>
              </div>
              <div className="reply mt-2">
              <div className="history-reply title-5">你</div>
              <div className="history-option">{item.option}</div>
              </div>

            </div>
          ))}
        </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HistoryModal;