import { Icon } from '../Icons';

const OnboardingProgress = ({ currentStage, totalStages }) => {
  const stages = ['Profile', 'Expertise', 'Portfolio', 'Compliance'];
  const percentage = (currentStage / totalStages) * 100;

  return (
    <div className="bg-white border-b border-gray-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="body-text-small font-semibold">
            Step {currentStage} of {totalStages}
          </h3>
          <span className="body-text-small font-semibold text-primary">{Math.round(percentage)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-primary h-full smooth-transition"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {stages.map((stage, index) => {
            const stageNumber = index + 1;
            const isActive = stageNumber === currentStage;
            const isCompleted = stageNumber < currentStage;
            
            return (
              <div
                key={index}
                className={`body-text-small font-medium smooth-transition ${
                  isActive
                    ? 'text-primary'
                    : isCompleted
                    ? 'text-[#111111]'
                    : 'text-[#666666]'
                }`}
              >
                {isCompleted && <Icon name="check" className="w-4 h-4 inline mr-1 text-black" />}
                {stage}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OnboardingProgress;

