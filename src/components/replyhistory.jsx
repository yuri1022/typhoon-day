import React from 'react';

function HistoryModal({ onClose }) {
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
          <div className="description d-flex flex-column ml-2 mr-2">
            <div className="description-title title-5 mt-2">新聞記者</div>
            <div className="description-text  body-5 mt-1">「面對颱風威脅，是否禁止民眾外出是一個引人關注的話題。這引起了社會對於自由和安全之間平衡的討論。我們將持續關注市政府在這一方面的政策決定和市民的反響。」</div>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HistoryModal;