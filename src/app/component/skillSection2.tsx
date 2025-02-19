"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 98 },
  { name: "CSS", level: 85 },
  { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 99 },
  { name: "Next.js", level: 75 },
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-br from-purple-950 to-black py-32">
      <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-white mb-6">
        My
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {" "}
          Technical Skills
        </span>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap justify-center gap-8 p-10 text-white"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-32 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#9333ea",
                  trailColor: "#ccc",
                  pathTransition: "stroke-dashoffset 1.5s ease-out",
                })}
              />
            </motion.div>
            <p className="mt-2 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
