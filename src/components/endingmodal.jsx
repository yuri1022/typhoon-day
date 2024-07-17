import React from 'react';
import Modal from './Modal';

const EndingModal = ({ show, onClose,message }) => {

  return (
 <div className="modal">
    <Modal show={show} onClose={onClose} size="modal-content-dialog">
        <div className="modal-body m-1">
        <p className='title-4 m-1'>{message?.name}</p>
        <p className='body-5 m-1'>{message?.description}</p>
      </div>
    </Modal>
    </div>
  );
};

export default EndingModal;