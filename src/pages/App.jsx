import HomePage from './homePage/Homepage.jsx';
import ErrorPage from './errorPage/Error'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  <div className='App'>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/error' element={<ErrorPage />} />
  </Routes>
  </BrowserRouter>
  </div>
}


export default App;
