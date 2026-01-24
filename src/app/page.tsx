import Hero from "@/components/Hero";
import CategoryPulse from "@/components/CategoryPulse";
import FeaturedProducts from "@/components/FeaturedProducts";
import OrderGuide from "@/components/OrderGuide";
import SocialProof from "@/components/SocialProof";
import ContactGuide from "@/components/ContactGuide";

export default function Home() {
  return (
    <div >
      <main >
          <Hero />
          <CategoryPulse />
          <FeaturedProducts />
          <OrderGuide />
          <SocialProof />
          <ContactGuide />
      </main>
    </div>
  );
}
