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
        <p className="text-5xl">trailMix</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl text-white">
              trailMix is a social media app for nature-enjoyers and hikers of
              all experience levels. The app interfaces with Mapbox's directions
              API to create hiking trails based on existing footpaths. With
              trails, users can document their own hiking experiences. The app
              also allows users to coordinate hikes together through the
              creation of events where a user may propose a hike on a certain
              date, with certain destinations along the way. Other users may
              view the event details (including attendees, destinations,
              estimated distance/elevation), start a discussion, and register.
              This was a solo design and development of a full-stack application
              over the course of 6 assignments where I learned a lot about good
              software design practices including VSD analysis, heuristic
              evaluation, user testing, and functional/concept design.
            </p>

            <img
              src={`/images/projects/trailmix.gif`} // Path to your image inside the "public" directory
            />

            <div className="flex flex-col gap-8">
              <p className="text-2xl">Wireframe</p>

              <iframe
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEJUMSiobfUZidO0OC3LhKy%2FTrailMix%3Ftype%3Ddesign%26node-id%3D23%253A1484%26mode%3Ddesign%26t%3DsK1zXS6diqnQRf1b-1"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <Link
                href="https://trailmixer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                trailmixer.vercel.app
              </Link>
            </div>
            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">
                Vue, MongoDB, Express, Mapbox, Pinia
              </p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">6.1040 Software Design</p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Fall 2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
