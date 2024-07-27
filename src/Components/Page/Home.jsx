import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />,
      <main className="main">
        <div className="ad-container">
          <h1 className="text-main">
            ¡Pauta con nosotros en Imperio, tu web exclusiva para productos
            tecnológicos!
            <span className="text-main-blue">
              Conéctate con una audiencia global especializada.
            </span>
          </h1>
          <p className="info-text-main">
            Destaca tus productos en un entorno sin saturación publicitaria y
            maximiza tu impacto con espacios atractivos e informes detallados.
            ¡Contáctanos y lleva tu negocio al siguiente nivel!
          </p>
          <button className="cta-button">Bienvenido</button>
        </div>
        <div className="ad-image">
          <div className="circle-background"></div>
          <img className="promotional-image" src="/women2.png" alt="Promotional" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
