import React, { lazy, Suspense, useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import UpdatePatientDetail from '../../dialogBoxes/UpdatePatientDetail'
const AddPatients = lazy(() => import('../../dialogBoxes/AddPatients'))

const Index = () => {
  const [showDialog, setShowDialog] = useState(false)
  const [showUpdatePatientDialog, setShowUpdatePatientDialog] = useState(false)

  const handleAddPatientClick = () => {

    setShowDialog(true)

  }
  const handleUpdatePatientClick = () => {

    setShowUpdatePatientDialog(true)

  }
  const handleRefreshClick = () => {

  }

  return (
    <div className='flex font-manrope'>
      <Sidebar />

      <div className=" border-2 border-black w-full">
        <Navbar />
        <div className="flex">
          <div className="flex px-[34px] p-6">

            <div className="relative border-[1px] border-border rounded-border p-4">
              <span className='absolute -top-[14px] bg-white px-2'>Search Patients</span>
              <span className=' bg-white '>Search Patients</span>


              <div className="flex gap-4 mt-3">
                <input type="text" className="rounded-border border-border border-[1px] p-2 outline-none" placeholder="Patient's detail" />

                <button type='button' className='font-manrope p-3 px-10 rounded-border text-white  bg-primary hover:bg-button-hover ' onClick={handleAddPatientClick}>Search</button>

              </div>
            </div>
            <div className="relative border-border rounded-border"></div>


          </div>

          <div className="flex px-[34px] p-6">

            <div className="relative border-[1px] border-border rounded-border p-4">
              <span className='absolute -top-[14px] bg-white px-2'>Search by number of days</span>
              <span className=' bg-white '>Select days</span>


              <div className="flex gap-4 mt-3">
                <input type="text" className="rounded-border border-border border-[1px] p-2 outline-none" placeholder="Patient's detail" />

                <button type='button' className='font-manrope p-3 px-10 rounded-border text-white  bg-primary hover:bg-button-hover ' onClick={handleRefreshClick}>Refresh</button>

              </div>
            </div>
            <div className="relative border-border rounded-border"></div>


          </div>


          <div className="flex items-end">
            <button type='button' className='font-manrope p-3 rounded-border text-white bg-button-default hover:bg-button-hover ' onClick={handleAddPatientClick}>Add patients</button>

          </div>
        </div>




        <button type='button' className='font-manrope p-3 rounded-border text-white border-black border-2 bg-button-default hover:bg-button-hover ' onClick={handleUpdatePatientClick}>Update Patient</button>



      </div>



      {
        showDialog && (
          <Suspense fallback={<div>Loading...</div>} >
            <AddPatients />
          </Suspense>
        )
      }

      {
        showUpdatePatientDialog && (
          <Suspense fallback={<div>Loading...</div>} >
            <UpdatePatientDetail />
          </Suspense>
        )
      }
    </div>

  )
}

export default Index