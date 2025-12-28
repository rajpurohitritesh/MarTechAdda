const ObservationCards = () => {
  const observations = [
    {
      title: "Marketing is treated like a commodity",
      description: "Marketing expertise is complex and contextual, yet listed like products on generic marketplaces.",
    },
    {
      title: "RFPs delay alignment",
      description: "Time is spent on documents, while real understanding only happens through conversation.",
    },
    {
      title: "Transparency comes too late",
      description: "Scope, approach, and fit become clear after commitment — not before.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="body-text mb-4">
          Over time, three structural issues kept repeating.
        </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {observations.map((observation, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="heading-3">
                  {observation.title}
                </h3>
              </div>
              <p className="body-text ml-11">
                {observation.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            We believed fixing these three issues would fix hiring itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ObservationCards;

