import React from 'react';
import Ins from '../assets/svg/ins.svg';
import DC from '../assets/svg/dc.svg';
import FB from '../assets/svg/fb.svg';
import MemberA from '../assets/svg/member-a.svg';
import MemberB from '../assets/svg/member-b.svg';
import MemberC from '../assets/svg/member-c.svg';
import MemberD from '../assets/svg/member-d.svg';
import Modal from './Modal.js';
import '../assets/scss/about.scss';

function AboutModal({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose} size="modal-content-about">
      <div className="modal-body">
        <div className="about-container">
          <div className="about-title mt-1 mb-4 title-4 text-center">
            九點半工作室
          </div>
          <div className="about-member mt-2 mb-1 pl-2 pr-2">
            <div className="description body-5 d-flex bd-2 bdrs-5 justify-content-between p-1 align-items-center">
              
              <div className="description-item d-flex align-items-center">
              <div className="description-image">
                <img src={MemberA} alt="" />
              </div>
              <div className="description-name ml-1 title-5">Phi</div>
              </div>
              <div className="description-item">PM/Front-End</div>
            </div>
            <div className="description body-5 d-flex bd-2 bdrs-5 justify-content-between p-1 align-items-center">
              
              <div className="description-item d-flex align-items-center">
              <div className="description-image">
                <img src={MemberB} alt="" />
              </div>
              <div className="description-name ml-1 title-5">Elaine</div>
              </div>
              <div className="description-item">Front-End</div>
            </div>
            <div className="description body-5 d-flex bd-2 bdrs-5 justify-content-between p-1 align-items-center">
              
              <div className="description-item d-flex align-items-center">
              <div className="description-image">
                <img src={MemberC} alt="" />
              </div>
              <div className="description-name ml-1 title-5">Tommy</div>
              </div>
              <div className="description-item">Back-End</div>
            </div>
            <div className="description body-5 d-flex bd-2 bdrs-5 justify-content-between mb-4 p-1 align-items-center">
              
              <div className="description-item d-flex align-items-center">
              <div className="description-image">
                <img src={MemberD} alt="" />
              </div>
              <div className="description-name ml-1 title-5">北極</div>
              </div>
              <div className="description-item">UI</div>
            </div>
          </div>
          <div className="about-contact d-flex justify-content-between pl-2 pr-2">
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