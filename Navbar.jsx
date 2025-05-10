import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
        <div className='flex justify-around bg-purple-800 p-3 text-white  text-xl  relative'>
          <div>
            <h2 className='font-bold'>iTask</h2>
          </div>
          <ul className=' flex space-x-9'>
            <li className='hover:font-bold cursor-pointer transition-all duration-50'>Home</li>
            <li className='hover:font-bold cursor-pointer transition-all duration-50'>Your Tasks</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar