import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { Publication } from '../route';

async function getPublications(): Promise<Publication[]> {
  const filePath = path.join(process.cwd(), 'public/assets/data/publications.json');
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
    const publications = await getPublications();
    
    // Find publication by checking if numeric ID matches or string representation matches
    const publication = publications.find(p => {
      if (typeof p.id === 'number') {
        return p.id === numericId;
      } else {
        return p.id === stringId;
      }
    });
    
    if (!publication) {
      console.log(`Publication not found for ID: ${stringId}, Numeric ID: ${numericId}`);
      return NextResponse.json(
        { error: 'Publication not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(publication);
  } catch (error) {
    console.error('Error fetching publication:', error);
    return NextResponse.json(
      { error: 'Failed to fetch publication' },
      { status: 500 }
    );
  }
} 