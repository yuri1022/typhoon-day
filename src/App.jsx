import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import Collection from './Pages/Collection';
import MainPage from './Pages/MainPage';
import ChooseAreaPage from './Pages/ChooseAreaPage';
import './App.scss';
import { UserProvider } from './context/UserContext';
import { APIProvider } from './context/APIContext';
import { GameProvider } from './context/GameContext';


function App() {
  return (
    <UserProvider>
      <GameProvider>
    <APIProvider>
    <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/area" element={<ChooseAreaPage />} />
        </Routes>
    </Router>
    </APIProvider>
     </GameProvider>
    </UserProvider>
  );
}

export default App;