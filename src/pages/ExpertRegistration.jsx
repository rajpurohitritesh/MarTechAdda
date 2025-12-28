import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReassuranceStrip from '../components/ExpertOnboarding/ReassuranceStrip';
import AccountSetup from '../components/ExpertOnboarding/AccountSetup';

const ExpertRegistration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAccountComplete = (data) => {
    // Store in localStorage for next step
    localStorage.setItem('expertAccountData', JSON.stringify(data));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ReassuranceStrip />
        <AccountSetup onComplete={handleAccountComplete} />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertRegistration;
