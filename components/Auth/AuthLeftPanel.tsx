
import { Sparkles, Users } from "lucide-react";
import Link from "next/link";

export default function AuthLeftPanel() {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#3D0028] flex-col justify-between p-12 text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5a0038] via-[#3D0028] to-[#8B0000] opacity-95 pointer-events-none" />
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Link href="/" className="text-2xl font-bold tracking-tight font-sans">
          Ascendency
        </Link>
      </div>

      <div className="relative z-10 space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight">
            Your mentorship journey starts here.
          </h1>
          <p className="text-base opacity-80 leading-relaxed">
            Join a community of mentors and mentees building the future together
            through Because She Can.
          </p>
        </div>

        <div className="space-y-5 pt-2">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-sm border border-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">For Mentors</p>
              <p className="text-sm opacity-75 mt-0.5 leading-relaxed">
                Share your expertise, set your rates, and guide the next
                generation.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 backdrop-blur-sm border border-white/10">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-sm">For Mentees</p>
              <p className="text-sm opacity-75 mt-0.5 leading-relaxed">
                Find your perfect mentor, track your growth, and accelerate your
                path.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="relative z-10 text-xs opacity-50">
        © 2026 Because She Can. All rights reserved.
      </p>
    </div>
  );
}