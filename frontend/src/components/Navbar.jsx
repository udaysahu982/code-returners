import React from 'react'
import Logo from './common/Logo'
import Searchbar from './common/Searchbar'
import Menu from './smallcomponent/Menu'
import { useNavigate } from 'react-router-dom'

const Navbar = ({onMenuClick}) => {

  const navigate = useNavigate();

  const homePage = () =>{
        navigate('/');
  }

   const coursesPage = () =>{
        navigate('/courses');
  }

   const aboutusPage = () =>{
        navigate('/aboutus');
  }

   const contactusPage = () =>{
        navigate('/contactus');
  }
  return (
     <header className="w-full h-20 px-6 md:px-12 lg:px-20 flex items-center justify-between bg-white shadow-md">

      
        <Logo/>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <a className="text-blue-600 font-semibold hover:text-blue-700" onClick={homePage}>
          Home
        </a>

        <a  className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={coursesPage}>
          Courses
        </a>

        <a  className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={aboutusPage}>
          About Us
        </a>

        <a className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={contactusPage}>
          Contact Us
        </a>
      </nav>

      {/* Search Bar and Menu */}
      <div className="flex items-center gap-5">

        {/* Search */}
       <Searchbar/>

        {/* Three Line Menu */}
        <Menu type="open" onClick={onMenuClick}/>

      </div>

    </header>
  )
}

export default Navbar
