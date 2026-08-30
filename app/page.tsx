import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />

        {/* Próximamente:
            Promotions
            Brands
            Newsletter
        */}
      </main>
    </>
  );
}