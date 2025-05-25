
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-cyber">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
