import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingProgress from './OnboardingProgress';
import { Icon } from '../Icons';

const Stage2Expertise = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const categories = [
    { id: 'branding', label: 'Branding', iconName: 'branding', color: 'primary' },
    { id: 'strategic', label: 'Strategic Marketing', iconName: 'strategic', color: 'primary' },
    { id: 'advertising', label: 'Advertising', iconName: 'advertising', color: 'primary' },
    { id: 'collateral', label: 'Marketing Collateral', iconName: 'collateral', color: 'primary' },
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Education', 'Real Estate',
    'Food & Beverage', 'Fashion', 'Travel', 'Entertainment', 'Other'
  ];

  const toggleCategory = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const toggleIndustry = (industry) => {
    setSelectedIndustries(prev =>
      prev.includes(industry) ? prev.filter(i => i !== industry) : [...prev, industry]
    );
  };

  const handleContinue = () => {
    onComplete({ categories: selectedCategories, industries: selectedIndustries });
    navigate('/expert/onboarding/portfolio');
  };

  return (
    <div className="bg-white">
      <OnboardingProgress currentStage={2} totalStages={4} />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-dark mb-2">
              Your Expertise
            </h1>
            <p className="text-base text-charcoal-light">
              Define what you do and who you serve to get matched with the right clients.
            </p>
          </div>

          {/* What You Do Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="target" className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-charcoal-dark">What You Do</h2>
                <p className="text-xs text-charcoal-light">Choose services you actively provide</p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {categories.map(cat => {
                const isSelected = selectedCategories.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className={`p-4 rounded-lg border-2 text-left smooth-transition transform hover:scale-105 ${
                      isSelected
                        ? 'border-primary bg-primary-light/20 shadow-sm'
                        : 'border-gray-200 hover:border-primary/50 hover:shadow-sm'
                    }`}
                  >
                    <div className="mb-2">
                      <Icon name={cat.iconName} className="w-6 h-6 text-black" />
                    </div>
                    <div className={`font-semibold text-sm ${isSelected ? 'text-primary-dark' : 'text-charcoal-dark'}`}>
                      {cat.label}
                    </div>
                    {isSelected && (
                      <div className="mt-1 text-xs text-primary-dark flex items-center gap-1">
                        <Icon name="check" className="w-3 h-3 text-black" /> Selected
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="px-3 py-2 border-2 border-gray-200 rounded-lg hover:border-primary smooth-transition text-xs font-medium"
            >
              + Add another category
            </button>
          </div>

          {/* Who You Serve Card */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 mb-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                <Icon name="users" className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-charcoal-dark">Who You Serve</h2>
                <p className="text-xs text-charcoal-light">Select industries you have experience with</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {industries.map(industry => {
                const isSelected = selectedIndustries.includes(industry);
                return (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => toggleIndustry(industry)}
                    className={`px-3 py-2 rounded-lg border-2 smooth-transition text-xs font-medium ${
                      isSelected
                        ? 'border-primary bg-primary-light/20 text-primary-dark shadow-sm'
                        : 'border-gray-200 hover:border-primary/50 text-charcoal-dark'
                    }`}
                  >
                    {isSelected && <Icon name="check" className="w-3 h-3 inline mr-1 text-black" />}
                    {industry}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-5">
            <button
              onClick={handleContinue}
              disabled={selectedCategories.length === 0}
              className={`px-6 py-3 rounded-lg font-semibold text-sm smooth-transition shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
                selectedCategories.length > 0
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue — Add Portfolio & Proof →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage2Expertise;
