import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import GreenThemeGitHubCalendar from "./Github";

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
      <div
        className="min-h-screen w-full text-white font-vt323"
        style={{ background: "#071112" }}
      >
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Bio and Experience */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold font-pressstart">
                  Haresh Goyal
                </h1>
                <p className="text-lg text-zinc-300">
                  Developer and engineer studying{" "}
                  <Link
                    href="#"
                    className="underline underline-offset-4 text-yellow-500"
                  >
                    Computer Engineering @ the University of Waterloo
                  </Link>
                  . Always Building.
                </p>
              </div>

              <p className="text-lg text-zinc-300">
                Finding intersections between logic and design to create
                cultivating projects. Always looking for new ways to innovate!
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/savi.jpg"
                      alt="logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-yellow-500 font-semibold font-pressstart">
                      Savi Finance
                    </h3>
                    <p className="text-zinc-400">
                      Full-Stack Developer Intern
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/lef.png"
                      alt="logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-purple-900 font-semibold font-pressstart">
                      Learning Enrichment Foundation
                    </h3>
                    <p className="text-zinc-400">Technical Agent</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/images/tks.jpg"
                      alt="logo"
                      width={32}
                      height={32}
                      className="object-contain h-fill"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl text-neutral-400 font-semibold font-pressstart">
                      TKS
                    </h3>
                    <p className="text-zinc-400">Innovate</p>
                  </div>
                </div>
              </div>
              <GreenThemeGitHubCalendar />
            </div>

            {/* Right Column - Projects */}
            <div>
              <ScrollArea className="h-[80vh] pr-4">
                {/* Updated grid: one project per row */}
                <div className="grid grid-cols-1 gap-8">
                  {/* Project 1 */}
                  <div className="space-y-4">
                    <Link href="https://www.youtube.com/watch?v=j6_oXbUtO08">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/neuro.png"
                          alt="project screenshot"
                          width={600}
                          height={400}
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        NeuroBlocks
                      </h3>
                      <p className="text-zinc-300">
                        A block-based interface to help developers create with
                        BCIs
                      </p>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-4">
                    <Link href="https://www.khanscapes.com/">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/khan.png"
                          alt="screenshot"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        Khanscapes
                      </h3>
                      <p className="text-zinc-300">
                        Client-commissioned website for a landscaping business
                      </p>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="space-y-4">
                    <Link href="https://devpost.com/software/wearmydrip">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/drip.png"
                          alt="project screenshot"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        DripFlip
                      </h3>
                      <p className="text-zinc-300">
                        A "Tinder-like" app used to give catered personalizations
                      </p>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="space-y-4">
                    <Link href="https://github.com/jaedonvisva/mesh">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/meshio.png"
                          alt="project screenshot"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        Mesh.io
                      </h3>
                      <p className="text-zinc-300">
                        A real-time networking platform, based on shared skill
                        sets.
                      </p>
                    </div>
                  </div>

                  {/* Project 5 */}
                  <div className="space-y-4">
                    <Link href="https://github.com/hareshgoyal06/tickup">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/tick.png"
                          alt="project screenshot"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        UpTick
                      </h3>
                      <p className="text-zinc-300">
                        Developed a comprehensive stock market analysis platform
                        providing real-time data.
                      </p>
                    </div>
                  </div>

                  {/* Project 6 */}
                  <div className="space-y-4">
                    <Link href="https://www.loom.com/share/6752c5965c494f7db54481449e677104?sid=50a82a89-57b8-4c04-862b-e8d84156bece">
                      <div className="relative group rounded-lg overflow-hidden border border-zinc-800 hover:shadow-lg transition-shadow">
                        <Image
                          src="/images/tksgoogle.png"
                          alt="project screenshot"
                          width={600}
                          height={400}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-80 transition-opacity">
                          <span className="text-white font-bold text-lg">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <h3 className="text-2xl font-bold font-pressstart">
                        TKSxGoogle
                      </h3>
                      <p className="text-zinc-300">
                        Worked alongside Google to find a way to make their business
                        model more effective
                      </p>
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
