import small1_mobile from "@/pictures/pefka-7/Facade_mobile.webp";
import small1_laptop from "@/pictures/pefka-7/Facade_mobile.webp";
import small1_desktop from "@/pictures/pefka-7/Facade_mobile.webp";

import small2_mobile from "@/pictures/pefka-7/Entance_mobile.webp";
import small2_laptop from "@/pictures/pefka-7/Entance_mobile.webp";
import small2_desktop from "@/pictures/pefka-7/Entance_mobile.webp";

import land1_mobile from "@/pictures/pefka-7/Facade_mobile.webp";
import land1_laptop from "@/pictures/pefka-7/Facade_laptop.webp";
import land1_desktop from "@/pictures/pefka-7/Facade_desktop.webp";

import land2_mobile from "@/pictures/pefka-7/Diagram-Rooftop_01_mobile.webp";
import land2_laptop from "@/pictures/pefka-7/Diagram-Rooftop_01_laptop.webp";
import land2_desktop from "@/pictures/pefka-7/Diagram-Rooftop_01_desktop.webp";

import land3_mobile from "@/pictures/pefka-7/Diagram-Rooftop_02_mobile.webp";
import land3_laptop from "@/pictures/pefka-7/Diagram-Rooftop_02_laptop.webp";
import land3_desktop from "@/pictures/pefka-7/Diagram-Rooftop_02_desktop.webp";

import land4_mobile from "@/pictures/pefka-7/Entance_mobile.webp";
import land4_laptop from "@/pictures/pefka-7/Entance_laptop.webp";
import land4_desktop from "@/pictures/pefka-7/Entance_desktop.webp";

import port1_mobile from "@/pictures/pefka-7/Diagram_fp_mobile.webp";
import port1_laptop from "@/pictures/pefka-7/Diagram_fp_laptop.webp";
import port1_desktop from "@/pictures/pefka-7/Diagram_fp_desktop.webp";

import port2_mobile from "@/pictures/pefka-7/MaterialPalette_01_mobile.webp";
import port2_laptop from "@/pictures/pefka-7/MaterialPalette_01_laptop.webp";
import port2_desktop from "@/pictures/pefka-7/MaterialPalette_01_desktop.webp";

import port3_mobile from "@/pictures/pefka-7/MaterialPalette_02_mobile.webp";
import port3_laptop from "@/pictures/pefka-7/MaterialPalette_02_laptop.webp";
import port3_desktop from "@/pictures/pefka-7/MaterialPalette_02_desktop.webp";

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
  pictures: {
    id: number;
    srcMobile: string;
    srcLaptop: string;
    srcDesktop: string;
  }[];
  projectPageData: {
    pictures: {
      id: string;
      srcMobile: string;
      srcLaptop: string;
      srcDesktop: string;
    }[];
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
    title: "Pefka 7",
    type: "New Build",
    year: "2022-",
    location: "Pefka/ Retziki, Greece",
    client: "Farlalis Building",
    status: ProjectStatus.InProgress,
    size: 520,
    pictures: [
      {
        id: 1,
        srcMobile: small1_mobile,
        srcLaptop: small1_laptop,
        srcDesktop: small1_desktop,
      },
      {
        id: 2,
        srcMobile: small2_mobile,
        srcLaptop: small2_laptop,
        srcDesktop: small2_desktop,
      },
    ],
    projectPageData: {
      pictures: [
        {
          id: "land1",
          srcMobile: land1_mobile,
          srcLaptop: land1_laptop,
          srcDesktop: land1_desktop,
        },
        {
          id: "land2",
          srcMobile: land2_mobile,
          srcLaptop: land2_laptop,
          srcDesktop: land2_desktop,
        },
        {
          id: "land3",
          srcMobile: land3_mobile,
          srcLaptop: land3_laptop,
          srcDesktop: land3_desktop,
        },
        {
          id: "land4",
          srcMobile: land4_mobile,
          srcLaptop: land4_laptop,
          srcDesktop: land4_desktop,
        },
        {
          id: "port1",
          srcMobile: port1_mobile,
          srcLaptop: port1_laptop,
          srcDesktop: port1_desktop,
        },
        {
          id: "port2",
          srcMobile: port2_mobile,
          srcLaptop: port2_laptop,
          srcDesktop: port2_desktop,
        },
        {
          id: "port3",
          srcMobile: port3_mobile,
          srcLaptop: port3_laptop,
          srcDesktop: port3_desktop,
        },
      ],
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
        Architect: [
          "Christina Tsirangelou architects",
          "Feasibility Study as USP Partner",
        ],
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
        Materials: ["Epal, Windows & Doors, GR"],
      },
    },
  },
];
