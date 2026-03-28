import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[#00338D] flex w-full'>
        <div className='w-[35%]'>
        <div>
            <p className='font-bold text-base uppercase text-[#B8B3B3]'>Accountants and Global Business Advisors</p>
            <p className='bold text-6xl text-[#FFFFFF]'>EMPOWERED  <br />
            WORKPLACES</p>
            <p className=' text-base font-light text-[#FFFFFF]'>by fostering inclusivity, encouraging growth, promoting collaboration, valuing diversity, supporting innovation, and building trust for shared success.</p>
            <button 
            className='flex items-center gap-4 justify-center bg-[#FF7300] rounded-md font-poppins text-xs font-semibold p-6 transition-all duration-300 hover:bg-orange-600 hover:shadow-md uppercase'>
               <Image
                                src="/rightArrow.svg"
                                alt="Right Arrow"
                                width={32}
                                height={10}
                                priority
                            />
                Lets Connect
                </button>
        </div>
        <p className='tetx-sm font-semibold uppercase text-[#FFFFFF]'>Accounting, Taxation, & Business Advisory between India, Japan, and the World</p>
        </div>
        <div className='w-[65%]'>
            <div className='border-3 -rotate-40 overflow-hidden shadow-lg'>
                <div className='rotate-40'>
                <Image
        className='w-full object-cover'
                                src="/hero.jpg"
                                alt="hero image"
                                width={900}
                                height={500}
                                priority
                            />
                            </div>
        </div>
        </div>
    </section>
  )
}

export default Hero