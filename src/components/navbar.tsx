"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import navlink from "../data/navlink.json";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full bg-secondary py-1 ">
      <header
        className="max-w-5xl 
        w-full mx-auto px-3 md:px-10 lg:px-0 lg:max-w-5xl
        mx-auto flex justify-between items-center h-full w-full"
      >
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={"50"}
            height={"50"}
            loading="lazy"
          />
        </Link>
        <nav className="relative block lg:hidden">
          <button
            className={
              "text-gray-500 w-10 h-8 relative focus:outline-none z-50"
            }
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={
                  !open
                    ? "block absolute -mt-1 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                    : "block absolute -mt-1 h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45 top-1"
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  !open
                    ? "block absolute h-0.5 w-5 bg-current transform transition duration-800 ease-in-out"
                    : "block absolute h-0.5 bg-current transform transition duration-900 ease-in-out w-0"
                }
              ></span>
              <span
                aria-hidden="true"
                className={
                  !open
                    ? "block absolute mt-1 h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                    : "block absolute mt-1 h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out -rotate-45 -top-1"
                }
              ></span>
            </div>
          </button>

          <div
            className={
              !open ? "opacti transition duration-200 ease-in-out" : "block"
            }
          >
            <section
              className={
                !open
                  ? "absolute opacity-0 top-[120%] mt-2 right-0 translate-y-[50px] transform duration-500 transition ease-in-out bg-secondary p-2 rounded-md"
                  : " absolute opacity-100 top-[120%] mt-2 translate-y-0 transform duration-500 transition ease-in-out right-0 bg-secondary p-2 rounded-md"
              }
            >
              <div className="w-full min-w-[150px]">
                {navlink.map(({ link, title }, index) => (
                  <div
                    key={index}
                    className="mt-2 mx-3 border-b border-accent hover:border-blue-500 hover:text-blue-500"
                  >
                    <Link href={link}>{title}</Link>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </nav>
        <nav className="hidden lg:block">
          <ul className="flex w-full gap-3 font-semibold">
            <li>
              <Link href="#our-vision">Our Vision</Link>
            </li>
            <li>
              <Link href="#courses">Courses</Link>
            </li>
            <li>
              <Link href="#why-choose-us">Why Choose Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
