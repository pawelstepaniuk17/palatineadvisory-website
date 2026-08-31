import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import ApproachSection from '@/components/sections/ApproachSection';
import InsightsSection from '@/components/sections/InsightsSection';

import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Olive Tree Consulting Group</title>
        <meta
          name="description"
          content="We help leadership teams make decisions, priorities, and follow-through easier to see and easier to manage."
        />
        <link rel="canonical" href="https://olive-tree-consulting.com" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        
        <main>
          <HeroSection />
          <AboutSection />
          <PracticeAreasSection />
          <IndustriesSection />
          <ApproachSection />
          <InsightsSection />
          
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;