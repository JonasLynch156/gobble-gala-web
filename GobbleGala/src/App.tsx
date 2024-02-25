import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/registrationPage';
import { CatererViewPage } from './pages/catererViewPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        {/* The below route does not exist.*/}
        <Route path='cater-dashboard' element={<CatererViewPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
