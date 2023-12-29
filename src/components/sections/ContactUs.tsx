"use client";
import React, { useRef } from "react";
import { Buttton } from "../Buttton";

export const ContactUs = () => {
  const emailRef = useRef(null);
  return (
    <div className="my-10">
      <h2 className="text-2xl lg:text-3xl font-bold text-center">Contact Us</h2>
      <form className="mt-3 flex flex-col lg:flex-row gap-2 mx-auto items-center w-full max-w-md">
        <input
          placeholder="Email"
          type="email"
          ref={emailRef}
          className="px-3 py-1 focus:outline-none border-2 border-secondary w-full rounded-lg"
          name="email"
          id="email"
        />
        <Buttton className="w-full">Submit</Buttton>
      </form>
    </div>
  );
};
