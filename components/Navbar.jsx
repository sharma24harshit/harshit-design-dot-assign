import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center border-2 px-8'>
            <div>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={80}
                    height={80}
                    priority
                />
            </div>
            <div className='flex justify-center items-center gap-4'>
                <div className='flex justify-center items-center gap-5 font-bold text-base text-color mr-6'>
                    <p>WHO WE SERVE</p>
                    <p>SOLUTIONS</p>
                    <p>RESOURCES</p>
                    <p>ABOUT US</p>
                    <p>CONTACT US</p>
                </div>
                <div className='flex justify-center gap-4 align-center'>
                <Image
                    src="/search.svg"
                    alt="search"
                    width={30}
                    height={30}
                    priority
                />
                <p className='flex items-center gap-2 font-bold text-base text-color'>IND 

                <Image
                    src="/dropDownArrow.svg"
                    alt="search"
                    width={13}
                    height={9}
                    priority
                />
                </p>
                <p className='flex items-center gap-2 font-bold text-base text-color'>ENGLISH
                <Image
                    src="/dropDownArrow.svg"
                    alt="search"
                    width={13}
                    height={9}
                    priority
                />
                </p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar