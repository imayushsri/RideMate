import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(() => {
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        height: panelOpen ? '70%' : '0%',
        opacity: panelOpen ? 1 : 0,
        padding: panelOpen ? 24 : 0,
        duration: 0.5,
      });
      gsap.to(panelCloseRef.current,{
        opacity: panelOpen ? 1 : 0,
        duration: 0.5
      });
    }
  }, [panelOpen])

  useGSAP(()=>{
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(()=>{
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0)'
      })
    }
    else{
      gsap.to(WaitingForDriverRef.current,{
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative'>
      <img className='w-30 absolute left-5 top-5' src="Images/RideMate.png" alt="" />
      <div className='h-screen w-screen'>
        {/* image for temp use */}
        <img className='h-full w-full object-cover' src="Images/Homemap.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen top-0 absolute w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 className='absolute top-6 right-6 text-2xl opacity-0'
          ref={panelCloseRef}
          onClick={()=>{
            setPanelOpen(false)
          }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e);
          }}>
            <div className="line absolute h-16 w-1 top-[46%] left-10 bg-gray-900 rounded-full"></div>
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text" placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              type="text" placeholder='Enter your destination'
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>

        {/* Location Panel */}
        <div ref={panelRef} className='h-0 bg-white opacity-0 overflow-hidden pb-5'>
              <LocationSearchPanel setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen}/>
        </div>
      </div>

      {/* Vehicle Panel */}
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 px-3 pb-5 pt-12 bg-white translate-y-full'>
              <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>

      {/* Confirm Ride */}
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 pb-5 pt-12 bg-white translate-y-full'>
              <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      {/* Waiting for ride */}
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 pb-5 pt-12 bg-white translate-y-full'>
              <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      {/* Waiting for driver */}
      <div ref={WaitingForDriverRef} className='fixed w-full z-10 bottom-0 px-3 pb-5 pt-12 bg-white'>
              <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

    </div>
  )
}

export default Home
