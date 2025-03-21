import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export interface Project {
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

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
} 