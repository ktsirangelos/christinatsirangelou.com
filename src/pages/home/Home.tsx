import { useEffect, useState } from "react";
import landing from "@/pictures/home/landing.webp";
import placeholder from "@/pictures/home/placeholder.webp";
import { Arrow } from "@/resources/Arrow";
import "./Home.scss";

type ContactDetailProps = {
  label: string;
  link: string;
};

type ImageComponentProps = {
  src: string;
  alt: string;
};

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
  contactDetails: [
    {
      label: "Dionysiou Areopagitou 37, Athens",
      link: "https://goo.gl/maps/yRpUKarCFu8uGnvj6",
    },
    {
      label: "info@christinatsirangelou.com",
      link: "mailto:info@christinatsirangelou.com",
    },
    {
      label: "+30 6 974 110 689",
      link: "tel:+306974110689",
    },
  ],
};

const mobileData = {
  title: "Christina\nTsirangelou\nαrchitects",
  contactDetails: [
    {
      label: "Address",
      link: "https://goo.gl/maps/yRpUKarCFu8uGnvj6",
    },
    {
      label: "Email",
      link: "mailto:info@christinatsirangelou.com",
    },
    {
      label: "Phone",
      link: "tel:+306974110689",
    },
  ],
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

const HomeHeader = () => {
  const { formattedTitle, contactDetails } = useResponsiveData();

  return (
    <header className="business-card">
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
    <main className="home-pictures">
      {imageData.map((image, index) => (
        <ImageComponent key={index} {...image} />
      ))}
    </main>
  );
};

export { HomeHeader, HomeMain };
