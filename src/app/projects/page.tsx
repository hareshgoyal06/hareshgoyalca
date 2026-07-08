import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import bobatalks from "@/public/bobatalks_logo.jpeg";

const projects: {
  name: string;
  tagline: string;
  award?: string;
  metric: string;
  stack: string[];
  logo?: Parameters<typeof Image>[0]["src"];
}[] = [
  {
    name: "Tunnel",
    tagline: "AI research platform that simulates user interviews at scale using multi-agent LLM orchestration.",
    award: "2x Winner — Hack the North 2025",
    metric: "750k+ organic impressions · YC interview stage",
    stack: ["Next.js", "Python", "Cohere", "Vapi", "MongoDB"],
  },
  {
    name: "Velum",
    tagline: "Privacy-preserving data platform that hardens documents against AI extraction using adversarial ML.",
    award: "Winner — HackIllinois 2026",
    metric: "Pixel noise injection · UAP perturbations · deep learning pipelines",
    stack: ["Python", "TypeScript", "Next.js", "Supabase"],
  },
  {
    name: "BobaTalks",
    tagline: "Discord automation and workflow tooling for a 13,000+ member student-mentor community.",
    metric: "13k+ members · Google Sheets & Drive integrations · zero-downtime on AWS EC2",
    stack: ["Node.js", "TypeScript", "AWS EC2", "PM2"],
    logo: bobatalks,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 pt-16 pb-12">
        <h2 className="font-heading text-4xl italic text-[#e8e4dc] mb-12" style={{ fontWeight: 200 }}>
          Projects
        </h2>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-2">
                {project.logo && (
                  <div className="w-7 h-7 rounded-md overflow-hidden shrink-0">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      width={28}
                      height={28}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <span className="font-heading text-[#d4d0c8] text-xl" style={{ fontWeight: 800 }}>
                  {project.name}
                </span>
                {project.award && (
                  <span className="text-[11px] text-[#5a5650] border border-[#2a2927] px-2 py-0.5 rounded-sm shrink-0">
                    {project.award}
                  </span>
                )}
              </div>

              <p className="text-[14px] text-[#9a9590] leading-relaxed mb-2">{project.tagline}</p>

              <p className="text-[12px] text-[#5a5650] mb-3">{project.metric}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="text-[11px] text-[#4a4a48] border border-[#242321] px-2 py-0.5 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {i < projects.length - 1 && (
                <div className="mt-10 border-t border-[#1f1e1c]" />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
