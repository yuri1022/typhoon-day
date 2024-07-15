import React from 'react';

const NextRoundModal = ({ onClose }) => {
  const handleDecision = (decision) => {
    onClose(decision);
  };

  return (
    <div className="modal">
      <div className="modal-content-dialog">
        <div className="modal-body d-flex flex-column text-center">
          <div className="next-round-title mt-1">
            <div className="title-4">是否要進行下一輪?</div>
          </div>
          <div className="next-round-text mt-1">
            <div className="body-5">結束三輪遊戲，將有機會解鎖隱藏結局！</div>
          </div>
          <div className="next-round-button d-flex justify-content-center">
          <button className="btn-white m-1" onClick={() => handleDecision(false)}>放棄</button>
           <button className="btn m-1" onClick={() => handleDecision(true)}>繼續遊戲</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NextRoundModal;