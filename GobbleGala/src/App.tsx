import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/registrationPage';
import { CatererViewPage } from './pages/catererViewPage';
import { HostRegister } from './pages/hostRegister';
import { CatererRegistration } from './pages/catererRegistration';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='cater-register' element={<CatererRegistration />}></Route>
        <Route path='cater-dashboard' element={<CatererViewPage />}></Route>
        <Route path='host-register' element={<HostRegister/>}/>
        {/* <Route path='host-dashboard' element={<HostViewPage />}></Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
