"use client";

import type React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-pink-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {/* About Me Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Hiba M.Dawood</h2>
          <p className="text-gray-800 dark:text-gray-300 text-base font-semibold">
            Web Developer & Designer
          </p>
          <p className="text-base text-gray-800">
            Passionate about creating beautiful and functional web experiences.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/hiba-m-dawood/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="text-2xl">
                <FaLinkedinIn />
              </span>
            </Link>
            <P>
           hibam.dawood25@gmail.com 
            </P>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "HTML",
              "CSS",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Graphic Designing",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-purple-950 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Projects Section */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-4">
            Recent Projects
          </h3>
          <ul className="space-y-2">
            {[
              {
                name: "China Travel Website",
                url: "https://china-travel-website.netlify.app/",
              },
              {
                name: "Dynamic Resume Builder",
                url: "https://dynamic-resume-builder-dun-iota.vercel.app/",
              },
              {
                name: "Smart Agro Farm Website",
                url: "https://farm-website-5ko2.vercel.app/",
              },
              {
                name: "Personal Portfolio",
                url: "https://portfolio-2p35.vercel.app/",
              },
              {
                name: "Dynamic Blog website",
                url: "https://dynamic-blog-website-three.vercel.app/",
              },
              {
                name: "E-Commerce Website",
                url: "https://e-commerce-web-eight-blush.vercel.app/",
              },
              {
                name: "Figma Template E-Commerce",
                url: "https://e-commerce-website-vfys.vercel.app/",
              },
              {
                name: "Static Resume",
                url: "https://hiba-dawood-static-resume.netlify.app/",
              },
            ].map((project) => (
              <li key={project.name}>
                <Link
                  href={project.url}
                  className="text-gray-900 hover:text-pink-600 transition-colors"
                  target="_blank"
                >
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-8 border-t border-purple-800">
        <p className="text-center text-base text-black">
          &copy; {new Date().getFullYear()} Hiba M.Dawood. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
