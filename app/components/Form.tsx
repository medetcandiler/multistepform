"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";


import { formSchema } from "@/libs/schema";

type Inputs = z.infer<typeof formSchema>;

const steps = [
  { id: "first step", name: "personal details" },
  { id: "second step", name: "address information" },
  { id: "third step", name: "conguratulations" },
];

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    console.log("errors", errors);
    reset();
  };

  const next = async () => {
    // if (currentStep < steps.length - 1) {
    //   setCurrentStep((prev) => prev + 1);
    // }
    const output = await trigger("firstName");
    console.log(output);
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

      {currentStep === 0 && (
        <section className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg">Personal information</h1>
            <h3>Please provide your personal details.</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-10"
          >
            <div className="flex justify-between gap-5">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="firstName"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("firstName", { required: true })}
                />
                <label
                  htmlFor="firstName"
                  className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="lastName"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  {...register("lastName")}
                />
                <label
                  htmlFor="lastname"
                  className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="email"
                className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                {...register("email")}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <button onClick={() => trigger()}>trigger</button>
          </form>
        </section>
      )}
      {currentStep === 1 && (
        <section className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg">Address information</h1>
            <h3>Please provide your address information.</h3>
          </div>
          <form className="flex flex-col">
            <div className="relative z-0 w-1/2 mb-6 group">
              {/*  */}
              <select
                id="country"
                className="block w-full py-2.5 pr-3 text-gray-900 bg-transparent border-b-2 border-gray-300  focus:outline-none   appearance-none"
              >
                <option value="" disabled selected hidden>
                  Select Country
                </option>
                <option value="tr">Turkey</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </select>
              {/*  */}
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="street"
                className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="street"
                className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 capitalize"
              >
                street address
              </label>
            </div>

            <div className="flex justify-between gap-10">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="city"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="city"
                  className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="state"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="state"
                  className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  State / Province
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="zip"
                  className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="zip"
                  className="peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  ZIP
                </label>
              </div>
            </div>
          </form>
        </section>
      )}
      {currentStep === 2 && <div>completed</div>}

      <div className="flex justify-between">
        {currentStep === 0 ? (
          <div></div>
        ) : (
          <button className="icon" onClick={prev}>
            <FcPrevious size={25} />
          </button>
        )}
        {currentStep !== steps.length - 1 && (
          <button className="icon" onClick={next}>
            <FcNext size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
