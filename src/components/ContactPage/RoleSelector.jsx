const RoleSelector = ({ selectedRole, onRoleChange }) => {
  const roles = [
    {
      id: 'seeker',
      label: 'Service Seeker (Business)',
      description: 'Looking to hire marketing experts',
    },
    {
      id: 'provider',
      label: 'Service Provider (Marketing Expert)',
      description: 'Want to showcase your expertise',
    },
    {
      id: 'other',
      label: 'Other / General Inquiry',
      description: 'Partnerships, press, or general questions',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
            Your role
          </h2>
          <p className="body-text">
            This helps us route your request faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {roles.map((role) => (
            <label
              key={role.id}
              className={`card cursor-pointer smooth-transition ${
                selectedRole === role.id
                  ? 'border-primary bg-primary-light/10'
                  : 'hover:border-primary'
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role.id}
                checked={selectedRole === role.id}
                onChange={() => onRoleChange(role.id)}
                className="sr-only"
              />
              <div className="flex items-center mb-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center smooth-transition ${
                    selectedRole === role.id
                      ? 'border-primary bg-primary'
                      : 'border-gray-400'
                  }`}
                >
                  {selectedRole === role.id && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="heading-3">
                  {role.label}
                </span>
              </div>
              <p className="body-text ml-6">
                {role.description}
              </p>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleSelector;

