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
        <p className="text-5xl">Living Heritage Atlas | Beirut</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="text-xl italic text-white">
              "A digital platform showcasing craftspeople’s visual stories,
              crafts and artisanal materials through a mapping visualization.
              The project constructs an archive of social memories and local
              practices by using a web application that crowdsources stories of
              craftspeople and it activates public spaces as dynamic grounds for
              educational and cultural production."
            </p>

            <img
              className="preview-img"
              src={`/images/projects/lha.gif`} // Path to your image inside the "public" directory
            />

            <p className="text-xl text-white">
              I was the primary full-stack developer for this project and
              programmed the website for the entire duration of my 2022 summer.
              It was my first ever experience working in the backend, with
              databases and creating APIs. The platform features dynamic web
              pages, web forms and an interactive map visualization.
            </p>

            <Link
              href="https://act.mit.edu/2023/05/living-heritage-atlas-beirut-at-2023-venice-architecture-biennale/"
              target="_blank"
              rel="noopener noreferrer"
            >
              It was also featured in the 2023 Venice Architecture Biennale!
            </Link>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Links</p>
              <div className="flex flex-col  text-xl text-white">
                <Link
                  href="https://livingheritage.mit.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white"
                >
                  livingheritage.mit.edu
                </Link>
                <Link
                  href="https://civicdatadesignlab.mit.edu/Living-Heritage-Atlas-Beirut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project website
                </Link>
              </div>
            </div>
            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">
                React, Next.js, MongoDB, Node, Mapbox
              </p>
            </div>
            <div>
              <p className="text-2xl">Company</p>
              <p className="text-xl text-white">MIT Civic Data Design Lab</p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Summer 2022</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
