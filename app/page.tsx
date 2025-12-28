"use client";

import { useMemo, useState } from "react";
import ModeSelect from "../components/ModeSelect";
import WorldView from "../components/WorldView";

type Mode = "gaming" | "applications";

function Tag({ text }: { text: string }) {
  return <span className="border border-white/15 px-3 py-1 text-sm text-white/80">{text}</span>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-xs text-white/60 tracking-[0.22em] uppercase">{children}</div>;
}

export default function Home() {
  const [mode, setMode] = useState<Mode | null>(null);

  const skills = useMemo(
    () => [
      {
        group: "Languages",
        items: ["C", "C++", "C#", "Python", "JavaScript", "Kotlin", "SQL"],
      },
      {
        group: "Game Development",
        items: ["Unity", "Gameplay Programming", "Game Systems", "Performance Awareness"],
      },
      {
        group: "Applications / Full-Stack",
        items: ["Flutter", "React", "Node.js", "REST APIs", "Databases (SQL/MongoDB)"],
      },
      {
        group: "Work Style",
        items: ["Fast learner", "Team-oriented", "Self-driven", "Strong work ethic"],
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#05070F] text-white px-6 py-10">
      {/* Floating Contact CTA */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-2
                   border border-[var(--hud)]/35 bg-black/35 px-4 py-3 backdrop-blur-md
                   hover:border-[var(--hud)]/75
                   hover:shadow-[0_0_50px_rgba(47,255,214,0.22)]
                   transition
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hud)]/40
                   active:scale-[0.98]"
      >
        <span
          className="grid h-8 w-8 place-items-center rounded border border-[var(--hud)]/25
                     group-hover:border-[var(--hud)]/70 transition"
        >
          ✉️
        </span>
        <span className="font-semibold text-white/90">Contact</span>
      </a>

      <div
        className="relative mx-auto max-w-5xl border border-white/10 bg-black/30 backdrop-blur-md
                   p-6 sm:p-10 shadow-[0_0_120px_rgba(47,255,214,0.12)]"
      >
        {/* HUD corners */}
        <div className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t border-[var(--hud)]/80" />
        <div className="pointer-events-none absolute -top-1 -right-1 h-6 w-6 border-r border-t border-[var(--hud)]/40" />
        <div className="pointer-events-none absolute -bottom-1 -left-1 h-6 w-6 border-l border-b border-[var(--accent)]/40" />
        <div className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b border-[var(--accent)]/80" />

        {/* HERO */}
        <header className="pt-2">
          <SectionTitle>Portfolio</SectionTitle>

          <div className="mt-4 h-px w-40 bg-gradient-to-r from-transparent via-[var(--hud)]/60 to-transparent" />

          <h1
            className="
              mt-4
              text-4xl sm:text-6xl
              font-bold
              leading-tight
              bg-gradient-to-r from-[var(--hud)] via-white to-white
              bg-clip-text text-transparent
              animate-[fadeInUp_0.8s_ease-out_forwards]
              hover:drop-shadow-[0_0_18px_rgba(47,255,214,0.35)]
              transition
            "
          >
            Tal Aharon
          </h1>

          <p className="mt-3 text-white/70">Software Developer (Games • Mobile • Web)</p>

          <div className="mt-4 inline-flex items-center gap-2 border border-white/10 bg-black/30 px-3 py-2 text-sm text-white/70">
            <span className="h-2 w-2 rounded-full bg-[var(--hud)] shadow-[0_0_10px_rgba(47,255,214,0.6)]" />
            B.Sc. in Computer Science
          </div>

          {/* OVERVIEW */}
          <div className="mt-8 w-fit">
            <SectionTitle>Overview</SectionTitle>
            <div className="mt-3 h-px w-28 bg-gradient-to-r from-transparent via-[var(--hud)]/60 to-transparent" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
            {/* Profile Image */}
            <div className="shrink-0">
              <div
                className="h-28 w-28 rounded-full border border-white/15 bg-black/30 overflow-hidden
                           shadow-[0_0_40px_rgba(47,255,214,0.15)]"
              >
                <img src="/photo.jpg" alt="Tal Aharon" className="h-full w-full object-cover" />
              </div>
            </div>

            {/* Overview Text */}
            <p className="max-w-2xl text-white/70 leading-relaxed">
              I build games, mobile applications, and full-stack web projects with a strong focus
              on clean architecture, performance, and user experience. I’m highly motivated,
              hard-working, and enjoy taking projects from concept to polished, production-ready
              systems. Currently seeking a full-time development position.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-xs text-white/60 tracking-widest uppercase">Status</div>
              <div className="mt-1 font-semibold text-white">Open to full-time</div>
            </div>

            <div className="border border-white/10 bg-black/20 px-4 py-3">
              <div className="text-xs text-white/60 tracking-widest uppercase">Focus</div>
              <div className="mt-1 font-semibold text-white">Games • Mobile • Web</div>
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#skills"
              className="group inline-flex items-center justify-between gap-3
                         border border-[var(--hud)]/35 bg-black/25 px-5 py-3 backdrop-blur-md
                         hover:border-[var(--hud)]/70
                         hover:shadow-[0_0_40px_rgba(47,255,214,0.18)]
                         transition
                         focus-visible:border-[var(--hud)]/70
                         focus-visible:shadow-[0_0_40px_rgba(47,255,214,0.18)]
                         active:scale-[0.98]"
            >
              <span className="inline-flex items-center gap-2 font-semibold">
                <span
                  className="grid h-8 w-8 place-items-center rounded
                             border border-[var(--hud)]/25
                             group-hover:border-[var(--hud)]/70 transition"
                >
                  ⚙
                </span>
                Skills
              </span>

              <span className="text-white/50 group-hover:text-white/80 transition">View →</span>
            </a>

            <a
              href="#world"
              className="group inline-flex items-center justify-between gap-3
                         border border-[var(--accent)]/35 bg-black/25 px-5 py-3 backdrop-blur-md
                         hover:border-[var(--accent)]/70
                         hover:shadow-[0_0_40px_rgba(108,99,255,0.18)]
                         transition
                         focus-visible:border-[var(--hud)]/70
                         focus-visible:shadow-[0_0_40px_rgba(47,255,214,0.18)]
                         active:scale-[0.98]"
            >
              <span className="inline-flex items-center gap-2 font-semibold">
                <span
                  className="grid h-8 w-8 place-items-center rounded
                             border border-[var(--accent)]/25
                             group-hover:border-[var(--accent)]/70 transition"
                >
                  🌍
                </span>
                Projects
              </span>

              <span className="text-white/50 group-hover:text-white/80 transition">
                Explore →
              </span>
            </a>
          </div>
        </header>

        {/* SKILLS */}
        <section id="skills" className="mt-14">
          <div className="w-fit">
            <SectionTitle>Skills & Technologies</SectionTitle>
            <div className="mt-3 h-px w-44 bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.group}
                className="relative border border-white/10 bg-black/25 backdrop-blur-md p-6
                           hover:border-[var(--accent)]/40
                           hover:shadow-[0_0_55px_rgba(108,99,255,0.16)]
                           transition"
              >
                <div className="pointer-events-none absolute left-0 top-6 h-12 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/60 to-transparent" />

                <h3 className="text-lg font-semibold drop-shadow-[0_0_12px_rgba(108,99,255,0.12)]">
                  {s.group}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <button
                      key={it}
                      type="button"
                      className="select-none border border-white/15 bg-black/10 px-3 py-1 text-sm text-white/80
                                 transition
                                 hover:border-[var(--hud)]/70 hover:text-white hover:shadow-[0_0_16px_rgba(47,255,214,0.25)]
                                 active:scale-[0.98] active:border-[var(--hud)]/80 active:shadow-[0_0_22px_rgba(47,255,214,0.35)]
                                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hud)]/40"
                    >
                      {it}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORLD SELECT */}
        <section id="world" className="mt-14">
          <div className="w-fit">
            <SectionTitle>Projects</SectionTitle>
            <div className="mt-3 h-px w-36 bg-gradient-to-r from-transparent via-[var(--hud)]/50 to-transparent" />
          </div>

          <div
            className="relative mt-6 border border-white/10 bg-black/25 backdrop-blur-md
                       p-6 sm:p-8 hover:border-[var(--hud)]/35
                       hover:shadow-[0_0_70px_rgba(47,255,214,0.12)]
                       transition"
          >
            <div className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t border-[var(--hud)]/70" />
            <div className="pointer-events-none absolute -top-1 -right-1 h-6 w-6 border-r border-t border-[var(--hud)]/35" />
            <div className="pointer-events-none absolute -bottom-1 -left-1 h-6 w-6 border-l border-b border-[var(--accent)]/35" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b border-[var(--accent)]/70" />

            <div className="pointer-events-none absolute left-0 top-8 h-12 w-px bg-gradient-to-b from-transparent via-[var(--hud)]/60 to-transparent" />

            {!mode ? <ModeSelect onSelect={setMode} /> : <WorldView mode={mode} onBack={() => setMode(null)} />}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-14">
          <div className="w-fit">
            <SectionTitle>Contact</SectionTitle>
            <div className="mt-3 h-px w-36 bg-gradient-to-r from-transparent via-[var(--hud)]/50 to-transparent" />
          </div>

          <div
            className="relative mt-6 border border-white/10 bg-black/25 backdrop-blur-md p-6 sm:p-8
                       hover:border-[var(--hud)]/35 hover:shadow-[0_0_70px_rgba(47,255,214,0.12)]
                       transition"
          >
            <div className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t border-[var(--hud)]/70" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b border-[var(--accent)]/70" />

            <p className="text-white/70 leading-relaxed max-w-2xl">
             Interested in working together?
             I’m open to full-time development opportunities and would love to discuss how I can contribute to your team.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* Replace with your real email */}
              <a
                href="mailto:aharontal15@gmail.com"
                className="group inline-flex items-center justify-between gap-3
                           border border-[var(--hud)]/35 bg-black/25 px-5 py-3 backdrop-blur-md
                           hover:border-[var(--hud)]/70 hover:shadow-[0_0_40px_rgba(47,255,214,0.18)]
                           transition active:scale-[0.98]"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <span className="grid h-8 w-8 place-items-center rounded border border-[var(--hud)]/25 group-hover:border-[var(--hud)]/70 transition">
                    ✉️
                  </span>
                  Email me
                </span>
                <span className="text-white/50 group-hover:text-white/80 transition">Send →</span>
              </a>

              {/* Replace with your real LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tal-aharon-469263282/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-3
                           border border-[var(--accent)]/35 bg-black/25 px-5 py-3 backdrop-blur-md
                           hover:border-[var(--accent)]/70 hover:shadow-[0_0_40px_rgba(108,99,255,0.18)]
                           transition active:scale-[0.98]"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <span className="grid h-8 w-8 place-items-center rounded border border-[var(--accent)]/25 group-hover:border-[var(--accent)]/70 transition">
                    🔗
                  </span>
                  LinkedIn
                </span>
                <span className="text-white/50 group-hover:text-white/80 transition">
                  Open →
                </span>
              </a>

              {/* GitHub (חדש) */}
              <a
                href="https://github.com/TalAharon11"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-between gap-3
                           border border-white/30 bg-black/25 px-5 py-3
                           hover:border-white/70 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]
                           transition active:scale-[0.98]"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  🐙 GitHub
                </span>
                <span className="text-white/50 group-hover:text-white/80">View →</span>
              </a>
              
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-14 pt-6 border-t border-white/10 text-sm text-white/50">
          © {new Date().getFullYear()} Tal Aharon
        </footer>
      </div>
    </main>
  );
}
