import { useNavigate } from "react-router-dom";

interface IBookingUpdateModal {
  message: string;
  onClose: () => void;
}
export const BookingUpdatedModal = (props: IBookingUpdateModal) => {
  const closeModal = () => {
    props.onClose();
  };

  const navigate = useNavigate();

  return (
    <section>
      <div className="modalBackdrop" />
      <div className="modal__container">
        <div className="error-message">
          <h3>{props.message}</h3>
        </div>
        <footer className="modal__footer">
          <button type="button" onClick={closeModal}>
            Visa bokning
          </button>

          <button
            onClick={() => {
              navigate("/admin");
            }}
          >
            Admin
          </button>
        </footer>
      </div>
    </section>
  );
};
