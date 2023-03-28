import React, { useState } from 'react'

export const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  var displayDropdownClass = isOpen ? "hidden" : ""

  return (
    <div className='relative bg-indigo-800 w-64 text-white'>
      <div onClick={() => setIsOpen(!isOpen)}>
        XDDDDDDDDDD
      </div>
      <div className={`absolute left-0 py-1 w-full bg-white ${displayDropdownClass}`}>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> Kategoria 2 </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> Kategoria 1 </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> Kategoria 3 </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> Kategoria 4 </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"> Kategoria 5 </a>
      </div>
    </div>
  )
}
