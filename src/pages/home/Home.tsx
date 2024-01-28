import { useEffect, useState } from "react";
import { Arrow } from "@/resources/Arrow";
import {
  DESKTOP_BREAKPOINT,
  desktopData,
  mobileData,
  imageData,
} from "./Home.data";
import "./Home.scss";

type ContactDetailProps = {
  label: string;
  link: string;
};

type ImageComponentProps = {
  src: string;
  alt: string;
};

const useResponsiveData = () => {
  const [data, setData] = useState(
    window.innerWidth > DESKTOP_BREAKPOINT ? desktopData : mobileData,
  );

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT;
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

const ContactDetail = ({ label, link }: ContactDetailProps) => {
  return (
    <p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
        <Arrow />
      </a>
    </p>
  );
};

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  return <img src={src} alt={alt} />;
};

const Home = () => {
  const { formattedTitle, contactDetails } = useResponsiveData();
  return (
    <>
      <header className="business-card">
        <p>{formattedTitle}</p>
        {contactDetails.map((detail, index) => (
          <ContactDetail key={index} {...detail} />
        ))}
      </header>
      <main className="home-pictures">
        {imageData.map((image, index) => (
          <ImageComponent key={index} {...image} />
        ))}
      </main>
    </>
  );
};

export { Home };
