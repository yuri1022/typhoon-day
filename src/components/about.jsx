import React from 'react';

function AboutModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content-sm">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body">
          <div className="about-container">
            <div className="about-title title-4 text-center">
              九點半工作室
            </div>
        <div className="about-member mt-2 mb-1">
          <div className="title-5 mb-1">成員</div>
          <div className="description body-5 d-flex justify-content-between mb-1">
            <div className="description-item">PM</div>
            <div className="description-item">Phi</div>
          </div>
          <div className="description body-5 d-flex justify-content-between mb-1">
            <div className="description-item">Front-End</div>
            <div className="description-item">Phi/Elaine</div>
          </div>
          <div className="description body-5 d-flex justify-content-between mb-1">
            <div className="description-item">Back-End</div>
            <div className="description-item">Tommy</div>
          </div>
          <div className="description body-5 d-flex justify-content-between mb-1">
            <div className="description-item">UI</div>
            <div className="description-item">北極</div>
          </div>
        </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutModal;