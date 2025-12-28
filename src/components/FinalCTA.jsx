import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="heading-1 mb-4">
          Ready to hire — or be hired — with clarity?
        </h2>
        <p className="body-text mb-8 max-w-2xl mx-auto">
          Join businesses and marketing experts who value transparency, capability, and real connections
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button className="btn-primary">
            Find Marketing Experts
          </button>
          <Link to="/expert/register" className="btn-secondary">
            Showcase Your Expertise
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
