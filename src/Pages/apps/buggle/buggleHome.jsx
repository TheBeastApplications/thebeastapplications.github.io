import React from 'react';
import { Link } from 'react-router-dom';

const colors = {
  accent: '#f59e0b',
  background: '#0f0d0a',
  textPrimary: '#fffbeb',
  textMuted: '#9a8b6b',
};

// Placeholder home page — content coming soon.
const BuggleHome = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: colors.background }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-3" style={{ color: colors.textPrimary }}>
        Buggle
      </h1>
      <p className="text-lg mb-8" style={{ color: colors.accent }}>
        AI Insect Identifier
      </p>
      <p className="text-base mb-10" style={{ color: colors.textMuted }}>
        Coming soon.
      </p>
      <div className="flex items-center gap-6 text-sm">
        <Link to="privacy-policy" className="hover:underline" style={{ color: colors.textMuted }}>
          Privacy Policy
        </Link>
        <span style={{ color: colors.textMuted }}>|</span>
        <Link to="terms-and-conditions" className="hover:underline" style={{ color: colors.textMuted }}>
          Terms &amp; Conditions
        </Link>
      </div>
    </div>
  );
};

export default BuggleHome;
