import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[850px] bg-[#00338D] flex w-full overflow-hidden">
          <div className="relative z-20 flex w-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:w-[42%] lg:max-w-[640px] lg:shrink-0 lg:px-14 lg:py-16 xl:px-[4.5rem] xl:py-20">
        <div className="flex max-w-xl flex-col gap-4 lg:gap-9 xl:gap-4 mt-40">
          <p className="text-base font-bold uppercase leading-relaxed tracking-[0.2em] sm:text-xs text-[#B8B3B3]">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-[clamp(1.875rem,3.6vw,3.375rem)] font-bold uppercase leading-[1.06] tracking-[0.04em] text-white">
            Empowered
            <br />
            <span className="mt-1 inline-block border-b-[5px] border-[#B8B3B3] pb-1.5">
              Workplaces
            </span>
          </h1>

          <p className="max-w-[420px] text-[15px] font-light leading-[1.65] text-[#FFFFFF] lg:text-[15px] xl:max-w-md">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared
            success.
          </p>

          <div className="pt-1">
            <button
              type="button"
              className="origin-left rounded-l-[10px] bg-[#FF7F11] py-[1.125rem] pl-7 pr-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-black shadow-lg transition-[filter] hover:brightness-95"
              style={{ transform: "skewX(-14deg)" }}
            >
              <span
                className="flex items-center gap-4"
                style={{ transform: "skewX(14deg)" }}
              >
                <Image
                  src="/rightArrow.svg"
                  alt=""
                  width={28}
                  height={10}
                  className="shrink-0"
                  priority
                />
                Let&apos;s Connect
              </span>
            </button>
          </div>
        </div>

        <p className="w-full text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-white sm:text-[11px] lg:mt-14">
          Accounting, Taxation, & Business Advisory between India, Japan, and the
          World
        </p>
      </div>
        {/* <div className='w-[35%]'>
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
        </div> */}
        <div className='absolute w-[60%] h-full -right-10 -top-48 -rotate-[32deg] overflow-hidden rounded-[130px]'>
        <div className='relative w-[140%] h-[150%] -left-[20%] -top-[20%] rotate-[32deg] rounded-xl'>
        <Image
        className='object-cover'
                                src="/hero.jpg"
                                alt="hero image"
                               fill
                                priority
                            />
        </div>
        </div>
        {/* <div className='w-[65%]'>
            <div className='border-3 w-full overflow-hidden shadow-lg'>
                <div className=''>
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
        </div> */}
    </section>
  )
}
export default Hero
