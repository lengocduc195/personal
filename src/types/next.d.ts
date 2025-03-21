import { NextRequest, NextResponse } from 'next/server';

// This helps TypeScript understand the Next.js route handler patterns
declare module 'next/server' {
  // Allow more flexible parameter handling in route handlers
  export interface RouteHandlerContext<Params extends Record<string, string> = Record<string, string>> {
    params: Params;
  }
  
  // Allow more flexible function signatures for Next.js route handlers
  export type RouteHandler<Params extends Record<string, string> = Record<string, string>> = 
    (request: Request | NextRequest, context: RouteHandlerContext<Params>) => Response | NextResponse | Promise<Response | NextResponse>;
} 