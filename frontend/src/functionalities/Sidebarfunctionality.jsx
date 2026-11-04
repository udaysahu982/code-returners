import React, { useState } from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';

const Sidebarfunctionality = () => {


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Function to close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>

      {/* Navbar receives function to open sidebar */}
      <Navbar onMenuClick={openSidebar} />

      {/* Sidebar receives state and function to close */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

    </div>
  )
}

export default Sidebarfunctionality
