import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex'>
    <div>
        logo
    </div>
    <section>
        <div className='border-2 border-red-500 flex gap-3 font-bold text-base text-color'>
            <p>WHO WE SERVE</p>
            <p>SOLUTIONS</p>
            <p>RESOURCES</p>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
        </div>
    </section>
   </nav>
  )
}

export default Navbar