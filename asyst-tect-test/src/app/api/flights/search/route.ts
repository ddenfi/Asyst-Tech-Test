
import { getFlights } from '@/utils/db/service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const data = getFlights();
    
    return NextResponse.json({ status: 200, message: "success", data:data})
}
