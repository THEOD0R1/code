import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";

export const Reserve = () => {
  const { reserve, booking, handleChange } = useContext(BookingContext);
  return (
    <>
      <form
        className={
          booking.time && booking.numberOfGuests && booking.date
            ? "booking__userInfo"
            : "full"
        }
        onSubmit={reserve}
      >
        <input
          required
          type="text"
          value={booking.customer.name}
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <input
          required
          type="text"
          value={booking.customer.lastname}
          onChange={handleChange}
          name="lastname"
          placeholder="lastname"
        />
        <input
          required
          type="text"
          value={booking.customer.email}
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <input
          required
          placeholder="phone number"
          type="text"
          value={booking.customer.phone}
          onChange={handleChange}
          name="phone"
        />
        <p>
          <input required className="GDPR-input" type="checkbox" />
          Jag godkänner att mina uppgifter sparas enligt GDPR.
        </p>
        <button className="booking__userInfo__btn">Boka</button>
      </form>
    </>
  );
};
