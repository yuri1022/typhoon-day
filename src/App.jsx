import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import StartPage from './Pages/StartPage';
import MapPage from './Pages/MapPage';
import Collection from './Pages/Collection';
import MainPage from './Pages/MainPage';
import ChooseAreaPage from './Pages/ChooseAreaPage';
import './App.scss';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/area" element={<ChooseAreaPage />} />
        </Routes>
    </Router>
  );
}

export default App;