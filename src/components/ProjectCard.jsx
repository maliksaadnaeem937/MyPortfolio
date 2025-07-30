import React from "react";
import { NavLink } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white   rounded-xl   shadow-lg p-6 flex flex-col sm:flex-col items-center gap-6 transition hover:shadow-xl">
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h2>

        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="text-sm bg-blue-300 text-black px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-10 ">
        <NavLink to={project.link} className="w-full">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl object-cover w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </NavLink>
      </div>
    </div>
  );
}
