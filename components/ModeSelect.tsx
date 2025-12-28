"use client";

type Mode = "gaming" | "applications";

export default function ModeSelect({
  onSelect,
}: {
  onSelect: (mode: Mode) => void;
}) {
  return (
    <section className="mt-8">
      <div className="text-2xl font-semibold">Choose Mode</div>
      <p className="mt-2 text-white/60">Pick a world: Gaming or Applications.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {/* GAMING */}
        <button
          onClick={() => onSelect("gaming")}
          className="group relative overflow-hidden border border-[var(--hud)]/25 bg-black/20 p-6 text-left
                     hover:border-[var(--hud)]/60 hover:shadow-[0_0_70px_rgba(47,255,214,0.18)]
                     transition"
        >
          {/* Soft glow sweep */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--hud)]/10 blur-2xl" />
          </div>

          {/* HUD corners */}
          <div className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t border-[var(--hud)]/60" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b border-[var(--hud)]/30" />

          <div className="flex items-start gap-4 relative">
            <div
              className="grid h-12 w-12 place-items-center rounded border border-[var(--hud)]/25
                         text-2xl text-white/90
                         group-hover:border-[var(--hud)]/60
                         group-hover:shadow-[0_0_22px_rgba(47,255,214,0.28)]
                         transition"
            >
              🎮
            </div>

            <div className="min-w-0">
              <div className="text-xs tracking-widest uppercase text-[var(--hud)]/80">
                MODE: GAME DEV
              </div>

              <div className="mt-2 text-lg font-semibold text-white">Gaming</div>

              <p className="mt-2 text-white/65 leading-relaxed">
                Gameplay programming, systems, and performance-aware builds in Unity.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Unity", "Gameplay", "Systems", "Performance"].map((t) => (
                  <span
                    key={t}
                    className="border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-white/70
                               group-hover:border-[var(--hud)]/35 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--hud)]/80">
                <span className="opacity-80 group-hover:opacity-100 transition">
                  ENTER WORLD
                </span>
                <span className="translate-x-0 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          </div>
        </button>

        {/* APPLICATIONS */}
        <button
          onClick={() => onSelect("applications")}
          className="group relative overflow-hidden border border-[var(--accent)]/25 bg-black/20 p-6 text-left
                     hover:border-[var(--accent)]/60 hover:shadow-[0_0_70px_rgba(108,99,255,0.18)]
                     transition"
        >
          {/* Soft glow sweep */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
            <div className="absolute -left-24 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-2xl" />
          </div>

          {/* HUD corners */}
          <div className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t border-[var(--accent)]/45" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b border-[var(--accent)]/60" />

          <div className="flex items-start gap-4 relative">
            <div
              className="grid h-12 w-12 place-items-center rounded border border-[var(--accent)]/25
                         text-2xl text-white/90
                         group-hover:border-[var(--accent)]/60
                         group-hover:shadow-[0_0_22px_rgba(108,99,255,0.28)]
                         transition"
            >
              💻
            </div>

            <div className="min-w-0">
              <div className="text-xs tracking-widest uppercase text-[var(--accent)]/80">
                MODE: APP DEV
              </div>

              <div className="mt-2 text-lg font-semibold text-white">Applications</div>

              <p className="mt-2 text-white/65 leading-relaxed">
                Mobile, web, and backend projects with clean UX and solid architecture.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Flutter", "Web", "Backend", "Full-Stack"].map((t) => (
                  <span
                    key={t}
                    className="border border-white/10 bg-black/10 px-2.5 py-1 text-xs text-white/70
                               group-hover:border-[var(--accent)]/35 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--accent)]/80">
                <span className="opacity-80 group-hover:opacity-100 transition">
                  ENTER WORLD
                </span>
                <span className="translate-x-0 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
