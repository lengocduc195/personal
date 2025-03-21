import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export interface Publication {
  id: string | number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  doi: string;
  link?: string;
  tags: string[];
  github?: string;
  citationCount?: number;
  citationFormat?: string;
  videoUrl?: string;
}

async function getPublications(): Promise<Publication[]> {
  const filePath = path.join(process.cwd(), 'public/assets/data/publications.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function GET() {
  try {
    const publications = await getPublications();
    return NextResponse.json(publications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch publications' },
      { status: 500 }
    );
  }
} 