import Link from "next/link";

import Navigation from "../../components/Navigation";
import ProjectLayout from "../../components/ProjectLayout";

import React from "react";
import Scrollspy from "react-scrollspy";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="h-min-screen p-24 flex flex-col gap-8">
        <p className="text-5xl">Thumb Wars</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl italic text-white">
              "Thumb Wars is a game inspired by the physicality of tackling in
              sports. It’s designed to capture the explosiveness, athleticism
              and strategy of sport, all within the palm of your hands."
            </p>
            <img
              src={`/images/projects/thumb.gif`} // Path to your image inside the "public" directory
            />

            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Presentation</p>
              <iframe
                src="https://docs.google.com/presentation/d/1XXWLqgnxH_D0Uhe1rdXiqScOeZ9fPWKhx2H1ubCOZ2U/preview"
                width="100%"
                height="500px"
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Tech</p>
              <p className="text-xl text-white">P5.js, Javascript</p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">
                4.043: Interaction Intelligence
              </p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Spring 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
