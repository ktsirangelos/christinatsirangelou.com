import landing from "@/pictures/home/landing.webp";

const DESKTOP_BREAKPOINT = 600;

const landingPictures = [
  { src: landing, alt: "Pefka-7, Retziki" },
  { src: landing, alt: "Pefka-7, Retziki" },
  { src: landing, alt: "Pefka-7, Retziki" },
];

const contactDetailsDesktop = {
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

const contactDetailsMobile = {
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

export {
  DESKTOP_BREAKPOINT,
  landingPictures,
  contactDetailsDesktop,
  contactDetailsMobile,
};
