"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxBackground from "./components/ParallaxBackground";

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

// Variants for each preloader item with smoother movement
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 1500); // preloader duration of 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
    className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 z-50"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <motion.h1
      className="text-5xl font-extrabold text-white drop-shadow-lg"
      variants={itemVariants}
    >
      Haresh Goyal
    </motion.h1>
    <motion.p className="mt-4 text-xl text-gray-200" variants={itemVariants}>
      Welcome :D
    </motion.p>
    <motion.div
      className="mt-8 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center"
      variants={itemVariants}
    >
      <motion.div
        className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-full"
        animate={{ rotate: [0, 360] }}
        transition={{ loop: Infinity, duration: 2 }}
      />
    </motion.div>
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
      <div>
        <ParallaxBackground />
      </div>
    </>
  );
};

export default App;
