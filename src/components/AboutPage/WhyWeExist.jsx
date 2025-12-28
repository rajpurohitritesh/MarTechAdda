const WhyWeExist = () => {
  const problems = [
    {
      title: "Scattered discovery",
      description: "Marketing expertise lives inside generic platforms, making relevant discovery difficult.",
    },
    {
      title: "RFP-driven hiring",
      description: "Traditional RFPs delay real conversations and early alignment.",
    },
    {
      title: "Late-stage clarity",
      description: "Capability, scope, and fit become clear only after commitment.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Why we exist
          </h2>
          <p className="body-text max-w-2xl mx-auto mb-4">
            The hiring process is broken — not the talent.
          </p>
          <p className="body-text max-w-2xl mx-auto">
            Across businesses of all sizes, we kept seeing the same three problems:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {problems.map((problem, index) => (
            <div key={index} className="card">
              <div className="mb-3">
                <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
              <h3 className="heading-3 mb-2">
                    {problem.title}
                  </h3>
              <p className="body-text">{problem.description}</p>
                </div>
          ))}
        </div>

        <div className="text-center p-6 bg-white border border-[#E0E0E0]">
          <p className="text-base font-medium text-[#111111]">
            The result isn't bad marketing talent — it's bad hiring decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
