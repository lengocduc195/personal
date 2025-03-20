import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const statsFile = path.join(process.cwd(), 'public/assets/data/stats.json');

async function getStats() {
  try {
    const fileContents = await fs.readFile(statsFile, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return { totalViews: 0, lastUpdated: new Date().toISOString() };
  }
}

async function saveStats(stats: any) {
  await fs.writeFile(statsFile, JSON.stringify(stats, null, 2));
}

export async function GET() {
  const stats = await getStats();
  return NextResponse.json(stats);
}

export async function POST() {
  const stats = await getStats();
  stats.totalViews += 1;
  stats.lastUpdated = new Date().toISOString();
  await saveStats(stats);
  return NextResponse.json(stats);
} 