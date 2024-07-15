import React, { useEffect, useRef } from 'react';

const EndingModal = ({ show, onClose,message }) => {
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
        <p className='title-4 m-1'>{message?.name}</p>
        <p className='body-5 m-1'>{message?.description}</p>
      </div>
    </div>
    </div>
  );
};

export default EndingModal;