import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const HomePage  = () => {
    const now = new Date()
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
   const time = now.toLocaleTimeString('en-US',{
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h12',
    
   })
  const date = now.toLocaleDateString('en-US',{
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    
   })
   
  return (
    <section className='flex flex-col size-full gap-10 text-white'>
      <div className='h-[250px] w-full rounded-[20px] bg-cover bg-hero'>
        <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h1 className='glassmorphism rounded-[20px] px-3 py-2 max-w-[270px] text-center text-base '>Upcomming Meeting at: 12:30 PM</h1>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-extrabold lg:text-6xl'>{time}</h1>
            <h1 className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</h1>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  )
}

export default HomePage  
