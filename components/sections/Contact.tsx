'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { Input, Textarea } from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { CONTACT, CONTACT_CONTENT } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mlgnovjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email directly.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fffefa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1f1a] mb-4">
            {CONTACT_CONTENT.sectionTitle}
          </h2>
          <p className="text-lg text-[#4a3728] max-w-2xl mx-auto">
            {CONTACT_CONTENT.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="bg-[#fdf8f3] rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#d4a574]/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-[#4a3728]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2d1f1a] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#4a3728]">
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sm text-[#4a3728] hover:text-[#2d1f1a] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  placeholder="Your name"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  placeholder="your@email.com"
                />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(optional)"
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : CONTACT_CONTENT.submitButton}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#4a3728]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1f1a] mb-1">Email</h3>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[#4a3728] hover:text-[#d4a574] transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#4a3728]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1f1a] mb-1">Location</h3>
                <p className="text-[#4a3728]">{CONTACT_CONTENT.locationNote}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#d4a574]/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#4a3728]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2d1f1a] mb-1">Response Time</h3>
                <p className="text-[#4a3728]">{CONTACT_CONTENT.responseNote}</p>
              </div>
            </div>

            <div className="bg-[#fdf8f3] rounded-xl p-6 mt-8">
              <p className="text-[#4a3728] italic">
                {CONTACT_CONTENT.casualNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
