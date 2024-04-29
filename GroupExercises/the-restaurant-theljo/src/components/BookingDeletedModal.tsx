import { useNavigate } from "react-router-dom";

interface IBookingDeletedModal {
  message: string;
  onClose: () => void;
}
export const BookingDeletedModal = (props: IBookingDeletedModal) => {
  const navigate = useNavigate();
  const closeModal = () => {
    props.onClose();
  };

  return (
    <section>
      <div className="modalBackdrop" />
      <div className="modal__container">
        <div className="error-message">
          <h3>{props.message}</h3>
        </div>
        <footer className="modal__footer">
          <button
            type="button"
            onClick={() => {
              closeModal();
              navigate("/admin/");
            }}
          >
            Stäng
          </button>
        </footer>
      </div>
    </section>
  );
};
