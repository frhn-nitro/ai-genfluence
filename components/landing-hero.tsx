"use client";

import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "./ui/button";
import TypewriterComponent from "typewriter-effect";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white py-5 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>
          <p>Bring Any Character To Life.</p>
          <p className="mt-6 mb-6">Tell A Story.</p>
          <p>Build A Fan Base!</p>
        </h1>
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full"
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div>
        <img
          class="w-full h-auto"
          src="/brand/hero.png"
          alt="Hero Image"
          data-xblocker="passed"
          // style="visibility: visible;"
        />
      </div>
    </div>
  );
};
