"use clinet";

import { Montserrat } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle, CardImage } from "./ui/card";
import Link from "next/link";

import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const testimonials = [
  {
    image: "/img/v2_6.png",
    title: "Captivating Characters",
    description:
      "Use our cutting edge diffusion technology to create stunning characters.",
  },
  {
    image: "/img/v2_7.png",
    title: "Breathtaking Quality",
    description:
      "Get started with easy to use templates and prompts to control your character's appearance.",
  },
  {
    image: "/img/v2_8.png",
    title: "Unparalleled Accuracy",
    description:
      "Create evocative poses and bring fans deeper into your character's world.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white card w-full shadow-x1"
          >
            <CardImage>
              <img
                src={item.image}
                alt="Accuracy Image"
                className="rounded-xl w-full h-auto"
              />
            </CardImage>
            <CardTitle>
              <div className="text-white text-3xl font-bold font-['Outfit'] capitalize leading-10 pl-8">
                {item.title}
              </div>
            </CardTitle>
            <CardContent>
              <div className="w-full text-white text-base font-normal font-['Inter'] leading-relaxed p-3 m-0">
                {item.description}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-white py-5 text-center space-y-5">
        <Link href="/sign-up">
          <Button className="md:text-lg p-4 md:p-6 rounded-full">
            Try it Out!
          </Button>
        </Link>
      </div>
    </div>
  );
};
