import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectLayout = ({}) => {
  return (
    <div className="h-min-screen p-24 flex flex-col gap-16">
      <p className="text-6xl">Project Title</p>

      <div className="flex lg:flex-row gap-24">
        <div className="w-3/4">
          <p>
            <p className="text-xl">
              A digital platform showcasing craftspeople’s visual stories,
              crafts and artisanal materials through a mapping visualization.
              The project constructs an archive of social memories and local
              practices by using a web application that crowdsources stories of
              craftspeople and it activates public spaces as dynamic grounds for
              educational and cultural production.
            </p>
          </p>
        </div>

        <div className="w-1/4">hi</div>
      </div>
    </div>
  );
};

export default ProjectLayout;
