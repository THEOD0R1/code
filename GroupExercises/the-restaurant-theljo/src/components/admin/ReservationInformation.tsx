import { FormEvent, useContext, useState } from "react";

import {
  deleteBooking,
  putBooking,
  putCostumer,
} from "../../services/bookingsService";
import { UpdateBookingContext } from "../../contexts/UpdateBookingContext";
import { BookingUpdatedModal } from "../BookingUpdatedModal";
import { BookingDeletedModal } from "../BookingDeletedModal";

export const ReservationInformation = () => {
  const {
    customerPut,
    bookingPut,
    handleBookingChange,
    handleCustomerChange,
    handleSelectChange,
  } = useContext(UpdateBookingContext);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const updateReservation = (e: FormEvent) => {
    e.preventDefault();

    putBooking(bookingPut.id, bookingPut);

    putCostumer(customerPut.id, customerPut);
  };

  return (
    <>
      <div className="pageContainer">
        <div className="theBooking">
          <form className="bookingInfo" onSubmit={updateReservation}>
            <input
              type="text"
              value={customerPut?.name}
              onChange={handleCustomerChange}
              name="name"
            />
            <input
              type="text"
              value={customerPut?.lastname}
              onChange={handleCustomerChange}
              name="lastname"
            />
            <input
              type="text"
              value={customerPut?.email}
              onChange={handleCustomerChange}
              name="email"
            />
            <input
              type="text"
              value={customerPut?.phone}
              onChange={handleCustomerChange}
              name="phone"
            />
            <input
              type="date"
              value={bookingPut.date}
              onChange={handleBookingChange}
              name="date"
            />

            <select
              defaultValue={bookingPut.time}
              onChange={handleSelectChange}
            >
              <option value={bookingPut.time}>
                {"Bokad Kl: " + bookingPut.time}
              </option>
              <option value="18:00">18:00</option>
              <option value="21:00">21:00</option>
            </select>

            <input
              name="numberOfGuests"
              type="number"
              value={bookingPut.numberOfGuests}
              onChange={handleBookingChange}
            />

            <button
              className={"update__booking"}
              onClick={() => setShowModal(true)}
            >
              Uppdatera bokning
            </button>
          </form>
          <button
            className="delete__booking"
            type="button"
            onClick={() => {
              setShowDeleteModal(true);
              {
                deleteBooking(bookingPut!.id);
              }
            }}
          >
            Ta bort bokning
          </button>
        </div>
        {showModal && (
          <BookingUpdatedModal
            message="Bokning ändrad"
            onClose={() => setShowModal(false)}
          />
        )}
        {showDeleteModal && (
          <BookingDeletedModal
            message="Bokning borttagen"
            onClose={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    </>
  );
};
