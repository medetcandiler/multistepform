"use client";
import { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdStep from "./ThirdStep";
import {FcNext} from 'react-icons/fc'
import {FcPrevious} from 'react-icons/fc'

const steps = [
  { id: "first step", name: "personal details" },
  { id: "second step", name: "address information" },
  { id: "third step", name: "conguratulations" },
];

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-20">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.id} className="md:flex-1 capitalize">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4 transition-colors"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {currentStep === 0 && <FirstForm />}
      {currentStep === 1 && <SecondForm />}
      {currentStep === 2 && <ThirdStep />}

      <div className="flex justify-between">
        {currentStep === 0 ? <div></div> : <button className="icon" onClick={prev}><FcPrevious size={25}  /></button>}
        {currentStep !== steps.length - 1 && (
          <button className="icon" onClick={next}><FcNext size={25} /></button>
        )}
      </div>
    </div>
  );
};

export default Form;
