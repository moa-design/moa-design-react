import "../styles/ServiceCard.css";
import PropTypes from "prop-types";

function ServiceCard({ title, description }) {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Validación de props 
ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;

