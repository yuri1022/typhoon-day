import React ,{ useState } from 'react';
import Navbar from '../components/navbar';
import Major from '../assets/svg/major_collection.svg';
import ArrowDown from '../assets/svg/arrowdown.svg';
import DataModal from '../components/MeteorologicalData';
import HistoryModal from '../components/replyhistory';
import '../assets/scss/mainpage.scss';

function MainPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const openDataModal = () => setShowData(true);
  const closeDataModal = () => setShowData(false);

  const openHistoryModal = () => setShowHistory(true);
  const closeHistoryModal = () => setShowHistory(false);

  return (
<>
<Navbar />
<div className="main-page w100 h100 pl-4 pr-4" style={{ paddingTop: '5rem',height:'100vh'}}>
    <div className="main-page-container w100 h100 d-flex pt-2 pb-2 ">
    <div className="main-page-left col-7">
      <div className="left-picture w-100" style={{height:'25rem'}}>
        <img className="h100 w100 contain bg-grey200 bdrs-5" src={Major} alt="" />
      </div>
      <div className="left-chat w-100 bd-2 bdrs-5 mt-3 over-y-scroll" style={{height:'19.1rem'}}>
     <div className="header title-4 d-flex align-items-center justify-content-center" style={{height:'4rem',borderBottom:'2px solid var(--black)'}}>聊天室</div>
      <div className="chat-box-container d-flex pt-2 pl-1">
      <div className="chat-box-l col-1">
      <div className="img-container d-flex justify-content-center">
        <img className="bd-2" src={Major} alt="" style={{width:'3.75rem',height:'3.75rem',borderRadius:'50%'}}/>
      </div>
       </div>
      <div className="chat-box-r col-11 pr-2">  
     <div className="chat-box title-5 ml-2">氣象學家</div>    
     <div className="chat-box bg-black bdrs-5 mt-1 ml-2 p-2 d-flex flex-column justify-content-between" style={{height:'7.68rem'}}>

      <div className="chat-box-text white body-5">
        「我們預期颱風將帶來大雨，可能增加山區崩塌的風險，建議市政府提前采取相關措施。」
      </div>
      <div className="chat-box-btn d-flex justify-content-end">
        <button className="btn-white-xs">回覆</button>
      </div>
      
      
     </div>
       </div>
      </div>
      <div className="chat-box-container d-flex pt-2 pl-1">
      <div className="chat-box-l col-1">
      <div className="img-container d-flex justify-content-center">
        <img className="bd-2" src={Major} alt="" style={{width:'3.75rem',height:'3.75rem',borderRadius:'50%'}}/>
      </div>
     </div>
     <div className="chat-box-r col-11 pr-2">  
     <div className="chat-box title-5 ml-2">氣象學家</div>    
     <div className="chat-box bg-black bdrs-5 mt-1 ml-2 p-2 d-flex flex-column justify-content-between" style={{height:'7.68rem'}}>

      <div className="chat-box-text white body-5">
        「我們預期颱風將帶來大雨，可能增加山區崩塌的風險，建議市政府提前采取相關措施。」
      </div>
      <div className="chat-box-btn d-flex justify-content-end">
        <button className="btn-white-xs">回覆</button>
      </div>
      
      
     </div>
     </div>

      </div>

      </div>
    </div>
    <div className="main-page-right col-5">
      <div className="tools w-100 bd-2 bdrs-5 d-flex" style={{height:'4rem'}}>
        <div className="title-4 d-flex w100 justify-content-center align-items-center">小工具</div>
        <div className="arrow-down mr-2" onClick={toggleDropdown}>
          <img src={ArrowDown} alt="" />
        </div>
      </div>
      <div className="dropdown">
      {showDropdown && (
        <div className={`dropdown-content bg-white w100 bd-2 bdrs-5 ${showDropdown ? 'show' : ''}`}>
          <div className="button-container h100 mr-2 ml-2">
          <button className='btn-xl searching mt-2' onClick={openDataModal}>查看氣象資料</button>
          <button className='btn-xl searching mt-2' onClick={openHistoryModal}>查看歷史回覆紀錄</button>
          </div>
        </div>
      )}
      {showData && <DataModal onClose={closeDataModal} />}
      {showHistory && <HistoryModal onClose={closeHistoryModal} />}

      </div>

      <div className="reply w-100 bd-2 bdrs-5 mt-2" style={{height:'40.6rem'}}>
        <div className="header title-4 d-flex align-items-center justify-content-center" style={{height:'4rem',borderBottom:'2px solid var(--black)'}}>回覆</div>
        <div className="character" style={{height:'9.06rem',borderBottom:'2px solid var(--black)'}}>

      <div className="chat-box-container d-flex pt-2 pl-1">
      <div className="chat-box-l col-1">
      <div className="img-container d-flex pl-2 justify-content-center">
        <img className="bd-2" src={Major} alt="" style={{width:'3.75rem',height:'3.75rem',borderRadius:'50%'}}/>
      </div>
     </div>
     <div className="chat-box-r col-11 pr-2">  
     <div className="chat-box title-5 ml-2">氣象學家</div>    
     <div className="chat-box bdrs-5 mt-1 ml-2 d-flex flex-column justify-content-between" style={{height:'7.68rem'}}>

      <div className="chat-box-text body-5">
        「面對颱風威脅，是否禁止民眾外出是一個引人關注的話題。這引起了社會對於自由和安全之間平衡的討論。我們將持續關注市政府在這一方面的政策決定和市民的反響。」
      </div>
      
      
     </div>
     </div>

      </div>
          
        </div>
        <div className="chat over-y-scroll" style={{height:'27.4rem'}}>
          <div className="chat-box m-2 bg-black white bdrs-5 p-2" style={{height:'9.3rem'}}>「面對颱風威脅，是否禁止民眾外出是一個引人關注的話題。這引起了社會對於自由和安全之間平衡的討論。我們將持續關注市政府在這一方面的政策決定和市民的反響。」</div>
          <div className="chat-box m-2 bg-black white bdrs-5 p-2" style={{height:'9.3rem'}}>「面對颱風威脅，是否禁止民眾外出是一個引人關注的話題。這引起了社會對於自由和安全之間平衡的討論。我們將持續關注市政府在這一方面的政策決定和市民的反響。」</div>
          <div className="chat-box m-2 bg-black white bdrs-5 p-2" style={{height:'9.3rem'}}>「面對颱風威脅，是否禁止民眾外出是一個引人關注的話題。這引起了社會對於自由和安全之間平衡的討論。我們將持續關注市政府在這一方面的政策決定和市民的反響。」</div>
        </div>
      </div>
    </div>
    </div>

</div>
</>
  );
}

export default MainPage;