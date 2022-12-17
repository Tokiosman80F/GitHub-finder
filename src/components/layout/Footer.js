import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear} All rights reverve </p>
    </footer>
  );
}

export default Footer;
