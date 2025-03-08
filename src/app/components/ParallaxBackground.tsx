"use client";

import React, { useState, useEffect } from "react";

interface Layer {
  src: string;
  zIndex: number;
  speed: number; // Used as a multiplier (e.g., speed/100)
  offsetY?: string;
}

const layers: Layer[] = [
  { src: "/images/background.png", zIndex: 1, speed: 90 },
  { src: "/images/stars.png", zIndex: 2, speed: 90 },
  { src: "/images/moon.png", zIndex: 2, speed: 90 },
  { src: "/images/mountains1.png", zIndex: 15, speed: 95 },
  { src: "/images/mountains2.png", zIndex: 16, speed: 93 },
  { src: "/images/mountains3.png", zIndex: 17, speed: 92 },
  { src: "/images/mountains4.png", zIndex: 18, speed: 90 },
  { src: "/images/mountains5.png", zIndex: 19, speed: 98 },
  { src: "/images/mountains6.png", zIndex: 20, speed: 93 },
  { src: "/images/cloud1.png", zIndex: 2, speed: 38 },
  { src: "/images/cloud2.png", zIndex: 3, speed: 35 },
  { src: "/images/cloud3.png", zIndex: 4, speed: 32 },
  { src: "/images/cloud4.png", zIndex: 6, speed: 30 },
  { src: "/images/cloud5.png", zIndex: 5, speed: 28 }
];

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Import the Press Start 2P font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />

      {/* Background layer */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          backgroundColor: "#081112",
          height: "110vh",
          zIndex: 0,
        }}
      />

      {/* Parallax layers */}
      {layers.map((layer, index) => {
        const isMountain6 = layer.src.includes("mountains6.png");
        const multiplier = isMountain6 ? (layer.speed / 100) * 0.95 : layer.speed / 100;
        const transformStyle = layer.offsetY
          ? `translateY(calc(${layer.offsetY} - ${scrollY * multiplier}px))`
          : `translateY(-${scrollY * multiplier}px)`;

        return (
          <div
            key={index}
            className="absolute left-0 w-full h-full"
            style={{
              zIndex: layer.zIndex,
              transform: transformStyle,
              backgroundImage: `url(${layer.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        );
      })}

      {/* Title at z-index 10 */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          left: "50%",
          top: "25%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          fontFamily: "'Press Start 2P', cursive",
          fontSize: "4.25rem",
          padding: "0.5rem",
        }}
      >
        Hey, I'm Haresh Goyal
      </div>
    </div>
  );
};

export default ParallaxBackground;
