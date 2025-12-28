import { Icon } from '../Icons';

const PrinciplesGrid = () => {
  const principles = [
    {
      title: "Merit over promotion",
      description: "Experts cannot buy visibility. Discovery is based on relevance, not spend.",
    },
    {
      title: "Verification before visibility",
      description: "Providers are reviewed for real capability — not buzzwords.",
    },
    {
      title: "Neutral by design",
      description: "We don't sell services or push packages. Our role is to enable better choices.",
    },
    {
      title: "Marketing-only focus",
      description: "No mixed categories. No generic listings. Only marketing expertise.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Our principles
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          {principles.map((principle, index) => (
            <div key={index} className="card">
                  <div className="flex items-start mb-3">
                <div className="mr-3">
                  <Icon name="check" className="icon-medium text-primary" />
                    </div>
                <h3 className="heading-3">
                      {principle.title}
                    </h3>
                  </div>
              <p className="body-text ml-8">
                    {principle.description}
                  </p>
                </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            These principles shape every product decision we make.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesGrid;
