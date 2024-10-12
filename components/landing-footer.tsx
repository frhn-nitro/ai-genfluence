"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "./ui/button";

export const LandingFooter = () => {
  return (
    <div className="relative w-full mt-12 lg:mt-24">
      <div className="flex items-center justify-center">
        <div
          className="rounded-full"
          style={{
            borderColor: `rgba(255, 255, 255, 0.1)`,
            background: `radial-gradient(circle at 55% 40%, red -280%, rgb(17, 24, 39) 56%)`,
          }}
        >
          <svg
            width="744"
            height="744"
            viewBox="0 0 744 744"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.05"
              cx="372"
              cy="372"
              r="371.5"
              stroke="rgba(202, 198, 221, 0.6)"
            ></circle>
            <circle
              opacity="0.1"
              cx="371.999"
              cy="371.999"
              r="313.673"
              stroke="rgba(202, 198, 221, 0.4)"
            ></circle>
            <circle
              opacity="0.1"
              cx="372"
              cy="372"
              r="244.519"
              stroke="rgba(255, 0, 0, 0.9)"
            ></circle>
            <circle
              opacity="0.1"
              cx="371.999"
              cy="371.999"
              r="171.788"
              stroke="rgba(255, 0, 0, 0.9)"
            ></circle>
            <circle
              opacity="0.1"
              cx="371.999"
              cy="371.999"
              r="109.788"
              stroke="rgba(255, 0, 0, 0.9)"
            ></circle>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-8">
        <div className="self-stretch flex-col justify-start items-center gap-3 flex">
          <div className="self-stretch text-center text-white text-6xl font-semibold font-['Outfit'] leading-10">
            Make it Epic!
          </div>
          <div className="w-full text-center text-white text-base font-normal font-['Inter'] leading-relaxed">
            Stop dreaming. Start creating.
          </div>
        </div>
        <div className="justify-center items-start gap-6 inline-flex">
          <Link href="/sign-up">
            <Button className="md:text-lg p-4 md:p-6 rounded-full">
              Try it Out!
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
