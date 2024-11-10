// // src/pages/Home.js
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import BalanceBookRebornIcon from '../apps/balance_book_reborn/public/icon.png'
// import BalanceBookRebornHome from './../apps/balance_book_reborn/balanceBookRebornHome';
// const apps = [
//   { id: 'balance_book_reborn', name: 'Balance Book Reborn', },
  
// ];

// const Home = () => {
//   // Toggle dark mode on or off
//   const [isDark, setIsDark] = useState(false);

//   return (
//     <div className={`container mx-auto px-4 py-10 ${isDark ? 'dark' : ''}`}>
//        <header className="bg-gray-900 text-teal-500 py-4 mx-auto">
//       <div className="container  flex justify-center items-center px-4 ">
//         <Link to="/" className="text-3xl font-bold ">
//           TheBeastApplications
//         </Link>
         
//       </div>
//     </header>

//       {/* Responsive grid: 1 column on mobile, 2 columns on tablets, 3 columns on large screens */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-20 justify-items-center">
//         {apps.map((app) => (
//           <motion.div
//             key={app.id}
//             className="app-card p-4 bg-gray-800 text-white rounded-lg shadow-lg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Link to={`/app/${app.id}`} className="text-center">
//               <img
//                 src={BalanceBookRebornIcon}
//                 alt={app.name}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-2xl font-semibold text-teal-500">{app.name}</h2>
//               <p className="text-gray-300 mt-2">{app.description}</p>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiUsers, FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BalanceBookRebornIcon from '../apps/balance_book_reborn/public/icon.png'


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
  }
};

const apps = [
  {
    id: 'balance_book_reborn',
    name: 'Balance Book Reborn',
    description: 'Manage business transactions, customers, and staff in real-time.',
    icon: BalanceBookRebornIcon,
    category: 'Business',
    downloads: '10K+',
    rating: 4.8,
    link: 'app/balance_book_reborn',
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.thebeastapplications.balancebook'
  },
  
];

const AppCard = ({ app, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <Link to={app.link} className="block h-full">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              src={app.icon}
              alt={`${app.name} icon`}
              className="w-16 h-16 rounded-xl"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{app.name}</h2>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                  {app.category}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-400 mb-4 line-clamp-2">{app.description}</p>
          
          <div className="flex items-center justify-between">
            {/* //TODO */}
            <div></div>
            {/* <div className="flex items-center space-x-4">
              <div className="flex items-center text-yellow-400">
                <FiStar className="w-4 h-4 mr-1" />
                <span className="text-sm">{app.rating}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <FiDownload className="w-4 h-4 mr-1" />
                <span className="text-sm">{app.downloads}</span>
              </div>
            </div> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ backgroundColor: colors.teal }}
              onClick={(e) => {
                e.preventDefault();
                window.open(app.playStoreLink, '_blank');
              }}
            >
              Install
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center mb-4">
              <FiBox className="text-4xl mr-3" style={{ color: colors.teal }} />
              <h1 
                className=" text-2xl md:text-4xl  font-bold bg-clip-text text-transparent "
                style={{ backgroundImage: `linear-gradient(to right, ${colors.teal}, ${colors.emerald})` }}
              >
                TheBeastApplications
              </h1>
            </div>
            <div 
              className="text-sm font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: colors.teal, color: colors.background.primary }}
            >
              Crafting Digital Excellence
            </div>
          </div>
          <p style={{ color: colors.text.secondary }} className="text-xl max-w-2xl mx-auto">
            Discover our collection of powerful and user-friendly applications designed to enhance your digital experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center py-12 mt-16 border-t border-gray-800"
        >
           
          <p className="text-gray-500">
            © 2024 TheBeastApplications. All rights reserved.
          </p>
          <div className="mt-4">
            <a 
              href="mailto:thebeastapplications@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              thebeastapplications@gmail.com
            </a>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default HomePage;