import React from "react";
import landing1 from "@/pictures/home/landing.webp";
import placeholder from "@/pictures/home/placeholder.webp";
import { Arrow } from "@/resources/Arrow";

const Home = () => {
  return (
    <>
      <header className="home-header">
        <p>Christina Tsirangelou αrchitects</p>
        <p>
          <a href="https://goo.gl/maps/yRpUKarCFu8uGnvj6" target="_blank">
            Dionysiou Areopagitou 37, Athens
            <Arrow />
          </a>
        </p>
        <p>
          <a href="mailto:info@christinatsirangelou.com">
            info@christinatsirangelou.com
            <Arrow />
          </a>
        </p>
        <p>
          <a href="tel:+306974110689">
            +30 6 974 110 689
            <Arrow />
          </a>
        </p>
      </header>

      <header className="home-header-mobile">
        <p>
          Christina
          <br />
          Tsirangelou
          <br />
          αrchitects
        </p>
        <p>
          <a href="https://goo.gl/maps/yRpUKarCFu8uGnvj6" target="_blank">
            Address
            <Arrow />
          </a>
        </p>
        <p>
          <a href="mailto:info@christinatsirangelou.com">
            Email
            <Arrow />
          </a>
        </p>
        <p>
          <a href="tel:+306974110689">
            Phone
            <Arrow />
          </a>
        </p>
      </header>

      <section className="home-pictures">
        <img src={landing1} alt="Pefka-7" />
        <img src={placeholder} alt="Placeholder" />
        <img src={placeholder} alt="Placeholder" />
        <img src={placeholder} alt="Placeholder" />
        <img src={placeholder} alt="Placeholder" />
        <img src={placeholder} alt="Placeholder" />
      </section>
    </>
  );
};

export { Home };
