import './App.css';
import React from 'react';
import Calculator from './components/pages/calculator/Calculator';
import Login from './components/pages/login/Login';
import News from './components/pages/news/News';
import Upload from './components/pages/upload/Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/pages/signup/Signup';

function App() {
  return (
    // <div className='App'>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Calculator />}>
          <Route path='/news' element={<News />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Upload' element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
