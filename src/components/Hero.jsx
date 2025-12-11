import "../styles/Hero.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Hero({ title, subtitle, buttonText }) {
  return (
    <section id="portada">
       <div className="section-inner">
      <h1>
        {title}
      </h1>

      <h4>{subtitle}</h4>

         <Link to="/contacto">
  <button>{buttonText}</button>
</Link>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};


export default Hero;
