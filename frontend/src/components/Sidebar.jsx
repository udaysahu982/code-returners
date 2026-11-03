import React from 'react'
import Menu from './smallcomponent/Menu'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {

  const navigate = useNavigate();

  const clickLogin = () =>{
    navigate("/login");
    onClose;
  }

    const clickSignup = () =>{
    navigate("/studentsignup");
    onClose;
  }

  const facultySignup = () =>{
    navigate("/instructorsignup")
  }


  return (
       <>
      {/* Background overlay: only visible when sidebar is open */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        

        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-8">

          <strong className="text-xl text-gray-800">
            Welcome
          </strong>

          {/* Clicking this button closes the sidebar */}
          <Menu type="close" onClick={onClose} />

        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2 mb-6">

          <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
            Navigation
          </p>

          <a href="/" onClick={onClose} className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Home
          </a>

          <a href="/courses" onClick={onClose} className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Courses
          </a>

          <a href="/about" onClick={onClose} className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            About Us
          </a>

          <a href="/contact" onClick={onClose} className="p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600">
            Contact Us
          </a>

        </div>

        <hr className="border-gray-200 my-5" />

        {/* Login and Signup */}
        <div className="flex flex-col gap-3 mb-6">

          <a
            onClick={clickLogin}
            className="text-center w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Log in
          </a>

          <a
            onClick={clickSignup}
            className="text-center w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Sign up
          </a>

        </div>

        <hr className="border-gray-200 my-5" />

        {/* Instructor Section */}
        <div className="mb-6">

          <p className="text-sm font-semibold text-gray-500 mb-3">
            Teach on CodeReturners
          </p>

          <a
            onClick={facultySignup}
            className="block p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600"
          >
            Register as instructor
          </a>

        </div>

        <hr className="border-gray-200 my-5" />

        {/* Help Section */}
        <a
          href="/contact"
          onClick={onClose}
          className="block w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          Help & Support
        </a>

      </aside>
    </>
  )
}

export default Sidebar
