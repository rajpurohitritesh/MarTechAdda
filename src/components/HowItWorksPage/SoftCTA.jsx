import { Link } from 'react-router-dom';

const SoftCTA = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="card">
          <h2 className="heading-2 mb-6">
          Ready to get started — with clarity?
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="btn-primary">
            Find Marketing Experts
          </button>
          <Link
            to="/expert/register"
              className="btn-secondary"
          >
            Showcase Your Expertise
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftCTA;

