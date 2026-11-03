import React from 'react'
import Sidebarfunctionality from '../functionalities/Sidebarfunctionality'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Sidebarfunctionality/>

    <Outlet/>
    </>
  )
}

export default MainLayout
