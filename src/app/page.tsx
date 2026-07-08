"use client";
import { useState } from "react";
import Image from "next/image";
import waterloo from "@/public/waterloo.png";
import jeeves from "@/public/jeeves.jpeg";
import borderpass from "@/public/borderpass.png";
import ontario from "@/public/ontario.png";
import savi from "@/public/savifinance_logo.jpeg";
import blueprint from "@/public/blueprint.png";
import type { StaticImageData } from "next/image";

function IconShopify({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" style={{ display: "inline", verticalAlign: "middle" }}>
      <path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"/>
      <path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"/>
      <path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"/>
    </svg>
  );
}


function IconGithub() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.243V19z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://github.com/hareshgoyal06", label: "GitHub", Icon: IconGithub },
  { href: "https://www.linkedin.com/in/haresh-goyal/", label: "LinkedIn", Icon: IconLinkedIn },
  { href: "https://x.com/goyagoya06", label: "X", Icon: IconX },
  { href: "https://instagram.com/hxreshgoyal", label: "Instagram", Icon: IconInstagram },
];

type Experience = {
  company: string;
  role: string;
  period: string;
  note?: string;
  logo: StaticImageData | null;
  logoNode?: React.ReactNode;
  whiteBg?: boolean;
};

type Project = {
  name: string;
  tagline: string;
  tag: string;
  award?: string;
  metric?: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

const experiences: Experience[] = [
  { company: "Shopify", role: "Software Engineer Intern", period: "Incoming", logo: null, logoNode: <IconShopify size={28} /> },
  { company: "Jeeves", role: "Software Engineer Intern", period: "2026", logo: jeeves },
  { company: "UW Blueprint", role: "Project Developer", period: "2025 – 2026", logo: blueprint },
  { company: "BorderPass", role: "Software Engineer Intern", period: "2026", logo: borderpass },
  { company: "Ontario Finance", role: "Software Engineer Intern", period: "2025", logo: ontario, whiteBg: true },
  { company: "Savi Finance", role: "Software Engineer Intern", period: "2024", logo: savi },
];

const projects: Project[] = [
  {
    name: "Tunnel",
    tag: "2x winner @ Hack the North · AI agents for market research",
    tagline: "AI research platform simulating user interviews at scale via multi-agent LLM orchestration.",
    award: "2x Winner — Hack the North 2025",
    metric: "750k+ organic impressions · YC interview stage",
    stack: ["Next.js", "Python", "Cohere", "Vapi", "MongoDB"],
    links: [{ label: "GitHub", href: "https://github.com/krish1905/tunnel" }],
  },
  {
    name: "Velum",
    tag: "winner @ HackIllinois · adversarial ML for document privacy",
    tagline: "Privacy-preserving data platform hardening documents against AI extraction using adversarial ML.",
    award: "Winner — HackIllinois 2026",
    metric: "Pixel noise injection · UAP perturbations",
    stack: ["Python", "TypeScript", "Next.js", "Supabase"],
    links: [{ label: "GitHub", href: "https://github.com/MarcDasilva/Velum" }],
  },
  {
    name: "ChunkyMonkey",
    tag: "semantic search & RAG over your documents · built in Rust",
    tagline: "Rust-based semantic search and RAG system that indexes documents and delivers context-aware answers via multi-strategy retrieval.",
    metric: "Ollama · Pinecone vector search",
    stack: ["Rust", "Ollama", "Pinecone"],
    links: [{ label: "GitHub", href: "https://github.com/hareshgoyal06/ChunkyMonkey" }],
  },
  {
    name: "NeuroBlocks",
    tag: "block-based coding for brain-computer interfaces",
    tagline: "Visual drag-and-drop coding interface for EEG applications, letting beginners build BCI programs with real-time brainwave data.",
    stack: ["Google Blockly", "Flask", "BrainFlow", "JavaScript"],
    links: [{ label: "GitHub", href: "https://github.com/hareshgoyal06/neuroblock" }],
  },
  {
    name: "BobaTalks Flowers Discord Bot",
    tag: "13k+ student community · Discord automation tooling",
    tagline: "Discord automation and workflow tooling for a 13,000+ member student-mentor community.",
    metric: "13k+ members · Google Sheets & Drive integrations",
    stack: ["Node.js", "TypeScript", "AWS EC2", "PM2"],
    links: [{ label: "GitHub", href: "https://github.com/uwblueprint/bobatalks" }],
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative rounded-t-2xl sm:rounded-2xl p-6 max-w-sm w-full mx-0 sm:mx-6 max-h-[85vh] overflow-y-auto"
        style={{
          background: "rgba(18,16,14,0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4a4845] hover:text-[#9a9590] transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className="font-heading text-[17px] text-[#e8e4dc]" style={{ fontWeight: 400, fontStyle: "italic" }}>{project.name}</span>
          {project.award && (
            <span className="text-[10px] text-[#4a4845] border border-[#222120] px-1.5 py-0.5 rounded-sm">{project.award}</span>
          )}
        </div>

        <p className="text-[13px] text-[#7a7570] leading-relaxed mb-3">{project.tagline}</p>

        {project.metric && (
          <p className="text-[11px] text-[#4a4845] mb-4">{project.metric}</p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="text-[10px] text-[#4a4845] border border-[#1e1d1b] px-1.5 py-0.5 rounded-sm">{tech}</span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex gap-2">
            {project.links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-[#6a6560] hover:text-[#d4d0c8] transition-colors duration-200 border border-[#222120] hover:border-[#3a3835] px-2.5 py-1 rounded-md"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Dropdown({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="w-full max-w-sm min-w-0">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-[13px] text-[#6a6560] hover:text-[#b0aca4] transition-colors duration-200 cursor-pointer select-none"
      >
        <span>{label}</span>
        <IconChevron open={open} />
      </button>

      <div
        style={{
          maxHeight: open ? "600px" : "0px",
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.3s ease",
        }}
      >
        <div
          className="mt-2 rounded-xl p-4"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<"experience" | "projects" | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggle = (name: "experience" | "projects") =>
    setActiveDropdown(prev => prev === name ? null : name);

  return (
    <main className="px-5 sm:px-8 pt-8 pb-16">
      {/* Name + icons */}
      <div>
        <h1 className="font-heading text-4xl leading-tight" style={{ fontStyle: "italic", fontWeight: 400, color: "#e8e4dc" }}>
          Haresh Goyal
        </h1>
        <div className="flex items-center gap-4 mt-3">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#8a8580] hover:text-[#e8e4dc] transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      {/* Bio */}
      <p className="mt-8 w-full max-w-sm leading-relaxed text-[#b0aca4] text-[14px]">
        Based in Toronto and Waterloo. Studying
        <br />
        <a
          href="https://uwaterloo.ca/future-students/programs/computer-engineering"
          target="_blank"
          rel="noopener noreferrer"
          className="font-heading px-1 hover:opacity-70 transition-opacity duration-200"
          style={{ fontStyle: "italic", fontWeight: 400, color: "#d4d0c8", fontSize: "15px" }}
        >
          Computer Engineering
        </a>{" "}
        at the{" "}
        <Image src={waterloo} alt="UWaterloo" width={20} height={20} className="rounded-sm object-contain" style={{ display: "inline", verticalAlign: "middle" }} />
        {" "}UWaterloo.
        <br /><br />
        Started moving pixels with HTML and vanilla JS, now burning through tokens on claude.
        <br /><br />
        Currently at{" "}
        <Image src={jeeves} alt="Jeeves" width={22} height={22} className="rounded-full object-cover" style={{ display: "inline", verticalAlign: "middle" }} />
        {" "}<span className="text-[#d4d0c8]">Jeeves</span> <span className="text-[#6a6560] text-[12px]">(YC S20)</span>.{" "}
        Incoming at{" "}
        <IconShopify size={17} />{" "}<span className="text-[#d4d0c8]">Shopify.</span>
      </p>

      {/* Dropdowns */}
      <div className="mt-8 flex flex-col gap-3 w-full max-w-sm">
        <Dropdown label="experience" open={activeDropdown === "experience"} onToggle={() => toggle("experience")}>
          <div className="flex flex-col gap-4">
            {experiences.map((exp) => (
              <div key={exp.company} className="flex items-start gap-3">
                {exp.logoNode ? (
                  <div className="w-7 h-7 rounded-md overflow-hidden shrink-0 mt-0.5 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                    {exp.logoNode}
                  </div>
                ) : exp.logo ? (
                  <div className="w-7 h-7 rounded-md overflow-hidden shrink-0 mt-0.5 flex items-center justify-center" style={{ background: exp.whiteBg ? "#fff" : "rgba(255,255,255,0.05)" }}>
                    <Image src={exp.logo} alt={exp.company} width={exp.whiteBg ? 20 : 28} height={exp.whiteBg ? 20 : 28} className="object-contain" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-md shrink-0 mt-0.5" style={{ background: "rgba(255,255,255,0.05)" }} />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-[#d4d0c8]">{exp.company}</span>
                    <span className="text-[11px] text-[#3e3c3a]">{exp.period}</span>
                  </div>
                  <p className="text-[12px] text-[#5a5856]">{exp.role}</p>
                  {exp.note && <p className="text-[11px] text-[#3e3c3a] mt-0.5">{exp.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </Dropdown>

        <Dropdown label="projects" open={activeDropdown === "projects"} onToggle={() => toggle("projects")}>
          <div className="flex flex-col">
            {projects.map((proj) => (
              <button
                key={proj.name}
                onClick={() => setSelectedProject(proj)}
                className="flex items-center justify-between w-full text-left group py-2 rounded-md transition-all duration-150 cursor-pointer"
                style={{ background: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-[14px] text-[#c8c4bc] group-hover:text-[#e8e4dc] transition-colors duration-150" style={{ fontWeight: 400, fontStyle: "italic" }}>{proj.name}</span>
                  <span className="text-[11px] text-[#4a4845] group-hover:text-[#6a6560] transition-colors duration-150">{proj.tag}</span>
                </div>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6a6560] group-hover:text-[#c8c4bc] transition-colors duration-150 ml-2 shrink-0">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </button>
            ))}
          </div>
        </Dropdown>

        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </main>
  );
}
