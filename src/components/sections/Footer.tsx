"use client";
import { SectionIds } from "@/data/sectionIds";
import Image from "next/image";
import navlink from "@/data/navlink.json";
import Link from "next/link";
import { useRef } from "react";
import { Buttton } from "../Buttton";

export const Footer = () => {
  const emailRef = useRef(null);
  return (
    <div className="mt-20 bg-accent">
      <section
        id={SectionIds.Contact}
        className="py-8 w-full mx-auto px-3 md:px-10 lg:px-0 lg:max-w-6xl flex flex-col md:flex-row gap-4 items-center justify-between md:items-start"
      >
        <div>
          <Image
            src={"/logo2.webp"}
            alt="Tamil coder academy"
            width={"150"}
            height={"150"}
          />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold">Resources</h3>
          <ul>
            {navlink.map(({ link, title }, index) => (
              <div key={index} className="mt-1 text-sm">
                <Link href={link}>{title}</Link>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl text-center md:text-start font-semibold">
            Contact Us{" "}
          </h3>
          <form className="mt-3 flex gap-2 items-center w-full">
            <input
              placeholder="Email"
              type="email"
              ref={emailRef}
              className="px-3 py-1 focus:outline-none border-2 border-secondary w-3/5 rounded-lg"
              name="email"
              id="email"
            />
            <Buttton>Submit</Buttton>
          </form>
        </div>
      </section>
    </div>
  );
};
