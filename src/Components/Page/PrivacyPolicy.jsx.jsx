import Footer from "../Common/Footer";
import Navbar from "../Common/Navbar";
import ScrollToTopButton from "../Common/ScrollToTopButton";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="privacy-policy">
        <h1 id="title-privacy-policy">Política de Privacidad de Imperio</h1>
        <p className="privacy-paragraph">
          En Imperio, valoramos su privacidad y estamos comprometidos con la
          protección de su información personal. Esta política de privacidad
          describe cómo recogemos, usamos y compartimos su información cuando
          visita nuestro sitio web.
        </p>
        <h2 id="policy-subtitle">Información que Recogemos</h2>
        <p className="privacy-paragraph">
          Cuando visita Imperio, recogemos información sobre su dispositivo,
          incluyendo su navegador web, dirección IP, zona horaria, y algunas de
          las cookies que están instaladas en su dispositivo. Además, al navegar
          por el sitio, recopilamos información sobre las páginas web
          individuales o productos que visualiza, qué sitios web o términos de
          búsqueda le remitieron a Imperio y cómo interactúa con el sitio.
        </p>
        <h2 id="policy-subtitle">Uso de la Información</h2>
        <p className="privacy-paragraph">
          La información recopilada nos ayuda a mejorar nuestro sitio web y la
          experiencia del usuario. Además, utilizamos los datos para monitorear
          posibles riesgos y fraudes (en particular, su dirección IP), y más
          generalmente para mejorar y optimizar nuestro sitio.
        </p>
        <h2 id="policy-subtitle">Enlaces a Páginas Oficiales</h2>
        <p className="privacy-paragraph">
          Nuestro sitio proporciona enlaces directos a las páginas oficiales de
          los productos tecnológicos que mostramos. No somos responsables del
          contenido o las políticas de privacidad de estos sitios externos. Le
          recomendamos que revise las políticas de privacidad de cada sitio que
          visite a través de nuestros enlaces.
        </p>
        <h2 id="policy-subtitle">Sus Derechos</h2>
        <p className="privacy-paragraph">
          Si usted es residente del Espacio Económico Europeo (EEE), tiene
          derechos específicos con respecto a su información personal,
          incluyendo el derecho a acceder, corregir, actualizar o solicitar la
          eliminación de su información personal.
        </p>
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
