import { achievements, certificates, skills } from "@/data/profile";

export default function ExploreSection() {
  return (
    <section
      id="explore"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <h2 className="font-pixel text-2xl text-black sm:text-3xl dark:text-zinc-50">
        Explore
      </h2>

      <div className="mt-10">
        <h3 className="font-pixel text-lg text-black dark:text-zinc-50">
          Skills
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  {skill.name}
                </span>
                <span className="font-mono text-zinc-500 dark:text-zinc-400">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-black/10 dark:bg-white/10">
                <div
                  className="h-2 rounded-full bg-foreground"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-pixel text-lg text-black dark:text-zinc-50">
          Achievements
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 p-5 dark:border-white/10"
            >
              <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {item.year}
              </p>
              <p className="mt-2 font-semibold text-zinc-800 dark:text-zinc-200">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-pixel text-lg text-black dark:text-zinc-50">
          Certificates
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="rounded-xl border border-black/10 p-5 dark:border-white/10"
            >
              <p className="font-semibold text-zinc-800 dark:text-zinc-200">
                {cert.title}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {cert.issuer}
              </p>
              <p className="mt-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
