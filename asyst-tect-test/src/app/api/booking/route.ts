import { deleteBookingById, getBooking } from "@/utils/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const data = getBooking()
        return NextResponse.json({ message: "success", data }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "success", err }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) deleteBookingById(id); else throw Error("Booking Not Found")

        return NextResponse.json({ message: "success", }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 })
    }
}

export async function UPDATE(req: NextRequest) {
    try {

    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 })
    }
}


export async function POST(req: NextRequest) {
    try {
        req.formData
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");



    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 500 })
    }
}