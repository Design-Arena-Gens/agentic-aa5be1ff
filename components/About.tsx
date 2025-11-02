'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React & Next.js', level: 95 },
  { name: 'Three.js & 3D', level: 88 },
  { name: 'TypeScript', level: 92 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Node.js', level: 90 },
  { name: 'WebGL', level: 82 },
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer specializing in creating immersive web experiences
              that push the boundaries of what's possible in the browser. With expertise in
              3D graphics, animation, and modern web technologies, I transform ideas into
              engaging digital realities.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My work combines technical precision with creative vision, ensuring every
              project not only looks stunning but performs flawlessly across all devices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
