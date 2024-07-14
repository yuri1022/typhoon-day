import React from 'react';

function DataModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body">
          <div className="data-container">
            <div className="data-title title-3 text-center">
              氣象資料
            </div>
            <div className="typhoon-pic-container w100 bd-2 bdrs-5 mt-2" style={{height:'29rem'}}>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DataModal;