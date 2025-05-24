import FeaturedProducts from "@/Components/FeaturedProducts";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Howdoesitwork from "@/Components/Howdoesitwork";



export default function Home() {
  return (
    <main className="w-full h-[400vh]">
      <Header />
      <section className=" dark:from-black dark:to-[#222831]">
        <HeroSection />
        <FeaturedProducts />
      </section>
      <section className="py-10 space-y-10">
        <Howdoesitwork />
      </section>
    </main>
  );
}
