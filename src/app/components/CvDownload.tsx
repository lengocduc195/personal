'use client';

import { FaFileAlt, FaDownload } from 'react-icons/fa';

interface CvDownloadProps {
  cvUrl: string;
  resumeUrl: string;
}

export default function CvDownload({ cvUrl, resumeUrl }: CvDownloadProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Curriculum Vitae</h2>
      
      <div className="space-y-4">
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaFileAlt className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Full CV</h3>
            <p className="text-sm text-gray-600">Detailed academic and professional history</p>
          </div>
          <FaDownload className="w-5 h-5 text-gray-400 ml-auto" />
        </a>

        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaFileAlt className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Resume</h3>
            <p className="text-sm text-gray-600">Concise professional summary</p>
          </div>
          <FaDownload className="w-5 h-5 text-gray-400 ml-auto" />
        </a>
      </div>
    </div>
  );
} 