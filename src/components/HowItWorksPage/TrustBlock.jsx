import { Icon } from '../Icons';

const TrustBlock = () => {
  const boundaries = [
    "We don't sell services",
    "We don't push packages",
    "We don't sell leads",
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
          Clear boundaries. Honest intent.
        </h2>
        </div>

        <div className="space-y-4">
          {boundaries.map((boundary, index) => (
            <div
              key={index}
              className="card text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <Icon name="blocked" className="icon-medium text-primary" />
                <p className="heading-3">
                  {boundary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
