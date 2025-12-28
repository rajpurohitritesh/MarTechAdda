const Stepper = ({ steps, orientation = 'horizontal', variant = 'green' }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-3"
        >
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="heading-3 mb-1">
              {step.title}
            </h3>
            <p className="body-text">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;

