import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiFileText } from 'react-icons/fi';
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

const FoliagoTermsAndConditions = () => {
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
              <FiFileText className="text-lg" style={{ color: colors.green }} />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: colors.green }}>
              Terms & Conditions
            </p>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl font-bold mb-2"
            style={{ color: colors.text.primary }}
          >
            Terms of Use
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
            By downloading, installing, or using <strong style={{ color: colors.text.primary }}>Foliago - AI Plant Identifier</strong> ("the App"), developed by TheBeastApplications, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the App.
          </p>

          <Section title="1. Use of the App">
            <p>
              Foliago is designed to help you identify plants, track their care, and receive AI-powered guidance. The App is provided for personal, non-commercial use. You agree to use the App only for lawful purposes and in accordance with these Terms.
            </p>
          </Section>

          <Section title="2. AI-Powered Identification & Advice">
            <p>
              The App uses artificial intelligence to identify plants and provide care recommendations. While we strive for accuracy, AI-generated results are <strong style={{ color: colors.text.primary }}>not guaranteed to be correct</strong>. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plant identifications are suggestions and may contain errors.</li>
              <li>Care advice provided by the AI Plant Expert is for informational purposes only and should not replace professional botanical or medical advice.</li>
              <li>
                <strong style={{ color: colors.text.primary }}>You should never ingest, touch, or use any plant based solely on the App's identification.</strong> Some plants are toxic or dangerous. Always verify with a qualified expert when safety is a concern.
              </li>
              <li>TheBeastApplications is not liable for any harm resulting from reliance on AI-generated identifications or advice.</li>
            </ul>
          </Section>

          <Section title="3. User Content">
            <p>
              You retain ownership of any photos, notes, or data you create within the App. By using the identification feature, you grant us a limited license to process your photos through our AI services solely for the purpose of delivering results to you.
            </p>
          </Section>

          <Section title="4. Account & Data">
            <p>
              Your plant data, care logs, and preferences are stored locally on your device. You are responsible for maintaining backups of your data. Reinstalling or deleting the App may result in permanent loss of locally stored data.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              The App, including its design, code, graphics, and content (excluding user-generated content), is the property of TheBeastApplications and is protected by applicable intellectual property laws. You may not copy, modify, distribute, or reverse-engineer any part of the App.
            </p>
          </Section>

          <Section title="6. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the App to harm, harass, or defraud others.</li>
              <li>Attempt to bypass, disable, or interfere with the App's security features.</li>
              <li>Use automated tools to access or scrape the App's services.</li>
              <li>Redistribute or commercially exploit the App or its content.</li>
            </ul>
          </Section>

          <Section title="7. Disclaimer of Warranties">
            <p>
              The App is provided on an <strong style={{ color: colors.text.primary }}>"as is" and "as available"</strong> basis without warranties of any kind, whether express or implied. We do not warrant that the App will be uninterrupted, error-free, or that identification results will be accurate.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, TheBeastApplications shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, personal injury, or property damage arising from your use of the App.
            </p>
          </Section>

          <Section title="9. Changes to These Terms">
            <p>
              We reserve the right to update these Terms at any time. Changes will be reflected on this page with an updated date. Your continued use of the App after any changes constitutes acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions about these Terms, please reach out to us at:{' '}
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

export default FoliagoTermsAndConditions;
