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
        <p className="text-5xl">gpTea</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl italic text-white">
              “gpTea” is a tea set that preserves and encourages the sharing of
              untold stories between separated friends and loved ones through
              generative AI. It enhances the ritual of tea drinking by turning
              each cup into a shared, interactive storytelling experience,
              encouraging a slower, more reflective form of communication.
            </p>
            <div className="flex flex-row gap-8 flex-wrap justify-center">
              <img
                className="w-2/5"
                src={`/images/projects/gpTea.gif`} // Path to your image inside the "public" directory
              />
            </div>

            {/* <p className="text-xl text-white">
              As the technical lead of my group, I programmed the entire web
              application. Informed by meetings with community members and
              critiques from instructors, we iterated over the design of the
              application and its features and functionalities several times.
            </p> */}
            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Presentation</p>

              <iframe
                src="https://docs.google.com/presentation/d/18mdUYME-6hwurC8H7HWIQ_PzSvRDtvIImggHq0Es7Ew/preview"
                width="100%"
                height="600px"
              ></iframe>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Report</p>
              <iframe
                src="https://docs.google.com/document/d/1Obm_kEFeqZt3BT3wISIlpuysKjh4FlzJBSCK2SLOTjg/preview"
                width="100%"
                height="900px"
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Tech stack</p>
              <p className="text-xl text-white">React, Express, MongoDB</p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">
                4.043 Design Workshop: Interaction Intelligence
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
