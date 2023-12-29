import { SectionIds } from "@/data/sectionIds";
import Image from "next/image";
import React from "react";

export const Courses = () => {
  return (
    <section
      id={SectionIds.Courses}
      className="my-20 lg:my-40 flex-col lg:flex-row flex justify-between items-center gap-8"
    >
      <div className="w-full hidden lg:block">
        <Image
          src={"/mern.png"}
          alt="Mern stack devlopment"
          width={"550"}
          height={"550"}
        />
      </div>

      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold">
          Join Full Stack Course
        </h2>
        <div className="w-full block lg:hidden my-5">
          <Image
            src={"/mern.png"}
            alt="Mern stack devlopment"
            width={"550"}
            height={"550"}
          />
        </div>

        <p className="mt-2">
          Ready to master both frontend and backend? Our Full Stack Course is
          your ticket to becoming a well-rounded web developer!
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li>Master front-end and back-end development</li>
          <li>Build dynamic websites and applications</li>
          <li>Hands-on projects for practical experience</li>
          <li>Beginner-friendly with easy-to-follow lessons</li>
          <li>Expert guidance for a well-rounded skill set</li>
          <li>Suitable for all levels of expertise</li>
          <li>Join now to dive into the world of Full Stack development!</li>
        </ul>
      </div>
    </section>
  );
};
