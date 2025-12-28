const Metrics = () => {
  const metrics = [
    { value: '<24', label: 'Start projects in hours', suffix: '' },
    { value: '92', label: 'Expert match accuracy', suffix: '%' },
    { value: '100+', label: 'Vetted experts', suffix: '' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Trusted by businesses and experts
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-2 text-[#111111]">
                {metric.value}
                {metric.suffix}
              </div>
              <div className="body-text-small">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;

