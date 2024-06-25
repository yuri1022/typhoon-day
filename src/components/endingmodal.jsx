import React from 'react';

const EndingModal = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
 <div className="modal">
      <div className="modal-content-sm">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body">
        <h2>{message.title}</h2>
        <p>{message.description}</p>
      </div>
    </div>
    </div>
  );
};

export default EndingModal;