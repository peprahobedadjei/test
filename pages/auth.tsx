"use client";

import { AuthForm } from "@/components/Auth/AuthForm";
import AuthLeftPanel from "@/components/Auth/AuthLeftPanel";
import { useState } from "react";

type Role = "mentor" | "mentee";

export default function AuthPage() {
  const [role, setRole] = useState<Role>("mentor");
  const [animating, setAnimating] = useState(false);

  const handleSwitchRole = () => {
    if (animating) return;

    setAnimating(true);

    setTimeout(() => {
      setRole((prev) => (prev === "mentor" ? "mentee" : "mentor"));
      setAnimating(false);
    }, 220);
  };

  return (
    <>
      {/* Global Animations */}
      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-12px);
          }
        }

        .animate-fadeIn {
          animation: fadeSlideIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .animate-fadeOut {
          animation: fadeSlideOut 0.22s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <div className="min-h-screen flex">
        {/* Left Branding Panel */}
        <AuthLeftPanel />

        {/* Right Form Section */}
        <div className="flex-1 flex items-center justify-center px-20 py-12 bg-white">
          {/* Width Controller */}
          <div className="w-full max-w-4xl">
            {/* Animated Form */}
            <div
              key={role}
              className={`w-full ${
                animating ? "animate-fadeOut" : "animate-fadeIn"
              }`}
            >
              <AuthForm
                role={role}
                onSwitchRole={handleSwitchRole}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}