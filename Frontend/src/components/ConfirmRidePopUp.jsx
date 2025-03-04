import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <h5 onClick={() => {
                props.setRidePopUpPanel(false)
            }} className='p-1 text-center absolute top-0 w-[92%]'><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-9'>Confirm this ride to start!</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-200 rounded-xl'>
                <div className='flex items-center gap-3'>
                    <img src="/Images/user.avif" alt="" className='w-12 h-12 rounded-full object-cover' />
                    <h2 className='text-lg font-medium'>Ayush Srivastava</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
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
                
                <div className='w-full'>
                    <form onSubmit={(e)=>{
                        submitHandler(e);
                    }}>
                    <input value={otp} type="text" placeholder="Enter OTP" className='bg-[#eee] px-7 py-4 text-lg font-mono rounded-lg w-full mt-5'
                    onChange={(e)=>{
                        setOtp(e.target.value);
                    }}
                    />
                    <Link to="/captain-riding" className='w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg mb-2 text-lg'>Confirm
                    </Link>
                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(false)
                        props.setRidePopUpPanel(false)
                    }} className='w-full mt-1 bg-red-500 text-white font-semibold p-3 rounded-lg text-lg'>Cancel
                    </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp
