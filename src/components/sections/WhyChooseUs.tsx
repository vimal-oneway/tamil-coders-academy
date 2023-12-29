import { SectionIds } from "@/data/sectionIds";
import data from "@/data/whyChooseUs.json";

export const WhyChooseUs = () => {
  return (
    <section
      className="mt-10 bg-secondary p-5 rounded-lg"
      id={SectionIds.WhyChooseUs}
    >
      <h3 className="text-2xl md:text-3xl font-bold text-center">
        Why Choose Us
      </h3>

      <ul className="mt-7 list-disc flex justify-center flex-wrap  w-full gap-10">
        {data.map(({ title, discription }, index) => (
          <li key={index + title} className="w-full lg:w-2/5 mx-4">
            <span className="text-blue-500 mr-1">{title}</span>
            <span>{discription}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
