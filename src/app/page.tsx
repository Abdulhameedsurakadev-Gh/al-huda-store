import Hero from "@/components/Hero";
import CategoryPulse from "@/components/CategoryPulse";
import OrderGuide from "@/components/OrderGuide";
import ContactGuide from "@/components/ContactGuide";

export default function Home() {
  return (
    <div >
      <main >
          <Hero />
          <CategoryPulse />
          <OrderGuide />
          <ContactGuide />
      </main>
    </div>
  );
}
