import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init"

const firestore = getFirestore(app)

export async function getFlights() {
    const snapshot = await getDocs(collection(firestore,"/Flights"));

    const data = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function getBookings() {
    const snapshot = await getDocs(collection(firestore,"Booking"));

    const data = snapshot.docs.map((doc)=>({
        id:doc.id,
        ...doc.data(),
    }));

    return data;
}