import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OnboardingHero from '../components/ExpertOnboarding/OnboardingHero';
import Stage1Profile from '../components/ExpertOnboarding/Stage1Profile';
import Stage2Expertise from '../components/ExpertOnboarding/Stage2Expertise';
import Stage3Portfolio from '../components/ExpertOnboarding/Stage3Portfolio';
import Stage4Compliance from '../components/ExpertOnboarding/Stage4Compliance';

const ExpertOnboarding = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleStageComplete = (data) => {
    console.log('Stage completed:', data);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {location.pathname === '/expert/onboarding' && <OnboardingHero />}
        <Routes>
          <Route index element={<Stage1Profile onComplete={handleStageComplete} />} />
          <Route path="expertise" element={<Stage2Expertise onComplete={handleStageComplete} />} />
          <Route path="portfolio" element={<Stage3Portfolio onComplete={handleStageComplete} />} />
          <Route path="compliance" element={<Stage4Compliance onComplete={handleStageComplete} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertOnboarding;

