'use client'
import { formatCurrency } from "@/lib/utils"
import { useInvestmentStore } from "@/store/Global"
import { Button, Input, useDisclosure } from "@nextui-org/react"
import { useState } from "react"
import PaymentMethodModal from "../components/PaymentMethodModal"
import PaymentModal from "../components/PaymentModal"


const Investment = () => {
    const [noOfShares, setNoOfShares] = useState(null)
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const {data,setPaymentAmount,setNoOfShares:putNoOfShares}=useInvestmentStore()
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

const handleBuyShare =() => {
    setPaymentAmount(noOfShares*data?.selectedInvestment.amountPerUnit)
    putNoOfShares(noOfShares)
    onOpen()
}
  return (
    <div className='md:w-[45%] min-h-screen bg-white mx-auto my-4'>
    <div className='mx-6 py-8'>
    <h1 className='text-2xl my-2'>Invest Now</h1>

    <p className='text-gray-500 mb-2'>To invest now, enter the number of shares you will like to purchase</p>

              <div className='mt-6'>
        <p className="mb-2 ms-2 text-gray-500">
          How many <b>shares</b> do you do you want to buy?
        </p>
        {data?.selectedInvestment&&<p className="mb-2 ms-2 text-gray-500">One share is {formatCurrency('NGN',data?.selectedInvestment.amountPerUnit)}</p>}
        <Input
          size="lg"
          type="text"
          name="unit"
          placeholder=""
          className="rounded-md"
          onChange={(e)=>setNoOfShares(e.target.value)}
        />

{data?.selectedInvestment&&noOfShares&&<p className="mt-6 ms-2 text-gray-500 italic">You are going to pay a sum of {formatCurrency('NGN',noOfShares*data?.selectedInvestment.amountPerUnit)} for the number of selected shares</p>}
      </div>


      <div className=' mt-4'>
        <Button size='lg' isDisabled={!noOfShares} className='text-white bg-purple-600 hover:bg-purple-500 w-full rounded-md' onPress={handleBuyShare}>Buy Shares</Button>

    </div>
    </div>

    <PaymentMethodModal onOpenChange={onOpenChange} openPaymentModal={()=>setIsPaymentModalOpen(true)} isOpen={isOpen} onClose={onClose}/>
    <PaymentModal isOpen={isPaymentModalOpen} onClose={()=>setIsPaymentModalOpen(false)}/>
  </div>
  )
}

export default Investment