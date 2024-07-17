import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import MapPage from './Pages/MapPage';
import Collection from './Pages/Collection';
import MainPage from './Pages/MainPage';
import ChooseAreaPage from './Pages/ChooseAreaPage';
import './App.scss';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
    <Router>
        <Routes>
          <Route path="/start" element={<StartPage />} />
          <Route path="/main" element={<MainPage />} />
<<<<<<< HEAD
          <Route path="/home" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
=======
>>>>>>> main
          <Route path="/collection" element={<Collection />} />
          <Route path="/area" element={<ChooseAreaPage />} />
        </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;