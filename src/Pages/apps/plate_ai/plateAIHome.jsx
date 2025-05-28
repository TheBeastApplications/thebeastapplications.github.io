import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdFastfood, MdCameraAlt, MdTextFields, MdPieChart, MdToday, MdFlag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PlateAIIcon from './public/icon.png';
import screenshot1 from './public/01.png';
import screenshot2 from './public/02.png';
import screenshot3 from './public/03.png';
import screenshot4 from './public/04.png';
import screenshot5 from './public/05.png'; 

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

const features = [
  {
    icon: <MdCameraAlt className="text-3xl mr-4" style={{ color: colors.indigo }} />, 
    title: 'Snap Your Meal',
    description: 'Take a picture of your meal and let PlateAI analyze the macros instantly.',
    imageAlt: 'Snap Your Meal Screenshot',
    imageSrc: screenshot1,
  },
  {
    icon: <MdTextFields className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Text Prompt Support',
    description: 'Describe your meal in text and get a breakdown of calories, protein, carbs, and fats.',
    imageAlt: 'Text Prompt Support Screenshot',
    imageSrc: screenshot2,   
  },
  {
    icon: <MdPieChart className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Macro Analysis',
    description: 'See detailed macro breakdowns for every meal and your daily total.',
    imageAlt: 'Macro Analysis Screenshot',
    imageSrc: screenshot3,
  },
  {
    icon: <MdToday className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Daily Sheet',
    description: 'Track your meals and macros for each day. All your data is stored securely.',
    imageAlt: 'Daily Sheet Screenshot',
    imageSrc: screenshot4,
  },
  {
    icon: <MdFlag className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Set Macro Goals',
    description: 'Define your daily macro goals and monitor your progress easily.',
    imageAlt: 'Set Macro Goals Screenshot',
    imageSrc: screenshot5,
  },
];

const PlateAIHome = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <img src={PlateAIIcon} alt="PlateAI Icon" className="w-24 h-24 mb-4 rounded-lg shadow-lg" />
          <h1 className="text-4xl font-bold text-indigo-400 mb-2">PlateAI</h1>
          <p className="text-lg text-gray-300 mb-4">Smart Diet Tracking with AI-powered Macro Analysis</p>
          <Link to="/app/plate_ai/privacy-policy" className="text-indigo-400 hover:underline text-sm">Privacy Policy</Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-start shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedFeature(idx)}
            >
              <div className="flex items-center mb-2">{feature.icon}<span className="font-bold text-lg">{feature.title}</span></div>
              <div className="text-gray-400 mb-2">{feature.description}</div>
              <img src={feature.imageSrc} alt={feature.imageAlt} className="w-full h-32 object-cover rounded mt-2" />
            </motion.div>
          ))}
        </div>
        {selectedFeature !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
            onClick={() => setSelectedFeature(null)}
          >
            <div className="bg-gray-900 rounded-lg p-8 max-w-xl mx-auto relative">
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500" onClick={() => setSelectedFeature(null)}>✕</button>
              <img src={features[selectedFeature].imageSrc} alt={features[selectedFeature].imageAlt} className="w-full h-48 object-cover rounded mb-4" />
              <h2 className="text-2xl font-bold text-indigo-400 mb-2">{features[selectedFeature].title}</h2>
              <p className="text-gray-300">{features[selectedFeature].description}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PlateAIHome;
