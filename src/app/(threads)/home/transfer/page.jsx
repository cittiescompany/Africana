"use client";
import React, { useState } from "react";
import { Button, Progress, Input } from "@nextui-org/react";
import useTransaction from "@/store/Global";
import { useShallow } from "zustand/react/shallow";
import countries from "@/lib/countries";
import CountryFlag from "@/components/ui/CountryFlag";
import { motion } from "framer-motion";

const stepVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState("");
  const [to, from] = useTransaction(
    useShallow((state) => [state.data.to, state.data.from])
  );

  const step1 = (
    <>
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
        onClick={()=>setCurrentStep(1)}
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
    </>
  );

  const step2 = (<section className="py-6 my-4">
      <strong className="text-xl font-Roboto ">Delivery method</strong>
      <p className="text-lg font-Inter">How would you like the money delivered?     </p>
      <div className="gap-4">
        <Button className="border-2 border-gray-400 mt-4 text-black-200 w-full transition-all hover:scale-100 text-white rounded-sm text-lg py-6">
          Bank deposit
        </Button>
      </div>
  </section>);

  const step3 =( <></>);
  const steps = [step1, step2, step3];

  return (
    <section className="container mx-auto my-4">
      <div className="border-2 border-gray-200 w-full rounded-xl shadow-sm py-10 ">
        <div className=" w-full md:w-[45%] mx-auto">
          <Progress
            value={((currentStep + 1) / 3) * 100}
            size="sm"
            color="success"
            isStriped
          /> {steps[currentStep]}
          <motion.div
            key={currentStep}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default page;

// const steps = ["Step 1", "Step 2", "Step 3"];

// const Stepper = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <Progress value={((currentStep + 1) / steps.length) * 100} />
//       <h3>{steps[currentStep]}</h3>
//       <div>
//         <Button onClick={handlePrevious} disabled={currentStep === 0}>
//           Previous
//         </Button>
//         <Button
//           onClick={handleNext}
//           disabled={currentStep === steps.length - 1}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// };
