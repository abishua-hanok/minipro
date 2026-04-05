import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
           &nbsp; by{" "}
          <a
          
            rel="noreferrer"
            style={{ color: "gray" }}
            href="#"
          >
            &nbsp; @rayqrohit
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
