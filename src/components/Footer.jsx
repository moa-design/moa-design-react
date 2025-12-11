import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="izqfooter">
        <img
          className="logofooter"
          src="https://moadesign.com.ar/wp-content/uploads/2025/09/logo-negro.webp"
          alt="logo-negro"
        />
      </div>

      <div className="cenfooter">
        <p>
          Desarrollado por{" "}
          <a href="https://moadesign.com.ar" target="_blank" rel="noreferrer">
            Moa Design
          </a>
        </p>
        <p>© 2025 - All right reserved.</p>
      </div>

      <div className="derfooter">
        <button className="social">
          <a
            href="https://www.linkedin.com/in/moadesign/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </button>

        <button className="social">
          <a
            href="https://www.instagram.com/moadesign"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </button>

        <button className="social">
          <a
            href="https://www.behance.net/moadesign"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-behance"></i>
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
