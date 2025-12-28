import { Icon } from '../Icons';

const ExpertiseGrid = () => {
  const expertiseAreas = [
    { iconName: "branding", label: "Branding" },
    { iconName: "strategic", label: "Strategic Marketing" },
    { iconName: "advertising", label: "Advertising" },
    { iconName: "document", label: "Marketing Collateral" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
          Focused by design
        </h2>
          <p className="body-text max-w-2xl mx-auto">
          MarTechAdda focuses exclusively on core marketing disciplines.
        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="card text-center">
              <div className="mb-3 flex justify-center">
                <Icon name={area.iconName} className="icon-medium text-primary" />
              </div>
              <div className="heading-3">
                  {area.label}
                </div>
              </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="body-text-small">
          These represent areas of expertise available on the platform — not services sold by MarTechAdda itself.
        </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;

