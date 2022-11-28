import React from 'react'
import Form from "../Contact/Form"

function FormHome() {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='max-w-2xl p-5 mx-5 bg-white shadow-lg '>
            <h2 className='text-center'>Send Us A Message</h2>
            <div className='p-4'>
            <Form/>
            </div>
        </div>
      </div>
    </>
  )
}

export default FormHome
