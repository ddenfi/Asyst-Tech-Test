import { BookingModel, createBooking, deleteBookingById, getBooking, updateBooking } from "@/utils/data";
import { randomUUID } from "crypto";
import { Noto_Kufi_Arabic } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

interface BookingRequestModel {
    bookingName: string,
    bookingClass: string,
    bookingDate: string
}

export async function GET() {
    try {
        const data = getBooking()
        return NextResponse.json({ message: "success", data }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "success", err }, { status: 400 })
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        if (id) deleteBookingById(id); else throw Error("Booking Not Found")

        return NextResponse.json({ message: "success" }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 400 })
    }
}

export async function POST(req: NextRequest) {
    try {
        if (req.body) {
            const requestBody = await req.json() as BookingRequestModel

            const bookingId = "123"
            const bookingStatus = "Pending"

            createBooking({
                bookingId: bookingId,
                bookingClass: requestBody.bookingClass,
                bookingDate: requestBody.bookingDate,
                bookingName: requestBody.bookingName,
                bookingStatus: bookingStatus,
                flightInfo: {
                    flightId: "FD1003",
                    flightNumber: "DL567",
                    airline: "Delta Air Lines",
                    departureAirport: "ATL",
                    arrivalAirport: "MIA",
                    departureTime: "2024-01-05T15:00:00",
                    arrivalTime: "2024-01-05T18:15:00",
                    aircraft: "Boeing 757"
                }
            })

            return NextResponse.json({ message: "success", requestBody }, { status: 200 })
        }
    } catch (err) {
        if (err instanceof Error) {
            const errorMessage = err.message
            return NextResponse.json({ message: "error", errorMessage }, { status: 400 })
        }
    }
}


export async function UPDATE(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");

        const requestBody = await req.json() as BookingRequestModel

        updateBooking(<BookingModel>{
            bookingId: id!,
            bookingClass: requestBody.bookingClass,
            bookingDate: requestBody.bookingDate,
            bookingName: requestBody.bookingName,
            bookingStatus: "Pending",
            flightInfo: {
                flightId: "FD1003",
                flightNumber: "DL567",
                airline: "Delta Air Lines",
                departureAirport: "ATL",
                arrivalAirport: "MIA",
                departureTime: "2024-01-05T15:00:00",
                arrivalTime: "2024-01-05T18:15:00",
                aircraft: "Boeing 757"
            }
        })


    } catch (err) {
        return NextResponse.json({ message: "error", err }, { status: 400 })
    }
}