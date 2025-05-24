import FeaturedProducts from "@/Components/FeaturedProducts";
import Header from "@/Components/Header";
import HeroSection from "@/Components/HeroSection";
import Howdoesitwork from "@/Components/Howdoesitwork";
import ProductPlacement from "@/Components/ProductPlacement";
import ServiceOverview from "@/Components/ServiceOverview";



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
        <section className="w-full lg:px-20 md:px-12 px-6 grid lg:grid-cols-2 gap-10">
          <ProductPlacement />
          <ServiceOverview />
        </section>
      </section>
    </main>
  );
}
