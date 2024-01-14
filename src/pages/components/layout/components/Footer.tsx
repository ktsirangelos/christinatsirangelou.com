import React from "react";
import { Arrow } from "@/resources/Arrow";

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
            <Arrow />
          </a>
        </li>
        <li className="insta-mobile">
          <a href="https://www.instagram.com/cta.athens/" target="_blank">
            Insta
            <Arrow />
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
