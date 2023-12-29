import React from "react";
import { Buttton } from "../Buttton";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="min-h-[70dvh] min-h-[70vh] flex justify-between items-center">
      <div className="w-3/4">
        <h1 className="font-bold text-3xl md:text-5xl">Tamil Coders Academy</h1>
        <p className="mt-2">
          Explore advanced programming in Tamil - breaking language barriers.
          Learn the latest tech effortlessly in your native language for a
          deeper understanding. Your key to innovation starts here!
        </p>
        <h3 className="text-xl md:text-2xl mt-2">
          “யாதும் ஊரே யாவரும் கேளிர்”
        </h3>
        <div className="mt-3">
          <Buttton>Course</Buttton>
        </div>
      </div>
      <div className="w-full">
        <Image
          src={"/hero.png"}
          alt="Programming Character"
          width={"850"}
          height={"850"}
        />
      </div>
    </section>
  );
};
