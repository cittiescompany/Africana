import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { BsPhoneFill } from 'react-icons/bs'
import { MdLock } from 'react-icons/md'

const SenderContact = ({goNext}) => {
const ContinueToNext=()=>{
goNext()
}
  return (
                 <div className="min-h-screen flex flex-col p-8 bg-white">
   <div className='mb-4'>
      <h1 className="text-2xl font-bold mb-2">Sending phone</h1>
   </div>
      <div className="w-full">
      <div>
      <label htmlFor="" className='mb-4 ms-2 text-lg'>Phone number</label>
       <Input
        size='lg'
          type="tel"
          placeholder="08134565437"
          className='rounded-md'
        />
      </div>
      
         <div className='flex items-center gap-4 px-4 my-6'>
           <BsPhoneFill size={25} />
           <p className='text-sm'>TBy providing your number, you agree that we may contact you via call or text in regards to your Remitly account or transfer.</p>
           </div>

     <Button onClick={ContinueToNext} color='primary' className='mt-8 w-full rounded-md text-medium'>Continue</Button>

        <div className='flex items-center gap-4 px-4 my-6'>
          <MdLock size={25} />
          <p className='text-sm'>This information helps prevent fraud and makes Remitly safer. We keep it secure and confidential.</p>
          </div>
      </div>
    </div>
  )
}

export default SenderContact