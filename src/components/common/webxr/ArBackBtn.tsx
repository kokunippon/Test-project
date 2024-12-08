import React from 'react'

import "./style/ArModelViewer.module.css"

const ArBackBtn = ({name,company,price}: {name: string, company: string, price: string}) => {
    return (
        <button slot="exit-webxr-ar-button" className="mt-[5vh] ml-[2vh]" >
            <div className='w-[40px] h-[40px] flex justify-center items-center border-[3px] border-white rounded-full'>
                <div className='pb-1'>
                    <div className='w-[13px] rotate-[140deg] rounded-full h-[4px] bg-white'></div>
                    <div className='w-[16px] h-[3px] bg-transparent rounded-full'></div>
                    <div className='w-[13px] absolute rotate-[40deg] rounded-full h-[4px] bg-white'></div>
                </div>
            </div>

            <div className='mt-[67vh] z-30'>

                <div className='flex items-center justify-between m-2'>
                    <div>
                        {/* Product Name */}
                        <div className='text-white text-2xl w-[200px] text-left font-semibold'>
                            {name}
                        </div>
                        {/* company name */}
                        <div className='text-[#b8b8b8] text-base w-[200px] text-left'>
                            By {company}
                        </div>
                    </div>

                    <button className='flex items-center backdrop-blur-lg p-3 border rounded-2xl w-[60px] h-[60px]'>
                        
                    </button>

                </div>

                {/* Price and Buy Now */}
                <div className='flex justify-between p-4 bg-[#00000050] backdrop-blur-lg border rounded-3xl  w-[90vw] h-[10vh] text-white'>
                    <div className='text-left'>
                        <div className='text-sm text-[#b8b8b8]'>
                            Price
                        </div>

                        <div className='text-2xl font-semibold'>
                            {price}
                        </div>
                    </div>

                    <button className='flex items-center bg-[#F8F872] text-black font-medium rounded-2xl px-4'>
                        Buy Now
                    </button>

                </div>
            </div>



        </button>
    )
}

export default ArBackBtn