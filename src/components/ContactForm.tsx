import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
import SEOHead from './SEOHead';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  challenges: string;
  additionalInfo: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    challenges: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.challenges.trim()) {
      newErrors.challenges = 'Please describe your business challenges';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const { error } = await supabase
          .from('demo_requests')
          .insert([
            {
              full_name: formData.fullName,
              email: formData.email,
              company: formData.company,
              service: 'Strategy Call Request',
              challenges: formData.challenges,
              additional_info: formData.additionalInfo || null
            }
          ]);

        if (error) throw error;
        
        navigate('/thank-you');
      } catch (error: any) {
        console.error('Error submitting form:', error);
        setSubmitError('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <SEOHead
        title="Book Free AI Strategy Call | CSW Automation - Wellness Business AI Solutions"
        description="Schedule your free strategy call to discover how AI chatbots can automate your wellness business operations. Get 24/7 customer support and appointment booking."
        keywords="free AI consultation, wellness business automation, AI strategy call, spa chatbot demo, wellness AI consultation"
        canonical="https://cswautomation.com/contact"
      />
      <div className="min-h-screen bg-dark tech-pattern py-20 sm:py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="card p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 gradient-text">Book Your Free Strategy Call</h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
              Fill out the form below and we'll show you how our AI solutions can transform your business operations.
            </p>

            {submitError && (
              <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-white mb-2 text-sm sm:text-base">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-dark-300/50 border ${errors.fullName ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan text-sm sm:text-base`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="text-error text-xs sm:text-sm mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-dark-300/50 border ${errors.email ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan text-sm sm:text-base`}
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-error text-xs sm:text-sm mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-white mb-2 text-sm sm:text-base">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full bg-dark-300/50 border ${errors.company ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan text-sm sm:text-base`}
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
                {errors.company && (
                  <p className="text-error text-xs sm:text-sm mt-1 flex items-center">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    {errors.company}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="challenges" className="block text-white mb-2 text-sm sm:text-base">
                  What business challenges are you looking to address? *
                </label>
                <textarea
                  id="challenges"
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-dark-300/50 border ${errors.challenges ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan text-sm sm:text-base resize-none`}
                  placeholder="Describe your current challenges and what you're looking to achieve..."
                  disabled={isSubmitting}
                />
                {errors.challenges && (
                  <p className="text-error text-xs sm:text-sm mt-1 flex items-start">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0 mt-0.5" />
                    {errors.challenges}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-white mb-2 text-sm sm:text-base">
                  Additional Information
                  <span className="text-gray-400 text-xs sm:text-sm ml-2">(Optional)</span>
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-cyan text-sm sm:text-base resize-none"
                  placeholder="Any other details you'd like to share..."
                  disabled={isSubmitting}
                />
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary w-full py-3 sm:py-4 text-base sm:text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;