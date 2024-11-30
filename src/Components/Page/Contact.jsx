import FormContact from "../Common/FormContact";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-left">
          <h2 className="contact-title">Contacto</h2>
          <p className="contact-description">
            Para cualquier consulta, no dudes en comunicarte con nosotros.
            Nuestro equipo está disponible para ayudarte durante nuestros
            horarios de atención.
          </p>
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Información de contacto</h2>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/IMPERIO/despertador.png" width={40} />
              </span>
              <div>
                <h3 className="contact-item-title">Horarios de atención</h3>
                <p>Lunes a viernes</p>
                <p>8:00 a.m. a 5:00 p.m.</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <img src="/IMPERIO/hablar.png" width={40} />
              </span>
              <div>
                <h3 className="contact-item-title">Contáctanos</h3>
                <p>Correo: Imperio@gmail.com</p>
                <p>WhatsApp: 123 456 78 90</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="formulario-contacto">
        <FormContact />
      </div>
    </div>
  );
}
