import { NextResponse } from 'next/server';
import { getPublicationById } from '@/app/api/publications';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    if (isNaN(id)) {
      return NextResponse.json(
        { error: 'Invalid publication ID' },
        { status: 400 }
      );
    }
    
    const publication = await getPublicationById(id);
    
    if (!publication) {
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