import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home-main-container">
        <div className="home-text-container">
          <div className="home-text-container_content">
            <h2>Restaurang Theljo</h2>
            <p>
              Välkommen till en restaurang med en unik meny och miljö som ger er
              en fantastisk upplevelse.
            </p>
          </div>
          <button
            className="booking-btn"
            onClick={() => {
              navigate("/booking");
            }}
          >
            Boka bord
          </button>
        </div>
      </section>
    </>
  );
};
