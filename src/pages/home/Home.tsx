import { useEffect, useState } from "react";
import {
  DESKTOP_BREAKPOINT,
  contactDetailsDesktop,
  contactDetailsMobile,
  landingPictures,
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

const useResponsiveDetails = () => {
  const [contactDetails, setContactDetails] = useState(
    window.innerWidth > DESKTOP_BREAKPOINT
      ? contactDetailsDesktop
      : contactDetailsMobile,
  );

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > DESKTOP_BREAKPOINT;
      setContactDetails(
        isDesktop ? contactDetailsDesktop : contactDetailsMobile,
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formattedTitle = contactDetails.title.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));

  return { ...contactDetails, formattedTitle };
};

const ContactDetail = ({ label, link }: ContactDetailProps) => {
  return (
    <p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {label}
        <span className="material-symbols-outlined">arrow_outward</span>
      </a>
    </p>
  );
};

const HomeHeader = () => {
  const { formattedTitle, contactDetails } = useResponsiveDetails();

  return (
    <header className="home-header">
      <p>{formattedTitle}</p>
      {contactDetails.map((detail, index) => (
        <ContactDetail key={index} {...detail} />
      ))}
    </header>
  );
};

const ImageComponent = ({ src, alt }: ImageComponentProps) => {
  return <img src={src} alt={alt} />;
};

const HomeMain = () => {
  return (
    <main className="home-main">
      {landingPictures.map((image, index) => (
        <ImageComponent key={index} {...image} />
      ))}
    </main>
  );
};

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
    </>
  );
};

export { Home };
