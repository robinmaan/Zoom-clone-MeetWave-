'use client'
import Image from "next/image"
import HomeCard from "./HomeCard"
import { useState } from "react"
import { useRouter } from "next/navigation"
import MeetingModel from "./MeetingModel"
const MeetingTypeList = () => {
    const router = useRouter()
    const [Meeting, setMeeting] = useState<'isScheduleMeeting' | 'isJoiningMeeting' | 'isIstantMeeting'>()

    const createMeeting = ()=>{

    }
  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
       
      <HomeCard 
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={()=>setMeeting('isIstantMeeting')}
        className="bg-orange-1"
      />
      <HomeCard 
      img="/icons/schedule.svg"
      title="Scheduling Meeting"
      description="Plan Your Meeting"
      handleClick={()=>setMeeting('isScheduleMeeting')} 
      className="bg-blue-1"      
      />

      <HomeCard 
      img="/icons/recordings.svg"
      title="View Recordings"
      description="Check out your Recordings"
      handleClick={()=>{'isJoiningMeeting'}}
      className="bg-purple-1"
      />

      <HomeCard 
      img="/icons/join-meeting.svg"
      title="Join Meeting"
      description="vie invitation link"
      handleClick={()=>{'isJoiningMeeting'}}
      className="bg-yellow-1"
      />
      <MeetingModel 
       isOpen={Meeting === 'isIstantMeeting'}
       onClose={()=>setMeeting(undefined)}
       title="Start an Instant Meeting"
       className="text-center"
       buttonText='Start Meeting'
       handleClick={createMeeting}
      />
    </section>
  )
}

export default MeetingTypeList
