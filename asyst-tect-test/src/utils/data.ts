type Flight = {
  flightId: string
  flightNumber: string,
  airline: string,
  departureAirport: string,
  arrivalAirport: string,
  departureTime: string,
  arrivalTime: string,
  aircraft: string,
}

type BookingModel = {
  bookingName: string,
  bookingId: string,
  bookingDate: string,
  bookingStatus: string,
  bookingClass: string,
  flightInfo?: Flight
}

let flights: Flight[] = [
  {
    flightId: "FD1001",
    flightNumber: "AA1234",
    airline: "American Airlines",
    departureAirport: "LAX",
    arrivalAirport: "JFK",
    departureTime: "2024-01-05T10:00:00",
    arrivalTime: "2024-01-05T16:30:00",
    aircraft: "Boeing 737-800"
  },
  {
    flightId: "FD1002",
    flightNumber: "UA789",
    airline: "United Airlines",
    departureAirport: "SFO",
    arrivalAirport: "ORD",
    departureTime: "2024-01-05T12:30:00",
    arrivalTime: "2024-01-05T18:45:00",
    aircraft: "Airbus A320"
  },
  {
    flightId: "FD1003",
    flightNumber: "DL567",
    airline: "Delta Air Lines",
    departureAirport: "ATL",
    arrivalAirport: "MIA",
    departureTime: "2024-01-05T15:00:00",
    arrivalTime: "2024-01-05T18:15:00",
    aircraft: "Boeing 757"
  },
  {
    flightId: "FD1004",
    flightNumber: "LH456",
    airline: "Lufthansa",
    departureAirport: "FRA",
    arrivalAirport: "LHR",
    departureTime: "2024-01-05T08:30:00",
    arrivalTime: "2024-01-05T09:45:00",
    aircraft: "Airbus A321"
  },
  {
    flightId: "FD1005",
    flightNumber: "NH890",
    airline: "All Nippon Airways",
    departureAirport: "NRT",
    arrivalAirport: "BKK",
    departureTime: "2024-01-05T21:00:00",
    arrivalTime: "2024-01-06T03:30:00",
    aircraft: "Boeing 787-9"
  },
  {
    flightId: "FD1006",
    flightNumber: "EK234",
    airline: "Emirates",
    departureAirport: "DXB",
    arrivalAirport: "SYD",
    departureTime: "2024-01-05T01:30:00",
    arrivalTime: "2024-01-06T15:45:00",
    aircraft: "Airbus A380"
  },
  {
    flightId: "FD1007",
    flightNumber: "CA987",
    airline: "Air China",
    departureAirport: "PEK",
    arrivalAirport: "LHR",
    departureTime: "2024-01-05T13:45:00",
    arrivalTime: "2024-01-05T18:00:00",
    aircraft: "Boeing 777-300ER"
  },
];

let bookingDb: BookingModel[] = [
  {
    bookingName: "deki",
    bookingId: "BKNG-789456",
    bookingClass: "First Class",
    bookingDate: "2024-01-05T10:00:00",
    bookingStatus: "Confirmed",
    flightInfo: flights[1]
  },
  {
    bookingName: "deki2",
    bookingId: "BKNG-423421",
    bookingClass: "First Class",
    bookingDate: "2024-01-05T10:00:00",
    bookingStatus: "Cancelledd",
    flightInfo: flights[1]
  },
  {
    bookingName: "deki3",
    bookingId: "BKNG-123124",
    bookingClass: "First Class",
    bookingDate: "2024-01-05T10:00:00",
    bookingStatus: "Cancelledd",
    flightInfo: flights[2]
  }
]

export const getFlights = () => flights;

export const getBooking = () => bookingDb;

export const deleteBookingById = (id: string) => {
  const dataIndex = bookingDb.findIndex((data) => {
    data.bookingId == id
  });

  bookingDb.splice(dataIndex, 1);
}

export const createBooking = (booking: BookingModel) => {
  bookingDb.push(booking);
}

export const updateBooking = (booking: BookingModel) => {
  const dataIndex = bookingDb.findIndex((data) => {
    data.bookingId == booking.bookingId
  });

  bookingDb[dataIndex] = booking;
}