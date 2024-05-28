import  React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import AboutModal from './about';
import SettingsModal from './settings';

function Navbar() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const openAboutModal = () => setShowAboutModal(true);
  const closeAboutModal = () => setShowAboutModal(false);

  const openSettingsModal = () => setShowSettingsModal(true);
  const closeSettingsModal = () => setShowSettingsModal(false);
  return (
      <div className='navbar w100 d-flex pt-3 pb-3  justify-content-between' 
      style={{
      backgroundColor:'var(--white)',
      position:'fixed' , 
      height:'2rem',
      borderBottom:'2px solid black',
      zIndex:'100'
      }}>
        <div className="navbar-left">
          <div className="logo title-3 ml-4">
            <Link to='/start'>LOGO</Link>
            </div>
          </div>
        <div className="navbar-right d-flex mr-4">
          <div className="about title-3 mr-4" onClick={openAboutModal} style={{cursor:'pointer'}}>關於我們</div>
          <div className="setting title-3 mr-4" onClick={openSettingsModal} style={{cursor:'pointer'}}>設定</div>
          <div className="collection title-3 mr-4">
            <Link to='/collection'>收集</Link></div>
        </div>
        
      {showAboutModal && <AboutModal onClose={closeAboutModal} />}
      {showSettingsModal && <SettingsModal onClose={closeSettingsModal} />}
      </div>
  );
}

export default Navbar;