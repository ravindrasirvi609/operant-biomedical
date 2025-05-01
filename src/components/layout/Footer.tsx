"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Research", href: "/services/research" },
      { label: "Clinical Trials", href: "/services/clinical-trials" },
      { label: "Training", href: "/services/training" },
      { label: "Consulting", href: "/services/consulting" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Publications", href: "/publications" },
      { label: "Events", href: "/events" },
      { label: "News", href: "/news" },
    ],
  };

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://facebook.com" },
    { icon: <FiTwitter />, href: "https://twitter.com" },
    { icon: <FiLinkedin />, href: "https://linkedin.com" },
    { icon: <FiInstagram />, href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-[#328E6E] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo-white.png"
                alt="Operant Biomedical"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/80 mb-6">
              Advancing healthcare through collaborative research and
              innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-[#67AE6E]" />
                <a
                  href="mailto:info@operantbiomedical.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@operantbiomedical.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-[#67AE6E]" />
                <a
                  href="tel:+1234567890"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-[#67AE6E]" />
                <span className="text-white/80">
                  123 Medical Center Drive, Healthcare City, HC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Operant Biomedical. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
