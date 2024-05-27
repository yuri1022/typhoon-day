import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StartPage from './Pages/StartPage';
import Collection from './Pages/Collection';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
    </Router>
  );
}

export default App;