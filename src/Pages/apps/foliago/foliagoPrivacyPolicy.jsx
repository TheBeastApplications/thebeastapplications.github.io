import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  green: '#22c55e',
  greenPale: '#86efac',
  greenMuted: 'rgba(34, 197, 94, 0.08)',
  greenBorder: 'rgba(34, 197, 94, 0.15)',
  background: {
    primary: '#0a0f0d',
    secondary: '#111a16',
    card: '#131f19',
  },
  text: {
    primary: '#f0fdf4',
    secondary: '#86efac',
    muted: '#6b8f7b',
    body: '#a3c4b5',
  },
  border: {
    dark: 'rgba(34, 197, 94, 0.1)',
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-3" style={{ color: colors.text.primary }}>
      {title}
    </h2>
    <div className="space-y-3" style={{ color: colors.text.body }}>
      {children}
    </div>
  </div>
);

const FoliagoPrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.primary }}>
      <div className="max-w-3xl mx-auto relative">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-10"
        >
          <Link
            to="../"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5"
            style={{ color: colors.green }}
          >
            <FiArrowLeft />
            Back to Foliago
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colors.greenMuted, border: `1px solid ${colors.greenBorder}` }}
            >
              <FiShield className="text-lg" style={{ color: colors.green }} />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: colors.green }}>
              Privacy Policy
            </p>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ color: colors.text.primary }}
          >
            Your Privacy Matters
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} style={{ color: colors.text.muted }}>
            Last updated: April 2026
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-6 sm:p-8 leading-relaxed"
          style={{
            backgroundColor: colors.background.card,
            border: `1px solid ${colors.border.dark}`,
          }}
        >
          <p className="mb-8" style={{ color: colors.text.body }}>
            This Privacy Policy explains how <strong style={{ color: colors.text.primary }}>Foliago - AI Plant Identifier</strong> ("the App"), developed by TheBeastApplications, collects, uses, and protects your information when you use the App.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect minimal information necessary to provide our services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong style={{ color: colors.text.primary }}>Photos you provide:</strong> When you use the plant identification feature, you may capture or upload a photo for AI analysis. These images are processed to deliver identification results.
              </li>
              <li>
                <strong style={{ color: colors.text.primary }}>Plant care data:</strong> Information you enter about your plants, including care logs, reminders, and growth journal entries, is stored locally on your device.
              </li>
              <li>
                <strong style={{ color: colors.text.primary }}>AI chat interactions:</strong> Questions you ask the AI Plant Expert are processed to generate responses. These conversations may be stored locally on your device.
              </li>
              <li>
                <strong style={{ color: colors.text.primary }}>Usage & diagnostic data:</strong> Basic analytics and crash logs may be collected by the mobile platform to help us improve stability and performance.
              </li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide AI-powered plant identification from your photos.</li>
              <li>Deliver personalized care recommendations and reminders.</li>
              <li>Power the AI Plant Expert chat feature.</li>
              <li>Maintain, improve, and optimize app performance.</li>
              <li>Diagnose technical issues and prevent abuse.</li>
            </ul>
          </Section>

          <Section title="3. Data Sharing">
            <p>
              We do not sell, rent, or trade your personal information. We may share data only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong style={{ color: colors.text.primary }}>AI processing:</strong> Photos and chat queries may be sent to third-party AI services for identification and response generation. These services process data according to their own privacy policies.
              </li>
              <li>
                <strong style={{ color: colors.text.primary }}>Legal requirements:</strong> When required to comply with applicable law, regulation, or legal process.
              </li>
            </ul>
          </Section>

          <Section title="4. Data Storage & Retention">
            <p>
              Most of your data — including your plant collection, care logs, reminders, and growth journal — is stored locally on your device. Photos submitted for identification may be temporarily processed on external servers but are not permanently stored. You can clear your local data at any time by reinstalling the app.
            </p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic transmission or storage is 100% secure.
            </p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>
              The App is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can promptly remove it.
            </p>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last updated" date. Continued use of the App after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="8. Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:{' '}
              <a
                href="mailto:thebeastapplications@gmail.com"
                className="hover:underline font-medium"
                style={{ color: colors.green }}
              >
                thebeastapplications@gmail.com
              </a>
            </p>
          </Section>
        </motion.div>

        {/* Footer */}
        <div
          className="text-center py-10 mt-8 text-sm"
          style={{ color: colors.text.muted }}
        >
          <p>Foliago by TheBeastApplications</p>
        </div>
      </div>
    </div>
  );
};

export default FoliagoPrivacyPolicy;
