import { NextRequest } from 'next/server'
import {Auth} from '@/lib/auth';
import {Users} from '@/internal/model/user';

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: '/api/user/me',
}

export async function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!(await Auth.isAuthenticated(request))) {
    // Respond with JSON indicating an error message
    return Response.json(
      { success: false, message: 'authentication failed' },
      { status: 401 }
    )
  }
}