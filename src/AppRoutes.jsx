import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Certifications from './screens/Certifications'
import Contact from './screens/Contact'
import HomeScreen from './screens/HomeScreen'
import PageNotFound from './screens/PageNotFound'
import Projects from './screens/Projects'

const AppRoutes = () => {
  const navigate = useNavigate()
  return (
    <>
    <nav className='barNav'>
        <div className='barNav__item'  onClick={()=>{navigate('/')}}>Home</div>
        <div className='barNav__item'  onClick={()=>{navigate('/projects')}}>Projects</div>
        <div className='barNav__item'  onClick={()=>{navigate('/certifications')}}>Certifications</div>
        <div className='barNav__item'  onClick={()=>{navigate('/contact')}}>Contact</div>
    </nav>
    <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/certifications' element={<Certifications/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default AppRoutes