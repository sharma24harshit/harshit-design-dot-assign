import React from 'react'
import Image from "next/image";

const data = [
    {title:"Pre-market Entry",
        text:"Pre-market entry means trading securities before regular market hours to react to overnight news, with lower liquidity and wider spreads."
    },
    {title:"Market Entry",
        text:"Research demand, assess competition, choose mode, localize offering, comply regulations, price strategically, partner locally, iterate learning."
    },
    {title:"Operations",
        text:"Planning, organizing, and managing processes to efficiently produce goods or services, ensuring quality, cost-effectiveness, and customer satisfaction."
    },
    {title:"Growth & Expansion",
        text:"Increasing business size, market reach, revenue, and resources to achieve long-term sustainability and competitive advantage."
    },
]

const Insights = () => {
    return (
        <section className='w-full mt-10 mb-10'>
            <div className='max-w-[1820px]mx-auto px-8'>

                <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start'>
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start">
                    <div className='w-full h-[180px] bg- rounded-[20px] flex items-end justify-start text-left p-6 bg-[#EEEEEE]'>
                        <p className='font-semibold text-4 uppercase'>
                        INSPIRATION & 
                         <br />INSIGHTS
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                    {data?.map((item, index)=>(
                        <div key={index} className='cursor-pointer pb-2  border-b-2 border-[#BABABA] hover:text-[#00338D] hover:border-[#00338D]'>
                            <p className='text-base font-semibold'>{item?.title}</p>
                            <p className='text-sm'>{item?.text}</p>
                        </div>
                    ))}
                       

                    </div>
                    </div>
                    <div className='relative flex flex-col aspect-[3/2]'>
                        <Image
                        className='mx-auto mt-4 object-contain'
                            src="/aboutImage.png"
                            alt="About Image" 
                            fill  
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Insights