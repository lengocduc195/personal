import fs from 'fs';
import path from 'path';

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
  date: string;
  videoUrl?: string;
}

export default async function getProjects(): Promise<Project[]> {
  // Path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'assets', 'data', 'projects.json');
  
  try {
    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON data
    const projects: Project[] = JSON.parse(fileContents);
    
    return projects;
  } catch (error) {
    console.error('Error loading projects data:', error);
    return [];
  }
}

export async function getProjectById(id: number): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find(project => project.id === id) || null;
} 