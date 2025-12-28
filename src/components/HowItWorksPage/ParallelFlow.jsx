import Stepper from './Stepper';
import { Icon } from '../Icons';

const ParallelFlow = () => {
  const businessSteps = [
    {
      title: 'Search with intent',
      description: 'Find marketing experts using domain-specific filters.',
    },
    {
      title: 'Connect before you commit',
      description: 'Have real conversations to align on requirements and fit.',
    },
    {
      title: 'Align scope & expectations',
      description: 'Understand approach, deliverables, and engagement clearly.',
    },
    {
      title: 'Hire with confidence',
      description: 'Make informed decisions — without RFPs or sales pressure.',
    },
  ];

  const expertSteps = [
    {
      title: 'Create a focused profile',
      description: 'Showcase real expertise and experience.',
    },
    {
      title: 'Get matched by relevance',
      description: 'Visibility is based on fit — not paid rankings.',
    },
    {
      title: 'Have meaningful conversations',
      description: 'Discuss real requirements, not generic briefs.',
    },
    {
      title: 'Engage on aligned projects',
      description: 'Work with clients who understand your value.',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
          Two paths. One clear system.
        </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Flow - For Businesses */}
          <div className="card">
            <div className="mb-3">
              <Icon name="building" className="icon-medium text-primary" />
            </div>
            <h3 className="heading-3 mb-3">
              For Businesses
            </h3>
            <p className="body-text mb-6">
              Hire marketing experts with clarity — not guesswork
            </p>

            <Stepper steps={businessSteps} orientation="vertical" />

            <div className="mt-6">
              <button className="btn-primary">
                Find marketing experts
              </button>
            </div>
          </div>

          {/* Right Flow - For Marketing Professionals */}
          <div className="card">
            <div className="mb-3">
              <Icon name="expert" className="icon-medium text-primary" />
            </div>
            <h3 className="heading-3 mb-3">
              For Marketing Professionals
            </h3>
            <p className="body-text mb-6">
              Get discovered for capability — not ad spend
            </p>

            <Stepper steps={expertSteps} orientation="vertical" />

            <div className="mt-6">
              <button className="btn-secondary">
                Create your profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallelFlow;

