import { Button, Input } from '@nextui-org/react'
import React from 'react'

const RecipientInformation = ({goNext}) => {
const ContinueToNext=()=>{
goNext()
}
  return (
           <div className="min-h-screen flex flex-col p-8 bg-white">
   <div className='mb-4'>
      <h1 className="text-2xl font-bold mb-2">Recipient Name</h1>
      <p>This information should match the name on your recipient&apos;s bank account</p>
   </div>
      <div className="w-full flex flex-col gap-6">
      <div>
      <label htmlFor="" className='mb-4 ms-2 text-lg'>First Name</label>
        <Input
        size='lg'
          type="text"
          placeholder=""
          className='rounded-md'
        />
      </div>
      <div>
      <label htmlFor="" className='mb-4 ms-2 text-lg'>Middle Name (optional)</label>
        <Input
        size='lg'
          type="text"
          placeholder=""
          className='rounded-md'
        />
      </div>
      <div>
      <label htmlFor="" className='mb-4 ms-2 text-lg'>Last Name</label>
        <Input
        size='lg'
          type="text"
          placeholder=""
          className='rounded-md'
        />
      </div>
     <Button onClick={ContinueToNext} color='primary' className='mt-8 w-full rounded-md text-medium'>Continue</Button>
      </div>
    </div>
  )
}

export default RecipientInformation