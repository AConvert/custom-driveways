import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const images = [
    { src: "/project1_section.jpg", alt: "Project 1" },
    { src: "/project2_section.jpg", alt: "Project 2" },
    { src: "/project3_section.jpg", alt: "Project 3" },
  ];

  return (
    <div>
      <section id="projects" className="py-20 bg-third text-white font-sans">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center">
            Our Latest Projects
          </h2>
          <div className=" grid md:grid-cols-3 gap-2 mt-2">
            {images.map((image) => (
              <div key={image.alt} className="text-black p-4 rounded-lg ">
                <div
                  className="border-8 border-white rounded-lg relative w-full"
                  style={{ height: "200px" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block bg-secondary text-white px-6 py-3 rounded"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
