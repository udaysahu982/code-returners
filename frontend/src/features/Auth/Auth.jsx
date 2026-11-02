import React, { useState } from 'react'
import Login from './Login';
import Studentsignup from './studentSignup';

const Auth = () => {

     const [page, setPage] = useState("login");
  return (
    <div>
       
      <button onClick={() => setPage("login")}>
        Login
      </button>

      <button onClick={() => setPage("signup")}>
        Signup
      </button>

      {page == "login" && <Login/>}
      {page == "signup" && <Studentsignup/>}
    </div>
  )
}

export default Auth
