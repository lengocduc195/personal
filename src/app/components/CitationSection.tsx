'use client';

import { useState } from 'react';

interface CitationSectionProps {
  citationFormat: string;
}

export default function CitationSection({ citationFormat }: CitationSectionProps) {
  // const [copyStatus, setCopyStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(citationFormat);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error('Failed to copy citation');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4">Cite This Publication</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {citationFormat}
        </pre>
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy Citation'}
      </button>
    </div>
  );
} 