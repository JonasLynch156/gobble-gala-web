import { useState } from 'react';
import turkeyLogo from './assets/turkey.svg';
import { EventCard } from './components/eventCard';
import './App.css';
import Register from './pages/registrationPage';
import { CatererViewPage } from './pages/catererViewPage';

function App() {

  return (
    <>
      <div className="App">
        <CatererViewPage />
      </div>
    </>
  );
}

export default App;
