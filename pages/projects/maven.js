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
        <p className="text-5xl">Maven</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl text-white">
              Maven is a platform that crowdsources translations for educational
              and academic materials using a Genius-style annotation interface.
              A user can upload a document which gets partitioned into sections
              for other users to help translate. Each section can have multiple
              translations which users may upvote or downvote. In the end, users
              can choose which translation for each section they want, and
              export a translation for an entire document.
              <br></br>
              <br></br>
              This was a final group project for my software design class. If
              given more time, my group and I would have loved to explore the
              possibility of incorporating a LLM to conduct preliminary
              translations which users can help annotate. We also would have
              liked to add functionalities of uploading and exporting pdf files
              to and from the web application as well as allowing for users to
              comment on translations to further discussions.
            </p>

            <img
              src={`/images/projects/maven.gif`} // Path to your image inside the "public" directory
            />

            <div className="flex flex-col gap-8">
              <p className="text-2xl">Wireframe</p>

              <iframe
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDHxuB4UCGhtJojR7LO0x6F%2FP3%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DOkrHjKvv8vEH7PKH-1"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <Link
                href="https://maven-xi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                maven-xi.vercel.app
              </Link>
              &#20; (broken for now)
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
