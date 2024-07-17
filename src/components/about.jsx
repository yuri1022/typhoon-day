import React from 'react';
import Ins from '../assets/svg/ins.svg';
import DC from '../assets/svg/dc.svg';
import FB from '../assets/svg/fb.svg';
import Modal from './Modal.js';

function AboutModal({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose} size="modal-content-sm">
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
          <div className="about-contact d-flex justify-content-center">
            <img src={Ins} alt="Instagram" />
            <img src={DC} alt="Discord" />
            <img src={FB} alt="Facebook" />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AboutModal;