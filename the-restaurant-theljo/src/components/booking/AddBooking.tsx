import { ChangeEvent, FormEvent, useState } from "react";
import {
  RESTAURANT_ID,
  getBookings,
  postBooking,
} from "../../services/bookingsService";
import { BookingContext, IBookingContext } from "../../contexts/BookingContext";
import { NumberAndDate } from "./NumberAndDate";
import { ChooseTime } from "./ChooseTime";
import { Reserve } from "./Reserve";
import { Booking } from "../../models/Booking";
import { ErrorModal } from "../ErrorModal";
import { useNavigate } from "react-router-dom";

export const AddBooking = () => {
  const [state, setState] = useState<IBookingContext>({
    booking: {
      date: "",
      numberOfGuests: 0,
      restaurantId: RESTAURANT_ID,
      time: "",
      customer: { name: "", lastname: "", email: "", phone: "" },
    },
    checkbooking: {
      availabletable18: true,
      availabletable21: true,
    },
    error: {
      title: "",
      message: "",
      modalerror: false,
    },
    handleChange: () => {},
    handleCheckTime: () => {},
    reserve: () => {},
    handleSelectTime: () => {},
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  state.handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const propertyName = e.target.name;
    if (e.target.type === "date") {
      setState({
        ...state,
        booking: {
          ...state.booking,
          [propertyName]: e.target.value,
        },
      });
    }
    if (e.target.type === "number") {
      setState({
        ...state,
        booking: {
          ...state.booking,
          [propertyName]: +e.target.value,
        },
      });
    }
    if (e.target.type === "text") {
      setState({
        ...state,
        booking: {
          ...state.booking,
          customer: {
            ...state.booking.customer,
            [propertyName]: e.target.value,
          },
        },
      });
    }
  };

  state.handleSelectTime = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      booking: { ...state.booking, time: e.target.value },
    });
  };

  state.handleCheckTime = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const bookingArray: Booking[] = await getBookings();

    const requestedDate = state.booking.date;

    let dateList = bookingArray.filter((booking) => {
      if (booking.date === requestedDate || requestedDate === null) {
        return booking;
      }
    });

    let totalBookedTables = 0;
    let bookedTable18 = 0;
    let bookedTable21 = 0;

    dateList.map((booking: Booking) => {
      let bookedTable = Math.ceil(booking.numberOfGuests / 6);
      totalBookedTables += bookedTable;

      if (booking.time === "18:00") {
        bookedTable18 += bookedTable;
      }

      if (booking.time === "21:00") {
        bookedTable21 += bookedTable;
      }
    });

    let requestedTables = Math.ceil(state.booking.numberOfGuests / 6);

    if (bookedTable18 + requestedTables > 15) {
      setState({
        ...state,
        checkbooking: { ...state.checkbooking, availabletable18: false },
      });
    }
    if (bookedTable21 + requestedTables > 15) {
      setState({
        ...state,
        checkbooking: { ...state.checkbooking, availabletable21: false },
      });
    }

    if (
      bookedTable21 + requestedTables > 15 &&
      bookedTable18 + requestedTables > 15
    ) {
      setState({
        ...state,
        error: {
          ...state.error,
          title: "Ojdå! Det är fullbokat!",
          message: "Försök göra en ny sökning på ett nytt datum",
          modalerror: true,
        },
      });
    }

    if (bookingArray) {
      setLoading(false);
    }
  };

  state.reserve = async (e: FormEvent) => {
    e.preventDefault();
    postBooking(state.booking);
    navigate("/booking/completed");
  };
  const errorHandler = () => {
    setState({ ...state, error: { ...state.error, modalerror: false } });
  };

  return (
    <>
      {state.error.modalerror && (
        <ErrorModal
          title={state.error.title}
          message={state.error.message}
          onClose={errorHandler}
        />
      )}
      <BookingContext.Provider value={state}>
        <section
          className={
            loading ? "booking__container loading" : "booking__container"
          }
        >
          <div className="booking__container__inner">
            <div className="booking__container__forms">
              <NumberAndDate />
              <ChooseTime />
              <Reserve />
            </div>
          </div>
        </section>
      </BookingContext.Provider>
    </>
  );
};
