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
        <p className="text-5xl">Dynamix</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl italic text-white">
              Dynamix is a novel system designed to automate DJ functions by
              dynamically interpreting the affective state of a crowd in real
              time. Utilizing a laptop webcam, advanced affect recognition
              models, and audio processing and manipulation tools, Dynamix
              enhances party atmospheres by optimizing music selection and
              transitions based on crowd emotion, aiming to maintain and elevate
              the overall energy of the venue.
            </p>{" "}
            <p className="text-xl italic text-white">
              In a party setting, the system is able to successfully detect
              moments to transition songs, choose songs based on sentiment
              history and similarities in audio features, and seamlessly
              transition between them by applying audio filters. However,
              transitioning songs based on the number of faces detected is
              extremely sensitive due to low lighting conditions and rapid
              movements by audience members. We found that when transitioning
              based on the number of faces detected, the system played 1.9 songs
              per minute (spm), which is twice the rate when transitioning based
              on crowd sentiment alone.
            </p>
            {/* <p className="text-xl text-white">
              As the technical lead of my group, I programmed the entire web
              application. Informed by meetings with community members and
              critiques from instructors, we iterated over the design of the
              application and its features and functionalities several times.
            </p> */}
            <div className="flex flex-col gap-8">
              <p className="text-2xl">Demo</p>

              <iframe
                width="100%"
                height="600px"
                src="https://www.youtube.com/embed/uTX7Y23oqZ4"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Report</p>
              <iframe
                src="https://drive.google.com/file/d/1tpgSdjhDpIFBdPxUceMGB5uCu6p4VN0g/preview"
                width="100%"
                height="900px"
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <Link
                href="https://github.com/liamkronman/dynamix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                code
              </Link>
            </div>
            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">
                Python, Spotify API, pydub. Pygame
              </p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">
                6.8510 Intelligent Multimodal User Interfaces
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
