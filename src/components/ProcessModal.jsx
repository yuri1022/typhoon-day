import React, { useState } from 'react';
import Step1 from '../assets/svg/step1.svg';
import Step2 from '../assets/svg/step2.svg';
import Step3 from '../assets/svg/step3.svg';
import Step4 from '../assets/svg/step4.svg';
import Step5 from '../assets/svg/step5.svg';
import Step6 from '../assets/svg/step6.svg';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/processmodal.scss';
import Modal from './Modal';

const ProcessModal = ({ show,onClose }) => {
    const navigate = useNavigate();

  const steps = [
    {
      text: "1.選擇地區",
      image: Step1,
    },
    {
      text: "2.選擇聊天室其中一個訊息，按下回覆",
      image: Step2,
    },
    {
      text: "3.在回覆視窗中，選擇一個選項",
      image: Step3,
    },
    {
      text: "4.在聊天室回覆完三個訊息後，需要回覆是否要放假",
      image: Step4,
    },
    {
      text: "5.第一輪颱風結束",
      image: Step5,
    },
    {
      text: "6.選擇是否繼續遊戲，第三輪遊戲將有機會解鎖隱藏結局",
      image: Step6,
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/area');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="modal">
    <Modal show={show} onClose={onClose} size="modal-content">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>   
        </div>
        <div className="modal-body h100">
          <div className="process-container h100">
            <div className="process-title title-3 text-center">
              遊戲流程
            </div>
            <div className="process-step title-4 mb-2">
            <p className='text m-1'>{steps[currentStep].text}</p>
            <div className="img text-center">
               <img src={steps[currentStep].image} alt={`Step ${currentStep + 1}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
             
            </div>
            <div className="process-navigation d-flex text-center justify-content-end">
              {currentStep > 0 && (
                <button className="btn-white mr-2" onClick={handlePrevious}>
                  上一頁
                </button>
              )}
              <button className="btn mr-1" onClick={handleNext}>
                {currentStep === steps.length - 1 ? '開始遊戲' : '下一頁'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProcessModal;