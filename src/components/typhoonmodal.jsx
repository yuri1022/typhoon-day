import React from 'react';

const TyphoonModal = ({ onClose }) => {
  const handleDecision = (decision) => {
    onClose(decision);
  };

  return (
    <div className="modal">
      <div className="modal-content-dialog">
        <div className="modal-body d-flex flex-column text-center">
          <div className="next-round-title mt-1">
            <div className="title-4">是否要放颱風假？</div>
          </div>
          <div className="next-round-text mt-1">
            <div className="body-5">你的決定將影響結局</div>
          </div>
          <div className="next-round-button d-flex justify-content-center">
          <button className="btn-white m-1" onClick={() => handleDecision(false)}>不放假</button>
           <button className="btn m-1" onClick={() => handleDecision(true)}>放假</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TyphoonModal;