'use client';

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Immersive 3D Gallery',
    description: 'An interactive art gallery experience built with Three.js, featuring smooth navigation and real-time lighting.',
    tags: ['Three.js', 'React', 'WebGL'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'A modern collaboration tool with live updates, 3D avatars, and spatial audio for virtual meetings.',
    tags: ['Next.js', 'WebRTC', 'Socket.io'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Interactive Product Configurator',
    description: 'A dynamic 3D product visualization tool allowing customers to customize and view products in real-time.',
    tags: ['React Three Fiber', 'TypeScript', 'Tailwind'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Generative Art Platform',
    description: 'A creative platform for generating and exploring algorithmic art with shader-based rendering.',
    tags: ['WebGL', 'GLSL', 'React'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'VR Experience Portal',
    description: 'An immersive WebXR experience showcasing virtual reality capabilities directly in the browser.',
    tags: ['WebXR', 'A-Frame', 'Three.js'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Motion Design Showcase',
    description: 'A portfolio site featuring advanced animations and micro-interactions using Framer Motion.',
    tags: ['Framer Motion', 'Next.js', 'GSAP'],
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-800 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
                >
                  View Project
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
