import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import GreenThemeGitHubCalendar  from "./Github";

export default function PortfolioSection() {
  return (
    <>
      {/* Embed the fonts directly in this component */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&family=Press+Start+2P&display=swap');
        .font-vt323 {
          font-family: 'VT323', monospace;
        }
        .font-pressstart {
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>
      <div className="min-h-screen w-full text-white font-vt323">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Bio and Experience */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold font-pressstart">
                  Haresh Goyal
                </h1>
                <p className="text-lg text-zinc-300">
                  Developer and engineer studying{" "}
                  <Link href="#" className="underline underline-offset-4">
                    Computer Engineering @ the University of Waterloo
                  </Link>
                  . Always Building.
                </p>
              </div>

              <p className="text-lg text-zinc-300">
                Finding intersections between logic and design to create cultivating projects. Always looking for new ways to innovate!
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/savi.jpg"
                      alt=" logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-pressstart">Savi Finance</h3>
                    <p className="text-zinc-400">Full-Stack Developer Intern</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/lef.png"
                      alt=" logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-pressstart">Learning Enrichment Foundation</h3>
                    <p className="text-zinc-400">Technical Agent</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-pressstart">TKS</h3>
                    <p className="text-zinc-400">Innovate</p>
                  </div>
                </div>
              </div>
                <GreenThemeGitHubCalendar />
              
            </div>

            {/* Right Column - Projects */}
            <div>
              <ScrollArea className="h-[80vh] pr-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Project 1 */}
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Spots project screenshot"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">Spots</h3>
                      <p className="text-zinc-300">12000+ users in first week</p>
                      <p className="text-zinc-400">Campus classroom availability map</p>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Axiom project screenshot"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">Axiom</h3>
                      <p className="text-zinc-300">
                        Code editor for SE212 (Logic and Computation) at UWaterloo
                      </p>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Jarvis project screenshot"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">Jarvis</h3>
                      <p className="text-zinc-300">Featured on OpenCV Live</p>
                      <p className="text-zinc-400">Interactive hologram environment</p>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="BASIC Web project screenshot"
                        width={600}
                        height={400}
                        className="w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">BASIC Web</h3>
                      <p className="text-zinc-300">UofT Hacks 11 Winner</p>
                      <p className="text-zinc-400">BASIC variant and web dev compiler</p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
