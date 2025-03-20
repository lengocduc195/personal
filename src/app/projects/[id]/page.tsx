import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/app/api/projects';

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = await getProjectById(projectId);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link href="/projects" className="text-primary hover:underline">
          &larr; Back to Projects
        </Link>
      </div>

      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-8">{project.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Date</h3>
          <p>{project.date}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Demo</h3>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View Demo
          </a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Source Code</h3>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">About this Project</h2>
        <div className="prose max-w-none">
          {project.fullDescription.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-4 py-2 bg-gray-100 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.videoUrl && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Demo Video</h2>
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={project.videoUrl}
              title="Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
} 