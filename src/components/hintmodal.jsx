import React from 'react';

const EndingModal = ({ show, onClose}) => {
  if (!show) return null;

  return (
 <div className="modal">
      <div className="modal-content-sm">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body text-center">
        <div className="title-4">遊玩指南</div>
        <p className='title-5'>颱風正在接近中！市長，我好想放颱風假啊—
        </p>
        <p className='title-5'>這次換你來當市長，決定颱風來襲時的各項對策，來解鎖專屬於你的結局吧！</p>
      </div>
    </div>
    </div>
  );
};

export default EndingModal;