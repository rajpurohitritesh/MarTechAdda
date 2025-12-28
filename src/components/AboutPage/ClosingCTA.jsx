import { Link } from 'react-router-dom';

const ClosingCTA = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="card mb-8">
          <p className="heading-2 mb-6">
            If hiring marketing experts feels harder than it should, we built MarTechAdda to make it clearer.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/"
              className="btn-primary"
          >
            Explore experts
          </Link>
          <Link
            to="/how-it-works"
              className="btn-secondary"
          >
            Learn how it works
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
