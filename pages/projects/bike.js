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
        <p className="text-5xl">Bike Crash Detection Model</p>

        <div className="flex lg:flex-row gap-24">
          <div className="w-3/4 flex flex-col gap-16">
            <p className="text-xl italic text-white">
              "This project investigates the potential of developing a
              predictive bicycle-crash detection model to evaluate the safeness
              of roads for cyclists in New York City. The classification model
              was trained with Google Street View images – with coordinates
              labeled “collision” sampled from the “Motor Vehicle Collisions”
              dataset made available through the NYC Open Data portal and
              coordinates labeled “no collision” sampled from Open Street Maps’s
              road network. With the trained model, we produced a map
              visualizing the predictive scores of approximately 7,000 data
              points. From here, we identified select roads of high and low
              predicted crash scores and investigated their differences."
            </p>
            <img
              src={`/images/projects/bike.gif`} // Path to your image inside the "public" directory
            />

            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Presentation</p>
              <iframe
                src="https://docs.google.com/presentation/d/1OYV9TbkrqHcI5g-A1VuQZG1ADFXIIuOlhJnHxB6fLqM/preview"
                width="100%"
                height="500px"
              ></iframe>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-2xl">Final Report</p>
              <iframe
                src="https://docs.google.com/document/d/1ZciBW5BWVLZSPGBcz31JYtenpVeblCrlT__mECyyBLo/preview"
                width="100%"
                height="900px"
              ></iframe>
            </div>
          </div>

          <div className="w-1/4 flex-col flex gap-16">
            <div>
              <p className="text-2xl">Link</p>
              <Link
                href="https://kelflyang.github.io/11.320/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white"
              >
                kelflyang.github.io/11.320
              </Link>
            </div>

            <div>
              <p className="text-2xl">Tech</p>
              <p className="text-xl text-white">
                Pytorch, Tensorflow, Matplotlib
              </p>
            </div>
            <div>
              <p className="text-2xl">Class</p>
              <p className="text-xl text-white">
                11.320 Digital City Design Workshop
              </p>
            </div>
            <div>
              <p className="text-2xl">Duration</p>
              <p className="text-xl text-white">Spring 2023</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
