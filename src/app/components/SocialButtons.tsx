"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";

const SocialButtons = () => {
  const socialLinks = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6" />,
      href: "https://www.instagram.com/hxreshgoyal/",
      color: "from-pink-500 to-purple-600",
      hoverColor: "from-pink-400 to-purple-500",
    },
    {
      title: "X (Twitter)",
      icon: <IconBrandX className="h-6 w-6" />,
      href: "https://x.com/goyagoya06",
      color: "from-gray-700 to-gray-900",
      hoverColor: "from-gray-600 to-gray-800",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6" />,
      href: "https://github.com/hareshgoyal06",
      color: "from-gray-800 to-gray-900",
      hoverColor: "from-gray-700 to-gray-800",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/haresh-goyal/",
      color: "from-blue-600 to-blue-800",
      hoverColor: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <div className="flex justify-center items-center gap-4 p-2">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className={`
              relative w-16 h-16 rounded-lg 
              bg-gradient-to-br ${link.color}
              hover:bg-gradient-to-br ${link.hoverColor}
              transition-all duration-300 ease-out
              shadow-lg hover:shadow-xl
              border-2 border-white/20
              flex items-center justify-center
              group
              pixel-art-button
            `}
            >
              {/* Pixel art border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-black/30 pointer-events-none" />
              <div className="absolute inset-1 rounded-md border border-white/10 pointer-events-none" />

              {/* Icon with pixel art styling */}
              <div className="text-white drop-shadow-lg filter contrast-125 brightness-110">
                {link.icon}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-all duration-300 pointer-events-none" />

              {/* Pixel art shadow */}
              <div className="absolute -bottom-1 -right-1 w-full h-full rounded-lg bg-black/40 transform translate-x-1 translate-y-1 -z-10" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialButtons;
