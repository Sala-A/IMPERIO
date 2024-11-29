import { useState } from "react";

export default function FormContact() {
  const [formValues, setFormValues] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validación del formulario
  const validate = () => {
    let validationErrors = {};
    if (!formValues.nombre.trim()) validationErrors.nombre = "El nombre es obligatorio.";
    if (!formValues.correo.trim()) {
      validationErrors.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formValues.correo)) {
      validationErrors.correo = "El correo no es válido.";
    }
    if (!formValues.mensaje.trim()) validationErrors.mensaje = "El mensaje es obligatorio.";
    return validationErrors;
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert("Formulario enviado con éxito");
      console.log(formValues);
      setFormValues({ nombre: "", correo: "", mensaje: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Nos pondremos en contacto</h2>

        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className={`form-input ${errors.nombre ? "error" : ""}`}
            placeholder="Nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <small className="form-error">{errors.nombre}</small>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="correo"
            className={`form-input ${errors.correo ? "error" : ""}`}
            placeholder="Correo"
            value={formValues.correo}
            onChange={handleChange}
          />
          {errors.correo && <small className="form-error">{errors.correo}</small>}
        </div>

        <div className="form-group">
          <textarea
            name="mensaje"
            className={`form-input ${errors.mensaje ? "error" : ""}`}
            placeholder="Mensaje"
            rows="4"
            value={formValues.mensaje}
            onChange={handleChange}
          ></textarea>
          {errors.mensaje && <small className="form-error">{errors.mensaje}</small>}
        </div>

        <div className="form-group">
          <button type="submit" className="form-button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
