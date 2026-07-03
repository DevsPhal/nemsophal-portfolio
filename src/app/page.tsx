import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import { personalInfo } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HomeSection />
        <AboutSection />
        <ExploreSection />
      </main>
      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </footer>
    </div>
  );
}
