import landing1 from "@/pictures/home/Corfu_5star hotel1.webp";
import landing2 from "@/pictures/home/DSC_0030 copy 2.webp";
import landing3 from "@/pictures/home/L0_1102_USP_Linving_Ap_Cam001 copy.webp";
import landing4 from "@/pictures/home/01-157173_pizzapls_y1440.webp";
import landing5 from "@/pictures/home/L0_CAM_01.webp";
import landing6 from "@/pictures/home/ceiling wooden big 2.webp";
import landing7 from "@/pictures/home/140831_MG_3919.webp";
import landing8 from "@/pictures/home/camera_1.0060_crop.webp";
import landing9 from "@/pictures/home/L0_DSC_0114.webp";
import landing11 from "@/pictures/home/DSC_0099.webp";

const DESKTOP_BREAKPOINT = 600;

const landingPictures = [
  { src: landing1, alt: "Landing 1" },
  { src: landing2, alt: "Landing 2" },
  { src: landing3, alt: "Landing 3" },
  { src: landing4, alt: "Landing 4" },
  { src: landing5, alt: "Landing 5" },
  { src: landing6, alt: "Landing 6" },
  { src: landing7, alt: "Landing 7" },
  { src: landing8, alt: "Landing 8" },
  { src: landing9, alt: "Landing 9" },
  { src: landing11, alt: "Landing 11" },
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
