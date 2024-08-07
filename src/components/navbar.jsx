import  React,{ useState,useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import AboutModal from './about';
import SettingsModal from './settings';
import ProcessModal from './ProcessModal'
import '../assets/scss/navbar.scss';
import APIService from '../service/APIService.ts';
import Logo from '../assets/svg/LOGO.svg';
import { UserContext } from '../context/UserContext';
import LoginModal from './loginmodal.jsx';



function Navbar() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, login, logout } = useContext(UserContext);

 useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      login(storedUser);
    }
  }, [login]);

  useEffect(() => {
    APIService.getUsers()
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          console.log(data);
        } else {
          console.error('API did not return the expected data structure:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching endings data:', error);
      });
  }, []);



  const openAboutModal = () => setShowAboutModal(true);
  const closeAboutModal = () => setShowAboutModal(false);

  const openSettingsModal = () => {
    if(!user){
      alert('please login')
      return
    }
    setShowSettingsModal(true);
  }
  const closeSettingsModal = () => setShowSettingsModal(false);

  const openProcessModal = () => setShowProcessModal(true);
  const closeProcessModal = () =>setShowProcessModal(false);

    const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

    useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    };

    hamburger.addEventListener('click', toggleMenu);

    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);
  return (
      <div className='navbar w100 d-flex pt-3 pb-3  justify-content-between' 
      style={{
      backgroundColor:'var(--white)',
      position:'fixed' , 
      height:'5rem',
      borderBottom:'2px solid black',
      zIndex:'100'
      }}>
        <div className="navbar-left">
          <div className="logo title-4 ml-4">
            <Link to='/start'><img src={Logo} alt="" style={{width:'100px',height:'40px'}}/></Link>
            </div>
          </div>
        <div className="navbar-right d-flex mr-4 align-items-center">
          <div className="about title-4 mr-4 pointer" onClick={openAboutModal}>關於我們</div>
          <div className="setting title-4 mr-4 pointer" onClick={openSettingsModal}>設定</div>
          <div className="collection title-4 mr-4">
            <Link to='/collection'>收集</Link>
            </div>
            <div className="process title-4 pointer mr-4" onClick={openProcessModal}>遊戲流程</div>
            <button className="login white title-4 bdrs-5 pr-2 pl-2 pointer" onClick={user ? logout : openLoginModal}>
              {user ? '登出' : '登入/註冊'}
            </button>
        </div>
         <div className="hamburger-menu mr-4 pointer">
        &#9776;
      </div>
      <div className="mobile-menu">
        <div className="about body-5 pointer" onClick={openAboutModal}>關於我們</div>
        <div className="setting body-5 pointer" onClick={openSettingsModal}>設定</div>
        <div className="collection body-5">
          <Link to='/collection'>收集</Link>
        </div>
        <div className="process body-5 pointer" onClick={openProcessModal}>遊戲流程</div>
      <div className="login white title-4 w100 d-flex align-items-center justify-content-center pointer" onClick={user ? logout : openLoginModal}>
          {user ? '登出' : '登入/註冊'}
            </div>
      </div>
        
      {showAboutModal && <AboutModal show={showAboutModal} onClose={closeAboutModal} />}
      {showSettingsModal && <SettingsModal show={showSettingsModal} onClose={closeSettingsModal} user={user}/>}
      {showProcessModal && <ProcessModal show={showProcessModal} onClose={closeProcessModal} />}
       {showLoginModal && <LoginModal show={showLoginModal} onClose={closeLoginModal} login={login} />}
      </div>
  );
}

export default Navbar;