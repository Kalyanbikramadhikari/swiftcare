import React from 'react'

const PdfHeader = () => {
  return (
    <div>
        <div className="flex">
            <img src="/images/logo.png" alt=""  className='h-20 border-2 border-black '/>
        </div>
        <hr className='mt-10'/>
        <div className="flex flex-col gap-y-4 mt-10 border-[1px] border-black p-2">
            <div className="flex space-x-8"><span>Name</span><span>Ms.Aakriti Maharjan</span></div>
            <div className="flex space-x-8"><span>Address:</span><span>Kirtipur</span></div>
            <div className="flex space-x-8"><span>Phone No.</span><span>8459237</span></div>



        </div>
    </div>
  )
}

export default PdfHeader