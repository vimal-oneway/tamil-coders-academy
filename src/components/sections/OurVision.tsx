import { SectionIds } from "@/data/sectionIds";
import React from "react";

export const OurVision = () => {
  return (
    <section className="mt-20" id={SectionIds.OurVisioni}>
      <div className="bg-accent p-3 rounded-lg">
        <h2 className="text-3xl md:text-5xl text-center font-bold">
          Our Vision
        </h2>
        <p className="mt-3 text-center">
          Welcome to Tamil Coders Academy, where we bring the power of advanced
          programming education to Tamil speakers around the world. Our mission
          is to bridge the gap between language barriers and knowledge,
          empowering you to master the most intricate programming concepts
          effortlessly.
        </p>
      </div>
    </section>
  );
};
