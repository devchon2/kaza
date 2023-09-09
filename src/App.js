import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DetailPage from './pages/DetailPage/DetailsPage'

export default function App() {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
       <Route  path='/Details/:id' element={<DetailPage />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route  path='/*' element={<Navigate to='/404'/>} />

      </Routes>
  )
}

