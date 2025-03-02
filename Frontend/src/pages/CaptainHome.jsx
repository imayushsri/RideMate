import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className='h-screen'>
      <div className='fixed w-full p-6 top-0 flex items-center justify-between'>
        <div>
          <img className='w-30' src="Images/RideMate.png" alt="" />
        </div>
        <div>
          <Link to='/captains/logout' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-lg font-medium ri-logout-box-r-line"></i>
          </Link>
        </div>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="Images/Homemap.gif" alt="" />
      </div>
      <div className='h-2/5 p-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img src="\Images\driver.jpg" alt="" className='w-10 h-10 rounded-full object-cover' />
            <h4 className='text-lg font-medium'>Ayush Srivastava</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold'>₹ 295.20</h4>
            <p className='text-sm text-gray-600'>Earned</p>
          </div>
        </div>

        <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>

          <div className='text-center'>
            <i className=" text-3xl mb-2 font-extralight ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.3</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>

          <div className='text-center'>
            <i className=" text-3xl font-extralight ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10.3</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>

          <div className='text-center'>
            <i className=" text-3xl font-extralight ri-booklet-line"></i>
            <h5 className='text-lg font-medium'>10.3</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CaptainHome
