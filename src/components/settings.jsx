import React from 'react';

function SettingsModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
           <div className="modal-body">
                  <h2>設定</h2>
               <p>這是設定的內容。</p>
           </div>

      </div>
    </div>
  );
}

export default SettingsModal;