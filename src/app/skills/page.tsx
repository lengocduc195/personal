'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Project } from '@/app/api/projects';
import { Publication } from '@/app/api/publications';

export default function Skills() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [projectsRes, publicationsRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/publications')
        ]);

        if (!projectsRes.ok || !publicationsRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [projectsData, publicationsData] = await Promise.all([
          projectsRes.json(),
          publicationsRes.json()
        ]);

        setProjects(projectsData);
        setPublications(publicationsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Get all unique skills from both projects and publications
  const allSkills = Array.from(new Set([
    ...projects.flatMap(p => p.technologies),
    ...publications.flatMap(p => p.tags)
  ])).sort();

  // Filter projects and publications based on selected skill
  const filteredProjects = selectedSkill
    ? projects.filter(p => p.technologies.includes(selectedSkill))
    : projects;

  const filteredPublications = selectedSkill
    ? publications.filter(p => p.tags.includes(selectedSkill))
    : publications;

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Skills & Expertise</h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {allSkills.map((skill) => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill === selectedSkill ? null : skill)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedSkill === skill
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Related Publications</h2>
        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <Link 
              href={`/publications/${publication.id}`} 
              key={publication.id}
              className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{publication.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
} 