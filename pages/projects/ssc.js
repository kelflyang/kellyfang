import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../../components/Navigation";
import ProjectLayout from "../../components/ProjectLayout";

import React from "react";
import Scrollspy from "react-scrollspy";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="h-min-screen p-24 flex flex-col gap-16">
        <p className="text-6xl">Self-Sufficient Cities</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="text-2xl italic text-white">
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
              <p className="text-3xl">Link</p>
              <Link
                href="https://cities.dhlab.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                cities.dhlab.mit.edu
              </Link>
            </div>
            <div>
              <p className="text-3xl">Tech stack</p>
              <p className="text-2xl text-white">React, Python</p>
            </div>
            <div>
              <p className="text-3xl">Company</p>
              <p className="text-2xl text-white">MIT Digital Humanities Lab</p>
            </div>
            <div>
              <p className="text-3xl">Duration</p>
              <p className="text-2xl text-white">Spring 2021</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
