'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Publication } from '@/app/api/publications';
import CitationSection from '@/app/components/CitationSection';

export default function PublicationDetail({ params }: { params: { id: string } }) {
  const [publication, setPublication] = useState<Publication | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadPublication() {
      try {
        const id = parseInt(params.id);
        const response = await fetch(`/api/publications/${id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch publication');
        }
        
        const data = await response.json();
        setPublication(data);
      } catch (error) {
        console.error('Error loading publication:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadPublication();
  }, [params.id]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-8 text-center">Loading publication...</div>;
  }
  
  if (!publication) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/publications" className="text-primary hover:underline">
          &larr; Back to Publications
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {publication.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{publication.title}</h1>
        
        <p className="text-lg text-gray-700 mb-2">
          {publication.authors.join(', ')}
        </p>
        
        <p className="text-gray-600 mb-6">
          <span className="font-medium">{publication.venue}</span>, {publication.year}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            DOI: {publication.doi}
          </a>
          <p className="text-gray-600">
            Citations: {publication.citationCount}
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Abstract</h2>
          <p className="text-gray-700 leading-relaxed">
            {publication.abstract}
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Full Text</h2>
          <div className="prose max-w-none">
            {publication.fullText.split('\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {publication.videoUrl && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Presentation Video</h2>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={publication.videoUrl}
              title="Publication Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
      <CitationSection citationFormat={publication.citationFormat} />
    </div>
  );
} 