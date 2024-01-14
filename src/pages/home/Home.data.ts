import landing from "@/pictures/home/landing.webp";
import placeholder from "@/pictures/home/placeholder.webp";

const DESKTOP_BREAKPOINT = 600;

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

export { DESKTOP_BREAKPOINT, desktopData, mobileData, imageData };
