import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../features/Auth/Login';
import Studentsignup from '../features/Auth/signup/Studentsignup';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Courses from '../pages/Courses';
import MainLayout from '../layouts/MainLayout';
import Instructorsignup from '../features/Auth/signup/Instructorsignup';
import Studentdashboard from '../features/student/Studentdashboard';
import Instructordashboard from '../features/instructor/Instructordashboard';

const ProjectRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/student/dashboard' element={<Studentdashboard/>}></Route>
        <Route path='/instructor/dashboard' element={<Instructordashboard/>}></Route>
        </Route>
        <Route path="/studentsignup" element={<Studentsignup/>}/>
        <Route path="//instructorsignup" element={<Instructorsignup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default ProjectRoutes
