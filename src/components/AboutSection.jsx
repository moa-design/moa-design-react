import "../styles/about.css";

function AboutSection() {
  return (
    <section id="nosotros">
      <div className="nosotros">
        <div className="textonosotros">
          <h2>Sobre Nosotros</h2>
          <p>
            En Moa Design ayudamos a marcas y negocios a fortalecer su presencia digital.
            Diseñamos sitios web, identidades visuales y estrategias que se adaptan a cada cliente,
            con un enfoque profesional y personalizado.
            Nos comprometemos a acompañar cada proyecto con seriedad, creatividad y resultados concretos.
          </p>
        </div>

        <div className="videonosotros">
          <video
            src="https://moadesign.com.ar/wp-content/uploads/2024/02/fede-comp.mp4"
            controls
            poster="https://moadesign.com.ar/wp-content/uploads/2025/07/PORTADA-VIDEO2.jpg"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
