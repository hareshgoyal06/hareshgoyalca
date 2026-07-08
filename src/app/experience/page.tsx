import Image, { StaticImageData } from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import shopify from "@/public/shopify.svg";
import jeeves from "@/public/jeeves.png";
import borderpass from "@/public/borderpass.png";
import blueprint from "@/public/blueprint.png";
import ontario from "@/public/ontario.png";

const experiences: {
  company: string;
  logo: StaticImageData | string | null;
  logoText?: string;
  role: string;
  period: string;
  location: string;
  tags: string[];
}[] = [
  {
    company: "Shopify",
    logo: shopify,
    role: "Software Engineer Intern",
    period: "Aug 2026",
    location: "Toronto, ON",
    tags: ["Incoming"],
  },
  {
    company: "Jeeves",
    logo: jeeves,
    role: "Software Engineer Intern",
    period: "May 2026 – Aug 2026",
    location: "Miami, FL · Remote",
    tags: ["YC S20", "Cross-border banking", "AI orchestration (JaiClaw)"],
  },
  {
    company: "BorderPass",
    logo: borderpass,
    role: "Software Engineer Intern",
    period: "Jan 2026 – Apr 2026",
    location: "Toronto, ON · Hybrid",
    tags: ["100k+ users · 3x throughput", "RAG pipeline · LlamaIndex", "Canada's Top 30 Growing"],
  },
  {
    company: "UW Blueprint",
    logo: blueprint,
    role: "Software Developer",
    period: "May 2025 – Jan 2026",
    location: "Waterloo, ON",
    tags: ["Social good", "BobaTalks · Humane Society"],
  },
  {
    company: "Ontario Finance",
    logo: ontario,
    role: "Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Toronto, ON · Hybrid",
    tags: ["200M+ records indexed", "150+ branch users", "Capital markets tax platform"],
  },
  {
    company: "Savi Finance",
    logo: null,
    logoText: "S",
    role: "Mobile Software Engineer Intern",
    period: "Jan 2025 – May 2025",
    location: "Toronto, ON · Hybrid",
    tags: ["1,000+ MAU", "1,000ms latency cut", "AI-powered finance"],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 max-w-2xl mx-auto px-6 pt-16 pb-12">
        <h2 className="font-heading text-4xl italic text-[#e8e4dc] mb-12" style={{ fontWeight: 200 }}>
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex items-center justify-between gap-4 mb-1">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 overflow-hidden bg-[#1a1917]">
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-[11px] font-medium text-[#6a6560]">{exp.logoText}</span>
                    )}
                  </div>
                  <span className="text-[#d4d0c8] font-medium text-[15px]">{exp.company}</span>
                </div>
                <span className="text-[#3d3c3a] text-xs shrink-0">{exp.period}</span>
              </div>
              <div className="pl-10 text-[#6a6560] text-sm mb-1">{exp.role}</div>
              <div className="pl-10 text-[#3d3c3a] text-xs mb-2">{exp.location}</div>
              <div className="pl-10 flex flex-wrap gap-2">
                {exp.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[11px] text-[#5a5650] border border-[#2a2927] px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {i < experiences.length - 1 && (
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
