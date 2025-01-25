import React from 'react'
import { Button, Progress, Input } from "@nextui-org/react";
import countries from "@/lib/countries";
import CountryFlag from "@/components/ui/CountryFlag";


const TransferAmount = ({from,to,state,setState,goNext}) => {
const continuePayment=()=>{
goNext()
}
  return (
      <div>
      <div className="bg-gray-300 my-4 p-6">
        <div>
          <strong className="font-light">You send</strong>
          <div className="flex items-center  bg-white border p-2">
            <Button disabled className="bg-inherit">
              <CountryFlag
                rounded
                code={countries[from]?.code}
                className=" rounded-md w-10 h-7"
              />
            </Button>
            <Input
              clearable
              bordered={false}
              className="!outline-none !text-xl !rounded-none bg-inherit"
              fullWidth
              type="number"
              value={state}
              onWheel={(e) => e.target.blur()}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter amount"
              css={{
                "& input": {
                  paddingLeft: 0,
                },
              }}
            />
            {countries[from]?.currencyCode}
          </div>
        </div>

        <div className=" mt-4">
          <strong className="font-light">They recieve</strong>
          <div className="flex items-center bg-white border p-2">
            <Button disabled className="bg-inherit">
              <CountryFlag
                rounded
                code={countries[to]?.code}
                className=" rounded-md w-10 h-7"
              />
            </Button>
            <Input
              clearable
              bordered={false}
              className="!outline-none !text-xl !rounded-none bg-inherit"
              fullWidth
              type="number"
              onWheel={(e) => e.target.blur()}
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter amount"
              css={{
                "& input": {
                  paddingLeft: 0,
                },
              }}
            />
            {countries[to]?.currencyCode}
          </div>
        </div>
      </div>
      <div className="bg-white p-6  my-3 rounded-sm">
        <p className="text-lg">Current exchange rate</p>
        <strong className=" text-green-500">
          {countries[from]?.currencyCode} 1 = 1{countries[to]?.currencyCode}{" "}
        </strong>
      </div>
      <hr className="border-2 w-[98%] block mx-auto" />
      <button className="bg-gray-300  p-4 w-[98%] rounded-sm mt-3 mx-auto block ">
        <span className="flex text-lg py-2 justify-between">
          <span>Flat free</span>
          <span>000</span>
        </span>
        <hr className="border" />
        <span className="flex text-lg py-2 justify-between">
          <span>Total</span>
          <span>100</span>
        </span>
      </button>
      <Button 
        onClick={continuePayment}
        size="md"
        className="bg-green-400 w-full transition-all hover:scale-100 text-white rounded-sm my-6 text-lg py-6"
      >
        Continue
      </Button>

      <p className="text-lg font-Inter mt-4">
        <span className="font-bold italic">New customer offer applied</span>:
        promotional exchange rate for the first 500 USD of this transfer.
        Standard rate applies to the remainder of this transfer.
      </p>
    </div>
  )
}

export default TransferAmount