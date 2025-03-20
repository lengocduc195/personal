'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { Publication } from '@/app/api/publications';
import DoiLink from '@/app/components/DoiLink';

export default function Home() {
  const [recentPublications, setRecentPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRecentPublications() {
      try {
        const response = await fetch('/api/publications');
        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }
        const data = await response.json();
        // Sort by year in descending order and take the 3 most recent
        const recent = data
          .sort((a: Publication, b: Publication) => b.year - a.year)
          .slice(0, 3);
        setRecentPublications(recent);
      } catch (error) {
        console.error('Error loading recent publications:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRecentPublications();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Hello, I'm <span className="text-primary">Duc Le</span>
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to my portfolio. I'm passionate about creating innovative solutions and sharing knowledge through research.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/about" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Learn More
            </Link>
            <Link 
              href="/projects" 
              className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
        <Image
              src="/images/Duc_Le.jpg" 
              alt="Profile"
              width={256}
              height={256}
              className="object-cover"
          priority
        />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Link href={`/projects/${i}`} key={i}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={`/images/project-${i}.jpg`}
                    alt={`Project ${i}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      React
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      AI
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Project Title {i}</h3>
                  <p className="text-gray-600">
                    A brief description of the project, its goals, and the technologies used.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Recent Publications Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Publications</h2>
        <div className="space-y-6">
          {recentPublications.map((publication) => (
            <div key={publication.id} className="bg-white p-6 rounded-lg shadow-md">
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
              
              <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
              
              <p className="text-gray-700 mb-2">
                {publication.authors.join(', ')}
              </p>
              
              <p className="text-gray-600 mb-4">
                <span className="font-medium">{publication.venue}</span>, {publication.year}
              </p>
              
              <p className="text-gray-600 mb-4 line-clamp-2">
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
        <div className="text-center mt-8">
          <Link 
            href="/publications"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Publications
          </Link>
        </div>
      </section>
    </div>
  );
}
