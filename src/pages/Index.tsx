import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
