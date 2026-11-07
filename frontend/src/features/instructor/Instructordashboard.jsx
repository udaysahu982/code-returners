import React from 'react'
import Sidebarfunctionality from '../../functionalities/Sidebarfunctionality'
import { Outlet } from 'react-router-dom'

const Instructordashboard = () => {
  return (
     <>
        <Sidebarfunctionality/>
        <div className="h-screen w-full bg-slate-100 overflow-hidden">

            <div className="flex h-full w-full gap-[5px] pt-[12px]">

                {/* LEFT SIDE - Sidebar */}
                
              


                {/* RIGHT SIDE - Main Content */}
                <section className="flex-1 min-w-0 h-[calc(100%-12px)]">

                    {/* Top Navbar */}
                    <div className="flex items-center justify-between">

                    </div>


                    {/* Main Dashboard Area */}
                    <div className="w-full h-full bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                        <Outlet/>
                    </div>

                </section>

            </div>

        </div>
        </>
  )
}

export default Instructordashboard
