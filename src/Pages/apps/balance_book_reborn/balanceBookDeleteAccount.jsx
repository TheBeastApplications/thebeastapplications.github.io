import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiUserX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  teal: '#14b8a6',
  emerald: '#a7f3d0',
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

const BalanceBookDeleteAccount = () => {
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
          <div className="flex items-center justify-center mb-6 pt-8">
            <FiUserX className="text-4xl mr-3" style={{ color: colors.red }} />
            <h1 
              className=" text-2xl md:text-4xl font-bold text-red-500"
            >
              Delete Account Request
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <p style={{ color: colors.text.secondary }} className="text-lg mb-8">
              We're sorry to see you go. Please fill out the form below to request deletion of your Balance Book Reborn account.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800 p-4 rounded-lg mb-8"
            >
              <h2 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>
                Important Information:
              </h2>
              <ul className="list-disc pl-6 space-y-2" style={{ color: colors.text.secondary }}>
                <li>Account deletion is permanent and cannot be undone</li>
                <li>All your data will be permanently removed from our servers</li>
                <li>Please allow up to 7 business days for the deletion process</li>
                <li>You will receive a confirmation email once the deletion is complete</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-xl"
          style={{ backgroundColor: colors.background.secondary }}
        > 
                  <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdZRacwUo29eXvtBJr2FCqa4E5QgQzqctTcBL90udPrY3677A/viewform?embedded=true"
            className="w-full h-[950px] border-0"
            title="Delete Account Request Form"
          />
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
              className="text-teal-400 hover:underline"
            >
              thebeastapplications@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default BalanceBookDeleteAccount;