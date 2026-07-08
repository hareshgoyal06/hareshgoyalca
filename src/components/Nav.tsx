"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center gap-8 pt-8 pb-4">
      {links.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`text-sm tracking-wide transition-colors duration-200 ${
              active
                ? "text-[#d4d0c8]"
                : "text-[#5a5650] hover:text-[#a09a92]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
