"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type ProjectCardProps = {
  category: string;
  title: string;
  shortDescription: string;
  badges?: string[];

  imageSrc?: string;

  githubHref?: string;
  liveHref?: string;

  accentColor: string;

  detailsTitle?: string;
  detailsBullets?: string[];

  techTitle?: string;
  techBullets?: string[];
};

export default function ProjectCard({
  category,
  title,
  shortDescription,
  badges = [],
  imageSrc,
  githubHref,
  liveHref,
  accentColor,
  detailsTitle = "Details",
  detailsBullets = [],
  techTitle = "Tech",
  techBullets = [],
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasMore = useMemo(() => {
    return (detailsBullets?.length ?? 0) > 0 || (techBullets?.length ?? 0) > 0;
  }, [detailsBullets, techBullets]);

  return (
    <article
      className="relative border border-white/10 bg-black/25 backdrop-blur-md p-6
                 transition
                 hover:-translate-y-[2px] hover:border-white/20
                 focus-within:ring-2 focus-within:ring-white/10"
    >
      {/* HUD corners */}
      <div
        className="pointer-events-none absolute -top-1 -left-1 h-6 w-6 border-l border-t"
        style={{ borderColor: accentColor, opacity: 0.65 }}
      />
      <div
        className="pointer-events-none absolute -top-1 -right-1 h-6 w-6 border-r border-t"
        style={{ borderColor: accentColor, opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute -bottom-1 -left-1 h-6 w-6 border-l border-b"
        style={{ borderColor: accentColor, opacity: 0.35 }}
      />
      <div
        className="pointer-events-none absolute -bottom-1 -right-1 h-6 w-6 border-r border-b"
        style={{ borderColor: accentColor, opacity: 0.65 }}
      />

      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Preview (SQUARE) */}
        <div className="md:order-2 md:shrink-0">
          <div
            className="group relative overflow-hidden border border-white/10 bg-black/15
                       w-full aspect-square md:w-80
                       transition active:scale-[0.99]"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            {/* Badge */}
            <div
              className="absolute left-3 top-3 z-10 inline-flex items-center gap-2
                         border px-3 py-1 text-xs text-white/75
                         bg-black/40 backdrop-blur-md"
              style={{ borderColor: accentColor }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 12px ${accentColor}`,
                  opacity: 0.8,
                }}
              />
              Preview
            </div>

            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`${title} preview`}
                fill
                className="object-cover transition duration-300 md:group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 100vw, 320px"
                priority={false}
              />
            ) : (
              <div className="h-full w-full grid place-items-center text-sm text-white/45">
                Image preview
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="mt-3 text-xs text-white/55 tracking-widest uppercase">
            Screenshot
          </div>
        </div>

        {/* Text */}
        <div className="md:order-1 min-w-0">
          <div className="text-xs tracking-[0.22em] uppercase text-white/55">
            {category}
          </div>

          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>

          <p className="mt-3 text-white/70 leading-relaxed">{shortDescription}</p>

          {badges.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="border border-white/15 bg-black/10 px-3 py-1 text-sm text-white/80
                             transition hover:text-white"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border px-4 py-2 text-sm
                           bg-black/20 backdrop-blur-md
                           text-white/85 transition
                           hover:text-white
                           hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]
                           active:scale-[0.99]"
                style={{ borderColor: accentColor }}
              >
                <span
                  className="grid h-7 w-7 place-items-center rounded border transition"
                  style={{ borderColor: "rgba(255,255,255,0.14)" }}
                >
                  ⎇
                </span>
                GitHub
                <span className="text-white/50 group-hover:text-white/80 transition">
                  →
                </span>
              </a>
            )}

            {liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noreferrer"
                className="border px-4 py-2 text-sm text-white/80 hover:text-white transition active:scale-[0.99]"
                style={{ borderColor: accentColor }}
              >
                Live →
              </a>
            )}

            {hasMore && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="border px-4 py-2 text-sm transition hover:bg-white/5 active:scale-[0.99]"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {expanded ? "Hide details" : "More details"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Expanded area */}
      {expanded && (
        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {(detailsBullets?.length ?? 0) > 0 && (
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  {detailsTitle}
                </div>

                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {detailsBullets.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: accentColor, opacity: 0.75 }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {(techBullets?.length ?? 0) > 0 && (
              <div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  {techTitle}
                </div>

                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {techBullets.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: accentColor, opacity: 0.55 }}
                      />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
}
