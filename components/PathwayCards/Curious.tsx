"use client";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Access to our list of vetted mentors",
    desc: "Browse and connect with experienced professionals across industries.",
  },
  {
    title: "On-Demand Masterclasses",
    desc: "Watch expert-led sessions on leadership, tech, and career growth — anytime.",
  },
  {
    title: "Monthly Technical Workshops",
    desc: "Hands-on sessions to sharpen your tech and digital skills.",
  },
  {
    title: "Community forum access",
    desc: "Join conversations, ask questions, and learn from peers across Africa.",
  },
  {
    title: "Access to Ascendency AI",
    desc: "Your personal AI career assistant for guidance, prep, and planning.",
  },
  {
    title: "Freelance marketplace profile",
    desc: "Showcase your skills and get discovered by clients and companies.",
  },
];

export default function CuriousPathway() {
  return (
    <section id="pathways" className="bg-[#f5f5f5] px-4">
      <div className="w-full max-w-[1300px] mx-auto">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-[120px_1fr_220px]">
            {/* Col 1 — Big Number */}
            <div className="flex items-center justify-center p-8 ">
              <span className="text-[8rem] font-black text-[#cd0e34] opacity-20 leading-none select-none">
                1
              </span>
            </div>

            {/* Col 2 — Text & Features */}
            <div className="p-10">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-[#2d0520]">Curious</h2>
                <span className="text-[#cd0e34] text-sm font-semibold">
                  Foundation Builder
                </span>
              </div>
              <p className="text-gray-500 text-sm max-w-xl mb-8">
                Start your growth journey. Get access to vetted mentors,
                masterclasses, workshops, and AI-powered career tools — all for
                less than a cup of coffee.
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <CheckIcon
                      size={18}
                      className="text-[#cd0e34] mt-0.5 shrink-0"
                    />
                    <div>
                      <p className="text-sm  text-[#2d0520]">{f.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 — Pricing CTA */}
            <div className="flex flex-col items-end justify-center gap-3 p-8  bg-gray-50">
              <p className="text-5xl font-black text-[#2d0520] whitespace-nowrap">
                $1
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
              <p className="text-xs text-gray-400">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
