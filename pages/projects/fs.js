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
        <p className="text-6xl">Family Separations</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="text-2xl text-white">
              A journalistic web page documenting the family separations that
              occurred at the US-Mexican border under Trump’s Zero Tolerance
              immigration policy. Made by analyzing a data set retrieved by the
              American Immigration Council through the Freedom of Information
              Act. Includes a scrollytelling narrative and interactive map based
              visualization. Worked within a group of four on data analysis,
              prototyping and development.
            </p>

            <img
              className="preview-img"
              src={`/images/projects/fs.gif`} // Path to your image inside the "public" directory
            />
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-3xl">Link</p>
              <Link
                href="https://kelflyang.github.io/family-separations"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                kelflyang.github.io/family-separations/
              </Link>
            </div>
            <div>
              <p className="text-3xl">Tech stack</p>
              <p className="text-2xl text-white">
                Javascript, D3, Python, Mapbox
              </p>
            </div>
            <div>
              <p className="text-3xl">Class</p>
              <p className="text-2xl text-white">
                11.154 Big Data, Visualization and Society
              </p>
            </div>
            <div>
              <p className="text-3xl">Duration</p>
              <p className="text-2xl text-white">Fall 2021</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
