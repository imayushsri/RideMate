import React from 'react'

const LocationSearchPanel = (props) => {


  // Sample array for locations
  const locations = [
    "24B, Near Kapoor's cafe, Lucknow",
    "21B, Near HP Petrol Pump, Lucknow",
    "34A, Avadh Bus Stand, Lucknow",
    "40G, Near Badshahnagar Metro, Lucknow"
  ]
  return (
    <div>
      {/* This is just sample data */}
      {
        locations.map(function(el, idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex items-center justify-start my-2 rounded-xl gap-4 border-2 border-gray-50 active:border-black p-3'>
          <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
          <h4 className='text-lg font-medium'>{el}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
