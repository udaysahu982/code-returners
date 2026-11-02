import React from 'react'

const Searchbar = () => {
  return (
        <>
     <input
          type="search"
          placeholder="Search courses..."
          className="hidden sm:block w-44 lg:w-56 px-4 py-2.5 rounded-full border border-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          </>
  )
}

export default Searchbar
