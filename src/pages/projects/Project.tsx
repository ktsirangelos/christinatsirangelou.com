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
  <header className="page-header">
    <p>
      {projectTitle}, {type} <br />
      {year}
    </p>
  </header>
);

type ProjectContentProps = {
  projectData: ProjectData;
  projectTitle?: string;
};

const ProjectContent = ({ projectData, projectTitle }: ProjectContentProps) => {
  const { pictureURLs, text1, text2, credits } = projectData.projectPage;

  const imageElements = Object.entries(pictureURLs).map(
    ([className, url], index) => (
      <div key={className} className={className}>
        <img src={url} alt={`${projectTitle}-${index + 1}`} />
      </div>
    ),
  );

  const renderCredits = () => {
    const rows = [];

    for (const [key, value] of Object.entries(credits)) {
      if (Array.isArray(value)) {
        value.forEach((val, index) => {
          if (index === 0) {
            rows.push(
              <tr key={`${key}-${index}`}>
                <td>{key}</td>
                <td>{val}</td>
              </tr>,
            );
          } else {
            rows.push(
              <tr key={`${key}-${index}`}>
                <td></td>
                <td>{val}</td>
              </tr>,
            );
          }
        });
      } else {
        rows.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>,
        );
      }
    }

    return <tbody>{rows}</tbody>;
  };

  return (
    <>
      {imageElements}
      <div className="text1">{text1}</div>
      <div className="text2">{text2}</div>
      <table className="credits">{renderCredits()}</table>
    </>
  );
};

type ProjectMainProps = {
  projectData: ProjectData;
  projectTitle?: string;
};

const ProjectMain = ({ projectData, projectTitle }: ProjectMainProps) => (
  <main className="page-main project-main">
    <ProjectContent projectData={projectData} projectTitle={projectTitle} />
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
      <ProjectMain projectData={projectData} projectTitle={projectData.title} />
    </>
  );
};
