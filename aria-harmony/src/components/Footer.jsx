import React from "react";

const Footer = () => {
  return (
  
    <footer className="bg-[#d2c3c399] text-red-950 font-semibold py-6">
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Aria Harmony. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy" className="text-red-950 font-semibold  hover:text-amber-500">
            Privacy Policy
          </a>
          <a href="/terms" className="text-red-950 font-semibold  hover:text-amber-500">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>

  );
};

export default Footer;
