type Flight = {
    flightId:String
    flightNumber: String,
    airline: String,
    departureAirport: String,
    arrivalAirport: String,
    departureTime: String,
    arrivalTime: String,
    aircraft: String,
}

let flights:Flight[] =[
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

export const getFlights = () => flights;