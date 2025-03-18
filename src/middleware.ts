import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth/auth';
// import { auth } from './lib/auth';

export async function middleware(request: NextRequest) {
  const isAuthenticated = await auth();
  if (isAuthenticated) {
    return NextResponse.next(); // Allow access to the route
  } else {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*', '/my-habits/:path*'],
};
