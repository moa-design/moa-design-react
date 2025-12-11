import "../styles/contact.css";
import { useState } from "react";
import "../styles/contact.css";

function ContactSection() {
 
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  
 
  const handleSubmit = (e) => {
  e.preventDefault(); // evita que la página recargue

  // Acá podés enviar los datos a un backend, email, etc.
  // Para el TP alcanza con mostrarlos:
  console.log("Formulario enviado:");
  console.log("Nombre:", nombre);
  console.log("Servicio:", servicio);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
  console.log("Mensaje:", mensaje);

  // Limpiar el formulario
  setNombre("");
  setServicio("");
  setEmail("");
  setTelefono("");
  setMensaje("");

  alert("Mensaje enviado con éxito ✔️");
};


  return (
    <section id="contacto">
      <div className="texto">
        <h2>Contacto</h2>
        <p>
          Si querés mejorar la presencia digital de tu negocio, contanos tu idea.
          Estamos para acompañarte en el proceso.
        </p>
      </div>

      <div className="formulario">
        <form onSubmit={handleSubmit}>
          <div className="nombr">
            <label htmlFor="nombre"></label>
            <input
  type="text"
  id="nombre"
  name="nombre"
  placeholder="Nombre"
  required
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>

          </div>

          <div className="serv">
            <label htmlFor="servicio"></label>
            <input
  type="text"
  id="servicio"
  name="servicio"
  placeholder="Servicio"
  required
  value={servicio}
  onChange={(e) => setServicio(e.target.value)}
/>

          </div>

          <div className="mail">
            <label htmlFor="email"></label>
            <input
  type="email"
  id="email"
  name="email"
  placeholder="Email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          </div>

<div className="tel">
  <label htmlFor="telefono"></label>
  <input
    type="text"
    id="telefono"
    name="telefono"
    placeholder="Teléfono"
    required
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)}
  />
</div>



          <div className="msj">
            <label htmlFor="mensaje"></label>
            {/* En HTML usabas input type="textarea", en React lo correcto es <textarea> */}
  <textarea
  id="mensaje"
  name="mensaje"
  placeholder="Mensaje"
  required
  value={mensaje}
  onChange={(e) => setMensaje(e.target.value)}
/>

          </div>

          <button className="formboton" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
