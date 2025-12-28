const ContextualHelpOptions = ({ selectedRole, selectedOptions, onOptionChange }) => {
  const helpOptions = {
    seeker: [
      { id: 'hiring-guidance', label: 'Hiring guidance' },
      { id: 'search-filters', label: 'Using search & filters' },
      { id: 'account-access', label: 'Account or access issue' },
      { id: 'payments', label: 'Payments / invoicing' },
      { id: 'other-seeker', label: 'Other' },
    ],
    provider: [
      { id: 'profile-onboarding', label: 'Profile onboarding' },
      { id: 'verification', label: 'Verification & compliance' },
      { id: 'discovery', label: 'Discovery & visibility' },
      { id: 'payouts', label: 'Payments / payouts' },
      { id: 'other-provider', label: 'Other' },
    ],
    other: [
      { id: 'partnerships', label: 'Partnerships' },
      { id: 'media-press', label: 'Media / press' },
      { id: 'feedback', label: 'Feedback / suggestions' },
      { id: 'careers', label: 'Careers' },
      { id: 'other-general', label: 'Other' },
    ],
  };

  if (!selectedRole) {
    return null;
  }

  const options = helpOptions[selectedRole] || [];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            How can we help?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((option) => (
            <label
              key={option.id}
              className={`card flex items-center cursor-pointer smooth-transition ${
                selectedOptions.includes(option.id)
                  ? 'border-primary bg-primary-light/10'
                  : 'hover:border-primary'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onOptionChange([...selectedOptions, option.id]);
                  } else {
                    onOptionChange(selectedOptions.filter((id) => id !== option.id));
                  }
                }}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center smooth-transition ${
                  selectedOptions.includes(option.id)
                    ? 'border-primary bg-primary'
                    : 'border-gray-400 bg-white'
                }`}
              >
                {selectedOptions.includes(option.id) && (
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="body-text font-semibold">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContextualHelpOptions;

