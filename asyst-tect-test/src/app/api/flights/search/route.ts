import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    console.log(request.url);
    return NextResponse.json({ status: 200, message: "success" })
}