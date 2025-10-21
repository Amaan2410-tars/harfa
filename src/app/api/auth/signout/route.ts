import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (session) {
      // In a real implementation, you would handle sign out logic here
      // For now, we'll just redirect to the sign-in page
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
    
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
}
