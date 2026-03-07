
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Problems from '@/components/Problems';
import Community from '@/components/Community';
import Mentorship from '@/components/Mentorship';
import Research from '@/components/Research';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Problems />
      <Community />
      <Mentorship />
      <Research />
      <Footer />
    </div>
  );
};

export default Index;
