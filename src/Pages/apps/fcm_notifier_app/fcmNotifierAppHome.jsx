import React from 'react';
import { motion } from 'framer-motion';
import { MdRocketLaunch,MdEnhancedEncryption, MdToken , MdNotificationAdd, MdDarkMode} from 'react-icons/md';
import { FiArrowRight, FiMail, FiAlertCircle,FiDownload } from 'react-icons/fi';
import FCMNotifierIcon from './public/icon.png';
import { Link } from 'react-router-dom';
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
    icon: <MdRocketLaunch className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Manage All Your Projects',
    description: 'Take control of multiple pojects from a single dashboard. Add, manage, and send notifications to your users with our intuitive interface.',
    imageAlt: 'Manage All Your Projects Screenshot',
    imageSrc: screenshot1
  },
  {
    icon: <MdEnhancedEncryption className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Secure AES-256 Encryption',
    description: 'All Your sensitive data is protected with AES-256 encryption. Rest easy knowing your credentials are secure.',
    imageAlt: 'Secure AES-256 Encryption Screenshot',
    imageSrc: screenshot2
  },
  {
    icon: <MdToken className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Support both notification topic and device tokens',
    description: 'Send notifications to your users using either topic or device tokens. Choose the method that best fits your needs.',
    imageAlt: 'Support both notification topic and device tokens Screenshot',
    imageSrc: screenshot3
  },
  {
    icon: <MdNotificationAdd className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Access all your notifications from one screen',
    description: 'View all your notifications in one place. You can also see preview of JSON that will be sent to FCM',
    imageAlt: 'Access all your notifications from one screen Screenshot',
    imageSrc: screenshot4
  },
  {
    icon: <MdDarkMode className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Easy switching between dark and light mode',
    description: 'Easily switch between dark and light mode to match your preferences.',
    imageAlt: 'Easy switching between dark and light mode Screenshot',
    imageSrc: screenshot5
  },
  
];

const appDetails = {
  name: 'FCM Notifier App',
  description: 'Send FCM notifications directly from your device with ease.',
  icon: FCMNotifierIcon,
  playStoreLink: 'https://play.google.com/store/apps/details?id=com.thebeastapplications.fcm_notifier_app',
};

const lowPriorityFeatures = [
  {
    icon: <FiAlertCircle className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Send Notifications Effortlessly',
    description: 'Effortlessly send FCM notifications directly from your device.  No complex setup required.',
  },
  {
    icon: <FiMail className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Simple and Intuitive Interface',
    description: 'Our user-friendly interface makes sending notifications a breeze.  Get started in seconds.',
  },
  {
    icon: <FiAlertCircle className="text-3xl mr-4" style={{ color: colors.indigo }} />,
    title: 'Reliable and Secure',
    description: 'Rest assured knowing your notifications are sent reliably and securely',
  },
];

const FCMNotifierAppHome = () => {
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
                     style={{ backgroundImage: `linear-gradient(to right, ${colors.indigo}, ${colors.indigoPale})` }} />
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
                style={{ backgroundImage: `linear-gradient(to right, ${colors.indigo}, ${colors.indigoPale})` }}
              >
                {appDetails.name}
              </h1>
              <p style={{ color: colors.text.secondary }} className="text-lg mt-2 text-center">
                Send FCM Notifications with Ease
              </p>
            </motion.div>
          </div>
          <p style={{ color: colors.text.secondary }} className="text-lg max-w-2xl mx-auto">
            {appDetails.description}
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{scale: 1.2}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-medium py-3 px-6 rounded-lg mt-6 inline-flex items-center group"
            style={{ backgroundColor: colors.indigo, color: colors.text.primary }}
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:px-8">
          {lowPriorityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="shadow-lg rounded-lg p-6"
              style={{ backgroundColor: colors.background.secondary }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h2 className="text-xl font-bold ml-4" style={{ color: colors.indigo }}>{feature.title}</h2>
              </div>
              <p style={{ color: colors.text.secondary }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

       <div className="grid grid-cols-1 gap-4 md:px-8 overflow-hidden py-12">
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
                         <h2 className="text-2xl font-bold my-2 md:my-8" style={{ color: colors.indigo }}>
                           {feature.title}
                         </h2>
                       </div>
                       <p style={{ color: colors.text.secondary }}>{feature.description}</p>
                       <button className="flex items-center font-medium my-2 md:my-8 border-2 border-indigo-700 rounded-lg px-4 py-2 " style={{ color: colors.indigo }}
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

export default FCMNotifierAppHome;
