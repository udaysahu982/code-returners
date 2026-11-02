import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../features/Auth/Login';
import Studentsignup from '../features/Auth/studentSignup';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Courses from '../pages/Courses';

const ProjectRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/studentsignup" element={<Studentsignup/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default ProjectRoutes
