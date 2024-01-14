import { useEffect, useState } from "react";
import landing from "@/pictures/home/landing.webp";
import placeholder from "@/pictures/home/placeholder.webp";
import { Arrow } from "@/resources/Arrow";

const imageData = [
  { src: landing, alt: "Landing Image" },
  { src: placeholder, alt: "Placeholder Image 1" },
  { src: placeholder, alt: "Placeholder Image 2" },
  { src: placeholder, alt: "Placeholder Image 3" },
  { src: placeholder, alt: "Placeholder Image 4" },
  { src: placeholder, alt: "Placeholder Image 5" },
];

const desktopData = {
  title: "Christina Tsirangelou αrchitects",
  address: "Dionysiou Areopagitou 37, Athens",
  email: "info@christinatsirangelou.com",
  phone: "+30 6 974 110 689",
};

const mobileData = {
  title: "Christina\nTsirangelou\nαrchitects",
  address: "Address",
  email: "Email",
  phone: "Phone",
};

const useResponsiveData = () => {
  const [data, setData] = useState(
    window.innerWidth > 600 ? desktopData : mobileData,
  );

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 600;
      setData(isDesktop ? desktopData : mobileData);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formattedTitle = data.title.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return { ...data, formattedTitle };
};

const HomeHeader = () => {
  const { formattedTitle, address, email, phone } = useResponsiveData();

  return (
    <header className="business-card">
      <p>{formattedTitle}</p>
      <p>
        <a href="https://goo.gl/maps/yRpUKarCFu8uGnvj6" target="_blank">
          {address}
          <Arrow />
        </a>
      </p>
      <p>
        <a href="mailto:info@christinatsirangelou.com">
          {email}
          <Arrow />
        </a>
      </p>
      <p>
        <a href="tel:+306974110689">
          {phone}
          <Arrow />
        </a>
      </p>
    </header>
  );
};

const HomeMain = () => {
  return (
    <main className="home-pictures">
      {imageData.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </main>
  );
};

export { HomeHeader, HomeMain };
