"use client";

import { Navbar, Footer } from "@/components";
import { Developers, Ecosystem, Governance, Hero, Numbers } from "@/sections";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="w-full h-full relative flex justify-center">
        <motion.div
          className="absolute left-90 z-20 mt-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0.3 },
            show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          {/* Video element with autoplay, loop, and muted attributes */}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            style={{ opacity: 0.1 }} // Set the opacity here
          >
            {/* Video source with the relative path */}
            <source src="/vedio/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <Hero />
      </div>
      <Numbers />
      <Ecosystem />
      <Developers />
      <Governance />
      <Footer />
    </main>
  );
}
