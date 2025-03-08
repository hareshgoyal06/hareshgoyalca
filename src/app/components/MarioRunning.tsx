"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MarioRunning = () => {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    // After 2 seconds of walking, trigger the jump phase.
    const timer = setTimeout(() => {
      setJump(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Variant for shaking the title when hit.
  const titleVariants = {
    initial: { x: 0 },
    shake: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } },
  };

  return (
    <motion.div>
      <div
        style={{
          position: "absolute", // Overlay without affecting other layout
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          overflow: "hidden",
          background: "transparent",
        }}
      >
        {/* Import Press Start 2P Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />

        {/* Top-right label */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            fontFamily: "'Press Start 2P', cursive",
            fontSize: "0.9rem",
            color: "#fff",
            zIndex: 20,
          }}
        >
          Made with passion by Haresh 💙
        </div>

        {/* Inline CSS for animated text-only shine effect */}
        <style>{`
          .shiny-text {
            background: linear-gradient(90deg, #ddd 0%, #fff 50%, #ddd 100%);
            background-size: 200% auto;
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            animation: shine 2s infinite;
          }
          @keyframes shine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>

        {/* Fade-in wrapper for the title container with a 0.5s delay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            position: "absolute",
            top: "60%", // Title is pushed down to 60% of the page height
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Centered Title with Coin Release */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            initial="initial"
            animate={jump ? "shake" : "initial"}
            variants={titleVariants}
          >
            <h1
              className="shiny-text"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "7rem",
                margin: 0,
              }}
            >
              Welcome
            </h1>
            {jump && (
              <motion.img
                src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Coin.gif"
                alt="Coin"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginLeft: "20px", height: "60px" }}
              />
            )}
          </motion.div>
        </motion.div>

        <style>{`
          .mario {
            position: absolute;
            width: 71px;
            height: 72px;
            bottom: 0;
          }
          /* Walking phase: Mario runs from left offscreen to center */
          .walk {
            left: -200px;
            background: url('https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/mariowalking/result.png') left center no-repeat;
            animation: walk 2s ease-out forwards, walkSprite 2s steps(4) infinite;
          }
          @keyframes walk {
            0% { left: -200px; }
            100% { left: 50%; }
          }
          @keyframes walkSprite {
            0% { background-position: 0 0; }
            100% { background-position: -284px 0; }
          }
          /* Jump phase: Mario switches to his jump sprite and performs a vertical jump */
          .jump {
            left: 50%;
            transform: translateX(-50%);
            background: url('images/mariojump.png') left center no-repeat;
            animation: jump 1.5s ease-in-out forwards;
          }
          @keyframes jump {
            0% { bottom: 0; }
            50% { bottom: 200px; }
            100% { bottom: 0; }
          }
        `}</style>

        {/* Use conditional classes: "walk" first, then "jump" */}
        <div className={`mario ${jump ? 'jump' : 'walk'}`}></div>
      </div>
    </motion.div>
  );
};

export default MarioRunning;
