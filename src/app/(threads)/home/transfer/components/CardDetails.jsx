import React from "react";
import { Button, Input } from "@nextui-org/react";

export default function CardDetails({goNext}) {
const ContinueToNext=()=>{
goNext()
}
  return (
      <div className="min-h-screen flex flex-col p-8 bg-white">
        <h1 className="text-xl font-semibold mb-4">Pay with card</h1>
        <div className="mb-4 bg-blue-100 p-4 rounded-md">
          <p className="text-sm text-blue-800">
            <strong>Debit cards</strong> have no extra fees. <strong>Credit cards</strong> have an extra 3% fee.
          </p>
        </div>
        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
            Card number
          </label>
          <Input
            id="card-number"
            placeholder="e.g., 1234 5678 1234 5678"
            type="text"
            aria-label="Card number"
            className="w-full"
          />
        </div>
        {/* Expiration Date and Security Code */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">
              Expiration date
            </label>
            <Input id="expiration-date" placeholder="MM / YY" type="text" aria-label="Expiration date" />
          </div>
          <div>
            <label htmlFor="security-code" className="block text-sm font-medium text-gray-700 mb-1">
              Security code
            </label>
            <Input id="security-code" placeholder="e.g., 123" type="text" aria-label="Security code" />
          </div>
        </div>
        {/* Name on Card */}
        <div className="mb-4">
          <label htmlFor="name-on-card" className="block text-sm font-medium text-gray-700 mb-1">
            Your name as it appears on card
          </label>
          <Input id="name-on-card" placeholder="e.g., John Doe" type="text" aria-label="Name on card" className="w-full" />
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 underline text-sm">
            Pay with Bank Account instead
          </a>
        </div>
        {/* Billing Address */}
        <div className="mb-4">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Billing address</h2>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="use-home-address" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
            <label htmlFor="use-home-address" className="text-sm text-gray-700">
              Use Home Address
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-2">22 woodroad atlanta zip code 30188, atlanta, GA 30188</p>
        </div>

          <div className="my-4 bg-blue-50 p-4 rounded-md">
          <p className=" text-gray-400">
           Your card will not be charged until you confirm the total and pay on the next step.
          </p>
        </div>

          <Button onClick={ContinueToNext} color='primary' className='mt-8 w-full rounded-md text-medium'>Continue</Button>
      </div>
  );
}
