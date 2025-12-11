import ServiceCard from "./ServiceCard";
import "../styles/services.css";

function ServicesSection() {
  const services = [
    {
      title: "Landing Pages",
      description: "Sitios web modernos, rápidos y enfocados en conversión.",
    },
    {
      title: "Tiendas Online",
      description: "E-commerce a medida con foco en ventas.",
    },
    {
      title: "Branding",
      description: "Identidades visuales sólidas para marcas serias.",
    },
    {
      title: "Contenido Visual",
      description: "Piezas gráficas y contenido para comunicar mejor.",
    },
  ];

  return (
    <section id="servicios">
      <h2>Servicios</h2>
      <div className="section-inner">
        <div className="neg">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;


