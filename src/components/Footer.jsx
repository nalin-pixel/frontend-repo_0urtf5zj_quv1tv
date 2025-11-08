import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-black/5 bg-white/60">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/60">
        <p>© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
        <p>Built with React, Tailwind, and a sprinkle of love.</p>
      </div>
    </footer>
  );
};

export default Footer;
