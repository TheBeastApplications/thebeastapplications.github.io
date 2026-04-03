import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MdCameraAlt, MdEco, MdAutoAwesome, MdNotifications, MdChat, MdMenuBook } from 'react-icons/md';
import { FiDownload, FiChevronRight } from 'react-icons/fi';
import FoliagoIcon from './public/icon.png';
import Screenshot1 from './public/1.png';
import Screenshot2 from './public/2.png';
import Screenshot3 from './public/3.png';
import Screenshot4 from './public/4.png';
import Screenshot5 from './public/5.png';
import Screenshot6 from './public/6.png';

const colors = {
  green: '#22c55e',
  greenDark: '#16a34a',
  greenPale: '#86efac',
  greenMuted: 'rgba(34, 197, 94, 0.08)',
  greenBorder: 'rgba(34, 197, 94, 0.15)',
  background: {
    primary: '#0a0f0d',
    secondary: '#111a16',
    card: '#131f19',
    elevated: '#182720',
  },
  text: {
    primary: '#f0fdf4',
    secondary: '#86efac',
    muted: '#6b8f7b',
  },
  border: {
    dark: 'rgba(34, 197, 94, 0.1)',
  },
};

const appDetails = {
  name: 'Foliago',
  tagline: 'AI Plant Identifier',
  description:
    'Snap a photo, identify any plant instantly, and get personalized care guides, smart reminders, and AI-powered expert advice — all in one beautiful app.',
  playStoreLink: 'https://play.google.com/store/apps/details?id=com.thebeastapplications.plantscanner',
};

const features = [
  {
    icon: <MdCameraAlt className="text-2xl" />,
    title: 'Instant Plant ID',
    description: 'Point your camera at any plant and get an accurate identification in seconds with AI-powered recognition.',
    screenshot: Screenshot1,
  },
  {
    icon: <MdMenuBook className="text-2xl" />,
    title: 'Growth Journal',
    description: 'Document your plant\'s journey with photos over time. Watch it grow and track every milestone.',
    screenshot: Screenshot2,
  },
  {
    icon: <MdEco className="text-2xl" />,
    title: 'Care Activity Logging',
    description: 'Log every watering, fertilizing, and pruning session. Keep a complete history of your plant care routine.',
    screenshot: Screenshot3,
  },
  {
    icon: <MdNotifications className="text-2xl" />,
    title: 'Smart Reminders',
    description: 'Never forget to water or fertilize again. Intelligent reminders tailored to each plant\'s needs.',
    screenshot: Screenshot4,
  },
  {
    icon: <MdChat className="text-2xl" />,
    title: 'AI Plant Expert',
    description: 'Chat with an AI botanist anytime. Ask questions about care, diagnosis, or anything plant-related.',
    screenshot: Screenshot5,
  },
  {
    icon: <MdAutoAwesome className="text-2xl" />,
    title: 'Personalized Care',
    description: 'Get tailored care guides for every plant in your collection — watering schedules, light needs, and more.',
    screenshot: Screenshot6,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FoliagoHome = () => {
  return (
    <div
      className="text-white min-h-screen"
      style={{ backgroundColor: colors.background.primary }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[120px] opacity-[0.07] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${colors.green}, transparent 70%)` }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Icon */}
            <motion.div variants={fadeUp} custom={0} className="flex justify-center mb-6">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-3xl blur-xl opacity-30"
                  style={{ background: colors.green }}
                />
                <img
                  src={FoliagoIcon}
                  alt="Foliago"
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div variants={fadeUp} custom={0.5} className="flex justify-center mb-8">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
                style={{
                  color: colors.green,
                  backgroundColor: colors.greenMuted,
                  border: `1px solid ${colors.greenBorder}`,
                }}
              >
                <MdEco className="text-sm" />
                AI-Powered Plant Care
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-4"
              style={{
                backgroundImage: `linear-gradient(135deg, ${colors.text.primary} 0%, ${colors.greenPale} 50%, ${colors.green} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {appDetails.name}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={1.5}
              className="text-lg sm:text-xl font-medium tracking-wide mb-6"
              style={{ color: colors.green }}
            >
              {appDetails.tagline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: colors.text.muted }}
            >
              {appDetails.description}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} custom={2.5} className="flex flex-col items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 0 40px ${colors.green}30` }}
                whileTap={{ scale: 0.97 }}
                className="font-semibold py-3.5 px-8 rounded-xl inline-flex items-center gap-2 text-base transition-shadow"
                style={{
                  background: `linear-gradient(135deg, ${colors.green}, ${colors.greenDark})`,
                  color: '#0a0f0d',
                }}
                disabled={!appDetails.playStoreLink}
                onClick={() => {
                  if (appDetails.playStoreLink) window.open(appDetails.playStoreLink, '_blank');
                }}
              >
                <FiDownload className="text-lg" />
                Download on Google Play
              </motion.button>

              <div className="flex items-center gap-6 text-sm">
                <Link
                  to="privacy-policy"
                  className="hover:underline transition-colors"
                  style={{ color: colors.text.muted }}
                >
                  Privacy Policy
                </Link>
                <span style={{ color: colors.border.dark }}>|</span>
                <Link
                  to="terms-and-conditions"
                  className="hover:underline transition-colors"
                  style={{ color: colors.text.muted }}
                >
                  Terms & Conditions
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.secondary }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: colors.green }}
            >
              Everything Your Plants Need
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: colors.text.primary }}
            >
              Powerful Features, Beautiful Design
            </motion.h2>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                >
                  {/* Text */}
                  <motion.div variants={fadeUp} custom={0} className="flex-1 text-center lg:text-left">
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                      style={{
                        backgroundColor: colors.greenMuted,
                        color: colors.green,
                        border: `1px solid ${colors.greenBorder}`,
                      }}
                    >
                      {feature.icon}
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{ color: colors.text.primary }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                      style={{ color: colors.text.muted }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>

                  {/* Screenshot */}
                  <motion.div
                    variants={fadeUp}
                    custom={1}
                    className="flex-1 flex justify-center"
                  >
                    <div className="relative">
                      <div
                        className="absolute -inset-6 rounded-3xl blur-3xl opacity-10"
                        style={{ background: colors.green }}
                      />
                      <img
                        src={feature.screenshot}
                        alt={feature.title}
                        className="relative rounded-2xl shadow-2xl w-full max-w-[280px] sm:max-w-[320px]"
                        style={{
                          border: `1px solid ${colors.greenBorder}`,
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, ${colors.green}, transparent 50%), radial-gradient(circle at 70% 50%, ${colors.greenPale}, transparent 50%)`,
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl sm:text-5xl font-bold mb-6"
              style={{ color: colors.text.primary }}
            >
              Your plants deserve better care
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-lg mb-10"
              style={{ color: colors.text.muted }}
            >
              Join thousands of plant lovers who use Foliago to identify, nurture, and grow their green companions.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 0 50px ${colors.green}25` }}
                whileTap={{ scale: 0.97 }}
                className="font-semibold py-4 px-10 rounded-xl inline-flex items-center gap-2 text-base"
                style={{
                  background: `linear-gradient(135deg, ${colors.green}, ${colors.greenDark})`,
                  color: '#0a0f0d',
                }}
                disabled={!appDetails.playStoreLink}
                onClick={() => {
                  if (appDetails.playStoreLink) window.open(appDetails.playStoreLink, '_blank');
                }}
              >
                Get Foliago Free
                <FiChevronRight className="text-lg" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-4 text-center"
        style={{
          borderTop: `1px solid ${colors.border.dark}`,
          backgroundColor: colors.background.primary,
        }}
      >
        <p className="text-sm mb-2" style={{ color: colors.text.muted }}>
          Foliago by TheBeastApplications
        </p>
        <a
          href="mailto:thebeastapplications@gmail.com"
          className="text-sm hover:underline transition-colors"
          style={{ color: colors.green }}
        >
          thebeastapplications@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default FoliagoHome;
