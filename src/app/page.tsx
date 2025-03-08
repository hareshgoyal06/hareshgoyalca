"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxBackground from "./components/ParallaxBackground";
import MarioRunning from "./components/MarioRunning";
import {Navbar} from "./components/Navbar";
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconPaperclip,
} from "@tabler/icons-react";
// Container variants with smoother easing and scale
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },
  {
    title: "Instagram",
    icon: (
      <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.instagram.com/hxreshgoyal/",
  },

  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/haresh-goyal/",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/hareshgoyal06",
  },
  {
    title: "Resume",
    icon: (
      <IconPaperclip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/resume.pdf",
  },
];


interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000); // preloader duration of 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
  className="fixed inset-0 flex flex-col items-center justify-center z-50"
  style={{
    backgroundColor: "#071112",
    backgroundImage: `
      radial-gradient(circle, #444 1px, transparent 1px),
      radial-gradient(circle, #444 1px, transparent 1px)
    `,
    backgroundPosition: "0 0, 10px 10px",
    backgroundSize: "20px 20px",
  }}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  {/* Import Inter Font */}
  
  <MarioRunning />
</motion.div>


  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-black">
        <div className="relative">
          <ParallaxBackground />
          <div className="max-w-7xl mx-auto">
            {!loading && <Navbar items={links} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;