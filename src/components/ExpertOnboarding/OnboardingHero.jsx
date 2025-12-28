import { Icon } from '../Icons';

const OnboardingHero = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">
            Join MarTechAdda as a Marketing Expert
          </h1>
          <p className="body-text max-w-2xl mx-auto">
            Create a verified profile to get discovered for your expertise — not promotions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="card flex items-center gap-2">
            <Icon name="check" className="icon-small text-black" />
            <span className="body-text font-semibold">No paid listings</span>
          </div>
          <div className="card flex items-center gap-2">
            <Icon name="check" className="icon-small text-black" />
            <span className="body-text font-semibold">No promotions</span>
          </div>
          <div className="card flex items-center gap-2">
            <Icon name="check" className="icon-small text-black" />
            <span className="body-text font-semibold">Deposit-protected engagements</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingHero;
