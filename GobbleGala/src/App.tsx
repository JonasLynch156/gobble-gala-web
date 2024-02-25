import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/registrationPage';
import { CatererViewPage } from './pages/catererViewPage';
import { ProfileCreation } from './pages/profileCreation';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='cater-register' element={<ProfileCreation isHost={false}/>}></Route>
        <Route path='cater-dashboard' element={<CatererViewPage/>}></Route>
        <Route path='host-register' element={<ProfileCreation isHost/>}/>
        {/* <Route path='host-dashboard' element={<HostViewPage />}></Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
