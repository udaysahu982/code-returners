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
import Overview from '../features/dashboardcomponents/Overview';
import BrowseCourses from '../features/dashboardcomponents/BrowseCourses';
import Progress from '../features/dashboardcomponents/Progress';
import Certificates from '../features/dashboardcomponents/Certificates';
import Mycourses from '../features/dashboardcomponents/Mycourses';
import Assignments from '../features/dashboardcomponents/Assignments';
import Profile from '../features/dashboardcomponents/Profile';

const ProjectRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        </Route>

         {/* Student Dashboard Layout */}
         <Route path="/student" element={<Studentdashboard/>}>

                <Route index element={<Navigate to="overview" replace />} />

                <Route path="overview" element={<Overview />} />
                <Route path="progress" element={<Progress />} />
                <Route path="browsecourses" element={<BrowseCourses />} />
                <Route path="mycourses" element={<Mycourses />} />
                <Route path="assignments" element={<Assignments />} />
                <Route path="certificates" element={<Certificates />} />
                <Route path="profile" element={<Profile />} />

          </Route>


        <Route path="/studentsignup" element={<Studentsignup/>}/>
        <Route path="//instructorsignup" element={<Instructorsignup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default ProjectRoutes
