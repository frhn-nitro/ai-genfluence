"use client";

import { useAuth } from "@clerk/nextjs";

export const LandingNavbarNewicon = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <style jsx>{`
        .bg-btn-primary {
          --tw-bg-opacity: 1;
          background-color: rgb(46, 46, 46 / var(--tw-bg-opacity));
        }
      `}</style>

      <div className="rounded-lg mb-2 px-2 bg-btn-primary h-10 lg:h-7 flex items-center justify-center z-10 w-auto lg:-ml-10 lg:-mr-10 gap-2">
        <button className="bg-white text-sm cursor-default px-2 font-['outfit'] rounded-md font-bold text-black">
          {" "}
          New{" "}
        </button>
        <span className="text-gray-200 font-['inter'] text-xs md:sm text-center font-light ">
          Credit card payments from over 100 countries are now being accepted!
        </span>
        <div className="flex text-sm h-4 cursor-pointer items-center space-x-1 focus:ring-none focus:outline-none text-white font-['outfit'] font-medium rounded-lg ">
          <span className="text-center text-xs md:text-sm">Check it out</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            className="text-xs md:text-sm"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
