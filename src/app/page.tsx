import FeaturedProducts from "@/Components/FeaturedProducts";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";



export default function Home() {
  return (
    <main className="w-full h-[200vh]">
      <Header />
      <section className="bg-gradient-to-t from-[#D9ACF5] to-white dark:from-black dark:to-[#222831]">
        <HeroSection />
        <FeaturedProducts />
      </section>
    </main>
  );
}
