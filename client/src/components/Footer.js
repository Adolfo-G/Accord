import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary footer">
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Accord</h4>
      </div>
    </footer>
  );
};

export default Footer;
