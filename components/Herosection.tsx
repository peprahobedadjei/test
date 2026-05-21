import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="Because She Can event"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Maroon overlay */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-4 py-32 md:py-10">
        <div className="max-w-xl">
          <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
            A Because She Can Programme
          </p>

          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight mb-4">
            Where African Excellence{" "}
            <em className="italic font-bold">Ascends.</em>
          </h1>

          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            A trusted mentorship ecosystem connecting ambitious Africans with
            world-class guidance. From free cohorts to curated pathways — grow
            at every stage.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-[#cd0e34] text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-[#a80b2a] transition-colors"
            >
              Find Your Pathway
            </Link>
            <Link
              href="#"
              className="border-2 border-white text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-white hover:text-[#370627] transition-colors"
            >
              For Businesses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
