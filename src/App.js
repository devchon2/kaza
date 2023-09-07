import './App.css';
import Datas from './datas/DatasControlers.js'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DetailPage from './pages/DetailPage/DetailsPage'

console.log([Datas])
export default function App() {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
       <Route path='/Details/:id' element={<DetailPage />} />
        <Route path='/*' element={<ErrorPage />} />

      </Routes>
  )
}

