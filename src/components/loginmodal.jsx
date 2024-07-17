// LoginModal.js
import React, { useState, useEffect } from 'react';
import APIService from '../service/APIService.ts';
import '../assets/scss/loginmodal.scss';
import google from '../assets/svg/google.svg';
import notice from '../assets/svg/notice.svg';
import Modal from './Modal.js';

const LoginModal = ({ show,onClose, login }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [loginMode, setLoginMode] = useState('login');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      login(storedUser);
      onClose();
    }
  }, [login, onClose]);

  const validateEmail = (email) => {
    return email.includes('@');
  };
  const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 24;
  };

  const handleLogin = () => {
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = '此信箱不存在';
    }
    if (!validatePassword(password)) {
      newErrors.password = '密碼限6-24碼英文數字符號';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const userData = { email, password };
    APIService.signIn(userData)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          localStorage.setItem('user', JSON.stringify(data.data));
          login(data.data); 
          onClose();
        } else {
          setServerError(data.message);
        }
      })
      .catch(error => {
        setServerError('登入時發生錯誤，請稍後再試');
      });
  };

  const handleRegister = () => {
   const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = '此信箱不存在';
    }
    if (!validatePassword(password)) {
      newErrors.password = '密碼限6-24碼英文數字符號';
    }
    if (password !== passwordCheck) {
      newErrors.passwordCheck = '兩個密碼並不相符，請再試一次';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userData = { name: username, email, password, passwordCheck };
    console.log(userData)
    APIService.signUp(userData)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          localStorage.setItem('user', JSON.stringify(data.data));
          login(data.data); 
          onClose();
        } else {
          console.error('Registration failed:', data);
        }
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });
  };

const switchToLogin = () => {
    setLoginMode('login');
    setEmail('');
    setErrors({});
    setPasswordCheck('');
    setPassword('');
    setUsername('');
    setServerError('');
  };

  const switchToRegister = () => {
    setLoginMode('register');
    setEmail('');
    setErrors({});
    setPasswordCheck('');
    setPassword('');
    setUsername('');
    setServerError('');
  };

  return (
    <div className="modal">
    <Modal show={show} onClose={onClose} size="modal-content-login">
        <div className="modal-header">
          <div className="close" onClick={onClose}>&times;</div>
        </div>
        <div className="modal-body">
          <div className="login-container">
            <div className="title-container d-flex justify-content-center mt-2">
          <div className="login-title title-4 pointer mr-3" onClick={switchToLogin}>登入</div>
          <div className="progress-line"></div>
          <div className="login-title title-4 pointer" onClick={switchToRegister}>註冊</div>
            </div>

          <div className="login-body mt-2 d-flex flex-column align-items-center">
            <div className="sub-title title-4 mb-2 align-items-start">
            {loginMode==='register' ? '使用帳號密碼註冊' : '使用帳號密碼登入'}
            </div>
            {loginMode==='register' && (
              <div className="login-item d-flex body-4">
                <div className="item-name">
                  用戶名
                </div>
              <input
                className='body-4'
                type="text"
                placeholder="請輸入用戶名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              </div>

            )}

             <div className="login-item d-flex body-4">
                <div className="item-name">
                  帳號
                </div>
              <input
              className='body-4'
              type="email"
              placeholder="請輸入信箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
              </div>
            {errors.email && <div className="error-message d-flex justify-content-end mb-1">
              <img src={notice} alt="!" />
              {errors.email}
              </div>
              }
            <div className="login-item d-flex body-4">
                <div className="item-name">
                  密碼
                </div>
             <input
             className='body-4'
              type="password"
              placeholder="請輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              </div>
            {errors.password && <div className="error-message d-flex justify-content-end mb-1">
              <img src={notice} alt="!" />
              {errors.password}</div>}
            {serverError && <div className="error-message d-flex justify-content-end mb-1">
                <img src={notice} alt="!" />
                {serverError}
              </div>}  
            {loginMode==='register' && (
            <div className="login-item d-flex body-4">
              <div className="item-name">
                  確認
                </div>
              <input
              className='body-4'
                type="password"
                placeholder="確認密碼"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              </div>
            )}
             {errors.passwordCheck && <div className="error-message d-flex justify-content-end mb-1">
              <img src={notice} alt="!" />
              {errors.passwordCheck}
              </div>}

            <button className="login-button"onClick={loginMode==='register'? handleRegister : handleLogin}>
              {loginMode==='register' ? '註冊' : '登入'}
            </button>
            <div className="forget mt-2 d-flex justify-content-end">
              <div className="forget-left mr-2">忘記帳號</div>
              <div className="forget-progress-line"></div>
              <div className="forget-right">忘記密碼</div>

            </div>
          </div>

          <div className="login-google mt-2 d-flex flex-column align-items-center">
             <div className="sub-title body-5 mb-2 align-items-start">
            或使用其他方式繼續
            </div>
            <button className="login-button-google">
              <div className="button-container d-flex align-items-center justify-content-center">
              <img className="mr-1" src={google} alt="G" />
              google帳戶
              </div>

            </button>

          </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;