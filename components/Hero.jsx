import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-350px md:h-[450px] xl:h-[530px] 2xl:h-[850px] bg-[#00338D] flex w-full overflow-hidden">
          <div className="relative z-20 flex w-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 md:w-[40%] lg:w-[35%] lg:max-w-[640px] lg:shrink-0 lg:px-14 lg:py-16 xl:px-6 xl:py-20">
        <div className="flex max-w-xl flex-col gap-4 lg:gap-2 2xl:gap-4 xl:mt-16 2xl:mt-40">
          <p className="font-bold uppercase leading-relaxed tracking-[0.2em] text-sm md:text-[10px] lg:text-[10px] 2xl:text-base text-[#B8B3B3]">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-6xl font-bold uppercase leading-[1.06] tracking-[0.04em] text-black md:text-white">
            Empowered
            <br />
            <span className="mt-1 inline-block border-b-[5px] border-[#B8B3B3] pb-1.5">
              Workplaces
            </span>
          </h1>

          <p className="max-w-[420px] text-sm font-light leading-[1.65] text-[#FFFFFF] md:text-[10px] lg:text-xs 2xl:text-base xl:max-w-md text-black md:text-white">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared
            success.
          </p>

          <div >
            <button
              type="button"
              className="origin-left lg:min-w-[210px] rounded-xl bg-[#FF7F11] p-3 md:p-4 2xl:py-6 pl-7 pr-10 text-[11px] lg:text-[11px] 2xl:text-xs lg:text-sm 2xl:text-xs font-semibold uppercase text-black shadow-lg transition-[filter] hover:brightness-95"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 100%, 0 100%)",
              }}
            >
              <span
                className="flex items-center gap-4" 
              >
                <Image
                  src="/rightArrow.svg"
                  alt="right arrow"
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

        <p className="w-full text-[8px] font-medium uppercase leading-relaxed tracking-[0.16em] text-red-300 md:text-white sm:text-[9px] lg:text-[11px] lg:mt-8 xl:mt-14">
          Accounting, Taxation, & Business Advisory between India, Japan, and the
          World
        </p>
      </div>

        <div className='absolute w-[100%] md:w-[65%] h-full md:h-[110%] lg:h-[118%] xl:h-[120%] 2xl:h-[110%] md:-right-22 lg:-right-20 xl:-right-14 2xl:-right-10 md:-top-38 lg:-top-52 xl:-top-60 2xl:-top-74 rotate-0 md:-rotate-[38deg] overflow-hidden md:rounded-[70px] xl:rounded-[100px] 2xl:rounded-[180px]'>
        <div className='md:relative w-[100%] md:w-[140%] h-[100%] md:h-[135%] -left-[35%] -top-[25%] rotate-0 md:rotate-[32deg]'>
        <Image
        className='object-cover'
                                src="/insight2.jpg"
                                alt="hero image"
                               fill
                                priority
                            />
        </div>
        </div>

        <div className="pointer-events-none absolute bottom-1 right-5 z-30 flex flex-wrap items-center gap-3 sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-10 xl:bottom-14 xl:right-12">
          <div className="flex items-center">
            <Image
              src="/avatar3.png"
              alt="avatar"
              className="relative z-[1] size-6 md:size-6 lg:size-8 xl:size-10 2xl:size-14 rounded-full border-[3px] border-white object-cover shadow-md"
              width={48}
              height={48}
            />
            <Image
              src="/avatar2.png"
              alt="avatar"
              className="relative z-[2] -ml-3 sm:-ml-3 md:-ml-3 lg:-ml-4 xl:-ml-5 2xl:-ml-6 size-6 md:size-6 lg:size-8 xl:size-10 2xl:size-14 rounded-full border-[3px] border-white object-cover shadow-md"
              width={48}
              height={48}
            />
            <Image
              src="/avatar1.png"
              alt="avatar"
              className="relative z-[3] -ml-3 sm:-ml-3 md:-ml-3 lg:-ml-4 xl:-ml-4 2xl:-ml-5 size-6 md:size-6 lg:size-8 xl:size-10 2xl:size-14 rounded-full border-[3px] border-white object-cover shadow-md"
              width={48}
              height={48}
            />
             <div className="relative z-[4] -ml-3 sm:-ml-3 md:-ml-3 lg:-ml-4 xl:-ml-5 2xl:-ml-7 flex size-6 md:size-6 lg:size-8 xl:size-10 2xl:size-14 shrink-0 items-center justify-center rounded-full bg-[#FF7F11] text-center text-[6px] md:text-[6px] lg:text-[8px] font-bold uppercase leading-tight tracking-wide text-white shadow-lg">
            More
          </div>
          </div>
          <div className="flex min-w-0 flex-col gap-0.5 pl-0.5">
            <span className="text-[10px] sm:text-xs md:text-sm xl:text-lg 2xl:text-3xl font-bold leading-none tracking-tight text-white drop-shadow-md">
              250+
            </span>
            <span className="text-[5px] sm:text-[5px] md:text-[6px] lg:text-[8px] 2xl:text-[10px] font-normal text-white">
              Enjoy working <br /> with us
            </span>
          </div>
        </div>
    </section>
  )
}
export default Hero
