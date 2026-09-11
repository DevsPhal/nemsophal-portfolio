import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ExploreSection from "@/components/ExploreSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HomeSection />
        <AboutSection />
        <ExploreSection />
      </main>
      <Footer />
    </div>
  );
}
