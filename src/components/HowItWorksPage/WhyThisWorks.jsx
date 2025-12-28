import { Link } from 'react-router-dom';

const WhyThisWorks = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="card">
          <p className="heading-2 mb-4">
          Because clarity should come before commitment.
        </p>
        <Link
          to="/why-this-works"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold text-sm smooth-transition hover:underline"
        >
          Why this works →
        </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyThisWorks;

