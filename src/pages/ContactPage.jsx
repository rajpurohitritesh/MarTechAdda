import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/ContactPage/ContactHero';
import RoleSelector from '../components/ContactPage/RoleSelector';
import ContextualHelpOptions from '../components/ContactPage/ContextualHelpOptions';
import ContactForm from '../components/ContactPage/ContactForm';
import PrivacyNote from '../components/ContactPage/PrivacyNote';
import AlternateContact from '../components/ContactPage/AlternateContact';

const ContactPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', {
      role: selectedRole,
      helpOptions: selectedOptions,
      ...formData,
    });
    // Reset form state
    setSelectedRole('');
    setSelectedOptions([]);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <RoleSelector
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
        />
        <ContextualHelpOptions
          selectedRole={selectedRole}
          selectedOptions={selectedOptions}
          onOptionChange={setSelectedOptions}
        />
        <ContactForm
          selectedRole={selectedRole}
          selectedOptions={selectedOptions}
          onSubmit={handleFormSubmit}
        />
        <PrivacyNote />
        <AlternateContact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

