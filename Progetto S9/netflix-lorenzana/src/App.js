import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyFooter from './components/footer';
import Homepage from './components/homepage';
import MyNavbar from './components/navbar';
import ProfilePage from './components/profilepage';
import SettingsPage from './components/settings';

function App() {
  return (
    <Router>
    <MyNavbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;

