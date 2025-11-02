'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Scene3D from '@/components/Scene3D';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />

      <section id="home" className="relative h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="w-full h-full bg-black" />}>
            <Scene3D />
          </Suspense>
        </div>
        <Hero />
      </section>

      <section id="about" className="relative z-10 bg-gradient-to-b from-black/90 to-zinc-900/95">
        <About />
      </section>

      <section id="projects" className="relative z-10 bg-gradient-to-b from-zinc-900/95 to-black/90">
        <Projects />
      </section>

      <section id="contact" className="relative z-10 bg-black/90">
        <Contact />
      </section>
    </main>
  );
}
