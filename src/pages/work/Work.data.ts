import pefka7_small1_mobile from "@/pictures/pefka-7/Facade_mobile.webp";
import pefka7_small1_laptop from "@/pictures/pefka-7/Facade_laptop.webp";
import pefka7_small1_desktop from "@/pictures/pefka-7/Facade_desktop.webp";

import pefka7_small2_mobile from "@/pictures/pefka-7/Entance_mobile.webp";
import pefka7_small2_laptop from "@/pictures/pefka-7/Entance_laptop.webp";
import pefka7_small2_desktop from "@/pictures/pefka-7/Entance_desktop.webp";

import pefka7_land1_mobile from "@/pictures/pefka-7/Facade_mobile.webp";
import pefka7_land1_laptop from "@/pictures/pefka-7/Facade_laptop.webp";
import pefka7_land1_desktop from "@/pictures/pefka-7/Facade_desktop.webp";

import pefka7_land2_mobile from "@/pictures/pefka-7/Diagram-Rooftop_01_mobile.webp";
import pefka7_land2_laptop from "@/pictures/pefka-7/Diagram-Rooftop_01_laptop.webp";
import pefka7_land2_desktop from "@/pictures/pefka-7/Diagram-Rooftop_01_desktop.webp";

import pefka7_land3_mobile from "@/pictures/pefka-7/Diagram-Rooftop_02_mobile.webp";
import pefka7_land3_laptop from "@/pictures/pefka-7/Diagram-Rooftop_02_laptop.webp";
import pefka7_land3_desktop from "@/pictures/pefka-7/Diagram-Rooftop_02_desktop.webp";

import pefka7_land4_mobile from "@/pictures/pefka-7/Entance_mobile.webp";
import pefka7_land4_laptop from "@/pictures/pefka-7/Entance_laptop.webp";
import pefka7_land4_desktop from "@/pictures/pefka-7/Entance_desktop.webp";

import pefka7_port1_mobile from "@/pictures/pefka-7/Diagram_fp_mobile.webp";
import pefka7_port1_laptop from "@/pictures/pefka-7/Diagram_fp_laptop.webp";
import pefka7_port1_desktop from "@/pictures/pefka-7/Diagram_fp_desktop.webp";

import pefka7_port2_mobile from "@/pictures/pefka-7/MaterialPalette_01_mobile.webp";
import pefka7_port2_laptop from "@/pictures/pefka-7/MaterialPalette_01_laptop.webp";
import pefka7_port2_desktop from "@/pictures/pefka-7/MaterialPalette_01_desktop.webp";

import pefka7_port3_mobile from "@/pictures/pefka-7/MaterialPalette_02_mobile.webp";
import pefka7_port3_laptop from "@/pictures/pefka-7/MaterialPalette_02_laptop.webp";
import pefka7_port3_desktop from "@/pictures/pefka-7/MaterialPalette_02_desktop.webp";

import projectx_birdeye_mobile from "@/pictures/project-x/Birdeye_mobile.webp";
import projectx_birdeye_laptop from "@/pictures/project-x/Birdeye_laptop.webp";
import projectx_birdeye_desktop from "@/pictures/project-x/Birdeye_desktop.webp";

import projectx_entrance_mobile from "@/pictures/project-x/Entrance_mobile.webp";
import projectx_entrance_laptop from "@/pictures/project-x/Entrance_laptop.webp";
import projectx_entrance_desktop from "@/pictures/project-x/Entrance_desktop.webp";

import projectx_facade_north_mobile from "@/pictures/project-x/Facade_North_mobile.webp";
import projectx_facade_north_laptop from "@/pictures/project-x/Facade_North_laptop.webp";
import projectx_facade_north_desktop from "@/pictures/project-x/Facade_North_desktop.webp";

import projectx_facade_south_mobile from "@/pictures/project-x/Facade_South_mobile.webp";
import projectx_facade_south_laptop from "@/pictures/project-x/Facade_South_laptop.webp";
import projectx_facade_south_desktop from "@/pictures/project-x/Facade_South_desktop.webp";

import projectx_interior_mobile from "@/pictures/project-x/Interior_mobile.webp";
import projectx_interior_laptop from "@/pictures/project-x/Interior_laptop.webp";
import projectx_interior_desktop from "@/pictures/project-x/Interior_desktop.webp";

import projectx_masterplan_mobile from "@/pictures/project-x/Masterplan_mobile.webp";
import projectx_masterplan_laptop from "@/pictures/project-x/Masterplan_laptop.webp";
import projectx_masterplan_desktop from "@/pictures/project-x/Masterplan_desktop.webp";

import projectx_material_palette_mobile from "@/pictures/project-x/Material_Palette_mobile.webp";
import projectx_material_palette_laptop from "@/pictures/project-x/Material_Palette_laptop.webp";
import projectx_material_palette_desktop from "@/pictures/project-x/Material_Palette_desktop.webp";

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
      "History Consultant"?: string[];
      "Detail Consultant"?: string[];
      "Sustainability Consultant"?: string[];
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
  Competition = "Competition Entry",
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
        srcMobile: pefka7_small1_mobile,
        srcLaptop: pefka7_small1_laptop,
        srcDesktop: pefka7_small1_desktop,
      },
      {
        id: 2,
        srcMobile: pefka7_small2_mobile,
        srcLaptop: pefka7_small2_laptop,
        srcDesktop: pefka7_small2_desktop,
      },
    ],
    projectPageData: {
      pictures: [
        {
          id: "land1",
          srcMobile: pefka7_land1_mobile,
          srcLaptop: pefka7_land1_laptop,
          srcDesktop: pefka7_land1_desktop,
        },
        {
          id: "land2",
          srcMobile: pefka7_land2_mobile,
          srcLaptop: pefka7_land2_laptop,
          srcDesktop: pefka7_land2_desktop,
        },
        {
          id: "land3",
          srcMobile: pefka7_land3_mobile,
          srcLaptop: pefka7_land3_laptop,
          srcDesktop: pefka7_land3_desktop,
        },
        {
          id: "land4",
          srcMobile: pefka7_land4_mobile,
          srcLaptop: pefka7_land4_laptop,
          srcDesktop: pefka7_land4_desktop,
        },
        {
          id: "port1",
          srcMobile: pefka7_port1_mobile,
          srcLaptop: pefka7_port1_laptop,
          srcDesktop: pefka7_port1_desktop,
        },
        {
          id: "port2",
          srcMobile: pefka7_port2_mobile,
          srcLaptop: pefka7_port2_laptop,
          srcDesktop: pefka7_port2_desktop,
        },
        {
          id: "port3",
          srcMobile: pefka7_port3_mobile,
          srcLaptop: pefka7_port3_laptop,
          srcDesktop: pefka7_port3_desktop,
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
  {
    id: 2,
    category: ProjectCategory.Architecture,
    title: "Project X",
    type: "New Build",
    year: "2024",
    location: "Pylaia/ Thessaloniki, Greece",
    client: "American College of Thessaloniki",
    status: ProjectStatus.Competition,
    size: 3400,
    pictures: [
      {
        id: 1,
        srcMobile: projectx_birdeye_mobile,
        srcLaptop: projectx_birdeye_laptop,
        srcDesktop: projectx_birdeye_desktop,
      },
      {
        id: 2,
        srcMobile: projectx_entrance_mobile,
        srcLaptop: projectx_entrance_laptop,
        srcDesktop: projectx_entrance_desktop,
      },
    ],
    projectPageData: {
      pictures: [
        {
          id: "land1",
          srcMobile: projectx_facade_north_mobile,
          srcLaptop: projectx_facade_north_laptop,
          srcDesktop: projectx_facade_north_desktop,
        },
        {
          id: "land2",
          srcMobile: projectx_facade_south_mobile,
          srcLaptop: projectx_facade_south_laptop,
          srcDesktop: projectx_facade_south_desktop,
        },
        {
          id: "land3",
          srcMobile: projectx_birdeye_mobile,
          srcLaptop: projectx_birdeye_laptop,
          srcDesktop: projectx_birdeye_desktop,
        },
        {
          id: "land4",
          srcMobile: projectx_interior_mobile,
          srcLaptop: projectx_interior_laptop,
          srcDesktop: projectx_interior_desktop,
        },
        {
          id: "port1",
          srcMobile: projectx_masterplan_mobile,
          srcLaptop: projectx_masterplan_laptop,
          srcDesktop: projectx_masterplan_desktop,
        },
        {
          id: "port2",
          srcMobile: projectx_entrance_mobile,
          srcLaptop: projectx_entrance_laptop,
          srcDesktop: projectx_entrance_desktop,
        },
        {
          id: "port3",
          srcMobile: projectx_material_palette_mobile,
          srcLaptop: projectx_material_palette_laptop,
          srcDesktop: projectx_material_palette_desktop,
        },
      ],
      texts: {
        text1: `Project X is a private competition entry for an academic building part of the general redevelopment Masterplan 
    of Anatolia College of Thessaloniki Campus, located in Pylaia region, and its study includes conference 
    facilities, teaching spaces, digital labs, faculty offices and a 150-seat theatre with the mission to address 
    to 350 students.

    The design is centered on the human experience, prioritizing well-being and enhancing humanity. As the 
    boundaries between private and public domains blur -where we work at home and play out our private lives 
    in public or online- the design seeks to address this new reality. Sustainability is also a key consideration, 
    approached from a practical standpoint. This involves a building with longevity, ensuring adaptability for 
    future use, and using real materials that last and even improve with age.`,

        text2: `Back to the Rock Age?

    The question of historical continuity within the general area of the Anatolia and ACT campus is addressed 
    through the use of stone and /or brick, connecting the "Project X" to the tradition and existing buildings. 
    Stone, with its resilience and solid materiality—a grey-green marble—serves as a foundational element to 
    imbue the new scheme with a timeless character and meaning.

    Natural stone has the potential to become a viable, low-carbon, modern structural material. Our proposed 
    prefabricated structural facade system aims to re-use scraps of raw materials by transforming them to 
    easy – to – manage modules. 

    The project's goal is to create a building that is not only materially durable but also designed to remain 
    culturally relevant for a long time.`,
      },
      credits: {
        Architect: [
          "Christina Tsirangelou architects",
          "In collaboration with MP Sparch Architects_Morfo Papanikolaou",
        ],
        "Project Team": [
          "Niovi Tsompikou",
          "Giorgos Papanikolaou",
          "Giota Liakou",
          "Fotieni Nteka",
          "Evgenia Malamoglou",
          "Maria Patmanidou",
          "Maria Tsolakidou",
          "Theofilos Hondromatidis",
          "Marianna Zilianaiou",
        ],
        "Structural Engineer": ["PCK L.P."],
        "MEP Engineer": ["JEPA Ltd"],
        "Permit Consultant": ["Irini Farkona"],
        "History Consultant": ["Michael Lefantzis"],
        "Detail Consultant": ["Giorgos Chalamandaris"],
        "Sustainability Consultant": ["E. Chatziioannou"],
        "3D Visualisation": ["Mirror Visuals"],
      },
    },
  },
];
