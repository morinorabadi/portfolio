import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Content Column */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-tGreen/10 border border-tGreen/20 px-3 py-1 text-sm text-tGreen">
                Welcome to my portfolio
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                it&apos;s{" "}
                <span className="bg-gradient-to-r from-tGreen via-emerald-400 to-tGreen bg-clip-text text-transparent">
                  mori
                </span>
              </h1>

              <h2 className="text-2xl font-semibold tracking-tight text-slate-300 md:text-3xl">
                Full-stack 3D Developer
              </h2>

              <p className="max-w-[600px] text-base leading-relaxed text-slate-400 md:text-lg">
                I&apos;m a Web Developer with a strong focus on crafting
                interactive and engaging 3D experiences. I specialize in
                building full-stack applications and game development.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2">
            <div className="relative mx-auto max-w-[480px]">
              {/* Glow effect */}
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-tGreen/40 via-emerald-500/30 to-transparent blur-3xl" />

              {/* Image container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
                <Image
                  src="/images/real_mori.webp"
                  alt="mori"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={cn(
                    "object-cover object-[center_20%]",
                    "transition-transform duration-500 hover:scale-105",
                  )}
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
