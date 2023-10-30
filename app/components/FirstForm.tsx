import React from "react";

const FirstForm = () => {
  return (
    <section className="flex flex-col space-y-12">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold text-lg">Personal information</h1>
        <h3 >Please provide your personal details.</h3>
      </div>
      <form className="flex flex-col space-y-10">
        <div className="flex justify-between gap-5">
          <input className="input-style" type="text" placeholder="First name" />
          <input className="input-style" type="text" placeholder="Last name" />
        </div>
        <div>
          <input className="input-style" type="email" placeholder="Email address" />
        </div>
      </form>
    </section>
  );
};

export default FirstForm;
