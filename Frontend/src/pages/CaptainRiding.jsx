import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(() => {
        if (finishRidePanel) {
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(0)'
          })
        }
        else {
          gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
          })
        }
      }, [finishRidePanel])

  return (
    <div className='h-screen'>
      <div className='fixed w-screen p-6 top-0 flex items-center justify-between'>
        <div>
          <img className='w-30' src="Images/RideMate.png" alt="" />
        </div>
        <div>
          <Link to='/captains/logout' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
      </div>
      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="Images/Homemap.gif" alt="" />
      </div>
      <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative w-screen'
      onClick={()=>{
        setFinishRidePanel(true);
      }}
      >
      <h5 onClick={() => {}} className='p-1 text-center absolute top-0 w-[92%]'><i className="text-3xl text-gray-900 ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM Away</h4>
        <button className=' bg-green-600 text-white font-semibold p-3 px-12 rounded-lg'>Complete Ride</button>
      </div>

      <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 pb-5 pt-12 bg-white translate-y-full'>
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>

    </div>
  )
}

export default CaptainRiding
