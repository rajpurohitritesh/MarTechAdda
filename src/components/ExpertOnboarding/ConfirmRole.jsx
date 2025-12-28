import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from './ProgressIndicator';
import { Icon } from '../Icons';

const ConfirmRole = ({ onComplete }) => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    { id: 'branding', label: 'Branding', iconName: 'branding', color: 'primary' },
    { id: 'strategic', label: 'Strategic Marketing', iconName: 'strategic', color: 'primary' },
    { id: 'advertising', label: 'Advertising', iconName: 'advertising', color: 'primary' },
    { id: 'collateral', label: 'Marketing Collateral', iconName: 'collateral', color: 'primary' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Start with empty selection
    setSelectedCategories([]);
  }, []);

  const toggleCategory = (id) => {
    setSelectedCategories(prev => {
      const updated = prev.includes(id) 
        ? prev.filter(c => c !== id) 
        : [...prev, id];
      // Save to localStorage
      localStorage.setItem('expertSelectedCategories', JSON.stringify(updated));
      return updated;
    });
  };

  const handleContinue = () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category to continue.');
      return;
    }
    onComplete();
    navigate('/expert/onboarding');
  };

  return (
    <div className="bg-white">
      <ProgressIndicator
        currentStep={3}
        totalSteps={3}
        stepLabels={['Account Setup', 'Verify', 'Confirm Role']}
      />
      
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <div className="card">
            <div className="mb-6">
              <h1 className="heading-1 mb-2">
                You're joining as a Marketing Expert
              </h1>
              <p className="body-text">
                Let's build your professional profile to get discovered.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-charcoal-dark mb-4">
                Select your primary categories:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-4">
                {categories.map(cat => {
                  const isSelected = selectedCategories.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleCategory(cat.id)}
                      className={`card text-left cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-primary-light/10'
                          : 'hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <Icon name={cat.iconName} className="w-6 h-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold text-sm ${isSelected ? 'text-primary-dark' : 'text-charcoal-dark'}`}>
                            {cat.label}
                          </div>
                          {isSelected && (
                            <div className="mt-1 text-xs text-primary-dark flex items-center gap-1">
                              <Icon name="check" className="w-3 h-3 text-black" />
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {selectedCategories.length > 0 && (
                <div className="card">
                  <p className="text-xs font-semibold text-charcoal-dark mb-2">
                    Selected categories ({selectedCategories.length}):
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategories.map(catId => {
                      const cat = categories.find(c => c.id === catId);
                      if (!cat) return null;
                      return (
                        <span
                          key={catId}
                          className="px-3 py-1.5 bg-white rounded-lg border border-primary/30 text-primary-dark font-medium text-xs shadow-sm flex items-center gap-1.5"
                        >
                          <Icon name={cat.iconName} className="w-3 h-3 text-black" />
                          {cat.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {selectedCategories.length === 0 && (
              <div className="card mb-6">
                <p className="body-text-small flex items-start gap-2">
                  <Icon name="warning" className="icon-small text-black" />
                  <span>Please select at least one category to continue.</span>
                </p>
              </div>
            )}
            
            <div className="card mb-6">
              <p className="body-text-small flex items-start gap-2">
                <Icon name="lightbulb" className="icon-small text-black" />
                <span>You can add more categories and services later in your profile settings.</span>
              </p>
            </div>

            <button
              onClick={handleContinue}
              disabled={selectedCategories.length === 0}
              className={`w-full btn-primary ${
                selectedCategories.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Start Building Your Profile →
            </button>

            <p className="body-text-small text-center mt-5">
              You're creating a professional profile — not signing a contract.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRole;
