import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="copyright">
          <p>&copy; 2024 Christina Tsirangelou αrchitects</p>
        </li>
        <li className="copyright-mobile">
          <p>&copy; 2024 CTα</p>
        </li>
        <li className="insta">
          <a href="https://www.instagram.com/cta.athens/" target="_blank">
            Instagram
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </li>
        <li className="insta-mobile">
          <a href="https://www.instagram.com/cta.athens/" target="_blank">
            Insta
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </li>
        <li className="top">
          <a href="#">Top</a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
