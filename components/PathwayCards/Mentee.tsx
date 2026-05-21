"use client";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "All Curious tier benefits, with the addition of",
    desc: "",
  },
  {
    title: "Monthly leadership workshops",
    desc: "Develop the soft skills and strategic thinking to lead with confidence.",
  },
  {
    title: "Monthly career building group",
    desc: "Collaborate with a small group of peers on career goals and accountability.",
  },
  {
    title: "Monthly meetings with your personal mentor",
    desc: "One-on-one sessions tailored to your goals and career stage.",
  },
  {
    title: "Featured marketplace listing",
    desc: "Stand out to employers and clients with a highlighted profile.",
  }
];

export default function MenteePathway() {
  return (
    <div className="w-full max-w-[1300px] mx-auto relative py-6">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#cd0e34]">
        <div className="grid grid-cols-[120px_1fr_220px]">
          {/* Col 1 — Big Number */}
          <div className="flex items-center justify-center p-8">
            <span className="text-[8rem] font-black text-[#cd0e34] opacity-20 leading-none select-none">
              2
            </span>
          </div>

          {/* Col 2 — Text & Features */}
          <div className="p-10">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-[#2d0520]">Mentee</h2>
              <span className="text-[#cd0e34] text-sm font-semibold">
                Acceleration
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xl mb-8">
        Go further with dedicated mentorship. Get paired with a personal mentor, join leadership workshops, and accelerate your career with structured support.
            </p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckIcon
                    size={18}
                    className="text-[#cd0e34] mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="text-sm text-[#2d0520]">{f.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Pricing CTA */}
          <div className="relative flex flex-col items-end justify-center gap-3 p-8 bg-gray-50">
            {/* Most Popular Badge — top right corner */}
            <div className="absolute top-0 right-0">
              <span className="bg-[#cd0e34] text-white text-xs font-bold px-4 py-2 block tracking-wide rounded-bl-sm">
                Most Popular
              </span>
            </div>

            <p className="text-5xl font-black text-[#2d0520] whitespace-nowrap mt-6">
              $10
              <span className="text-base font-normal text-gray-400">
                /month
              </span>
            </p>
            <Link
              href="#"
              className="bg-[#cd0e34] text-white font-semibold text-sm px-6 py-3 rounded-sm hover:bg-[#a80b2a] transition-colors w-48 text-center"
            >
              Join Now
            </Link>

            <Link
              href="#"
              className="border border-gray-300 text-[#2d0520] font-semibold text-sm px-6 py-3 rounded-sm hover:bg-gray-50 transition-colors w-48 text-center whitespace-nowrap"
            >
              Apply for Scholarship
            </Link>
            <p className="text-xs text-gray-400">Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}
