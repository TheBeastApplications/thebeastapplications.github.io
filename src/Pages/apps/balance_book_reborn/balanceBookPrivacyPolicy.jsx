import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  teal: '#14b8a6',
  emerald: '#a7f3d0',
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

const PolicySection = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-8"
  >
    <h2 className="text-2xl font-bold mb-4" style={{ color: colors.teal }}>{title}</h2>
    {children}
  </motion.div>
);

const BalanceBookPrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto relative">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 -top-10"
        >
          <Link 
            to="../"
            className="inline-flex items-center px-4 py-2 rounded-lg transition-colors hover:bg-gray-800"
            style={{ color: colors.teal }}
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to Balance Book Reborn</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <FiShield className="text-4xl mr-3" style={{ color: colors.teal }} />
            <h1 
              className="text-4xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, ${colors.teal}, ${colors.emerald})` }}
            >
              Privacy Policy
            </h1>
          </div>
          <p style={{ color: colors.text.secondary }} className="text-lg">
            Balance Book Reborn - Protecting Your Privacy
          </p>
        </motion.div>

        <div className="space-y-8 text-left">
          <PolicySection title="1. Introduction">
            <p style={{ color: colors.text.secondary }}>
              Balance Book Reborn is a mobile application designed to help businesses and customers manage their financial 
              transactions and communicate effectively. This privacy policy outlines how TheBeastApplications collects, 
              uses, and protects the personal information of its users.
            </p>
          </PolicySection>

          <PolicySection title="2. Information Collection">
            <div style={{ color: colors.text.secondary }} className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Personal Information:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Business name (for business owners)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>Transaction Data:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Date</li>
                  <li>Amount</li>
                  <li>Description</li>
                </ul>
              </div>
            </div>
          </PolicySection>

          <PolicySection title="3. Information Usage">
            <ul className="list-disc pl-6 space-y-2" style={{ color: colors.text.secondary }}>
              <li>Provide core app functionality including transaction management and business-customer communication</li>
              <li>Improve and personalize user experience</li>
              <li>Ensure security and compliance with applicable laws</li>
            </ul>
          </PolicySection>

          <PolicySection title="4. Data Sharing">
            <div style={{ color: colors.text.secondary }} className="space-y-4">
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Third-party service providers (e.g., cloud storage providers)</li>
                <li>Legal authorities when required by law or court order</li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection title="5. Data Security">
            <div style={{ color: colors.text.secondary }} className="space-y-4">
              <p>We implement industry-standard security measures to protect your data.</p>
              <p>In case of a data breach, we will promptly notify affected users and take appropriate action.</p>
            </div>
          </PolicySection>

          <PolicySection title="6. User Rights">
            <ul className="list-disc pl-6 space-y-2" style={{ color: colors.text.secondary }}>
              <li>Access and correct your personal information</li>
              <li>Request deletion of your account and associated data</li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Changes to This Policy">
            <p style={{ color: colors.text.secondary }}>
              We may update this privacy policy periodically. Significant changes will be communicated through the app.
            </p>
          </PolicySection>

          <PolicySection title="8. Contact Information">
            <p style={{ color: colors.text.secondary }}>
              For questions or concerns, please contact us at:{' '}
              <a 
                href="mailto:thebeastapplications@gmail.com"
                className="text-teal-400 hover:underline"
              >
                thebeastapplications@gmail.com
              </a>
            </p>
          </PolicySection>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8 mt-8 border-t"
            style={{ borderColor: colors.border.dark, color: colors.text.secondary }}
          >
            <p>Last updated: November 2024</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BalanceBookPrivacyPolicy;