import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneBooking } from "../services/getOneBooking";
import { getCustomerBooking } from "../services/getCustomerBooking";
import { IBooking } from "../models/IBooking";
import { ReservationInformation } from "../components/admin/ReservationInformation";
import {
  IUpdateBookingContext,
  UpdateBookingContext,
} from "../contexts/UpdateBookingContext";

export const BookingDetails = () => {
  const [bookingInformation, setBookingInformation] =
    useState<IUpdateBookingContext>({
      bookingPut: {
        id: "",
        time: "",
        numberOfGuests: 0,
        date: "",
        customerId: "",
        restaurantId: "",
      },
      customerPut: {
        id: "",
        name: "",
        lastname: "",
        phone: "",
        email: "",
      },
      handleBookingChange: () => {},
      handleSelectChange: () => {},
      handleCustomerChange: () => {},
    });

  const { bookingId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const theBooking: IBooking[] = await getOneBooking(bookingId!);
      if (shouldUpdate) {
        setBookingInformation({
          ...bookingInformation,
          bookingPut: {
            id: theBooking[0]._id,
            time: theBooking[0].time,
            numberOfGuests: theBooking[0].numberOfGuests,
            date: theBooking[0].date,
            customerId: theBooking[0].customerId,
            restaurantId: theBooking[0].restaurantId,
          },
        });
      }
    };
    let shouldUpdate = true;

    if (bookingInformation.bookingPut.id !== "") return;

    getData();
    return () => {
      shouldUpdate = false;
    };
  });

  useEffect(() => {
    if (bookingInformation.customerPut.id !== "") return;

    const getData = async () => {
      if (bookingInformation.bookingPut.customerId) {
        const customerBooking = await getCustomerBooking(
          bookingInformation.bookingPut.customerId
        );
        if (shouldUpdate) {
          customerBooking.map((c) =>
            setBookingInformation({
              ...bookingInformation,
              customerPut: {
                id: c._id,
                name: c.name,
                lastname: c.lastname,
                phone: c.phone,
                email: c.email,
              },
            })
          );
        }
      }
    };
    let shouldUpdate = true;

    getData();

    return () => {
      shouldUpdate = false;
    };
  }, [bookingInformation.bookingPut.customerId]);

  bookingInformation.handleBookingChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const propertyName = e.target.name;

    if (e.target.type === "text") {
      setBookingInformation({
        ...bookingInformation,
        bookingPut: {
          ...bookingInformation.bookingPut,
          [propertyName]: e.target.value,
        },
      });
    }
    if (e.target.type === "date") {
      setBookingInformation({
        ...bookingInformation,
        bookingPut: {
          ...bookingInformation.bookingPut,
          [propertyName]: e.target.value,
        },
      });
    }
    if (e.target.type === "number") {
      setBookingInformation({
        ...bookingInformation,
        bookingPut: {
          ...bookingInformation.bookingPut,
          [propertyName]: e.target.value,
        },
      });
    }
  };

  bookingInformation.handleCustomerChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const propertyName = e.target.name;
    setBookingInformation({
      ...bookingInformation,
      customerPut: {
        ...bookingInformation.customerPut,
        [propertyName]: e.target.value,
      },
    });
  };
  bookingInformation.handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setBookingInformation({
      ...bookingInformation,
      bookingPut: {
        ...bookingInformation.bookingPut,
        time: e.target.value,
      },
    });
  };
  return (
    <>
      <UpdateBookingContext.Provider value={bookingInformation}>
        <ReservationInformation />
      </UpdateBookingContext.Provider>
    </>
  );
};
