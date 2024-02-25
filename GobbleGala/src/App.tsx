import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/registrationPage';
import { CatererViewPage } from './pages/catererViewPage';
import { HostRegister } from './pages/hostRegister';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        {/* The below route does not exist.*/}
        <Route path='cater-dashboard' element={<CatererViewPage />}></Route>
        <Route path='host-register' element={<HostRegister/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
