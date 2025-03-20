'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <FaTwitter className="w-6 h-6" />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="text-gray-600 hover:text-primary transition-colors"
        aria-label="Email"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  );
} 