import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Modal({ show, onClose, size, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="modal">
      <div className={`modal-content ${size}`} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.string, // Define the size prop
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  size: '', // Default size is an empty string
};

export default Modal;