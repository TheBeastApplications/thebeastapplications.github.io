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

const PlateAIPrivacyPolicy = () => {
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
            to="/app/plate_ai"
            className="inline-flex items-center px-4 py-2 rounded-lg transition-colors hover:bg-gray-800"
            style={{ color: colors.indigo }}
          >
            <FiArrowLeft className="mr-2" />
            <span>Back to PlateAI</span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <p style={{ color: colors.text.secondary }}>
            <strong>PlateAI</strong> helps you track your diet by analyzing your meal photos and text prompts to estimate macronutrients (macros). We value your privacy and are committed to protecting your data. This policy explains how PlateAI collects, uses, and protects your information.
          </p>
          <ul className="list-disc pl-6 mt-4" style={{ color: colors.text.secondary }}>
            <li><strong>Data Collection:</strong> PlateAI only collects the meal photos or text prompts you provide for macro analysis. Your daily macro data and goals are stored locally in your device and are not shared with any third party.</li>
            <li><strong>Macro Analysis:</strong> Images and text prompts are processed using AI models.</li>
            <li><strong>Security:</strong> Your data is stored securely in your device.</li>
            <li><strong>Macro Goals:</strong> Any macro goals you set are stored locally and are only accessible to you.</li>
            <li><strong>User Control:</strong> You can clear your meal and macro data at any time from the app settings.</li>
            <li><strong>Contact:</strong> For privacy concerns, contact us via the main website.</li>
          </ul>
          <p className="mt-6" style={{ color: colors.text.secondary }}>
            By using PlateAI, you agree to this privacy policy. This policy may be updated as new features are added.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PlateAIPrivacyPolicy;
