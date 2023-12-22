"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/logo.png";
import { LaunchLink, LinkText } from "./Links";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import { useContext, useState } from "react";
import { MobileMenuContext } from "@/contexts/MobileMenuContext";

const Navbar = () => {
  const { opened, changeOpened } = useContext(MobileMenuContext);

  const handleMenu = () => {
    changeOpened();
  };

  return (
    <motion.nav
      className="px-6 xl:container md:w-full mx-auto py-2 sticky top-0 backdrop-blur-lg z-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={navVariants}
    >
      <div className="flex justify-between">
        <Link href="#">
          <Image src={logo} alt="logo" />
        </Link>
        <div className="self-center">
          <div className="hidden lg:flex items-center gap-6 ">
            <LinkText href="#" text="Ecosystem" active />
            <LinkText href="#" text="Community" />
            <LinkText href="#" text="Governance" />
            <LinkText href="#" text="Developers" />
            <LinkText href="#" text="Blog" />
            <LinkText href="#" text="FAQ" />
            <LinkText href="#" text="Jobs" />
            <LaunchLink href="#" text="Launch App" />
          </div>
          <motion.button
            className="p-3 flex lg:hidden flex-col items-end gap-[6px] bg-[#333437] rounded-md hover:rounded-xl transition-all"
            onClick={handleMenu}
          >
            <span className="w-[28px] h-0.5 bg-[#7A7A7A] rounded-sm" />
            <span className="w-[20px] h-0.5 bg-[#7A7A7A] rounded-sm" />
            <span className="w-[20px] h-0.5 bg-[#7A7A7A] rounded-sm" />
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
