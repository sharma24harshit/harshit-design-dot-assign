"use client";
import React, { useState } from 'react'
import Image from "next/image";

const data = [
    {
        title: "Pre-market Entry",
        text: "Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads."
    },
    {
        title: "Market Entry",
        text: "Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning."
    },
    {
        title: "Operations",
        text: "Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction."
    },
    {
        title: "Growth & Expansion",
        text: "Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage."
    },
];

const images = [
    {title:"Pre-Market", text:"Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets", src:"/insight1.jpg"},
     {title:"Operations", text:"Planning, organizing, and managing processes to efficiently produce goods", src:"/insight2.jpg"},
     {title:"Growth & Expansion", text:"Increasing business size, market reach, revenue, and resources to achieve long-term", src: "/insight3.jpg"}]

const Insights = () => {
    const [active, setActive] = useState(0);

const mapIndex = [0,0,1,2]

    return (
        <section className='w-full mt-20 lg:mt-10 2xl:mt-30 mb-10'>
            <div className='max-w-[1820px]mx-auto px-4 md:px-8'>

                <div className='grid grid-cols-1 lg:grid-cols-[53%_43%] gap-10 items-start'>
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
                        <div className='w-full lg:h-[180px] rounded-[20px] flex items-end justify-start text-left p-4 lg:p-6 bg-[#EEEEEE]'>
                            <p className='font-semibold text-lg md:text-xl lg:text-xl uppercase'>
                                INSPIRATION &
                                <br className='hidden lg:block'/> INSIGHTS
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {data?.map((item, index) => (
                                <div key={index} onMouseEnter={() => setActive(mapIndex[index])} className='cursor-pointer pb-2  border-b-2 border-[#BABABA] hover:text-[#00338D] hover:border-[#00338D]'>
                                    <p className='text-sm md:text-base font-semibold'>{item?.title}</p>
                                    <p className='text-xs md:text-sm'>{item?.text}</p>
                                </div>
                            ))}


                        </div>
                    </div>
                    <div className='flex w-full h-[300px] md:h-[400px] gap-4'>
                        {images.map((obj, index) => (
                            <div key={index}
                                onMouseEnter={() => setActive(index)}
                                className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out
                            ${active === index ? "flex-3" : "flex-1"}
                            `}
                            >
                                <Image
                                    className='object-cover'
                                    src={obj?.src}
                                    alt="About Image"
                                    fill
                                />
                                
                                    <div className='text-white'>
                                        <p className={`absolute transition-all duration-500 ease-in-out w-[120px]
                                            ${active === index ? "rotate-0 left-6 bottom-22 text-xl font-semibold" : 
                                                "-rotate-90 left-[60%] bottom-20 -translate-x-1/2 origin-bottom text-xl font-semibold"
                                         }`
                                         } >{obj?.title}</p>
                                        {active === index && ( <p 
                                        className='absolute left-6 bottom-4 text-sm md:text-base max-w-[250px] transition-all duration-200 ease-all'
                                        >{obj?.text}</p> )}
                                    </div>
                              
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Insights