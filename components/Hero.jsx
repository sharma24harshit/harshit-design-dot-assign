import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-350px md:h-[450px] xl:h-[600px] 2xl:h-[850px] bg-[#00338D] flex w-full overflow-hidden">
          <div className="relative z-20 flex w-full flex-col justify-between px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 lg:w-[42%] lg:max-w-[640px] lg:shrink-0 lg:px-14 lg:py-16 xl:px-[4.5rem] xl:py-20">
        <div className="flex max-w-xl flex-col gap-4 lg:gap-4 xl:gap-4 xl:mt-16 2xl:mt-40">
          <p className="font-bold uppercase leading-relaxed tracking-[0.2em] text-sm xl:text-base text-[#B8B3B3]">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-6xl font-bold uppercase leading-[1.06] tracking-[0.04em] text-black md:text-white">
            Empowered
            <br />
            <span className="mt-1 inline-block border-b-[5px] border-[#B8B3B3] pb-1.5">
              Workplaces
            </span>
          </h1>

          <p className="max-w-[420px] text-sm font-light leading-[1.65] text-[#FFFFFF] xl:text-base xl:max-w-md text-black md:text-white">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared
            success.
          </p>

          <div >
            <button
              type="button"
              className="origin-left rounded-l-[10px] bg-[#FF7F11] py-1 md:py-3 py-6 pl-7 pr-10 text-xs lg:text-sm 2xl:text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-lg transition-[filter] hover:brightness-95"
              style={{ transform: "skewX(-14deg)" }}
            >
              <span
                className="flex items-center gap-4"
                style={{ transform: "skewX(14deg)" }}
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

        <p className="w-full text-[10px] font-medium uppercase leading-relaxed tracking-[0.16em] text-red-300 md:text-white sm:text-[11px] lg:mt-8 xl:mt-14">
          Accounting, Taxation, & Business Advisory between India, Japan, and the
          World
        </p>
      </div>

        <div className='absolute w-[100%] md:w-[60%] h-full md:-right-22 lg:-right-20 xl:-right-14 2xl:-right-10 md:-top-20 lg:-top-28 xl:-top-26 2xl:-top-48 rotate-0 md:-rotate-[32deg] overflow-hidden md:rounded-[70px] xl:rounded-[130px]'>
        <div className='md:relative w-[100%] md:w-[150%] h-[100%] md:h-[150%] -left-[20%] -top-[20%] rotate-0 md:rotate-[32deg] rounded-xl'>
        <Image
        className='object-cover'
                                src="/hero.jpg"
                                alt="hero image"
                               fill
                                priority
                            />
        </div>
        </div>

        <div className="pointer-events-none absolute bottom-6 right-5 z-30 flex flex-wrap items-center gap-3 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-10 xl:bottom-14 xl:right-12">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/96?img=47"
              alt=""
              className="relative z-[1] size-11 rounded-full border-[3px] border-white object-cover shadow-md sm:size-12"
              width={48}
              height={48}
            />
            <img
              src="https://i.pravatar.cc/96?img=12"
              alt=""
              className="relative z-[2] -ml-3 size-11 rounded-full border-[3px] border-white object-cover shadow-md sm:-ml-4 sm:size-12"
              width={48}
              height={48}
            />
            <img
              src="https://i.pravatar.cc/96?img=68"
              alt=""
              className="relative z-[3] -ml-3 size-11 rounded-full border-[3px] border-white object-cover shadow-md sm:-ml-4 sm:size-12"
              width={48}
              height={48}
            />
          </div>
          <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#FF7F11] text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white shadow-lg sm:size-[52px]">
            More
          </div>
          <div className="flex min-w-0 flex-col gap-0.5 pl-0.5">
            <span className="text-[2.125rem] font-bold leading-none tracking-tight text-white drop-shadow-md sm:text-[2.625rem]">
              250+
            </span>
            <span className="text-[13px] font-normal leading-snug text-white">
              Enjoy working with us
            </span>
          </div>
        </div>
    </section>
  )
}
export default Hero
