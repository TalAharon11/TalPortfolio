"use client";

import ProjectCard from "./ProjectCard";

type Mode = "gaming" | "applications";

export default function WorldView({
  mode,
  onBack,
}: {
  mode: Mode;
  onBack: () => void;
}) {
  const isGaming = mode === "gaming";
  const accentColor = isGaming ? "var(--hud)" : "var(--accent)";

  const title = isGaming ? "GAMING WORLD" : "APPLICATIONS WORLD";
  const subtitle = isGaming
    ? "Explore gameplay systems, Unity projects, and interactive prototypes."
    : "Explore mobile, web, and full-stack projects built with scalable architecture.";

  return (
    <section className="mt-12">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold" style={{ color: accentColor }}>
            {title}
          </h2>
          <p className="mt-2 text-white/70">{subtitle}</p>
        </div>

        <button
          onClick={onBack}
          className="border px-4 py-2 transition hover:bg-white/5"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          ← Back
        </button>
      </div>

      <div className="mt-8 space-y-6">
        {isGaming ? (
          <>
            <ProjectCard
              category="UNITY GAME"
              title="Hangman"
              shortDescription="A classic Hangman game built in Unity (C#), focusing on clean gameplay flow, UI feedback, and maintainable code structure."
              badges={["Unity", "C#", "UI", "Game Loop"]}
              imageSrc="/projects/hangman.png"
              githubHref="https://github.com/TalAharon11/HangmanUnity"
              accentColor={accentColor}
              detailsTitle="Highlights"
              detailsBullets={[
                "Gameplay loop with win/lose states and reset flow.",
                "UI updates for guesses, lives, and progress.",
                "Clean code organization for scalability.",
              ]}
              techTitle="Tech"
              techBullets={["Unity", "C#"]}
            />

            <ProjectCard
              category="UNITY GAME"
              title="Space Invaders Clone"
              shortDescription="A classic 2D Space Invaders-style arcade game built with Unity and C#, demonstrating core gameplay programming, enemy wave logic, scoring systems, and polished presentation."
              badges={[
                "Unity",
                "C#",
                "2D Game",
                "Gameplay Systems",
                "Arcade",
              ]}
              imageSrc="/projects/spaceivadersclone.png"
              githubHref="https://github.com/TalAharon11/SpaceInvadersClone"
              accentColor={accentColor}
              detailsTitle="Highlights"
              detailsBullets={[
                "Player movement and projectile-based shooting system.",
                "Enemy formations with horizontal movement and gradual descent.",
                "Score tracking, player lives system, and game over flow.",
                "Increasing difficulty through enemy speed and wave progression.",
              ]}
              techTitle="Tech"
              techBullets={[
                "Unity",
                "C#",
                "2D Sprites",
                "Game Loop",
                "Git & GitHub",
              ]}
            />
          </>
        ) : (
          <>
            <ProjectCard
              category="KOTLIN ANDROID APP"
              title="MyRecipe"
              shortDescription="Kotlin-based Android application built with MVVM architecture, focused on clean separation of concerns, scalable structure, and maintainable code. Integrates an external REST API (via Retrofit) and supports offline access using Room."
              badges={[
                "Android",
                "Kotlin",
                "MVVM",
                "Retrofit API",
                "Room Offline",
                "Hilt DI",
              ]}
              imageSrc="/projects/myrecipe.png"
              githubHref="https://github.com/TalAharon11/MyRecipe"
              accentColor={accentColor}
              detailsTitle="Key Features"
              detailsBullets={[
                "Data retrieval: fetches and displays live data from an external API.",
                "Offline capability: stores data using Room for access when internet is unavailable.",
                "Favorites: users can add, edit, and remove favorite items.",
                "Multiple fragments: at least four distinct fragments with unique features.",
                "Team collaboration: developed in parallel by multiple contributors using Git.",
              ]}
              techTitle="Technologies & Libraries"
              techBullets={[
                "Kotlin",
                "Retrofit (REST API)",
                "Room (local database)",
                "Dagger-Hilt (dependency injection)",
                "Navigation Component",
                "ViewModel + LiveData (MVVM)",
                "Coroutines (async operations)",
                "Glide (image loading)",
                "Android Studio",
              ]}
            />

            <ProjectCard
              category="FLUTTER APP"
              title="PackMate"
              shortDescription="A cross-platform Flutter app that generates personalized packing lists based on destination, trip dates, trip type, and real weather data. Built with a clean, scalable structure and strong focus on UX, animations, and API-driven recommendations."
              badges={[
                "Flutter",
                "Dart",
                "REST API",
                "Visual Crossing",
                "SharedPreferences",
                "Animations",
              ]}
              imageSrc="/projects/packmate.png"
              githubHref="https://github.com/TalAharon11/PackMate"
              accentColor={accentColor}
              detailsTitle="Key Features"
              detailsBullets={[
                "Smart packing lists based on destination, trip dates, and trip type.",
                "Weather API integration aligned to trip dates (Visual Crossing).",
                "Editable categorized lists with real-time UI updates.",
                "Persistent storage with searchable saved trips.",
                "Smooth UX with splash animations and page transitions.",
              ]}
              techTitle="Tech"
              techBullets={[
                "Flutter / Dart",
                "HTTP (REST API integration)",
                "Visual Crossing Weather API",
                "SharedPreferences",
                "AnimationController & Tween",
                "Responsive UI (Mobile/Web/Desktop)",
              ]}
            />
          </>
        )}
      </div>
    </section>
  );
}
