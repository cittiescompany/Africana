import { Button, Input, useDisclosure } from '@nextui-org/react'
import React from 'react'
import { MdLock } from 'react-icons/md'
import ConfirmModal from './ConfirmModal';

const SenderInformation = ({goNext}) => {
const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
const ContinueToNext=()=>{
onOpen()
}
  return (
           <div className="min-h-screen flex flex-col p-8 bg-white">
   <div className='mb-4'>
      <h1 className="text-2xl font-bold mb-2">Sender details</h1>
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
      <label htmlFor="" className='mb-4 ms-2 text-lg'>Date of Birth</label>
        <Input
        size='lg'
          type="date"
          placeholder=""
          className='rounded-md'
        />
      </div>
     <Button onClick={ContinueToNext} color='primary' className='mt-8 w-full rounded-md text-medium'>Continue</Button>

     <div className='flex items-center gap-4 px-4'>
     <MdLock size={25} />
     <p className='text-sm'>This information helps prevent fraud and makes Remitly safer. We keep it secure and confidential.</p>
     </div>
      </div>
      <ConfirmModal onOpenChange={onOpenChange} isOpen={isOpen} goNext={goNext} onClose={onClose}/>
    </div>
  )
}
export default SenderInformation