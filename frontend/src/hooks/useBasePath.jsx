import React from 'react'
import { useLocation } from 'react-router-dom'

const useBasePath = () => {

    const location = useLocation();
  
    if(location.pathname.startsWith("/instructor")) return "/instructor";

    if(location.pathname.startsWith("/student")) return "/student";
}

export default useBasePath
