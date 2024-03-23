import { useParams } from "react-router-dom";
import "./Project.scss";

const ProjectHeader = () => {
  const { projectTitle } = useParams();
  return (
    <header className="project-header">
      <h1>{projectTitle}</h1>
    </header>
  );
};

const ProjectContent = () => {
  return (
    <>
      <div className="land1">
        <img src="../pictures/pefka-7/camera_1.0060.webp" alt="" />
      </div>
      <div className="port1">
        <img
          src="../pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_plan_grey.webp"
          alt=""
        />
      </div>
      <div className="text1">
        Pefka 7 is located in the suburban village of Retziki, named after the
        Turkish Örencik, which means "Little Heaven”, as a small settlement
        nestled in the heart of a pine wood forest, approximately 6 km from the
        city center of Thessaloniki, Greece. The current population is 13,500
        inhabitants, and it continues to grow rapidly, leading to an increased
        demand for residential spaces.
        <br />
        The proximity to the three main general hospitals—Papanikolaou General
        Hospital, Papageorgiou General Hospital, and 424 General Military
        Hospital of Thessaloniki—as well as the upcoming University Pediatric
        Hospital of Thessaloniki, expected to be completed in 2025, contributes
        to the development of a broader medical and social infrastructure in the
        area, with a focus on nature.
      </div>
      <div className="port2">
        <img src="../pictures/pefka-7/IMG_8438_black.webp" alt="" />
      </div>
      <div className="land2">
        <img
          src="../pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_01.webp"
          alt=""
        />
      </div>
      <div className="land3">
        <img
          src="../pictures/pefka-7/Sigkrotima 7 Katoikion_2023.12.30_Diagramforsite_02.webp"
          alt=""
        />
      </div>
      <div className="text2">
        The seven residences are developed at ground level, each featuring
        separate courtyards on the same level. On the upper floor, there are
        appartments with mezzanines or attics. The lift and staircase are
        situated within one of the two volumes, providing access to the
        apartments in the other volume through a bridge above a shared green
        space.
        <br />
        The residency complex comprises 1-2 or 3-bedroom apartments, each with
        private parking lots facing the road. In addition to the facade's
        material, which is covered in a neutral, clay-colored massif textured
        brick, the rooftop is crafted using a Mis&Hit method of brick placement.
        This technique conceals the necessary MEP (Mechanical, Electrical,
        Plumbing) equipment, preserving the distinctive clay-tiled rooftop
        appearance characteristic of the village.
      </div>
      <div className="port3">
        <img src="../pictures/pefka-7/IMG_8434_light.webp" alt="" />
      </div>

      <div className="land4">
        <img src="../pictures/pefka-7/camera_8.0060.webp" alt="" />
      </div>
      <table className="credits">
        <tr>
          <td>Architect</td>
          <td>Chistina Tsirangelou architects</td>
        </tr>
        <tr>
          <td>Project Team</td>
          <td>Simos Antoniadis</td>
        </tr>
        <tr>
          <td></td>
          <td>Christina Mitilinaiou</td>
        </tr>
        <tr>
          <td></td>
          <td>Georgina Tsolou</td>
        </tr>
        <tr>
          <td></td>
          <td>Marianthi Tsomlektsi</td>
        </tr>
        <tr>
          <td>Structural Engineer</td>
          <td>Evgenia Farlalis</td>
        </tr>
        <tr>
          <td>MEP Engineer</td>
          <td>Stelios Avramis</td>
        </tr>
        <tr>
          <td>Permit Consultant</td>
          <td>Irini Farkona</td>
        </tr>
        <tr>
          <td>3D Visualisation</td>
          <td>Loukas Koutsouris - Mirror Visuals</td>
        </tr>
        <tr>
          <td>Materials</td>
          <td>Santanselmo, IT</td>
        </tr>
        <tr>
          <td></td>
          <td>Projetto Materials, GR</td>
        </tr>
        <tr>
          <td></td>
          <td>Epal, Windows & Doors, GR</td>
        </tr>
      </table>
    </>
  );
};

const ProjectMain = () => {
  return (
    <main className="project-main">
      <ProjectContent />
    </main>
  );
};

export const Project = () => {
  return (
    <>
      <ProjectHeader />
      <ProjectMain />
    </>
  );
};
