import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdCameraAlt, MdEco, MdSearch, MdWarningAmber } from 'react-icons/md';
import { FiDownload } from 'react-icons/fi';
import PlantScannerIcon from './public/icon.png';

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

const appDetails = {
  name: 'Plant Scanner - AI Identifier',
  description: 'Identify plants with AI using photos and get helpful details in seconds.',
  icon: PlantScannerIcon,
  playStoreLink: '',
};

const features = [
  {
    icon: <MdCameraAlt className="text-3xl mr-4" style={{ color: colors.green }} />,
    title: 'Scan Using Camera',
    description: 'Capture a plant photo and let AI help identify it quickly.',
  },
  {
    icon: <MdSearch className="text-3xl mr-4" style={{ color: colors.green }} />,
    title: 'Fast Identification',
    description: 'Get likely matches and key details to help confirm the plant.',
  },
  {
    icon: <MdEco className="text-3xl mr-4" style={{ color: colors.green }} />,
    title: 'Care & Info (When Available)',
    description: 'See helpful information such as common names and basic care tips when supported.',
  },
  {
    icon: <MdWarningAmber className="text-3xl mr-4" style={{ color: colors.red }} />,
    title: 'Safety Reminder',
    description: 'Identification may be incorrect. Do not ingest plants based on app results.',
  },
];

const PlantScannerHome = () => {
  return (
    <div className="text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex md:flex-row flex-col items-center justify-center space-x-4 mb-6">
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [2, 1], opacity: [0, 1] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <div className="relative group">
                <div
                  className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                  style={{ backgroundImage: `linear-gradient(to right, ${colors.green}, ${colors.greenPale})` }}
                />
                <img
                  src={appDetails.icon}
                  alt="App Icon"
                  className="relative w-24 h-28 sm:w-32 sm:h-32 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-left"
            >
              <h1
                className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent text-center"
                style={{ backgroundImage: `linear-gradient(to right, ${colors.green}, ${colors.greenPale})` }}
              >
                {appDetails.name}
              </h1>
              <p style={{ color: colors.text.secondary }} className="text-lg mt-2 text-center">
                AI-powered plant identification
              </p>
            </motion.div>
          </div>

          <p style={{ color: colors.text.secondary }} className="text-lg max-w-2xl mx-auto">
            {appDetails.description}
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-medium py-3 px-6 rounded-lg inline-flex items-center"
              style={{ backgroundColor: colors.green, color: colors.background.primary }}
              disabled={!appDetails.playStoreLink}
              onClick={() => {
                if (appDetails.playStoreLink) window.open(appDetails.playStoreLink, '_blank');
              }}
            >
              <FiDownload className="mr-2" />
              Download from Play Store
            </motion.button>

            <div className="flex items-center gap-6 text-sm">
              <Link to="privacy-policy" className="hover:underline" style={{ color: colors.text.secondary }}>
                Privacy Policy
              </Link>
              <Link to="delete-account" className="hover:underline" style={{ color: colors.text.secondary }}>
                Delete Account
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:px-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="shadow-lg rounded-lg p-6"
              style={{ backgroundColor: colors.background.secondary }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h2 className="text-xl font-bold ml-4" style={{ color: colors.green }}>
                  {feature.title}
                </h2>
              </div>
              <p style={{ color: colors.text.secondary }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-16 text-center"
          style={{ borderTopColor: colors.border.dark }}
        >
          <div className="py-8">
            <p style={{ color: colors.text.secondary }}>
              Contact:{' '}
              <a href="mailto:thebeastapplications@gmail.com" className="hover:underline" style={{ color: colors.greenPale }}>
                thebeastapplications@gmail.com
              </a>
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default PlantScannerHome;
