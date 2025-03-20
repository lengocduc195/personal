import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This would typically come from a database or API
const projects = [
  {
    id: 1,
    title: "AI-Powered Image Recognition",
    description: "A deep learning model for recognizing objects in images with high accuracy using convolutional neural networks.",
    fullDescription: `
      This project implements a state-of-the-art convolutional neural network for image recognition tasks. The model is trained on a large dataset of labeled images and can recognize objects across multiple categories with high accuracy.
      
      The architecture uses a combination of convolutional layers, pooling layers, and fully connected layers to extract features from input images and classify them into predefined categories. Transfer learning techniques were applied by fine-tuning a pre-trained model on custom datasets to improve performance.
      
      Key features of this project include:
      - Real-time object detection with bounding boxes
      - Multi-class classification with confidence scores
      - Web interface for uploading and processing images
      - REST API for integration with other applications
    `,
    image: "/images/project-1.jpg",
    tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
    demoUrl: "https://demo-url-1.com",
    githubUrl: "https://github.com/yourusername/image-recognition",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    date: "January 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Recommendation System",
    description: "A personalized recommendation system for products using collaborative filtering and content-based approaches.",
    fullDescription: `
      This recommendation system combines collaborative filtering and content-based approaches to provide personalized product recommendations to users. The system analyzes user behavior, preferences, and product attributes to suggest items that users are likely to be interested in.
      
      The collaborative filtering component identifies patterns in user behavior and recommends products based on the preferences of similar users. The content-based component analyzes product attributes and recommends items similar to those the user has shown interest in previously.
      
      Key features of this project include:
      - Hybrid recommendation approach (collaborative + content-based)
      - User similarity metrics based on purchase history
      - Product attribute analysis using NLP techniques
      - A/B testing framework for recommendation strategies
      - Integration with e-commerce platforms
    `,
    image: "/images/project-2.jpg",
    tags: ["Machine Learning", "Recommendation Systems", "Python"],
    demoUrl: "https://demo-url-2.com",
    githubUrl: "https://github.com/yourusername/recommendation-system",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "PostgreSQL"],
    date: "March 2023",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  // Add more projects as needed
];

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id));
  
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
          fill
          className="object-cover"
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