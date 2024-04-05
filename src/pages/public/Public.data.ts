enum PublicationCategory {
  Architecture = "Architecture",
  Interior = "Interior",
  Product = "Product",
  Research = "Research",
  Exhibition = "Exhibition",
  Education = "Education",
  Collaboration = "Collaboration",
}

export const publications = [
  {
    id: 1,
    title: "Social Living",
    url: "https://linkedin.com/company/social-living-greece/",
    type: PublicationCategory.Research,
    year: 2024,
  },
  {
    id: 2,
    title: "a37.studio",
    url: "https://a37.studio",
    type: PublicationCategory.Collaboration,
    year: 2024,
  },
];
