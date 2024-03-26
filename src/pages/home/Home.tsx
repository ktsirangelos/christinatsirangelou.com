import { DESKTOP_BREAKPOINT } from "@/utils/constants";
import { useEffect, useState } from "react";
import { contactDetails, landingPictures } from "./Home.data";
import "./Home.scss";

const useResponsiveDetails = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > DESKTOP_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > DESKTOP_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formatTitle = (title: string) => {
    return title.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  const contactTitle = formatTitle(
    isDesktop ? contactDetails.title.desktop : contactDetails.title.mobile,
  );

  const contactLinks = [
    {
      href: contactDetails.address.url,
      text: isDesktop
        ? contactDetails.address.desktop
        : contactDetails.address.mobile,
    },
    {
      href: contactDetails.email.url,
      text: isDesktop
        ? contactDetails.email.desktop
        : contactDetails.email.mobile,
    },
    {
      href: contactDetails.phone.url,
      text: isDesktop
        ? contactDetails.phone.desktop
        : contactDetails.phone.mobile,
    },
  ];

  return {
    contactTitle,
    contactLinks,
  };
};

const HomeHeader = () => {
  const { contactTitle, contactLinks } = useResponsiveDetails();

  return (
    <header className="home-header">
      {contactTitle}
      {contactLinks.map(({ href, text }, index) => (
        <p key={index}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {text}
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </p>
      ))}
    </header>
  );
};

const HomeMain = () => {
  return (
    <main className="home-main">
      {landingPictures.map((picture) => (
        <img key={picture.id} src={picture.src} alt={`Landing ${picture.id}`} />
      ))}
    </main>
  );
};

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain />
    </>
  );
};
