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
import BrowseCourses from '../features/courses/BrowseCourses';
import Progress from '../features/dashboardcomponents/Progress';
import Certificates from '../features/dashboardcomponents/Certificates';
import Mycourses from '../features/dashboardcomponents/Mycourses';
import Assignments from '../features/dashboardcomponents/Assignments';
import Profile from '../features/dashboardcomponents/Profile';
import TestFunctionality from '../Test/TestFunctionality';
import CreateCourse from '../features/instructor/functionalities/CreateCourse';
import CreatedCourses from '../features/instructor/functionalities/CreatedCourses';

const ProjectRoutes = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="test" element={<TestFunctionality/>} />
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

          {/* Instructor Dashboard Layout */}
          <Route path="/instructor" element={<Instructordashboard/>}>

                <Route index element={<Navigate to="overview" replace />} />

                <Route path="overview" element={<Overview />} />
                <Route path="createCourse" element={<CreateCourse />} />
                <Route path="createdCourses" element={<CreatedCourses/>}/>
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
