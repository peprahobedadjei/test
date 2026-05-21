

import { useState } from "react";
import { Eye, EyeOff, ArrowRight, Sparkles, Users } from "lucide-react";
import Link from "next/link";

type Role = "mentor" | "mentee";

interface AuthFormProps {
  role: Role;
  onSwitchRole: () => void;
}

export function AuthForm({ role, onSwitchRole }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isMentor = role === "mentor";

  return (
<div className="w-full max-w-md mx-auto space-y-8 animate-fadeIn">
      {/* Mobile logo */}
      <div className="lg:hidden text-center">
        <Link
          href="/"
          className="text-2xl font-bold text-[#3D0028] tracking-tight"
        >
          Ascendency
        </Link>
      </div>

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${
              isMentor
                ? "bg-red-50 text-[#cd0e34] border-red-100"
                : "bg-purple-50 text-[#6B21A8] border-purple-100"
            }`}
          >
            {isMentor ? (
              <Sparkles className="h-3.5 w-3.5" />
            ) : (
              <Users className="h-3.5 w-3.5" />
            )}
            {isMentor ? "Mentor" : "Mentee"}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
        <p className="text-sm text-gray-500 mt-1.5">
          Sign in to continue as a {role}.
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1.5">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0003C]/30 focus:border-[#C0003C] transition-all"
          />
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium text-gray-600">
              Password
            </label>
            <button
              type="button"
              className="text-xs font-medium text-[#C0003C] hover:text-[#a0002e] transition-colors"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              className="w-full h-11 px-3 pr-10 rounded-md border border-gray-200 bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C0003C]/30 focus:border-[#C0003C] transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
        <button
          type="button"
          className="w-full h-11 bg-[#cd0e34] hover:bg-[#a0002e] text-white rounded-md text-sm font-semibold flex items-center justify-center gap-2 group transition-all duration-200 active:scale-[0.98]"
        >
          Sign In
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-gray-400">
            New to Ascendency?
          </span>
        </div>
      </div>

      {/* Create account */}
      <button
        type="button"
        className="w-full h-11 border border-gray-200 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"
      >
        Create an account
      </button>

      {/* Switch role */}
      <button
        type="button"
        onClick={onSwitchRole}
        className="w-full text-xs font-medium text-gray-400 hover:text-[#C0003C] transition-colors"
      >
        Switch to {isMentor ? "Mentee" : "Mentor"} →
      </button>
    </div>
  );
}
