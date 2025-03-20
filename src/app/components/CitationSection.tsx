'use client';

import { useState } from 'react';

interface CitationSectionProps {
  citationFormat: string;
}

export default function CitationSection({ citationFormat }: CitationSectionProps) {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyClick = () => {
    try {
      // Use a fallback method for clipboard copying
      const textArea = document.createElement('textarea');
      textArea.value = citationFormat;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus(''), 2000);
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
        onClick={handleCopyClick}
      >
        {copyStatus || 'Copy Citation'}
      </button>
    </div>
  );
} 