"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { LiaAngleDownSolid } from "react-icons/lia";

import { formSchema } from "@/libs/schema";

type Inputs = z.infer<typeof formSchema>;

const steps = [
  {
    id: "first step",
    name: "personal details",
    field: ["firstName", "lastName", "email"],
  },
  {
    id: "second step",
    name: "address information",
    field: ["country", "street", "city", "state", "zip"],
  },
  { id: "third step", name: "complete" },
];

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [prevStep, setPrevStep] = useState(0);
  const alfa = currentStep - prevStep;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data", data);
    reset();
  };

  type fildName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].field;
    const output = await trigger(fields as fildName[], {
      shouldFocus: true,
    });
    if (!output) return;
    if (currentStep < steps.length - 1) {
      if (currentStep == steps.length - 2) {
        handleSubmit(onSubmit)();
      }
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPrevStep(currentStep);
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col space-y-10 flex-wrap md:space-y-20">
      {/* steps */}
      <nav aria-label="Progress">
        <ol role="list" className="flex space-x-8">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1 capitalize">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-sky-600  transition-colors border-t-4 pb-0 pl-0 pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-sky-600  border-t-4 pb-0 pl-0 pt-4 transition-colors"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-gray-200  transition-colors border-t-4 pb-0 pl-0 pt-4">
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
        <motion.div
          initial={{ x: alfa ? "-50%" : "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col space-y-12 "
        >
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg">Personal information</h1>
            <h3>Please provide your personal details.</h3>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:space-y-10"
          >
            <div className="flex flex-col justify-between md:flex-row md:gap-24">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="firstName"
                  className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.firstName && "border-red-600 focus:border-red-600"
                  }`}
                  placeholder=" "
                  {...register("firstName")}
                  autoComplete="off"
                />
                <label
                  htmlFor="firstName"
                  className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    errors.firstName && "peer-focus:text-red-600 text-red-600"
                  }`}
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="lastName"
                  className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.lastName && "border-red-600 focus:border-red-600"
                  }`}
                  placeholder=" "
                  {...register("lastName")}
                  autoComplete="off"
                />
                <label
                  htmlFor="lastName"
                  className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    errors.lastName && "peer-focus:text-red-600 text-red-600"
                  }`}
                >
                  Last name
                </label>
              </div>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                id="email"
                className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.email && "border-red-600 focus:border-red-600"
                }`}
                placeholder=" "
                {...register("email")}
                autoComplete="off"
              />
              <label
                htmlFor="email"
                className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.email && "peer-focus:text-red-600 text-red-600"
                }`}
              >
                Email address
              </label>
            </div>
          </form>
        </motion.div>
      )}
      {currentStep === 1 && (
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`flex flex-col space-y-12`}
        >
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg">Address information</h1>
            <h3>Please provide your address information.</h3>
          </div>
          <form className="flex flex-col">
            <div className="relative  mb-6 group md:w-1/2">
              <select
                id="country"
                className="block w-full py-2.5 pr-3  bg-transparent border-b-2 border-gray-300  focus:outline-none   appearance-none cursor-pointer"
                defaultValue={"none"}
                {...register("country")}
              >
                <option className="text-gray-600" value="none">
                  Select Country
                </option>
                <option value="tr">Turkey</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <LiaAngleDownSolid />
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                id="street"
                className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                  errors.street && "border-red-600 focus:border-red-600"
                }`}
                placeholder=" "
                {...register("street")}
                autoComplete="off"
              />
              <label
                htmlFor="street"
                className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                  errors.street && "peer-focus:text-red-600 text-red-600"
                }`}
              >
                Street Address
              </label>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:gap-10">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="city"
                  className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.city && "border-red-600 focus:border-red-600"
                  }`}
                  placeholder=" "
                  {...register("city")}
                  autoComplete="off"
                />
                <label
                  htmlFor="city"
                  className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    errors.city && "peer-focus:text-red-600 text-red-600"
                  }`}
                >
                  City
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="state"
                  className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.state && "border-red-600 focus:border-red-600"
                  }`}
                  placeholder=" "
                  {...register("state")}
                  autoComplete="off"
                />
                <label
                  htmlFor="state"
                  className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    errors.state && "peer-focus:text-red-600 text-red-600"
                  }`}
                >
                  State / Province
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  id="zip"
                  className={`block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                    errors.zip && "border-red-600 focus:border-red-600"
                  }`}
                  placeholder=" "
                  {...register("zip")}
                  autoComplete="off"
                />
                <label
                  htmlFor="zip"
                  className={`peer-focus:font-medium absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${
                    errors.zip && "peer-focus:text-red-600 text-red-600"
                  }`}
                >
                  ZIP
                </label>
              </div>
            </div>
          </form>
        </motion.div>
      )}
      {currentStep === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col space-y-12"
        >
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg">Congratulations</h1>
            <h3>You have successfully completed the form!</h3>
          </div>
        </motion.div>
      )}

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
