import React from 'react';
import Modal from './Modal';

const NoticeModal = ({ show, onClose,option }) => {
  console.log(option);
  
  return (
 <div className="modal">
      <Modal show={show} onClose={onClose} size="modal-content-dialog">
        <div className="modal-body m-1">
        <p className='body-5 m-1'>環境{option.enviroment}：{option.descE}</p>
        <p className='body-5 m-1'>民調{option.polling}：{option.descP}</p>
        <p className='body-5 m-1'>經濟{option.funding}：{option.descF}</p>
      </div>
    </Modal>
    </div>
  );
};

export default NoticeModal;