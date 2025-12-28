import { useState } from 'react';

const ContactForm = ({ selectedRole, selectedOptions, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        onSubmit(formData);
        setIsSubmitting(false);
        alert('Thank you! We\'ll get back to you within 24-48 hours.');
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const isFormValid = formData.name && formData.email && formData.message && selectedRole;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-1 mb-3">
          Your details
        </h2>
        </div>

        <div className="card max-w-3xl mx-auto">

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-charcoal-dark mb-1.5"
            >
              Full Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary/20 smooth-transition text-sm ${
                errors.name
                  ? 'border-gray-300 bg-gray-50'
                  : 'border-gray-200 focus:border-primary'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-gray-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-charcoal-dark mb-1.5"
            >
              Email Address <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2.5 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary/20 smooth-transition text-sm ${
                errors.email
                  ? 'border-gray-300 bg-gray-50'
                  : 'border-gray-200 focus:border-primary'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-gray-600">{errors.email}</p>
            )}
          </div>

          {/* Company (Optional) */}
          <div>
            <label
              htmlFor="company"
              className="block text-xs font-semibold text-charcoal-dark mb-1.5"
            >
              Company / Brand Name <span className="text-charcoal-light text-xs">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 smooth-transition text-sm"
              placeholder="Your Company"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-charcoal-dark mb-1.5"
            >
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-3 py-2.5 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-primary/20 smooth-transition resize-none text-sm ${
                errors.message
                  ? 'border-gray-300 bg-gray-50'
                  : 'border-gray-200 focus:border-primary'
              }`}
              placeholder="Tell us briefly how we can help."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-gray-600">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full sm:w-auto btn-primary ${
                !isFormValid || isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send message →'}
            </button>
            <p className="mt-3 body-text-small">
              We usually respond within 24–48 hours.
            </p>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

