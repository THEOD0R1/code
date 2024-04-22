import { useEffect, useState } from "react";
import { Customer } from "../../models/Customer";
import { getCustomerBooking } from "../../services/getCustomerBooking";
import { Booking } from "../../models/Booking";
import { useNavigate } from "react-router-dom";

interface IAdminGetBookingInfo {
  booking: Booking;
}
export const AdminGetBookingInfo = ({ booking }: IAdminGetBookingInfo) => {
  const [customer, setCustomer] = useState<Customer>();

  const navigate = useNavigate();

  useEffect(() => {
    const getCustomer = async () => {
      const getOneCustomer = await getCustomerBooking(booking.customerId);
      getOneCustomer.map((c) => {
        setCustomer(c);
        return c;
      });
    };
    if (!customer) getCustomer();
  });

  return (
    <>
      <div className="theBookings">
        <h3>{booking.date}</h3>
        <h2>{customer?.lastname}</h2>
        <h2>{booking.time}</h2>
        <h2>{"Gäster: " + booking.numberOfGuests}</h2>
        <button
          onClick={() => {
            navigate("/admin/" + booking._id);
          }}
        >
          Visa/Ändra
        </button>
      </div>
    </>
  );
};
