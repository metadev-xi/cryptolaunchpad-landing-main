"use client";

import { Navbar, Footer } from "@/components";
import { Developers, Ecosystem, Governance, Hero, Numbers } from "@/sections";
import Image from "next/image";
import { poster, grid } from "@/assets/images";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className="bg-black ">
      <Navbar />
      <div className="w-full h-full relative flex justify-center  ">
        <motion.div
          className="absolute left-90 z-20 mt-20 "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {
              opacity: 0.3,
            },
            show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
          }}
        >
          {/* <Image src={grid} alt="grid" className="" /> */}
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
