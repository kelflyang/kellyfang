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
        <p className="text-6xl">Spatial Equity NYC</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-8">
            <p className="text-2xl italic text-white">
              "The NYC Spatial Equity Tool [is] an online database of maps and
              information about how accessible, safe, healthy, and efficiently
              used public space is in New York City. Users will be able to
              overlay data with demographics; organize and map by different
              geographies, including by City Council district and community
              board district; and most importantly, organize this information
              comparatively: users can compare. In this way, the tool will
              deliver the most up-to-date available estimations of equity and
              inequity between hundreds of New York City neighborhoods, laying
              the groundwork for funding allocation and real change."
            </p>

            <img
              className="preview-img"
              src={`/images/projects/se.gif`} // Path to your image inside the "public" directory
            />
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-3xl">Link</p>
              <Link
                href="https://spatialequity.nyc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white"
              >
                spatialequity.nyc
              </Link>
            </div>
            <div>
              <p className="text-3xl">Tech stack</p>
              <p className="text-2xl text-white">React, Deck.gl, Mapbox</p>
            </div>
            <div>
              <p className="text-3xl">Company</p>
              <p className="text-2xl text-white">
                MIT Leventhal Center for Advanced Urbanism
              </p>
            </div>
            <div>
              <p className="text-3xl">Duration</p>
              <p className="text-2xl text-white">Summer, Fall 2022</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
