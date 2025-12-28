import { Icon } from '../Icons';

const EcosystemRole = () => {
  const statements = [
    {
      text: "We don't execute marketing",
      iconName: "blocked",
    },
    {
      text: "MarTechAdda is not an agency",
      iconName: "building",
    },
    {
      text: "We are not a lead-selling marketplace",
      iconName: "money",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Our role in the ecosystem
          </h2>
        </div>

        <div className="space-y-4 mb-8">
          {statements.map((statement, index) => (
            <div key={index} className="card text-center">
                  <div className="mb-3 flex justify-center">
                <Icon name={statement.iconName} className="icon-medium text-primary" />
                    </div>
              <p className="heading-3">
                    {statement.text}
                  </p>
                </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            We exist between confusion and commitment — helping both sides align before work begins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EcosystemRole;
