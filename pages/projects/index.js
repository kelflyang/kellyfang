import ProjectPreview from "../../components/ProjectPreview";

import Navigation from "../../components/Navigation";
import React from "react";

const projectIds = [
  "se",
  "lha",
  "fs",
  "easy311",
  "ssc",
  "trailMix",
  "maven",
  "bike",
  "thumb",
  "gpTea",
];

export default function Projects() {
  return (
    <main>
      <Navigation />

      <div className="p-24 flex flex-col gap-16">
        <p className="text-5xl text-white">Featured Projects</p>

        <div className="md:grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {projectIds.map((id) => {
            return <ProjectPreview projId={id}></ProjectPreview>;
          })}
        </div>
      </div>
    </main>
  );
}
