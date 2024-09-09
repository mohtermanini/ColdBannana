
import MainNavbar from "@/common/components/Navigation/MainNavbar";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import ProductsSection from "./_components/ProductsSection";
import MainFooter from "@/common/components/Navigation/MainFooter";

export default function HomePage() {

  return (
    <>
      <MainNavbar />
      <Hero />
      <Intro />
      <ProductsSection />
      <MainFooter />
    </>
  )
}
