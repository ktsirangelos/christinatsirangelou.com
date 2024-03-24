import { useParams } from "react-router-dom";
import { projects } from "../work/Work.data";
import "./Project.scss";

type PictureURLs = {
  land1: string;
  land2: string;
  land3: string;
  land4: string;
  port1: string;
  port2: string;
  port3: string;
};

type ProjectPage = {
  pictureURLs: PictureURLs;
  text1: string;
  text2: string;
  credits: Record<string, string | string[]>;
};

type ProjectData = {
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
  projectPage: ProjectPage;
};

type ProjectParams = {
  projectTitle: string;
};

type ProjectHeaderProps = {
  projectTitle: string;
  type: string;
  year: string;
};

const ProjectHeader = ({ projectTitle, type, year }: ProjectHeaderProps) => (
  <header className="project-header">
    <h1>
      {projectTitle}, {type} <br />
      {year}
    </h1>
  </header>
);

type ProjectContentProps = {
  projectData: ProjectData;
};

const ProjectContent = ({ projectData }: ProjectContentProps) => {
  const { pictureURLs, text1, text2, credits } = projectData.projectPage;

  const imageElements = Object.entries(pictureURLs).map(([className, url]) => (
    <div key={className} className={className}>
      <img src={url} alt="Project" />
    </div>
  ));

  return (
    <>
      {imageElements}
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
      <table className="credits">
        {Object.entries(credits).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{Array.isArray(value) ? value.join(", ") : value}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

const ProjectMain = ({ projectData }: ProjectContentProps) => (
  <main className="project-main">
    <ProjectContent projectData={projectData} />
  </main>
);

export const Project = () => {
  const { projectTitle } = useParams<ProjectParams>();

  const projectData = projects.find(
    (project) => project.title === projectTitle,
  );

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectHeader
        projectTitle={projectData.title}
        type={projectData.type}
        year={projectData.year}
      />
      <ProjectMain projectData={projectData} />
    </>
  );
};
