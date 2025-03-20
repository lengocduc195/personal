import fs from 'fs';
import path from 'path';

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  fullText: string;
  tags: string[];
  doi: string;
  link: string;
  citationCount: number;
  citationFormat: string;
  videoUrl?: string;
}

export default async function getPublications(): Promise<Publication[]> {
  // Path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'assets', 'data', 'publications.json');
  
  try {
    // Read the file
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Parse the JSON data
    const publications: Publication[] = JSON.parse(fileContents);
    
    return publications;
  } catch (error) {
    console.error('Error loading publications data:', error);
    return [];
  }
}

export async function getPublicationById(id: number): Promise<Publication | null> {
  const publications = await getPublications();
  return publications.find(publication => publication.id === id) || null;
} 