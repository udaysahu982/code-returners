import React from 'react'
import { useLocation } from 'react-router-dom'

const useBasePath = () => {

    const {pathname} = useLocation();
  
    if(pathname.startsWith("/instructor")) return "/instructor";
    return "student";
}

export default useBasePath
