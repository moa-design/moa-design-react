import "../styles/portfolio.css";
import { Link } from "react-router-dom";
import PortfolioRow from "./PortfolioRow";

function PortfolioSection() {
  return (
    <section id="porfolio">
      <h2>Porfolio</h2>

      <div className="galeria">
        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/2025/01/hjc-01.webp"
          video="https://moadesign.com.ar/wp-content/uploads/2025/01/hjc-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/2025/01/hjc-03.webp"
        />

        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/elementor/thumbs/CARROUSEL-FINAL-1-r1buar8a9xffjfgfbsq0b7fic5r8m682iq5hu9n4mo.png"
          video="https://moadesign.com.ar/wp-content/uploads/2025/09/moore-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/elementor/thumbs/POST1-r1buawvbexn5h388ev5rq609wgzfwcugji2epxerlc.png"
        />

        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/2025/01/tronador1.webp"
          video="https://moadesign.com.ar/wp-content/uploads/2025/01/tronador-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/2025/01/tronador3.webp"
        />

        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/2025/01/wkf_Mesa-de-trabajo-1.webp"
          video="https://moadesign.com.ar/wp-content/uploads/2025/01/wakefield-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/2025/01/wkf-03.webp"
        />

        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/2024/08/qobu_Mesa-de-trabajo-1.webp"
          video="https://moadesign.com.ar/wp-content/uploads/2025/01/qobu-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/2024/08/qobu-03.webp"
        />

        <PortfolioRow
          img1="https://moadesign.com.ar/wp-content/uploads/2025/01/trendee2.webp"
          video="https://moadesign.com.ar/wp-content/uploads/2025/01/trendee-video.mp4"
          img2="https://moadesign.com.ar/wp-content/uploads/2025/01/trende3.webp"
        />
      </div>

    <Link to="/contacto">
  <button>Contacto</button>
</Link>

    </section>
  );
}

export default PortfolioSection;
