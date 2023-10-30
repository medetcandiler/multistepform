import React from "react";

const SecondForm = () => {
  return (
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
  );
};

export default SecondForm;
