import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StartPage from './Pages/StartPage';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;