import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers,FiBook,FiDollarSign,FiList,FiClipboard,FiUserPlus ,FiDownload,FiMonitor, FiCamera } from 'react-icons/fi';
import BalanceBookRebornIcon from './public/icon.png';
import screenshot1 from './public/01.png';
import screenshot2 from './public/02.png';
import screenshot3 from './public/03.png';
import screenshot4 from './public/04.png';
import screenshot5 from './public/05.png';
import screenshot6 from './public/06.png';
import screenshot7 from './public/07.png';
import screenshot8 from './public/08.png';
import { Link } from 'react-router-dom';

const colors = {
  teal: '#14b8a6',
  emerald: '#a7f3d0',
  background: {
    primary: '#111827',  // bg-gray-900
    secondary: '#1f2937', // bg-gray-800
  },
  text: {
    primary: '#ffffff',   // text-white
    secondary: '#9ca3af', // text-gray-400
  },
  border: {
    dark: '#1f2937',      // border-gray-800
  }
};

const appDetails = {
  name: 'Balance Book Reborn',
  description: 'This app helps business owners and customers to view and add transactions in real-time',
  icon: BalanceBookRebornIcon,
  playStoreLink: 'https://play.google.com/store/apps/details?id=com.thebeastapplications.balancebook',
};
const features = [
  {
    icon: <FiUsers className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Transform Your Business Management',
    description: 'Take control of multiple businesses from a single dashboard. Add, manage, and track everything with our intuitive interface designed for busy entrepreneurs.',
    imageAlt: 'Multiple Business Management Screenshot',
    imageSrc: screenshot1
  },
  {
    icon: <FiBook className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Your Business Network, Organized',
    description: 'Keep your entire business network - customers and suppliers - organized and accessible. Build stronger relationships with efficient contact management.',
    imageAlt: 'Streamlined Contact Management Screenshot',
    imageSrc: screenshot2
  },
  {
    icon: <FiDollarSign className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Effortless Financial Tracking',
    description: 'Say goodbye to manual calculations. Our smart system automatically updates balances with every transaction, saving you hours of bookkeeping time.',
    imageAlt: 'Smart Transaction Tracking Screenshot',
    imageSrc: screenshot3
  },
  {
    icon: <FiList className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Your Business at Your Fingertips',
    description: 'Access your complete transaction history instantly. Get a clear picture of your business performance with our comprehensive transaction dashboard.',
    imageAlt: 'Complete Business Overview Screenshot',
    imageSrc: screenshot4
  },
  {
    icon: <FiClipboard className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Full Transaction Transparency',
    description: 'Track every transaction with complete staff accountability. Know exactly who handled each transaction for better business control.',
    imageAlt: 'Detailed Transaction Records Screenshot',
    imageSrc: screenshot5
  },
  {
    icon: <FiUserPlus className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Seamless Team Expansion',
    description: 'Add staff members securely and instantly with our innovative QR system. Manage permissions and track activities all in one place.',
    imageAlt: 'Easy Team Management Screenshot',
    imageSrc: screenshot6
  },
  {
    icon: <FiCamera className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Connect With Businesses Instantly',
    description: 'Join your favorite businesses with a simple QR scan. No paperwork, no delays - just instant connection and real-time updates.',
    imageAlt: 'Customer Connection Screenshot',
    imageSrc: screenshot7
  },
  {
    icon: <FiMonitor className="text-3xl mr-4" style={{ color: colors.teal }} />,
    title: 'Stay Informed, Always',
    description: 'Access your transaction history and current balance anytime, anywhere. Get instant notifications for new transactions and never miss an update.',
    imageAlt: 'Real-Time Updates Screenshot',
    imageSrc: screenshot8
  },
];

const BalanceBookRebornHome = () => {
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
                <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                     style={{ backgroundImage: `linear-gradient(to right, ${colors.teal}, ${colors.emerald})` }} />
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
                style={{ backgroundImage: `linear-gradient(to right, ${colors.teal}, ${colors.emerald})` }}
              >
                {appDetails.name}
              </h1>
              <p style={{ color: colors.text.secondary }} className="text-lg mt-2 text-center">
                Streamline your business operations
              </p>
            </motion.div>
          </div>
          <p style={{ color: colors.text.secondary }} className="text-lg max-w-2xl mx-auto">
            Empower your business with a comprehensive mobile solution that simplifies management and enhances customer experience.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{scale: 1.2}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-medium py-3 px-6 rounded-lg mt-6 inline-flex items-center group"
            style={{ backgroundColor: colors.teal, color: colors.text.primary }}
            onClick={() => window.open(appDetails.playStoreLink, '_blank')}
          >
            <FiDownload className="mr-2" />
            Download from Play Store
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:px-8 overflow-hidden">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 :  50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center"
              style={{ backgroundColor: colors.background.secondary }}
            >
              <div className="flex-1 mb-4 sm:mb-0 sm:mr-4">
                <div className="flex items-center">
                  {feature.icon}
                  <h2 className="text-2xl font-bold my-2 md:my-8" style={{ color: colors.teal }}>
                    {feature.title}
                  </h2>
                </div>
                <p style={{ color: colors.text.secondary }}>{feature.description}</p>
                <button className="flex items-center font-medium my-2 md:my-8" style={{ color: colors.teal }}
            onClick={() => window.open(appDetails.playStoreLink, '_blank')}
                >
                  Download Now <FiArrowRight className="ml-2" />
                </button>
              </div>
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 1 }}
                className="rounded-lg overflow-hidden"
              >
                <img src={feature.imageSrc} alt={feature.imageAlt} className="h-[70vh] md:h-[70vh] w-fit object-cover" />
              </motion.div>
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
          <Link to={`privacy-policy`} 
             
              className="hover:underline"
              style={{ color: colors.text.secondary }}
            >
              Privacy Policy
              </Link>
          </div>
        </motion.footer>
      </div>

    </div>
  );
};

export default BalanceBookRebornHome;