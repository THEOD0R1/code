interface IErrorModalProps {
  title: string;
  message: string;
  onClose: () => void;
}
export const ErrorModal = (props: IErrorModalProps) => {
  return (
    <section>
      <div className="modalBackdrop" />
      <div className="modal__container">
        <div className="modal__header">
          <h2> {props.title}</h2>
        </div>
        <div className="error-message">
          <p>{props.message}</p>
        </div>
        <div className="modal__footer">
          <button type="button" onClick={props.onClose}>
            Stäng
          </button>
        </div>
      </div>
    </section>
  );
};
