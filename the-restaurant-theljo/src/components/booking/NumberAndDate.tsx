import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";

export const NumberAndDate = () => {
  const { handleChange, handleCheckTime, booking } = useContext(BookingContext);
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <h2>Boka bord på Theljo</h2>
      <p>Börja med att ange datum och antal gäster.</p>
      <form className="booking__NumberAndDate" onSubmit={handleCheckTime}>
        <input
          required
          type="date"
          value={booking?.date}
          name="date"
          min={today}
          onChange={handleChange}
        />
        <input
          required
          type="number"
          min={1}
          max={35}
          value={booking?.numberOfGuests}
          name="numberOfGuests"
          onChange={handleChange}
        />
        <button>Sök tider</button>
      </form>
    </>
  );
};
