import { useEffect, useState } from "react";
import { Booking } from "../../models/Booking";
import { getBookings } from "../../services/bookingsService";
import { useNavigate } from "react-router-dom";
import { AdminGetBookingInfo } from "./AdminGetBookingInfo";

export const HandleBooking = () => {
  const navigate = useNavigate();
  const [bookings, setBooking] = useState<Booking[]>();

  useEffect(() => {
    const getData = async () => {
      const bookings = await getBookings();
      setBooking(bookings);
    };
    if (!bookings) getData();
  });

  const AddBooking = () => {
    navigate("/booking");
  };

  const filteredBookings = bookings?.sort(
    (a, b) => Date.parse(a.date) - Date.parse(b.date)
  );

  return (
    <>
      <div className="bookingsContainer">
        <button onClick={AddBooking}>Lägg till</button>
        {filteredBookings?.map((b) => {
          return <AdminGetBookingInfo key={b._id} booking={b} />;
        })}
      </div>
    </>
  );
};
