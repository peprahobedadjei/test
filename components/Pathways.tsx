import CuriousPathway from "./PathwayCards/Curious";
import MenteePathway from "./PathwayCards/Mentee";

export default function Pathways() {
  return (
    <section id="pathways" className="bg-[#f5f5f5] py-16 px-4">
      <div className="w-full max-w-[1300px] mx-auto">
        {/* Section Heading */}
        <div className="text-center my-12 mb-20">
          <h1 className="text-5xl font-bold text-[#2d0520] mb-4">
            Curated Mentorship Pathways
          </h1>
          <p className="text-gray-500 text-base max-w-3xl mx-auto">
            Your monthly platform for growth. Vetted mentors, masterclasses,
            workshops, a marketplace, and AI-powered tools — all in one place.
          </p>
        </div>
        <CuriousPathway />
        <MenteePathway />
      </div>
    </section>
  );
}
