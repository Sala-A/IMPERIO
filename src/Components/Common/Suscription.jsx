import { useState } from "react";

const Suscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateEmail(email)) {
      setMessage("¡Gracias por suscribirte!");
      setEmail("");
    } else {
      setMessage("Por favor, ingresa un correo electrónico válido.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };
  return (
    <div className="suscription-container">
      <h1 className="title-suscription">¡Unete a nuestra comunidad!</h1>
      <p className="info-suscription">
        Suscríbete y se el primero en conocer sobre las novedades de tus marcas
        favoritas
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo electronico"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button className="btn-suscription" type="submit" title="Enviar" aria-label="subscribe">
          <img src="/envelope.svg" alt="Icono para enviar" />
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Suscription;
