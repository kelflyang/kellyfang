import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import Navigation from "../components/Navigation";

import React from "react";
import Scrollspy from "react-scrollspy";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Scrollspy
        items={["section1", "section2"]}
        currentClassName="opacity-100"
        offset={-100}
      >
        <div
          id="section1"
          className="min-h-screen transition-opacity opacity-0 transition ease-in opacity-0 duration-300"
        >
          <div className="flex lg:flex-row p-24 justify-between items-center">
            <div className="lg:w-2/3 flex flex-col gap-6">
              <p className="text-5xl">
                I’m Kelly, a senior studying Computer Science and Urban Science
                at MIT.
              </p>
              <p className="text-3xl font-thin">
                Broadly, I am interested in the intersection of design,
                technology and society. I have prior experiences programming
                full-stack web applications and interactive data visualizations
                and maps but am eager to engage in other areas of computer
                science and software engineering. With empathy, I hope to create
                applications and tools toward a more equitable and playful
                society.
              </p>

              <div className="flex flex-row items-start gap-4">
                <Link
                  href="https://www.linkedin.com/in/kelfang/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-white transition duration-300 h-10"
                  />
                </Link>

                <Link href={`mailto:fangk@mit.edu`}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="hover:text-white transition duration-300 h-10"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/4 filter grayscale z-1 justify-end">
              <Image
                src="/images/headshot.jpg" // Path to your image inside the "public" directory
                alt="Headshot of Kelly Fang"
                width={400}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* <div className="h-64"></div> */}

        <div
          id="section2"
          className="min-h-screen p-24 flex flex-col  align-center justify-center transition ease-in opacity-0 duration-300"
        >
          <p className="text-5xl text-white pb-6">About Me</p>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3 flex flex-col gap-6 ">
              <div>
                <p className="text-2xl">Skills</p>
                <p className="text-xl text-white">
                  Software Engineering, Full-stack Development, Programming,
                  Data Analysis & Visualization, UI/UX Design, Research
                </p>
              </div>

              <div>
                <p className="text-2xl">Languages & Tools</p>
                <p className="text-xl text-white">
                  Typescript, HTML/CSS/Javascript, Tailwind CSS, Python, Java,
                  React, Vue, Next, Node, Express, Redux, MongoDB, GCP, Figma,
                  Git, QGIS, Tensorflow, Pytorch, Mapbox, Deck.gl
                </p>
              </div>

              {/* <div>
              <p className="text-3xl">Interests</p>
              <p className="text-2xl text-white">
                Smart Cities, Computer Vision, Human Computer Interaction,
                Creative Computation
              </p>
            </div> */}

              <div>
                <p className="text-2xl">Hobbies</p>
                <p className="text-xl text-white">
                  Reading, Baking, Lifting, Crafting
                </p>
              </div>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-8">
              <div>
                <p className="text-2xl">Selected Coursework</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xl text-white font-bold">Technical</p>
                    <div className="text-xl text-white">
                      <p>6.02 Digital Communication Systems</p>
                      <p>6.1020 Software Construction</p>
                      <p>6.1040 Software Design</p>
                      <p>6.9620 Web Lab (Web Development)</p>
                      <p>6.1210 Algorithms & Data Structures</p>
                      <p>6.1220 Design and Analysis of Algorithms</p>
                      <p>6.3900 Introduction to Machine Learning</p>
                      <p>6.8301 Advances in Computer Vision (currently)</p>
                      <p>
                        6.8301 Intelligent Multimodal User Interfaces
                        (currently)
                      </p>
                      <p>6.S191 Introduction to Deep Learning</p>
                      <p>11.188 Spatial Analysis & GIS</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl text-white font-bold">
                      Interdisciplinary
                    </p>
                    <div className="text-xl text-white">
                      <p>
                        4.043 Intelligence Interaction: Large Learning Objects
                      </p>
                      <p>11.138 Civic Tech Prototyping</p>
                      <p>11.154 Big Data, Visualization, and Society</p>
                      <p>11.320 Digital City Design: Visual AI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex flex-col gap-8">
              <div>
                <p className="text-2xl">Experience</p>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-xl text-white font-bold">
                      Software Engineer Intern
                    </p>
                    <div className="text-xl text-white">
                      <p>Squarespace (Summer 2023)</p>
                      <p>Conservation X Labs (Winter 2023)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl text-white font-bold">
                      Web Developer
                    </p>
                    <div className="text-xl text-white">
                      <p>Civic Data Design Lab (Summer & Fall 2022)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xl text-white font-bold">
                      Undergraduate Researcher
                    </p>
                    <div className="text-xl text-white">
                      <p>Civic Data Design Lab (Fall 2023)</p>
                      <p>Senseable City Lab (Spring 2022)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Scrollspy>
    </main>
  );
}
