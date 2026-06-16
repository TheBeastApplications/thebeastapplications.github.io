import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const colors = {
  accent: '#f59e0b',
  background: '#0f0d0a',
  textPrimary: '#fffbeb',
  textMuted: '#9a8b6b',
};

// Placeholder Terms & Conditions page — content coming soon.
const BuggleTermsAndConditions = () => {
  return (
    <div
      className="min-h-screen text-white pt-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          to="../"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/5 mb-10"
          style={{ color: colors.accent }}
        >
          <FiArrowLeft />
          Back to Buggle
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: colors.textPrimary }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ color: colors.textMuted }}>Coming soon.</p>
      </div>
    </div>
  );
};

export default BuggleTermsAndConditions;
