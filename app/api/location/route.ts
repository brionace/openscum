import { NextRequest, NextResponse } from 'next/server'
import { getLocationFromIP } from '@/lib/location'

export async function GET(request: NextRequest) {
  try {
    // Get client IP from headers
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const clientIp = forwarded?.split(',')[0] || realIp || '127.0.0.1'
    
    const locationData = await getLocationFromIP(clientIp)
    
    return NextResponse.json({
      success: true,
      data: locationData
    })
  } catch (error) {
    console.error('Location API error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to detect location'
    }, { status: 500 })
  }
}