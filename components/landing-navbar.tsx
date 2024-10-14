"use client";

import { Montserrat } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-ransparent flex items-center justify-between">
      <Link href="/" className="flex items-center w-56 h-7">
        <div className="relative h-full w-full mr-4">
          <Image
            fill
            alt="Logo"
            className="object-cover"
            src="/brand/v2_brand.png"
          />
        </div>
        {/* <h1 className={cn("text-3xl font-bold text-white", font.className)}>
          Genfluence
        </h1> */}
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button variant="navbar" className="rounded-full mr-2 text-1xl">
            Model
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button variant="navbar" className="rounded-full mr-2 text-1xl">
            Create
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button variant="navbar" className="rounded-full mr-2 text-1xl">
            Pricing
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button className="rounded-full text-1xl">Login</Button>
        </Link>
      </div>
    </nav>
  );
};
