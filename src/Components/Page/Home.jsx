import Suscription from "../Common/Suscription";
import BrandGallery from "../Common/BrandGallery";
import ProductCarousel from "../ProductCards/ProductCarousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
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
          <Link to="/Contact" className="cta-button">
            Bienvenido
          </Link>
        </div>
        <div className="ad-image">
          <div className="circle-background"></div>
          <img
            className="promotional-image"
            src="/women2.png"
            alt="Promotional"
          />
        </div>
      </main>
      <Suscription />
      <BrandGallery />
      <div className="container-key-facts">
        <h1 className="title-key-facts">Key facts</h1>
        <div className="timeline">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="info-key-facts">
          <p className="info-key-facts-item">
            <strong className="fact-title">410 +</strong>
            <br />
            Más de 410 tiendas de tecnología confiables colaboran con nosotros
            para brindarte las mejores ofertas y productos.
          </p>
          <p className="info-key-facts-item">
            <strong className="fact-title">528 +</strong>
            <br />
            Explora más de 528 productos tecnológicos actualizados diariamente
            para satisfacer todas tus necesidades.
          </p>
          <p className="info-key-facts-item">
            <strong className="fact-title">45 +</strong>
            <br />
            Navega por más de 45 categorías de productos tecnológicos, desde
            gadgets hasta componentes de hardware.
          </p>
        </div>
      </div>
      <hr />
      <ProductCarousel />
      <Suscription />
    </>
  );
}
