import { useState } from 'react';
import turkeyLogo from './assets/turkey.svg';
import { EventCard } from './components/eventCard';
import './App.css';
import Register from './pages/registrationPage';

function App() {

  return (
    <>
      <div className="App">
        <Register />
      </div>
    </>
  );
}

export default App;
