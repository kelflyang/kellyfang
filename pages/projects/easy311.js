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
        <p className="text-5xl">EASY 311</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl italic text-white">
              "Easy 311's goal is to make 311 reporting and tracking easy
              through a chatbot and interactive map, as well as provide powerful
              analytics to measure the effectiveness of 311 city services
              through a data visualization dashboard.""
            </p>
            <div className="flex flex-row gap-8 flex-wrap justify-center">
              <img
                className="w-2/5"
                src={`/images/projects/easy311.gif`} // Path to your image inside the "public" directory
              />
              <img
                className="w-2/5"
                src={`/images/projects/easy311_chatbot.gif`} // Path to your image inside the "public" directory
              />
            </div>

            <p className="text-xl text-white">
              As the technical lead of my group, I programmed the entire web
              application. Informed by meetings with community members and
              critiques from instructors, we iterated over the design of the
              application and its features and functionalities several times.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <p className="text-2xl">Wireframe</p>

                <iframe
                  width="100%"
                  height="500"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FudfVnwe3ozE8LYsOWORvsI%2F311-Squad%3Ftype%3Ddesign%26node-id%3D62%253A4659%26mode%3Ddesign%26t%3DeQLx2MJoWsHyNtXY-1"
                  allowfullscreen
                ></iframe>
              </div>
              <p className="text-2xl">Final Presentation</p>

              <iframe
                src="https://docs.google.com/presentation/d/1Y_rXk5chAYSYqEtSNu5taRLOJ0lzLytoXDU3Rc5DfyU/preview"
                width="100%"
                height="600px"
              ></iframe>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Report</p>
              <iframe
                src="https://drive.google.com/file/d/1HmV6i3N73BVutUKJCV3E_pN0_KrSIQlL/preview"
                width="100%"
                height="900px"
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <Link
                href="https://www.easy311.app/?undefined"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                easy311.app
              </Link>
            </div>

            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">
                React, Express, MongoDB, Deck.gl, Mapbox, Google APIs
              </p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">
                11.138 Crowd Sourced City: Civic Tech Prototyping
              </p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Fall 2022</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
