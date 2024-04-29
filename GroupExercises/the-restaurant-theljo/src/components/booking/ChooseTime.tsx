import { useContext } from "react";
import { BookingContext } from "../../contexts/BookingContext";

export const ChooseTime = () => {
  const { handleCheckTime, booking, handleSelectTime, checkbooking } =
    useContext(BookingContext);

  return (
    <>
      <form className="booking__time__container" onSubmit={handleCheckTime}>
        <>
          <label>
            <select
              required
              name={booking.time}
              id="time"
              onChange={handleSelectTime}
              disabled={
                booking.date === "" || booking.numberOfGuests <= 0
                  ? true
                  : false
              }
            >
              <option disabled={booking.time === "" ? false : true}>
                Välj tid
              </option>
              <option value="18:00" disabled={!checkbooking.availabletable18}>
                {checkbooking.availabletable18 ? "18:00" : "fullbokat 18:00"}
              </option>
              <option value="21:00" disabled={!checkbooking.availabletable21}>
                {checkbooking.availabletable21 ? "21:00" : "fullbokat 21:00"}
              </option>
            </select>
          </label>
        </>
      </form>
    </>
  );
};
