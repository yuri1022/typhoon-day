import React from 'react';

function AboutModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content-sm">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body">
        <h2>關於我們</h2>
        <p>這是關於我們的內容。</p>
        </div>

      </div>
    </div>
  );
}

export default AboutModal;