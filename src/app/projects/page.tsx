'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Project } from '@/app/api/projects';
import SearchFilter from '@/app/components/SearchFilter';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function loadProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Get all unique technologies
  const availableTags = Array.from(new Set(
    projects.flatMap(project => project.technologies)
  )).sort();

  const handleSearch = (query: string) => {
    const searchQuery = query.toLowerCase();
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery);
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => project.technologies.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredProjects(filtered);
  };

  const handleFilter = (tags: string[]) => {
    setSelectedTags(tags);
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes('');
      const matchesTags = tags.length === 0 || 
        tags.every(tag => project.technologies.includes(tag));
      return matchesSearch && matchesTags;
    });
    setFilteredProjects(filtered);
  };

  if (!mounted) {
    return null;
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading projects...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-gray-600 mb-8">
        A collection of my personal and academic projects.
      </p>

      <SearchFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        availableTags={availableTags}
        selectedTags={selectedTags}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="block bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{project.date}</span>
                <span className="text-primary font-medium">View details &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 