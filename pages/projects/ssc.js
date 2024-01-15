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
        <p className="text-5xl">Self-Sufficient Cities</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="text-xl italic text-white">
              "An online, interactive mapping and timeline project that tells
              the story of the rise and fall of urban communities that grew
              their own food in the 20th century United States. Using population
              and agricultural census documents, oral histories, sample
              household survey data, photos, maps, aerial photography, and
              satellite imagery, the project created a platform to travel
              through time and space to see how changes in landscapes, land use,
              and infrastructure affect community well-being."
            </p>

            <img
              className="preview-img"
              src={`/images/projects/ssc.gif`} // Path to your image inside the "public" directory
            />
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <div className="flex flex-col  text-xl text-white">
                <Link
                  href="https://cities.dhlab.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cities.dhlab.mit.edu
                </Link>
                <Link
                  href="https://digitalhumanities.mit.edu/project/self-sustaining-cities/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Website
                </Link>
              </div>
            </div>
            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">React, Python</p>
            </div>
            <div>
              <p className="text-2xl">Company</p>
              <p className="text-xl text-white">MIT Digital Humanities Lab</p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Spring 2021</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
