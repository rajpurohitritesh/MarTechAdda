import { Icon } from '../Icons';

const ProgressIndicator = ({ currentStep, totalSteps, stepLabels }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between relative">
          {stepLabels.map((label, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            
            return (
              <div key={index} className="flex-1 relative">
                {/* Connector Line - positioned absolutely */}
                {index < stepLabels.length - 1 && (
                  <div
                    className={`absolute top-4 left-1/2 right-0 h-0.5 smooth-transition ${
                      isCompleted ? 'bg-primary' : 'bg-gray-200'
                    }`}
                    style={{ width: 'calc(100% - 1rem)', marginLeft: '1rem' }}
                  />
                )}
                
                {/* Step Content */}
                <div className="flex flex-col items-center relative z-10">
                  {/* Step Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold smooth-transition mb-2 ${
                      isCompleted
                        ? 'bg-primary text-white'
                        : isActive
                        ? 'bg-primary text-white ring-2 ring-primary/20'
                        : 'bg-gray-200 text-charcoal-light'
                    }`}
                  >
                    {isCompleted ? <Icon name="check" className="w-4 h-4 text-white" /> : stepNumber}
                  </div>
                  
                  {/* Label - properly centered */}
                  <span
                    className={`text-xs text-center whitespace-nowrap ${
                      isActive ? 'text-primary font-semibold' : 'text-charcoal-light'
                    }`}
                  >
                    {label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
