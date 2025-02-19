"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { BsFillChatLeftHeartFill } from "react-icons/bs";

const projects = [
  {
    title: "China Travel Website",
    description:
      "An engaging and visually captivating website showcasing the beauty and culture of China for travelers.🌏✨",
    image: "/picture/china.png",
    live: "https://china-travel-website.netlify.app/",
  },
  {
    title: "Dynamic Resume Builder",
    description:
      "A smart and interactive tool for creating personalized, professional resumes effortlessly. 📝🚀",
    image: "/picture/resume-show.png",
    live: "https://dynamic-resume-builder-dun-iota.vercel.app/",
  },
  {
    title: "Smart Agro Farm Website",
    description:
      "A modern web solution for smart farming, integrating technology to enhance agricultural efficiency. 🌱🚜",
    image: "/picture/farm.png",
    live: "https://farm-website-5ko2.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    description:
      "A creative and professional showcase of my skills, projects, and expertise as a developer and designer.🎨",
    image: "/picture/portfolio.png",
    live: "https://portfolio-2p35.vercel.app/",
  },
  {
    title: "Dynamic Blog website",
    description:
      "A dynamic blog website where I have written and published my own blogs on various topics. 📝",
    image: "/picture/blog.png",
    live: "https://dynamic-blog-website-three.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "A feature-rich e-commerce website offering a seamless shopping experience with secure transactions. 🛍️🚀",
    image: "/picture/e-commerce.png",
    live: "https://e-commerce-web-eight-blush.vercel.app/",
  },
  {
    title: "Figma Template E-Commerce",
    description:
      "A website built by replicating a Figma template with precision and attention to detail. 🎨✨",
    image: "/picture/figma-tem.png",
    live: "https://e-commerce-website-vfys.vercel.app/",
  },
  {
    title: "Static Resume",
    description:
      "A basic static resume created purely for practice, learning, and experimentation, not for professional use. 📝",
    image: "/picture/static-resume.png",
    live: "https://hiba-dawood-static-resume.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-black to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12"
        >
          <span className="text-white">My </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Latest Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-purple-600 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button
                    className="text-xl text-pink-500 hover:text-pink-400 transition-colors
                   duration-300"
                  >
                    <BsFillChatLeftHeartFill />
                  </button>
                  <span className="text-sm text-purple-100 font-medium">
                    Click image for demo
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
