'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaFileAlt, FaResearchgate, FaGoogle, FaOrcid } from 'react-icons/fa';

interface AboutData {
  name: string;
  title: string;
  bio: string;
  image: string;
  location: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    researchgate?: string;
    googleScholar?: string;
    orcid?: string;
  };
  cv: {
    url: string;
    filename: string;
  };
  resume: {
    url: string;
    filename: string;
  };
  education: Array<{
    degree: string;
    school: string;
    year: string;
    description: string;
  }>;
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
  }>;
  technologyCategories: {
    programmingLanguages: string[];
    frameworksAndLibraries: string[];
  };
}

interface Publication {
  tags: string[];
}

interface Project {
  technologies: string[];
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function loadData() {
      try {
        const [aboutResponse, publicationsResponse, projectsResponse, statsResponse] = await Promise.all([
          fetch('/assets/data/about.json'),
          fetch('/api/publications'),
          fetch('/api/projects'),
          fetch('/api/views', { method: 'POST' })
        ]);

        if (!aboutResponse.ok || !publicationsResponse.ok || !projectsResponse.ok || !statsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const [aboutData, publicationsData, projectsData] = await Promise.all([
          aboutResponse.json(),
          publicationsResponse.json(),
          projectsResponse.json()
        ]);

        setAboutData(aboutData);
        setPublications(publicationsData);
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Extract unique tags and technologies
  const researchAreas = Array.from(new Set(publications.flatMap(pub => pub.tags))).sort();
  const technologies = Array.from(new Set(projects.flatMap(proj => proj.technologies))).sort();

  // Categorize technologies using the predefined categories
  const programmingLanguages = technologies.filter(tech => 
    aboutData?.technologyCategories.programmingLanguages.includes(tech)
  );
  const frameworksAndLibraries = technologies.filter(tech => 
    aboutData?.technologyCategories.frameworksAndLibraries.includes(tech)
  );
  const toolsAndTechnologies = technologies.filter(tech => 
    !programmingLanguages.includes(tech) && !frameworksAndLibraries.includes(tech)
  );

  // Safe fallback during server/client hydration mismatch
  if (!mounted) {
    return null;
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  }

  if (!aboutData) {
    return <div className="container mx-auto px-4 py-8 text-center">Error loading data</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <Image
                src={aboutData.image}
                alt={aboutData.name}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
                priority
              />
            </div>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">{aboutData.name}</h1>
              <p className="text-gray-600 mb-4">{aboutData.title}</p>
              <p className="text-gray-600 mb-6">{aboutData.location}</p>
              
              <div className="flex justify-center space-x-4 mb-6">
                <Link 
                  href={aboutData.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </Link>
                <Link 
                  href={aboutData.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link 
                  href={aboutData.social.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <FaTwitter size={24} />
                </Link>
                {aboutData.social.researchgate && (
                  <Link 
                    href={aboutData.social.researchgate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaResearchgate size={24} />
                  </Link>
                )}
                {aboutData.social.googleScholar && (
                  <Link 
                    href={aboutData.social.googleScholar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaGoogle size={24} />
                  </Link>
                )}
                {aboutData.social.orcid && (
                  <Link 
                    href={aboutData.social.orcid} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaOrcid size={24} />
                  </Link>
                )}
              </div>
              
              <a 
                href={`mailto:${aboutData.email}`}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
              >
                <FaEnvelope className="mr-2" />
                {aboutData.email}
              </a>
              
              <div className="space-y-3">
                <a
                  href={aboutData.resume.url}
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    const fullUrl = window.location.origin + aboutData.resume.url;
                    window.open(fullUrl, '_blank');
                  }}
                >
                  <FaFileAlt className="mr-2" />
                  Download Resume
                </a>
                <a
                  href={aboutData.cv.url}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors w-full justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    const fullUrl = window.location.origin + aboutData.cv.url;
                    window.open(fullUrl, '_blank');
                  }}
                >
                  <FaFileAlt className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <div className="prose max-w-none mb-8">
              {aboutData.bio.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>

            {/* Education Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                {aboutData.education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500">{edu.year}</p>
                    <p className="mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                {aboutData.experience.map((exp, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500">{exp.period}</p>
                    <p className="mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Areas Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Research Areas</h2>
              <div className="flex flex-wrap gap-2">
                {researchAreas.map((area) => (
                  <span 
                    key={area}
                    className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>

            {/* Skills Sections */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((lang) => (
                    <span 
                      key={lang}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksAndLibraries.map((framework) => (
                    <span 
                      key={framework}
                      className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsAndTechnologies.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 