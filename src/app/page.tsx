import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import CtaBanner from "@/components/CtaBanner";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LiveActivity from "@/components/LiveActivity";
import SavingsCalculator from "@/components/SavingsCalculator";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <SavingsCalculator />
        <WhyUs />
        <HowItWorks />
        <CtaBanner />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
      <LiveActivity />
    </>
  );
}
