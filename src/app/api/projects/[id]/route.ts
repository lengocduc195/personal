import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface Project {
  id: string | number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
}

async function getProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), 'public/assets/data/projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// @ts-ignore - We need to ignore TS errors for Next.js 15 route handlers due to type complexity
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const stringId = params.id;
    const numericId = parseInt(stringId, 10);
    const projects = await getProjects();
    
    // Find project by checking if numeric ID matches or string representation matches
    const project = projects.find(p => {
      if (typeof p.id === 'number') {
        return p.id === numericId;
      } else {
        return p.id === stringId;
      }
    });
    
    if (!project) {
      console.log(`Project not found for ID: ${stringId}, Numeric ID: ${numericId}`);
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    );
  }
} 