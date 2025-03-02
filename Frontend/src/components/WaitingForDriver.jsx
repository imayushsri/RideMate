import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
            <h5 onClick={() => {
                props.setWaitingForDriver(false)
            }} className='p-1 text-center absolute top-0 w-[92%]'>
              <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <div className='flex items-center justify-between'>
            <img src="Images/car.webp" alt="" className='h-12' />
            <div className='text-right'>
              <h2 className='text-lg font-medium -mt-1 -mb-1'>Ayush</h2>
              <h4 className='text-xl font-semibold'>UP32 AB 1234</h4>
              <p className='text-sm text-gray-600'>Maruti Swift</p>
            </div>
            </div>
            <div className='flex flex-col gap-2 justify-between items-center'>
                
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>%^@/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Badshahnagar Metro, Lucknow</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>%^@/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Badshahnagar Metro, Lucknow</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3'>
                        <i className="text-lg ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Payment Cash</p>
                        </div>
                    </div>
                </div>
                <button><img src="Images/loading.gif" className='h-30 -mt-5' alt="" /></button>
            </div>
        </div>
  )
}

export default WaitingForDriver
