import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/WhyThisWorksPage/PageHero';
import CoreInsight from '../components/WhyThisWorksPage/CoreInsight';
import ObservationCards from '../components/WhyThisWorksPage/ObservationCards';
import ExpertiseGrid from '../components/WhyThisWorksPage/ExpertiseGrid';
import AudienceSplit from '../components/WhyThisWorksPage/AudienceSplit';
import EditorialClose from '../components/WhyThisWorksPage/EditorialClose';

const WhyThisWorksPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero />
        <CoreInsight />
        <ObservationCards />
        <ExpertiseGrid />
        <AudienceSplit />
        <EditorialClose />
      </main>
      <Footer />
    </div>
  );
};

export default WhyThisWorksPage;

