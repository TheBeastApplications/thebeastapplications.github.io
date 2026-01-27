import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  green: '#22c55e',
  greenPale: '#86efac',
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

const PlantScannerPrivacyPolicy = () => {
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
            style={{ color: colors.green }}
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to Plant Scanner</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: colors.green }}>
            Privacy Policy
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <p style={{ color: colors.text.secondary }}>
            This Privacy Policy explains how <strong>Plant Scanner - AI Identifier</strong> ("the App") handles your
            information when you use the App.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2" style={{ color: colors.text.secondary }}>
            <li>
              <strong>Photos you provide:</strong> If you choose to identify a plant, you may provide a photo for analysis.
            </li>
            <li>
              <strong>App usage data:</strong> Basic diagnostic data may be collected by the mobile platform (e.g., crash
              logs) to help improve stability.
            </li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            How We Use Information
          </h2>
          <ul className="list-disc pl-6 space-y-2" style={{ color: colors.text.secondary }}>
            <li>Provide plant identification functionality.</li>
            <li>Maintain and improve app quality and performance.</li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Sharing of Information
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We do not sell your personal information. We may share information only when required to comply with
            applicable law, or when necessary to provide the service (for example, processing a photo for identification
            using an AI service).
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Data Retention
          </h2>
          <p style={{ color: colors.text.secondary }}>
            Photos and identification requests may be processed to provide results. The App stores history, and you canclear it by re-installing the app. 
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Security
          </h2>
          <p style={{ color: colors.text.secondary }}>
            We take reasonable measures to protect information from unauthorized access, use, or disclosure.
          </p>

          <h2 className="text-lg font-semibold mt-6 mb-2" style={{ color: colors.text.primary }}>
            Contact Us
          </h2>
          <p style={{ color: colors.text.secondary }}>
            If you have questions about this Privacy Policy, contact us at{' '}
            <a href="mailto:thebeastapplications@gmail.com" className="hover:underline" style={{ color: colors.greenPale }}>
              thebeastapplications@gmail.com
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 mt-8 border-t"
          style={{ borderColor: colors.border.dark, color: colors.text.secondary }}
        >
          <p>Last updated: January 2026</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlantScannerPrivacyPolicy;
