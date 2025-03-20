import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  // Example project data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Image Recognition",
      description: "A deep learning model for recognizing objects in images with high accuracy using convolutional neural networks.",
      image: "/images/project-1.jpg",
      tags: ["Deep Learning", "Computer Vision", "TensorFlow"],
      demoUrl: "https://demo-url-1.com"
    },
    {
      id: 2,
      title: "Recommendation System",
      description: "A personalized recommendation system for products using collaborative filtering and content-based approaches.",
      image: "/images/project-2.jpg",
      tags: ["Machine Learning", "Recommendation Systems", "Python"],
      demoUrl: "https://demo-url-2.com"
    },
    {
      id: 3,
      title: "Natural Language Processing Toolkit",
      description: "A comprehensive toolkit for various NLP tasks such as text classification, named entity recognition, and sentiment analysis.",
      image: "/images/project-3.jpg",
      tags: ["NLP", "PyTorch", "Transformers"],
      demoUrl: "https://demo-url-3.com"
    },
    {
      id: 4,
      title: "Web Application for Data Visualization",
      description: "An interactive web application for visualizing complex datasets using modern visualization libraries.",
      image: "/images/project-4.jpg",
      tags: ["React", "D3.js", "Data Visualization"],
      demoUrl: "https://demo-url-4.com"
    },
    {
      id: 5,
      title: "Reinforcement Learning Environment",
      description: "A custom environment for training reinforcement learning agents to solve complex tasks.",
      image: "/images/project-5.jpg",
      tags: ["Reinforcement Learning", "PyTorch", "OpenAI Gym"],
      demoUrl: "https://demo-url-5.com"
    },
    {
      id: 6,
      title: "Blockchain-based Supply Chain",
      description: "A decentralized application for tracking products across a supply chain using blockchain technology.",
      image: "/images/project-6.jpg",
      tags: ["Blockchain", "Ethereum", "Smart Contracts"],
      demoUrl: "https://demo-url-6.com"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Here are some of the projects I've worked on. Each project represents a unique challenge and solution in various domains of computer science and technology.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-end">
                  <span className="text-primary font-medium">View details &rarr;</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 