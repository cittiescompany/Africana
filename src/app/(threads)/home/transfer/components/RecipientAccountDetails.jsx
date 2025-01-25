
import React from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

import { Button, Input } from '@nextui-org/react';
const RecipientAccountDetails = ({goNext}) => {
const ContinueToNext=()=>{
goNext()
}

  return (
       <div className="min-h-screen flex flex-col p-8 bg-white">
   <div className='mb-4'>
      <h1 className="text-2xl font-bold mb-2">Recipient Bank Details</h1>
      <p>Enter your recipient&apos;s GTBank account details.</p>
   </div>
      <div className="w-full">
      <div>
      <label htmlFor="">NUBAN</label>
        <Input
        size='lg'
          type="text"
          placeholder="e.g 1234567890"
          className='mb-8 rounded-md'
        />
      </div>

<div className='flex items-center gap-4 px-4'>
<RiErrorWarningLine size={25} />
<p className='text-sm'>Please verify your recipient&apos;s account information. You can lose the transfer amount if incorrect information is provided.</p>
</div>
     <Button onClick={ContinueToNext} color='primary' className='mt-8 w-full rounded-md text-medium'>Continue</Button>
      </div>
    </div>
  )
}

export default RecipientAccountDetails