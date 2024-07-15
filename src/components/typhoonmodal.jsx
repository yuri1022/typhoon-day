import React from 'react';

const TyphoonModal = ({ onClose }) => {
  const handleDecision = (decision) => {
    onClose(decision);
  };

  return (
    <div className="modal">
      <div className="modal-content-sm">
        <div className="modal-header">
          <div className="close" onClick={() => handleDecision(false)}>&times;</div>
        </div>
        <div className="modal-body text-center">
          <div className="title-4">是否要放颱風假?</div>
          <button className="btn" onClick={() => handleDecision(true)}>是</button>
          <button className="btn" onClick={() => handleDecision(false)}>否</button>
        </div>
      </div>
    </div>
  );
};

export default TyphoonModal;