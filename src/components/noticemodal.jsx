import React, { useEffect, useRef } from 'react';

const NoticeModal = ({ show, onClose,option }) => {
  console.log(option);
  const modalRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
 <div className="modal">
      <div className="modal-content-dialog" ref={modalRef}>
        <div className="modal-body m-1">
        <p className='body-5 m-1'>環境{option.enviroment}：{option.descE}</p>
        <p className='body-5 m-1'>民調{option.polling}：{option.descP}</p>
        <p className='body-5 m-1'>經濟{option.funding}：{option.descF}</p>
      </div>
    </div>
    </div>
  );
};

export default NoticeModal;