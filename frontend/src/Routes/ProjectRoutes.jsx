import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../Auth/Login';
import Studentsignup from '../Auth/studentSignup';

const ProjectRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/studentsignup" element={<Studentsignup/>}/>
      
      </Routes>
   </BrowserRouter>
  )
}

export default ProjectRoutes
