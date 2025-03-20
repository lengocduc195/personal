'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Publication } from '@/app/api/publications';
import SearchFilter from '@/app/components/SearchFilter';
import DoiLink from '@/app/components/DoiLink';

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function loadPublications() {
      try {
        const response = await fetch('/api/publications');
        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }
        const data = await response.json();
        setPublications(data);
        setFilteredPublications(data);
      } catch (error) {
        console.error('Error loading publications:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPublications();
  }, []);

  // Get all unique tags
  const availableTags = Array.from(new Set(
    publications.flatMap(publication => publication.tags)
  )).sort();

  const handleSearch = (query: string) => {
    const searchQuery = query.toLowerCase();
    const filtered = publications.filter(publication => {
      const matchesSearch = publication.title.toLowerCase().includes(searchQuery);
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => publication.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredPublications(filtered);
  };

  const handleFilter = (tags: string[]) => {
    setSelectedTags(tags);
    const filtered = publications.filter(publication => {
      const matchesSearch = publication.title.toLowerCase().includes('');
      const matchesTags = tags.length === 0 || 
        tags.every(tag => publication.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredPublications(filtered);
  };

  if (!mounted) {
    return null;
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading publications...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Publications</h1>
      <p className="text-lg text-gray-600 mb-12">
        Here&apos;s a collection of my research publications and academic work.
      </p>

      <SearchFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        availableTags={availableTags}
        selectedTags={selectedTags}
      />

      <div className="space-y-6">
        {filteredPublications.map((publication) => (
          <div key={publication.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap gap-2 mb-3">
              {publication.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold mb-2">{publication.title}</h2>
            
            <p className="text-gray-700 mb-2">
              {publication.authors.join(', ')}
            </p>
            
            <p className="text-gray-600 mb-4">
              <span className="font-medium">{publication.venue}</span>, {publication.year}
            </p>
            
            <p className="text-gray-600 mb-4 line-clamp-3">
              {publication.abstract}
            </p>
            
            <div className="flex justify-between items-center">
              <DoiLink doi={publication.doi} link={publication.link} />
              <Link 
                href={`/publications/${publication.id}`}
                className="text-primary font-medium hover:underline"
              >
                Read more &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 