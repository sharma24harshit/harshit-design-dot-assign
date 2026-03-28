import React from 'react'
import Image from "next/image";

const About = () => {

    return (
        <section className='w-full mt-10'>
            <div className='max-w-[1820px]mx-auto px-8'>
            {/* <Image
                        className='mx-auto'
                            src="/map.png"
                            alt="map Image"
                            width={550}
                            height={100}
                            priority
                        /> */}
                <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start'>
                    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 items-start bg-[url('/map.png')] bg-no-repeat bg-center bg-contain">
                    <div className='w-full h-[180px] bg- rounded-[20px] flex items-end justify-start text-left p-6 bg-[#EEEEEE]'>
                        <p className='font-semibold text-4 uppercase'>
                            About <br />FIRM
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className='tetx-6 font-semibold'>HLS Global Group</h2>
                        <p className='text-sm max-w-[600px]'>
                            is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
                        </p>

                        <div className='grid grid-cols-1 gap-4 pt-5'>
                            <div className='flex w-full justify-between'>
                            <Stat title="250+" desc="Professional Staff Members Globally" />
                            <Stat title="1000+" desc="Clients in the HLS Global Network" />
                            </div>
                            <div className='w-full h-[2px] bg-[#00338D]' ></div>
                            <div className='flex w-full justify-between'>
                            <Stat title="35+" desc="Years of Experience Connecting Japan and the World" />
                            <Stat title="15+" desc="Countries Covered With Our Alliance Network" />
                            </div>
                        </div>

                    </div>
                    </div>
                    <div className='relative flex flex-col justify-end aspect-[3/2]'>
                        <div className='max-w-[230px] min-w-[100px] text-xs font-semibold px-4 py-2 rounded-full flex justify-between items-center gap-2 bg-[#FF7300]'>
                            We are located
                            <span>India ^</span>
                        </div>
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

function Stat({ title, desc }) {
    return (
        <div className='flex flex-col gap-2 max-w-[152px]'>
            <h3 className='font-semibold'>
                {title}
            </h3>
            <p className='text-sm'>
                {desc}
            </p>
        </div>
    )
}

export default About