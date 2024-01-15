import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import info from "../projects/projectInfo.json";

const ProjectPreview = ({ projId }) => {
  const router = useRouter();

  return (
    <Link
      href={`/projects/${projId}`}
      className={router.pathname === "/" ? "text-white text-2xl" : "text-2xl"}
    >
      <div className="preview-card">
        <img
          className="preview-img"
          src={`/images/projects/${projId}.gif`} // Path to your image inside the "public" directory
        />

        <div className="p-6 w-full flex flex-col items-center">
          <h2 className="font-bold text-2xl mb-2">{info[projId].title}</h2>
          <p className="text-gray-600 text-xl mb-4">{info[projId].year}</p>
          {/* <p className="text-gray-500 text-lg">
            {info[projId].tags.join(", ")}
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreview;
