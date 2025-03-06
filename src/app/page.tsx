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
  className="fixed inset-0 flex flex-col items-center justify-center z-50"
  style={{
    backgroundColor: "#000",
    backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  }}
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  <motion.h1
    className="text-5xl font-extrabold drop-shadow-lg"
    style={{
      fontFamily: "'Inter', sans-serif",
      color: "#fff",
      textShadow: "0 0 10px rgba(255,255,255,0.9)",
    }}
    variants={itemVariants}
  >
    Haresh Goyal
  </motion.h1>
  <motion.p
    className="mt-4 text-xl"
    style={{
      fontFamily: "'Inter', sans-serif",
      color: "#ddd",
      textShadow: "0 0 8px rgba(255,255,255,0.7)",
    }}
    variants={itemVariants}
  >
    Welcome :D
  </motion.p>
  
  {/* Gradient Dot Cluster */}
  <motion.div
    className="mt-8 flex items-center justify-center space-x-2"
    variants={itemVariants}
  >
    <motion.div
      className="rounded-full"
      style={{
        width: "12px",
        height: "12px",
        background: "radial-gradient(circle at 30% 30%, #ff7e5f, #feb47b)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transform: "rotateX(15deg) rotateY(15deg)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ loop: Infinity, duration: 2 }}
    />
    <motion.div
      className="rounded-full"
      style={{
        width: "16px",
        height: "16px",
        background: "radial-gradient(circle at 30% 30%, #ff7e5f, #feb47b)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transform: "rotateX(15deg) rotateY(15deg)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ loop: Infinity, duration: 2 }}
    />
    <motion.div
      className="rounded-full"
      style={{
        width: "24px",
        height: "24px",
        background: "radial-gradient(circle at 30% 30%, #ff7e5f, #feb47b)",
        boxShadow: "0 8px 15px rgba(0,0,0,0.3)",
        transform: "rotateX(15deg) rotateY(15deg)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ loop: Infinity, duration: 2 }}
    />
    <motion.div
      className="rounded-full"
      style={{
        width: "16px",
        height: "16px",
        background: "radial-gradient(circle at 30% 30%, #ff7e5f, #feb47b)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transform: "rotateX(15deg) rotateY(15deg)",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ loop: Infinity, duration: 2 }}
    />
    <motion.div
      className="rounded-full"
      style={{
        width: "12px",
        height: "12px",
        background: "radial-gradient(circle at 30% 30%, #ff7e5f, #feb47b)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        transform: "rotateX(15deg) rotateY(15deg)",
      }}
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
