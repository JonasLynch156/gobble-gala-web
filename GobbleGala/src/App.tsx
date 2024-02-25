import { useState } from 'react'
import { LogInButton } from './components/logInButton'
import { LoginPage } from './pages/loginPage'
import turkeyLogo from './assets/turkey.svg'


import './App.css'

function App() {

  return (
    <>
      <div className='title'><img src={turkeyLogo} className="gobbielogo" alt="Gobbie the gobble gala turkey" /> GobbleGala</div>
      <LoginPage />
      <LogInButton />
    </>
  )
}

export default App
