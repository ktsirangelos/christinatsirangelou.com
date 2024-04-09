import small1 from "@/pictures/pefka-7/camera_1.0060_small.webp";
import small2 from "@/pictures/pefka-7/camera_8.0060_small.webp";
import land1 from "@/pictures/pefka-7/camera_1.0060.webp";
import land2 from "@/pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_01.webp";
import land3 from "@/pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_02.webp";
import land4 from "@/pictures/pefka-7/camera_8.0060.webp";
import port1 from "@/pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_plan_grey.webp";
import port2 from "@/pictures/pefka-7/IMG_8438_black.webp";
import port3 from "@/pictures/pefka-7/IMG_8434_light.webp";

export type ProjectType = {
  id: number;
  category: string;
  title: string;
  type: string;
  year: string;
  location: string;
  client: string;
  status: string;
  size: number;
  pictureURLs: string[];
  projectPageData: {
    pictureURLs: {
      land1: string;
      land2: string;
      land3: string;
      land4: string;
      port1: string;
      port2: string;
      port3: string;
    };
    texts: {
      text1: string;
      text2: string;
    };
    credits: {
      Architect?: string[];
      "Project Team"?: string[];
      "Structural Engineer"?: string[];
      "MEP Engineer"?: string[];
      "Permit Consultant"?: string[];
      "3D Visualisation"?: string[];
      Materials?: string[];
    };
  };
};

export enum ProjectCategory {
  Architecture = "architecture",
  Interior = "interior",
  Product = "product",
  Research = "research",
  Exhibition = "exhibition",
  Education = "education",
}

enum ProjectStatus {
  InProgress = "In Progress",
  Completed = "Completed",
  Planning = "Planning",
  OnHold = "On Hold",
  Cancelled = "Cancelled",
}

export const projects = [
  {
    id: 1,
    category: ProjectCategory.Architecture,
    title: "Pefka_7",
    type: "New Build",
    year: "2022-",
    location: "Pefka/ Retziki, Greece",
    client: "Farlalis Building",
    status: ProjectStatus.InProgress,
    size: 520,
    pictureURLs: [small1, small2],
    projectPageData: {
      pictureURLs: {
        land1: land1,
        land2: land2,
        land3: land3,
        land4: land4,
        port1: port1,
        port2: port2,
        port3: port3,
      },
      texts: {
        text1: `Pefka 7 is located in the suburban village of Retziki, named after the Turkish Örencik, 
              which means 'Little Heaven', as a small settlement nestled in the heart of a pine wood forest, 
              approximately 6 km from the city center of Thessaloniki, Greece. 
              The current population is 13,500 inhabitants, and it continues to grow rapidly, leading to an 
              increased demand for residential spaces. The proximity to the three main general hospitals—Papanikolaou General Hospital, 
              Papageorgiou General Hospital, and 424 General Military Hospital of Thessaloniki—as well as the 
              upcoming University Pediatric Hospital of Thessaloniki, expected to be completed in 2025, 
              contributes to the development of a broader medical and social infrastructure in the area, with a focus on nature.`,

        text2: `The seven residences are developed at ground level, each featuring separate courtyards on the same level. 
              On the upper floor, there are appartments with mezzanines or attics. The lift and staircase are situated within 
              one of the two volumes, providing access to the apartments in the other volume through a bridge above a shared green space. 
              The residency complex comprises 1-2 or 3-bedroom apartments, each with private parking lots facing the road. 
              In addition to the facade's material, which is covered in a neutral, clay-colored massif textured brick, 
              the rooftop is crafted using a Mis&Hit method of brick placement. 
              This technique conceals the necessary MEP (Mechanical, Electrical, Plumbing) equipment, preserving the distinctive 
              clay-tiled rooftop appearance characteristic of the village.`,
      },
      credits: {
        Architect: ["Christina Tsirangelou architects"],
        "Project Team": [
          "Simos Antoniadis",
          "Christina Mitilinaiou",
          "Georgina Tsolou",
          "Marianthi Tsomlektsi",
        ],
        "Structural Engineer": ["Evgenia Farlalis"],
        "MEP Engineer": ["Stelios Avramis"],
        "Permit Consultant": ["Irini Farkona"],
        "3D Visualisation": ["Loukas Koutsouris - Mirror Visuals"],
        Materials: [
          "Santanselmo, IT",
          "Projetto Materials, GR",
          "Epal, Windows & Doors, GR",
        ],
      },
    },
  },
];
