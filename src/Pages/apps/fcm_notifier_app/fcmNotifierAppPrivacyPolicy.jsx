import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  indigo: '#6366f1',
  indigoPale: '#818cf8',
  red: '#ef4444',
  background: {
    primary: '#111827',
    secondary: '#1f2937',
  },
  text: {
    primary: '#ffffff',
    secondary: '#9ca3af',
  },
  border: {
    dark: '#1f2937',
  }
};

const FCMNotifierAppPrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 -top-10"
        >
          <Link 
            to="../"
            className="inline-flex items-center px-4 py-2 rounded-lg transition-colors hover:bg-gray-800"
            style={{ color: colors.indigo }}
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to FCM Notifier</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-3xl md:text-4xl font-bold text-indigo-500"
          >
            Privacy Policy
          </h1>
        </motion.div>

        <motion.div          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <p style={{ color: colors.text.secondary }}>
            This Privacy Policy describes how we collect, use, and share information when you use our FCM Notifier app.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Information We Collect
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We collect information that you provide directly to us, such as your device information and notification settings.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            How We Use Your Information
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We use your information to provide, improve, and maintain our app. We may also use your information to communicate with you about our app.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            How We Share Your Information
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We do not share your information with third parties, except as necessary to provide our app and  or as required by law.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Data Security
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Changes to This Privacy Policy
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We may update this Privacy Policy from time to time. We will post any changes to this Privacy Policy on this page.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Contact Us
          </h2>
          <p style={{ color: colors.text.secondary }}>
            If you have any questions about this Privacy Policy, please contact us at   <a href="mailto:thebeastapplications@gmail.com" className="text-indigo-400 hover:underline">
thebeastapplications@gmail.com</a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 mt-8 border-t"
          style={{ borderColor: colors.border.dark }}
        >
          <p style={{ color: colors.text.secondary }}>
            Need help? Contact us at{' '}
            <a 
              href="mailto:thebeastapplications@gmail.com"
              className="text-indigo-400 hover:underline"
            >
              thebeastapplications@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FCMNotifierAppPrivacyPolicy;
