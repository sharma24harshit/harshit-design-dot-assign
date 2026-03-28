import React from 'react'
import Image from "next/image";

const data = [
    "Parliament Introduces Income Tax Bill to Reshape India’s Direct Tax Landscape",
    "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
    "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
    "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
]

const Topics = () => {
  return (
    <section className='w-full'>
        <div className='grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start mx-auto px-8'>
          <button className='flex items-center justify-center bg-[#FF7300] rounded-md font-poppins text-xs font-semibold p-6 transition-all duration-300 hover:bg-orange-600 hover:shadow-md'>HOT TOPICS</button>
          <div className='flex justify-evenly w-full gap-6 overflow-x-auto lg:overflow-visible'>
            {data?.map((item,index)=> (
                <div key={index} className='max-w-[274px] h-[140px] cursor-pointer'>
                    <div className="relative flex flex-col items-w-full h-full border-t-2 border-[#00338D] transition-all duration-300">
                        <p className='text-base font-poppins mt-3'>{item}</p>
                        <div className='absolute bottom-0 right-0 flex justify-end'>
                            <Image
                                src="/rightArrow.svg"
                                alt="Right Arrow"
                                width={32}
                                height={10}
                                priority
                            />
                        </div>
                    </div>
                </div>
        ))}
          </div>
        </div>
    </section>
  )
}

export default Topics