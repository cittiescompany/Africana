
import React, {useState} from 'react'
import { RiErrorWarningLine } from "react-icons/ri";
// import {verifyAccountNumber} from '.../.../lib/api'
import { verifyAccountNumber } from '@/lib/api'
import { ImSpinner8 } from "react-icons/im";

import { Button, Input } from '@nextui-org/react';
const RecipientAccountDetails = ({goNext,bank,setAccountDetails}) => {
const [isAccountVerified,setIsAccountVerified]=useState({message:'',status:false})
const [isLoading,setIsLoading]=useState(false)
const ContinueToNext=()=>{
if(isAccountVerified.status){
goNext()
}
}

const verifyAccount=async(value)=>{
setIsLoading(true)
const data=await verifyAccountNumber({account_number:value,bank_code:bank.code})
if(data.type=='success'){
setIsLoading(false)
setAccountDetails(data.result)
setIsAccountVerified({message:'Correct',status:true})
}else{
setIsLoading(false)
setIsAccountVerified({message:'Not a valid account number',status:false})
}
}

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};


const handleSearchChange = debounce((e) => verifyAccount(e.target.value), 300);

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
          type="number"
          placeholder="e.g 1234567890"
          className='mb-4 rounded-md'
          onChange={handleSearchChange}
        />
        
         <p
                    className={`${
                      isAccountVerified.status
                        ? "text-green-600"
                        : "text-red-500"
                    } text-sm font-semibold flex items-center`}
                  >
                    {isLoading ? (
                      <ImSpinner8
                        size={15}
                        className="animate-spin text-gray-500 mt-2"
                      />
                    ) : (
                      isAccountVerified?.message
                    )}
                  </p>
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