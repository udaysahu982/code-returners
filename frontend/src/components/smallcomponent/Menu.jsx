import React from 'react'

const Menu = ({ type, onClick }) => {
  return (
     <button
      onClick={onClick}
      aria-label={type === "open" ? "Open menu" : "Close menu"}
      className="p-2 flex flex-col items-center justify-center hover:bg-gray-100 rounded-lg"
    >
      {/* Show three lines when type is open */}
      {type === "open" && (
        <div className="flex flex-col gap-1.5">
          <span className="w-7 h-0.5 bg-gray-700 rounded"></span>
          <span className="w-7 h-0.5 bg-gray-700 rounded"></span>
          <span className="w-7 h-0.5 bg-gray-700 rounded"></span>
        </div>
      )}

      {/* Show close icon when type is close */}
      {type === "close" && (
        <span className="text-3xl leading-none text-gray-600">
          &times;
        </span>
      )}
    </button>
  )
}

export default Menu
