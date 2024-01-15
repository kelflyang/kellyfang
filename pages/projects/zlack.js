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
            <p className="text-2xl italic">
              Simple computer generated text capturing the "contemporary,
              vernacular, online lexicon.""
            </p>

            <img
              className="preview-img"
              src={`/images/projects/zlack.gif`} // Path to your image inside the "public" directory
            />
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-3xl">Tech stack</p>
              <p className="text-2xl text-white">Javascript</p>
            </div>
            <div>
              <p className="text-3xl">Class</p>
              <p className="text-2xl text-white">
                CMS.609 The Word Made Digital
              </p>
            </div>
            <div>
              <p className="text-3xl">Duration</p>
              <p className="text-2xl text-white">Spring 2022</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
