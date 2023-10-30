import React from "react";

const SecondForm = () => {
  return (
    <section>
      <div>
        <h1>Address information</h1>
        <h3>Please provde your address information.</h3>
      </div>
      <form>
        <label htmlFor="country">Country</label>
        <select id="country">
          <option value="Turkiye">Turkiye</option>
          <option value="Turkiye">United Kingdom</option>
          <option value="Turkiye">United States</option>
        </select>
        <label htmlFor="street">Street address</label>
        <input type="text" id="street" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
        <label htmlFor="state">State / Province</label>
        <input type="text" id="state" />
        <label htmlFor="zip">ZIP</label>
        <input type="text" id="zip" />
      </form>
    </section>
  );
};

export default SecondForm;
