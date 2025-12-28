import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ConfirmationScreen from '../components/ExpertOnboarding/ConfirmationScreen';

const ExpertConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ConfirmationScreen />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertConfirmation;

