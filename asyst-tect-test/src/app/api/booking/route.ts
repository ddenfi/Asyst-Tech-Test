import { getBookings } from "@/utils/db/service";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const data = await getBookings()
        return NextResponse.json({ message: "success", data},{status:200})
    }catch (err){
        return NextResponse.json({ message: "success", err},{status:500})
    }
}